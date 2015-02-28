// SERVICES
weatherTime.service('forecastCity', function() {
   
    this.city = "New York, NY";
    
});

weatherTime.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days });
    };
    
}]);



//Services
// weatherTime.service('forecastCity', function (){

// 	this.city = "New York, NY";


// });

// weatherTime.service('weatherService', ['$resource', function ($resource){
// 	console.log("here 1");
// 	this.GetWeather = function (city, days){
// 		console.log("here 2");
// 		var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
// 		console.log(weatherAPI);
// 		return weatherAPI.get({q: city, cnt: days});
// 	};
// }]);