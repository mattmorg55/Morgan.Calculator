	var CalculatorModel = function (context) {

		//Try creating the various states here so we don't keep instantiating them all the time 
		//in the state code

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

		this.currentState = new CalculatorState.Start(context);

		this.reset = function () {
			this.acc = 0;
			this.display = "0";
			this.pendingOp = this.Operations.NO_OP;
			this.currentState = new CalculatorState.Start(context);
		};

		this.pendingOpName = function () {
			switch (this.pendingOp) {
				case this.Operations.NO_OP:
					return "NO_OP";
					break;
				case this.Operations.ADD:
					return "ADD";
					break;
				case this.Operations.SUBTRACT:
					return "SUBTRACT";
					break;
				case this.Operations.MULTIPLY:
					return "MULTIPLY";
					break;
				case this.Operations.DIVIDE:
					return "DIVIDE";
					break;
				default:
					return "ERRROR Unknown operation";
			}
		};

	};