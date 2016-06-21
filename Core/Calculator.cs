using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Morgan.Calculator.Abstract;

namespace Morgan.Calculator.Core
{
	public class Calculator : ICalculator
	{
		public decimal Add(decimal left, decimal right) {
			return left + right;
		}

		public decimal Subtract(decimal left, decimal right) {
			return left - right;
		}

		public decimal Multiply(decimal left, decimal right) {
			return left * right;
		}

		public decimal Divide(decimal left, decimal right) {
			if (right == decimal.Zero) {
				throw new DivideByZeroException("Cannot divide by zero.");
			}
			return left / right;
		}
	}
}
