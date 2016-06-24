	var CalculatorModel = function (context) {

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

		this.currentState = new StartState(context);

		this.reset = function () {
			this.acc = 0;
			this.display = "0";
			this.pendingOp = this.Operations.NO_OP;
			this.currentState = new StartState(context);
		};

	};