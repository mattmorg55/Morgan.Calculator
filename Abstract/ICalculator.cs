using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Morgan.Calculator.Abstract
{
	public interface ICalculator
	{
		decimal Add(decimal left, decimal right);
		decimal Divide(decimal left, decimal right);
		decimal Multiply(decimal left, decimal right);
		decimal Subtract(decimal left, decimal right);
	}
}
