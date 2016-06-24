(function (app) {

	var HomeController = function ($scope, $q, calculatorService) {

		$scope.compute = function () {
			if ($scope.model.pendingOp == $scope.model.Operations.NO_OP) {
				return $q.resolve({ "data": $scope.model.display });
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
					$q.reject("Unknown operation");
			}
		};

		$scope.numClick = function (val) {
			$scope.model.currentState.enterDigit(val);
			$("#display").focus();
		}

		$scope.periodClick = function () {
			$scope.model.currentState.enterPoint();
			$("#display").focus();
		};

		$scope.opClick = function (op) {
			$scope.model.currentState.enterOp(op);
			$("#display").focus();
		};

		$scope.clearClick = function () {
			$scope.model.reset();
			$("#display").focus();
		};

		$scope.execClick = function () {
			$scope.model.currentState.enterEquals();
			$("#display").focus();
		};

		$(document).ready(function () {
			$("#debug").change(function () {
				if (this.checked) {
					$("#debugPanel").show();
				} else {
					$("#debugPanel").hide();
				}
			});
		});

		$scope.model = new CalculatorModel($scope);
		$("#debugPanel").hide();
		$("#display").focus();
	};

	HomeController.$inject = ["$scope", "$q", "CalculatorService"];

	app.controller("HomeController", HomeController);

} (angular.module("calculator")));