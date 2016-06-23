using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Morgan.Calculator.Abstract;

namespace Morgan.Calculator.Web.Controllers
{
	[Route("api/calculator/{action}/{left}/{right}")]
	public class CalculatorController : ApiController
	{
		private ICalculator mCalculator;

		//Make routes {action}/left/right/
		//Todo make default action w/ no params return documentation
		//Todo make second param optional and use first param

		//Note that if right is decimal the trailing slash in URL is required

		public CalculatorController(ICalculator calculator) {
			mCalculator = calculator;
		}
		
		[HttpGet]
		public decimal Add(decimal left, decimal right) {
			return mCalculator.Add(left, right);
		}

		[HttpGet]
		public decimal Subtract(decimal left, decimal right) {
			return mCalculator.Subtract(left, right);
		}

		[HttpGet]
		public decimal Multiply(decimal left, decimal right) {
			return mCalculator.Multiply(left, right);
		}

		[HttpGet]
		public decimal Divide(decimal left, decimal right) {
			return mCalculator.Divide(left, right);
		}
	}
}
