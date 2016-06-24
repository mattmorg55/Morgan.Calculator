//
// I used the state diagram found here:
// https://www.clear.rice.edu/comp212/06-spring/labs/13/
//

var StartState = function (model) {
	
	this.enterDigit = function (num) {
		model.display = "" + num;
		if (num != 0) {
			model.currentState = new AccumState(model);
		}
	};

	this.enterPoint = function () {
		model.display = "0.";
		model.currentState = new PointState(model);
	};

	this.enterOp = function (op) {
	
	};

	this.enterEquals = function () {

	};

};

var AccumState = function (model) {

	this.enterDigit = function (num) {
		model.display += num;
	};

	this.enterPoint = function () {

	};

	this.enterOp = function (op) {
		model.acc = model.compute();
		model.display = "" + model.acc;
		model.pendingOp = op;
		model.currentState = new ComputeState(model);
	};

	this.enterEquals = function () {
		model.compute().success(function(result) {
			model.acc = result;
			model.display = "" + model.acc;
			model.pendingOp = model.Operations.NO_OP;
			model.currentState = new StartState(model);
		});
	};
};

var PointState = function (model) {

	this.enterDigit = function (num) {
		model.display += num;
	};

	this.enterPoint = function () {

	};

	this.enterOp = function (op) {

	};

	this.enterEquals = function () {

	};
};

var ComputeState = function (model) {

	this.enterDigit = function (num) {
		model.display = "" + num;
		if (num == 0) {
			model.currentState = new StartState(model);
		} else {
			model.currentState = new AccumState(model);
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