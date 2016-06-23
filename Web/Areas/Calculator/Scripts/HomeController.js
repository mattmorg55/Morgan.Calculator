(function (app) {

	var left;
	var right;
	var operation;

	var HomeController = function ($scope, calculatorService) {

		$scope.display = 0;

		$scope.numClick = function (val) {
			$scope.display = $scope.display ? $scope.display + String(val) : String(val);
		}

		$scope.opClick = function (op) {
			left = $scope.display;
			$scope.display = 0;
			operation = op;
		};

		$scope.clearClick = function () {
			left = right = operation = null;
			$scope.display = 0;
		};

		$scope.execClick = function () {
			right = $scope.display;
			if (left && operation && right) {
				switch (operation) {
					case '/':
						calculatorService.divide(left, right)
							.success(function (result) {
								$scope.display = result;
							});
						break;
					case '*':
						calculatorService.multiply(left, right)
							.success(function (result) {
								$scope.display = result;
							});
						break;
					case '-':
						calculatorService.subtract(left, right)
							.success(function (result) {
								$scope.display = result;
							});
						break;
					case '+':
						calculatorService.add(left, right)
							.success(function (result) {
								$scope.display = result;
							});
						break;
					default:
						$scope.display = 'ERR';
				}
			} else {
				$scope.display = 'ERR';
			}
		};

	};

	HomeController.$inject = ["$scope", "calculatorService"];

	app.controller("HomeController", HomeController);

} (angular.module("calculator")));