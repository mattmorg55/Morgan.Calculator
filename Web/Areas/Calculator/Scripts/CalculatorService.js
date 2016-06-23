(function (app) {

	var calculatorService = function ($http, calculatorApiUrl) {

		var add = function (left, right) {
			return $http.get(calculatorApiUrl + "/add/" + left + "/" + right + "/");
		};

		return {
			add: add
		};
	};

	calculatorService.$inject = ["$http", "calculatorApiUrl"];

	app.factory("calculatorService", calculatorService);

} (angular.module("calculator")))