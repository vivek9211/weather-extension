const API_key = "9ceb1fb1b464ea0f7d27e7a96142057d";


fetch("https://api.openweathermap.org/data/2.5/weather?q=patna&appid=9ceb1fb1b464ea0f7d27e7a96142057d&units=metric")
.then((data) => data.json())

.then((jsonData) => {
  var cityName = jsonData.name;
  var countryCode = jsonData.sys.country;
  var temp = jsonData.main.temp;
  var feelsLikeTemp = jsonData.main.feels_like;
  var description = jsonData.weather[0].description;


  document.getElementById("text_location").innerHTML = cityName;
  document.getElementById("text_location_country").innerHTML = countryCode;
  document.getElementById("text_temp").innerHTML = Math.round(temp);
  document.getElementById("text_feelslike").innerHTML = feelsLikeTemp;
  document.getElementById("text_desc").innerHTML = description;
})
