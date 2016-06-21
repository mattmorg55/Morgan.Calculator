using Microsoft.VisualStudio.TestTools.UnitTesting;
using Morgan.Calculator.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Morgan.Calculator.Abstract;

namespace Morgan.Calculator.Core.Tests
{
	[TestClass()]
	public class CalculatorTests
	{
		private ICalculator mCalculator;

		[TestInitialize()]
		public void Setup() {
			mCalculator = new Calculator();
		}

		[TestCleanup()]
		public void Teardown() {
			mCalculator = null;
		}

		[TestMethod()]
		public void AddTest() {

			//Act
			var result = mCalculator.Add(0.1m, 1.25m);

			//Assert
			Assert.AreEqual(1.35m, result);
		}

		[TestMethod()]
		[ExpectedException(typeof(OverflowException))]
		public void AddWithOverflowTest() {

			//Act
			var result = mCalculator.Add(decimal.MaxValue, 1m);

			//Assert
			Assert.Fail("Expected OverflowException.");
		}

		[TestMethod()]
		public void SubtractTest() {

			//Act
			var result = mCalculator.Subtract(1.25m, 0.1m);

			//Assert
			Assert.AreEqual(1.15m, result);
		}

		[TestMethod()]
		[ExpectedException(typeof(OverflowException))]
		public void SubtractWithOverflowTest() {

			//Act
			var result = mCalculator.Subtract(decimal.MinValue, 1m);

			//Assert
			Assert.Fail("Expected OverflowException.");
		}

		[TestMethod()]
		public void MultiplyTest() {

			//Act
			var result = mCalculator.Multiply(1.25m, 0.1m);

			//Assert
			Assert.AreEqual(0.125m, result);
		}

		[TestMethod()]
		[ExpectedException(typeof(OverflowException))]
		public void MultiplyWithOverflowTest() {

			//Act
			var result = mCalculator.Multiply(decimal.MaxValue, 2m);

			//Assert
			Assert.Fail("Expected OverflowException.");
		}

		[TestMethod()]
		public void DivideTest() {

			//Act
			var result = mCalculator.Divide(1.25m, 0.1m);

			//Assert
			Assert.AreEqual(12.5m, result);
		}

		[TestMethod()]
		[ExpectedException(typeof(DivideByZeroException))]
		public void DivideByZeroTest() {

			//Act
			var result = mCalculator.Divide(1.25m, 0m);

			//Assert
			Assert.Fail("Expected DivideByZeroException.");
		}

		[TestMethod()]
		[ExpectedException(typeof(OverflowException))]
		public void DivideWithOverflowTest() {

			//Act
			var result = mCalculator.Divide(decimal.MaxValue, 0.5m);

			//Assert
			Assert.Fail("Expected OverflowException.");
		}
	}
}