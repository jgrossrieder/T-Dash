using System;
using System.Threading.Tasks;
using AstroRetrievers.Common;
using Common.Astro.Model;

namespace Common.Astro.Repository
{
	public class AstroRepository: IAstroRepository
	{
		private readonly IRetriever _retriever;
		


		public AstroRepository(IRetriever retriever)
		{
			_retriever = retriever;
		}

		public async Task<HoroscopeSet> GetHoroscopes(DateTime date)
		{
			//TODO Implement Database/Cache
			return await _retriever.RetrieveHoroscope(date);
		}
	}
}
