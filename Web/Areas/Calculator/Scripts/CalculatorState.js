var StartState = function (context) {
	
	this.enterDigit = function (num) {
		context.model.display = "" + num;
		if (num != 0) {
			context.model.currentState = new AccumState(context);
		}
	};

	this.enterPoint = function () {
		context.model.display = "0.";
		context.model.currentState = new PointState(context);
	};

	this.enterOp = function (op) {
	
	};

	this.enterEquals = function () {

	};

};

var AccumState = function (context) {

	this.enterDigit = function (num) {
		context.model.display += num;
	};

	this.enterPoint = function () {

	};

	this.enterOp = function (op) {
		context.model.acc = context.compute();
		context.model.display = "" + context.model.acc;
		context.model.pendingOp = op;
		context.model.currentState = new ComputeState(context);
	};

	this.enterEquals = function () {
		context.compute().success(function(result) {
			context.model.acc = result;
			context.model.display = "" + context.model.acc;
			context.model.pendingOp = context.model.Operations.NO_OP;
			context.model.currentState = new StartState(context);
		});
	};
};

var PointState = function (context) {

	this.enterDigit = function (num) {
		context.model.display += num;
	};

	this.enterPoint = function () {

	};

	this.enterOp = function (op) {

	};

	this.enterEquals = function () {

	};
};

var ComputeState = function (context) {

	this.enterDigit = function (num) {
		context.model.display = "" + num;
		if (num == 0) {
			context.model.currentState = new StartState(context);
		} else {
			context.model.currentState = new AccumState(context);
		}
	};

	this.enterPoint = function () {

	};

	this.enterOp = function (op) {

	};

	this.enterEquals = function () {

	};
};

var ErrorState = function () {

	this.enterDigit = function (num) {

	};

	this.enterPoint = function () {

	};

	this.enterOp = function (op) {

	};

	this.enterEquals = function () {

	};
};