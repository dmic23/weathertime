//Directives
weatherTime.directive('weatherResults', function (){
	return {
		templateUrl: 'directives/daily_weather.html',
		replace: true,
		scope: {
			weatherDets: '=',
			convertToStand: '&',
			convertToC: '&',
			convertToDate: '&',
			dateFormat: '@',
		}
	};
});
