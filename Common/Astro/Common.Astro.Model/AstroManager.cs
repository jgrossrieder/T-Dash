using System;
using Common.Astro.Model.Properties;

namespace Common.Astro.Model
{
    public class AstroManager
    {
        public AstroSign[] AllSigns { get; set; }

	    public AstroSign AriesSign { get; } = new AstroSign
	    {
		    Order = 1,
		    Name =Resources.SignAriesName,
		    Start = new DateTime(DateTime.Today.Year, 3, 21),
		    End = new DateTime(DateTime.Today.Year, 4, 20),
            TechnicalName = "aries"
	    };

	    public AstroSign TaurusSign { get; } = new AstroSign
	    {
		    Order = 2,
		    Name = Resources.SignTaurusName,
		    Start = new DateTime(DateTime.Today.Year, 4, 21),
		    End = new DateTime(DateTime.Today.Year, 5, 21),
            TechnicalName = "taurus"
	    };

	    public AstroSign GeminiSign { get; } = new AstroSign
	    {
		    Order = 3,
		    Name = Resources.SignGeminiName,
		    Start = new DateTime(DateTime.Today.Year, 5, 22),
		    End = new DateTime(DateTime.Today.Year, 6, 21),
            TechnicalName = "gemini"
	    };

	    public AstroSign CancerSign { get; } = new AstroSign
	    {
		    Order = 4,
		    Name = Resources.SignCancerName,
		    Start = new DateTime(DateTime.Today.Year, 6, 22),
		    End = new DateTime(DateTime.Today.Year, 7, 22),
            TechnicalName = "cancer"
	    };

	    public AstroSign LeoSign { get; } = new AstroSign
	    {
		    Order = 5,
		    Name = Resources.SignLeoName,
		    Start = new DateTime(DateTime.Today.Year, 7, 23),
		    End = new DateTime(DateTime.Today.Year, 8, 22),
            TechnicalName = "leo"
	    };

	    public AstroSign VirgoSign { get; } = new AstroSign
	    {
		    Order = 6,
		    Name = Resources.SignVirgoName,
		    Start = new DateTime(DateTime.Today.Year, 8, 23),
		    End = new DateTime(DateTime.Today.Year, 9, 23),
            TechnicalName = "virgo"
	    };

	    public AstroSign LibraSign { get; } = new AstroSign
	    {
		    Order = 7,
		    Name = Resources.SignLibraName,
		    Start = new DateTime(DateTime.Today.Year, 9, 24),
		    End = new DateTime(DateTime.Today.Year, 10, 23),
            TechnicalName = "libra"
	    };

	    public AstroSign ScorpioSign { get; } = new AstroSign
	    {
		    Order = 8,
		    Name = Resources.SignScorpioName,
		    Start = new DateTime(DateTime.Today.Year, 10, 24),
		    End = new DateTime(DateTime.Today.Year, 11, 22),
            TechnicalName = "scorpio"
	    };

	    public AstroSign SagittariusSign { get; } = new AstroSign
	    {
		    Order = 9,
		    Name = Resources.SignSagittariusName,
		    Start = new DateTime(DateTime.Today.Year, 11, 23),
		    End = new DateTime(DateTime.Today.Year, 12, 21),
            TechnicalName = "sagittarus"
	    };

	    public AstroSign CapricornSign { get; } = new AstroSign
	    {
		    Order = 10,
		    Name = Resources.SignCapricornName,
		    Start = new DateTime(DateTime.Today.Year, 12, 22),
		    End = new DateTime(DateTime.Today.Year + 1, 1, 20),
            TechnicalName = "capricorn"
	    };

	    public AstroSign AquariusSign { get; } = new AstroSign
	    {
		    Order = 11,
		    Name = Resources.SignAquariusName,
		    Start = new DateTime(DateTime.Today.Year + 1, 1, 21),
		    End = new DateTime(DateTime.Today.Year + 1, 2, 19),
            TechnicalName = "aquarius"
	    };

	    public AstroSign PiscesSign { get; } = new AstroSign
	    {
		    Order = 12,
		    Name = Resources.SignPiscesName,
		    Start = new DateTime(DateTime.Today.Year + 1, 2, 20),
		    End = new DateTime(DateTime.Today.Year + 1, 3, 20),
            TechnicalName = "pisces"
	    };

		public static AstroManager Instance { get; private set; } = new AstroManager();

        private AstroManager()
        {
            //  ResourceManager resManager = new ResourceManager("Images", GetType().Assembly);
            AllSigns = new[]
            {
				AriesSign,
				TaurusSign,
				GeminiSign,
				CancerSign,
				LeoSign,
				VirgoSign,
				LibraSign,
				ScorpioSign,
				SagittariusSign,
				CapricornSign,
				AquariusSign,
				PiscesSign
			};
        }
    }
}
