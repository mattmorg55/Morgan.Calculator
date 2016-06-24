	var CalculatorModel = function (calculatorService) {

		this.Operations = {
			NO_OP: 0,
			ADD: 1,
			SUBTRACT: 2,
			MULTIPLY: 3,
			DIVIDE: 4
		}

		//Accumulated computation
		this.acc = 0;

		//Current display string
		this.display = "0";

		//Current pending operation
		this.pendingOp = this.Operations.NO_OP;

		this.currentState = new StartState(this);

		this.reset = function () {
			this.acc = 0;
			this.display = "0";
			this.pendingOp = this.Operations.NO_OP;
			this.currentState = new StartState(this);
		};

		//TODO This doesn't belong in the model
		this.compute = function () {
			if (this.pendingOp == this.Operations.NO_OP) {
				return this.display;
			}
			switch (this.pendingOp) {
				case this.Operations.DIVIDE:
					return calculatorService.divide(this.acc, this.display);
					break;
				case this.Operations.MULTIPLY:
					return calculatorService.multiply(this.acc, this.display);
					break;
				case this.Operations.SUBTRACT:
					return calculatorService.subtract(this.acc, this.display);
					break;
				case this.Operations.ADD:
					return calculatorService.add(this.acc, this.display);
					break;
				default:
					this.display = "ERROR Unknown operation";
					this.currentState = new ErrorState();
			}
		};
	};