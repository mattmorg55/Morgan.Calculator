(function (app) {

	var HomeController = function ($scope, calculatorService) {

		$scope.model = new CalculatorModel(calculatorService);

		$scope.numClick = function (val) {
			$scope.model.currentState.enterDigit(val);
		}

		$scope.periodClick = function () {
			$scope.model.currentState.enterPoint();
		};

		$scope.opClick = function (op) {
			$scope.model.currentState.enterOp(op);
		};

		$scope.clearClick = function () {
			$scope.model.reset();
		};

		$scope.execClick = function () {
			$scope.model.currentState.enterEquals();
		};
	};

	HomeController.$inject = ["$scope", "CalculatorService"];

	app.controller("HomeController", HomeController);

} (angular.module("calculator")));