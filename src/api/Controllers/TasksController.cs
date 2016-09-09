using System.Net;
using api.Config;
using api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace api.Controllers
{
    [Route("tasks")]
    public class TasksController : Controller
    {
        private readonly IOptions<Logging> _settings;
        private readonly IContext _context;

        public TasksController(IOptions<Logging> settings, IContext context)
        {
            _settings = settings;
            _context = context;
        }

        [HttpGet]
        public IActionResult GetTasks()
        {
            return new JsonResult(_context.GetTasks());
        }

        [HttpPost]
        public void AddTask([FromBody]Task task)
        {
            _context.AddTask(task);
        }

        [HttpDelete("{id}")]
        public void DeleteTask(int id)
        {
            _context.DeleteTask(id);
        }
    }
}
