using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AstroRetrievers.Common;
using Common.Astro.Model;

namespace Tests.Mocks
{
    public class RetrieverMock:IRetriever
    {
        public Task<HoroscopeSet> RetrieveHoroscope(DateTime date)
        {
            HoroscopeSet horoscopeSet = new HoroscopeSet()
            {
                Status = HoroscopeStatus.Valid,
                Time = date
            };
            Random random = new Random();
            foreach (AstroSign sign in AstroManager.Instance.AllSigns)
            {
                Horoscope horoscope = new Horoscope()
                {
                    GlobalText =
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    Sign = sign
                };
                horoscope.Topics.Add(new HoroscopeTopic()
                {
                    Title = "Amour",
                    Stars = random.Next(1,5),
                    TotalStars = 5
                });
                horoscope.Topics.Add(new HoroscopeTopic()
                {
                    Title = "Job",
                    Stars = random.Next(1,5),
                    TotalStars = 5
                });
                horoscope.Topics.Add(new HoroscopeTopic()
                {
                    Title = "Vitalité",
                    Stars = random.Next(1,5),
                    TotalStars = 5
                });

                horoscopeSet.Horoscopes.Add(horoscope);
            }

            return Task.FromResult(horoscopeSet);
        }
    }
}
