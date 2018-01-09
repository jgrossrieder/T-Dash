using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AstroRetrievers.Common;
using Common.Astro.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Produces("application/json")]
    [Route("api/astro")]
    public class AstroController : Controller
    {
        private readonly IAstroRepository _astroRepository;

        public AstroController(IAstroRepository astroRepository)
        {
            _astroRepository = astroRepository;
        }

        [HttpGet("{date}", Name = "get")]
        public async Task<IActionResult> Get(DateTime?  date)
        {
            if (date == null)
            {
                date = DateTime.Today;
            }
            HoroscopeSet horoscopeSet = await _astroRepository.GetHoroscopes(date.Value);
            if (horoscopeSet.Status == HoroscopeStatus.Valid)
            {
                return new ObjectResult(horoscopeSet.Horoscopes);
            }
            return NotFound();
        }
    }
}