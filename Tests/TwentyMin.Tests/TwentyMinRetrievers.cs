using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AstroRetrievers.TwentyMinRetriever;
using Common.Astro.Model;
using Microsoft.Extensions.Logging;
using NUnit.Framework;

namespace TwentyMin.Tests
{
    public class TwentyMinRetrievers
    {
        private TwentyMinRetriever _twentyMinRetriever;

        [SetUp]
        public void Setup()
        {
            LoggerFactory loggerFactory = new LoggerFactory();
            _twentyMinRetriever = new TwentyMinRetriever(loggerFactory);
        }

        [Test]
        public void TestRetrieval()
        {
            Task<HoroscopeSet> retrieveHoroscope = _twentyMinRetriever.RetrieveHoroscope(new DateTime(2017, 12, 15));
            retrieveHoroscope.Wait(10000);
            HoroscopeSet results = retrieveHoroscope.Result;
            Assert.AreEqual(12, results.Horoscopes.Count);
            Assert.AreEqual(new DateTime(2017, 12, 15), results.Time);
            Assert.AreEqual(HoroscopeStatus.Valid, results.Status);

            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.AriesSign), 5, 5, 4);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.TaurusSign), 5, 5, 4);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.GeminiSign), 4, 5, 3);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.CancerSign), 5, 5, 4);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.LeoSign), 5, 5, 5);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.VirgoSign), 4, 4, 4);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.LibraSign), 5, 5, 4);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.ScorpioSign), 5, 5, 5);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.SagittariusSign), 5, 5, 5);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.CapricornSign), 5, 5, 4);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.AquariusSign), 5, 5, 5);
            CheckSign(results.Horoscopes.First(h => h.Sign == AstroManager.Instance.PiscesSign), 5, 5, 4);
        }

        [Test]
        public void TestRetrievalNoHoroscopePresent()
        {
            Task<HoroscopeSet> retrieveHoroscope = _twentyMinRetriever.RetrieveHoroscope(new DateTime(2018, 02, 21));
            retrieveHoroscope.Wait(10000);
            HoroscopeSet results = retrieveHoroscope.Result;
            Assert.AreEqual(HoroscopeStatus.Unavailable, results.Status);
            Assert.AreEqual(new DateTime(2018, 2, 21), results.Time);
            
        }

        private void CheckSign(Horoscope horoscope, int loveStarsCount, int jobStarsCount, int vitalityStarsCount)
        {
            HoroscopeTopic loveTopic = horoscope.Topics.FirstOrDefault(t => t.Title == "Amour");
            Assert.IsNotNull(loveTopic);
            Assert.AreEqual(5, loveTopic.TotalStars);
            Assert.AreEqual(loveStarsCount, loveTopic.Stars);

            HoroscopeTopic jobTopic = horoscope.Topics.FirstOrDefault(t => t.Title == "Job");
            Assert.IsNotNull(jobTopic);
            Assert.AreEqual(5, jobTopic.TotalStars);
            Assert.AreEqual(jobStarsCount, jobTopic.Stars);

            HoroscopeTopic vitalityTopic = horoscope.Topics.FirstOrDefault(t => t.Title == "Vitalité");
            Assert.IsNotNull(vitalityTopic);
            Assert.AreEqual(5,vitalityTopic.TotalStars);
            Assert.AreEqual(vitalityStarsCount, vitalityTopic.Stars);
        }
    }

}