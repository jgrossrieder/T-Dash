using System;
using System.Threading.Tasks;
using Common.Astro.Model;

namespace AstroRetrievers.Common
{
	public interface IRetriever
	{
		Task<HoroscopeSet> RetrieveHoroscope(DateTime date);
	}
}
