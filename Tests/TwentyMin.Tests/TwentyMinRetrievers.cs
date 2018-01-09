using System;
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
        }
    }

}