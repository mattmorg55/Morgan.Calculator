var CalculatorState = {

	Start: function (context) {

		this.name = "Start";

		this.enterDigit = function (num) {
			context.model.display = "" + num;
			if (num != 0) {
				context.model.currentState = new CalculatorState.Accum(context);
			}
		};

		this.enterPoint = function () {
			context.model.display = "0.";
			context.model.currentState = new CalculatorState.Point(context);
		};

		this.enterOp = function (op) {
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = op;
				context.model.currentState = new CalculatorState.Compute(context);
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};

		this.enterEquals = function () {
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = context.model.Operations.NO_OP;
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};

	},

	Accum: function (context) {

		this.name = "Accum";

		this.enterDigit = function (num) {
			context.model.display += num;
		};

		this.enterPoint = function () {
			context.model.display += ".";
			context.model.currentState = new CalculatorState.Point(context);
		};

		this.enterOp = function (op) {
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = op;
				context.model.currentState = new CalculatorState.Compute(context);
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};

		this.enterEquals = function () {
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = context.model.Operations.NO_OP;
				context.model.currentState = new CalculatorState.Start(context);
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};
	},

	Point: function (context) {

		this.Point = "Point";

		this.enterDigit = function (num) {
			context.model.display += num;
		};

		this.enterPoint = function () {
			//do nothing
		};

		this.enterOp = function (op) {
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = op;
				context.model.currentState = new CalculatorState.Compute(context);
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};

		this.enterEquals = function () {
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = context.model.Operations.NO_OP;
				context.model.currentState = new CalculatorState.Start(context);
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};
	},

	Compute: function (context) {

		this.name = "Compute";

		this.enterDigit = function (num) {
			context.model.display = "" + num;
			if (num == 0) {
				context.model.currentState = new CalculatorState.Start(context);
			} else {
				context.model.currentState = new CalculatorState.Accum(context);
			}
		};

		this.enterPoint = function () {
			context.model.display = "0.";
			context.model.currentState = new CalculatorState.Point(context);
		};

		this.enterOp = function (op) {
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = op;
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};

		this.enterEquals = function () {
			//apply the operation to acc with itself
			context.compute().then(function (response) {
				context.model.acc = response.data;
				context.model.display = "" + context.model.acc;
				context.model.pendingOp = context.model.Operations.NO_OP;
				context.model.currentState = new CalculatorState.Start(context);
			}, function (response) {
				context.model.currentState = new CalculatorState.Error(context, response);
			});
		};
	},

	Error: function (context, response) {

		this.name = "Error";

		this.enterDigit = function (num) {
		};

		this.enterPoint = function () {
		};

		this.enterOp = function (op) {
		};

		this.enterEquals = function () {
		};
		
		if (response) {
			if (response.data.ExceptionMessage) {
				context.model.display = "ERROR " + response.data.ExceptionMessage;
			} else {
				context.model.display = "ERROR " + response.statusText;
			}
		};
	}
};