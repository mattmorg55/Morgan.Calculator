using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Morgan.Calculator.Web.Controllers
{
	public class CalculatorController : ApiController
	{
		//Make routes {action}/left/right/

		public decimal Get() {
			return 22m / 7m;
		}
	}
}
