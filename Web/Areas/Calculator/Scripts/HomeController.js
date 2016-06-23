(function (app) {

	var HomeController = function ($scope, calculatorService) {

		$scope.add = function (left, right) {
			calculatorService.add(left, right)
				.success(function (result) {
					$scope.display = result
				});
		}

	};

	HomeController.$inject = ["$scope", "calculatorService"];

	app.controller("HomeController", HomeController);

} (angular.module("calculator")));