using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Morgan.Calculator.Web.Areas.Calculator.Controllers
{
    public class HomeController : Controller
    {
        // GET: Calculator/Home
        public ActionResult Index()
        {
            return View();
        }
    }
}