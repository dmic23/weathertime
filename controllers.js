//Controllers
weatherTime.controller('homeController',['$scope', '$location','forecastCity', function ($scope, $location, forecastCity){

	$scope.city = forecastCity.city;

	$scope.$watch('city', function (){
		forecastCity.city = $scope.city;

	});

	$scope.submit = function (){
		$location.path('/forecast');
	};

}]);

weatherTime.controller('forecastController', ['$scope', '$routeParams', 'forecastCity', 'weatherService', function ($scope, $routeParams, forecastCity, weatherService){

	$scope.city = forecastCity.city;

	$scope.days = $routeParams.days || '2';

	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

	$scope.convertToF = function (degs){
		return Math.round((1.8 * (degs - 273)) + 32);
	};

	$scope.convertDate = function (dt){
		return new Date(dt*1000);
	};

}]);