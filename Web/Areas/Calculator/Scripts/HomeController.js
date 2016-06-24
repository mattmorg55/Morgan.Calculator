(function (app) {

	var HomeController = function ($scope, calculatorService) {

		$scope.model = new CalculatorModel($scope);

		$scope.compute = function () {
			if ($scope.model.pendingOp == $scope.model.Operations.NO_OP) {
				return $scope.model.display;
			}
			switch ($scope.model.pendingOp) {
				case $scope.model.Operations.DIVIDE:
					return calculatorService.divide($scope.model.acc, $scope.model.display);
					break;
				case $scope.model.Operations.MULTIPLY:
					return calculatorService.multiply($scope.model.acc, $scope.model.display);
					break;
				case $scope.model.Operations.SUBTRACT:
					return calculatorService.subtract($scope.model.acc, $scope.model.display);
					break;
				case $scope.model.Operations.ADD:
					return calculatorService.add($scope.model.acc, $scope.model.display);
					break;
				default:
					$scope.model.display = "ERROR Unknown operation";
					$scope.model.currentState = new ErrorState();
			}
		};

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