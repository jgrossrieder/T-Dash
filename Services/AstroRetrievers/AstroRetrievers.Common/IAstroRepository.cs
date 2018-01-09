using System;
using System.Threading.Tasks;
using Common.Astro.Model;

namespace AstroRetrievers.Common
{
	public interface IAstroRepository
	{
		Task<HoroscopeSet> GetHoroscopes(DateTime date);
	}
}
