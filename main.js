const apiKey = "27f7207d08aeb0ebf5337d69959e53e3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serchBox = document.querySelector(".serch input");
const serchBtn = document.querySelector(".serch button");
const weatehrIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatehrIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatehrIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatehrIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Rain") {
    weatehrIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatehrIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    weatehrIcon.src = "images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
}
serchBtn.addEventListener("click", () => {
  checkWeather(serchBox.value);
  serchBox.value = "";
});
