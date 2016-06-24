(function (app) {

	var CalculatorService = function ($http, calculatorApiUrl) {

		var _exec = function (operation, left, right) {
			return $http.get($.validator.format("{0}{1}/{2}/{3}/", calculatorApiUrl, operation, left, right));
		};

		var add = function (left, right) {
			return _exec('add', left, right);
		};

		var subtract = function (left, right) {
			return _exec('subtract', left, right);
		};

		var multiply = function (left, right) {
			return _exec('multiply', left, right);
		};

		var divide = function (left, right) {
			return _exec('divide', left, right);
		};

		return {
			add: add,
			subtract: subtract,
			multiply: multiply,
			divide: divide
		};
	};

	CalculatorService.$inject = ["$http", "calculatorApiUrl"];

	app.factory("CalculatorService", CalculatorService);

} (angular.module("calculator")))