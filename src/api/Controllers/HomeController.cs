using api.Config;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace api.Controllers
{
    [Route("home")]
    public class HomeController : Controller
    {
        private readonly IOptions<Logging> _settings;

        public HomeController(IOptions<Logging> settings)
        {
            _settings = settings;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return new JsonResult(new { _settings.Value.LogLevel.System });
        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
