// SERVICES
weatherTime.service('forecastCity', function (){
   
    this.city = "San Francisco, CA";
    
});

weatherTime.service('weatherService', ['$resource', function ($resource){
   
    this.GetWeather = function (city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days });
    };
    
}]);
