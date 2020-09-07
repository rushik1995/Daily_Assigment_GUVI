var http=request("http");

var weatherData = "";

var APIKEY= "f505988beffc5aed118f924c0d791ff7";

var city="madras";

var option = {
  host: 'api.openweathermap.org',
  path: '/data/2.5/weather?q=' + city + '&APPID=' + APIKEY
}

http.request(option,function(weatheResponse){
  weatheResponse.on("data",function(data){
    weatherData += data;
  })
  weatheResponse.on("end",function(){
    console.log(weatherData);
  })
}).end()
