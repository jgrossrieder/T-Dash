using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AstroRetrievers.Common;
using Common.Astro.Model;
using Microsoft.Extensions.Logging;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

namespace AstroRetrievers.TwentyMinRetriever
{
    public class TwentyMinRetriever : IRetriever
    {
        private ILogger<TwentyMinRetriever> _logger;
        private const string URL_FORMAT = "http://www.20min.ch/printpdf/VD_{0:yyyyMMdd}.pdf";
        private const string LOCAL_FILE_FORMAT = "VD_{0:yyyyMMdd}.pdf";
        private const string PAGE_WITH_HOROSCOPE_MARKER = "Les astres et vous";

        private const string HOROSCOPE_PATTERN = @"\s__SIGN__([\S\s]*?)AMOUR\s*([★✩]{1,5})\s*JOB\s*([★✩]{1,5})\s*VITALITÉ\s*([★✩]{1,5})";
        
        public TwentyMinRetriever(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<TwentyMinRetriever>();
        }
        

        public async Task<HoroscopeSet> RetrieveHoroscope(DateTime date)
        {
            HoroscopeSet horoscopeSet = new HoroscopeSet() { Time = date};
            String pdfUrl = BuildPdfURL(date);
            String localPath = BuildLocalFilePath(date);
            try
            {
                await DownloadFile(pdfUrl, localPath);
                if (!File.Exists(localPath))
                {
                    horoscopeSet.Status = HoroscopeStatus.Unavailable;
                }
                else
                {
                    List<Horoscope> horoscopes = ExtractHoroscope(localPath);
                    if (horoscopes == null || !horoscopes.Any())
                    {
                        horoscopeSet.Status = HoroscopeStatus.Unavailable;
                    }
                    else
                    {
                        horoscopeSet.Horoscopes = new ObservableCollection<Horoscope>(horoscopes);
                        horoscopeSet.Status = HoroscopeStatus.Valid;
                    }
                }
            }
            catch (Exception )
            {
                horoscopeSet.Status = HoroscopeStatus.Error;
            }


            return horoscopeSet;
        }

        private List<Horoscope> ExtractHoroscope(string localPath)
        {
                using (FileStream fs = File.OpenRead(localPath))
                {
                    using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fs))
                    {
                        _logger.LogInformation($"Extracting horoscope from {localPath}");
                        String pageAsText = FindPageWithHoroscope(loadedDocument);
                        if (pageAsText != null)
                        {
                            return ParseHoroscope(pageAsText);
                        }
                        else
                        {
                            return null;
                        }
                    }

                }
        }

        private List<Horoscope> ParseHoroscope(string pageAsText)
        {
            List<Horoscope> horoscopes = new List<Horoscope>();
            foreach (AstroSign sign in AstroManager.Instance.AllSigns)
            {
                Regex regex = new Regex(HOROSCOPE_PATTERN.Replace("__SIGN__", sign.Name.ToUpper()), RegexOptions.CultureInvariant | RegexOptions.Multiline);
                Match match = regex.Match(pageAsText);
                if (!match.Success)
                {
                    _logger.LogError($"Unable to find the sign {sign.Name}");
                    continue;
                }
                Horoscope horoscope = new Horoscope() { Sign = sign, GlobalText = FormatText(match.Groups[1].Value) };
                horoscope.Topics.Add(new HoroscopeTopic() { Title = "Amour", TotalStars = 5, Stars = match.Groups[2].Value.Count(c => c == '★') });
                horoscope.Topics.Add(new HoroscopeTopic() { Title = "Job", TotalStars = 5, Stars = match.Groups[3].Value.Count(c => c == '★') });
                horoscope.Topics.Add(new HoroscopeTopic() { Title = "Vitalité", TotalStars = 5, Stars = match.Groups[4].Value.Count(c => c == '★') });
                horoscopes.Add(horoscope);
            }
            return horoscopes;
        }

        private string FormatText(string input)
        {
            input = input.Replace("-\n", "");
            input = input.Replace("\n", "");
            return input.Trim();
        }

        private String FindPageWithHoroscope(PdfLoadedDocument document)
        {
            for (var i = 0; i < document.Pages.Count; i++)
            {
                string extractedText = document.Pages[i].ExtractText(true);
                if (extractedText.Contains(PAGE_WITH_HOROSCOPE_MARKER))
                {
                    return extractedText;
                }
            }
            /*
            for (int pageNumber = 1; pageNumber <= document.PageCount; pageNumber++)
            {
                PdfPageBase page = document.Pages[pageNumber];
                page.DefaultLayer.

                 var stringsList = new List<string>();
                while (tokenizer.NextToken())
                {
                    if (tokenizer.TokenType == PrTokeniser.TK_STRING)
                    {
                        stringsList.Add(tokenizer.StringValue);
                    }
                }
                var pageContent = String.Join("", stringsList);

                if (pageContent.Contains(PAGE_WITH_HOROSCOPE_MARKER))
                {
                    return pageContent;
                }
            }

            //ITextExtractionStrategy strategy = new SimpleTextExtractionStrategy();
            //for (int page = 1; page <= document.NumberOfPages; page++)
            //{
            //    string currentPageText = PdfTextExtractor.GetTextFromPage(document, page, strategy);
            //    if (currentPageText.Contains(PAGE_WITH_HOROSCOPE_MARKER))
            //    {
            //        _logger.LogInformation($"Found horoscope on page {page}");
            //        return currentPageText;
            //    }
            //}

            throw new InvalidOperationException("Unable to find the horoscope on today 20Min");*/
            return null;
        }

        private string BuildLocalFilePath(DateTime date)
        {
            return String.Format(LOCAL_FILE_FORMAT, date);
        }

        private string BuildPdfURL(DateTime date)
        {
            return String.Format(URL_FORMAT, date);
        }

        private async Task DownloadFile(string url, string targetFilePath)
        {
            if (File.Exists(targetFilePath))
            {
                _logger.LogWarning($"PDF {targetFilePath} already existing using it directly");
            }
            else
            {
                using (HttpClient httpClient = new HttpClient())
                {
                    _logger.LogInformation($"Downloading {url} to {targetFilePath}");
                    using (HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, url))
                    {
                        using (
                            Stream contentStream = await (await httpClient.SendAsync(request)).Content.ReadAsStreamAsync(),
                                stream = new FileStream(targetFilePath, FileMode.Create, FileAccess.Write, FileShare.None, 16000, true))
                        {
                            await contentStream.CopyToAsync(stream);
                        }
                    }
                }
            }
        }
    }
}
