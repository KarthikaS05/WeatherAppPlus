/* when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city. */

//show temp for the searched city
function showTemp(response) {
  //obj destructuring
  console.log(response.data);
  const {
    coord: { lat, lon },
    dt,
    main: { temp, temp_min, temp_max, feels_like, humidity },
    name,
    wind: { speed },
  } = response.data;

  const { main, description, icon } = response.data.weather[0];

  //formate time from value given in response mill secs
  formatDate(dt * 1000);

  place.innerHTML = name || city.value;
  cityTemp.textContent = `${temp} ℃`;
  tempDesc.textContent = description;

  tempDesc.textContent =
    tempDesc.innerHTML.charAt(0).toUpperCase() + tempDesc.innerHTML.slice(1);
  tempMaxMin.textContent = `${Math.round(temp_min)}℃/${Math.round(
    temp_max
  )}℃  `;
  tempRealFeel.textContent = `Feels Like: ${feels_like}℃`;
  humidityNow.textContent = ` Humidity: ${humidity}% `;
  windSpeedElem.textContent = ` Wind: ${speed} km/h`;

  let tempIcon = icon;
  let iconURL = `http://openweathermap.org/img/wn/${tempIcon}@2x.png`;
  //setting def value
  weatherImgElem.setAttribute("src", iconURL);
  weatherImgElem.setAttribute("alt", description);

  weatherImgIlus[main] &&
    weatherImgElem.setAttribute("src", weatherImgIlus[main]);

  //to display the hourly forecast
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${apiKey}`;

  //display hourly(3) weather;
  axios.get(forecastUrl).then(showForeCast);

  //get daily wether
  getDailyWeather(lat, lon);

  //get hourly forecast
  // getHourlyWeather(lat, lon);
}

//Search the city and get its weather
const searchCity = (event) => {
  event.preventDefault();
  let cityName = city.value.trim() || alert("please enter a city");
  console.log(`City Search: ${cityName}`);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  console.log(`API url : ${apiUrl}`);
  //ajax call
  //only if city is present - shortCircuiting &&
  cityName &&
    axios
      .get(apiUrl)
      .then(showTemp)
      .catch((error) => {
        console.log("error");
        alert("Cannot get the weather for the entered city");
      });

  formSearch.reset(); //clearing the prev value
};

//listener for from submit
formSearch.addEventListener("submit", searchCity);

//search event by enter key
city.addEventListener("keypress", (event) => {
  //keyCode = 13
  if (event.key === "Enter") {
    console.log("enter event");
    searchCity(event);
  }
});

/* 
Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API. */

const showPosition = (position) => {
  const {
    coords: { latitude: la, longitude: lo },
  } = position;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&units=metric&appid=${apiKey}`;
  console.log(`API url : ${apiUrl}`);
  axios.get(apiUrl).then(showTemp);
};

const getLocation = (event) => {
  event.preventDefault();
  formSearch.reset(); //clearing the prev value
  console.log("get geo location");
  navigator.geolocation.getCurrentPosition(showPosition);
};

currLoc.addEventListener("click", getLocation);

//set the current location weather by default
navigator.geolocation.getCurrentPosition(showPosition);

/* ----------------------- daily and hourly API fetch ----------------------- */

//get the response with coordinates to get daily weather
const getDailyWeather = (lat, long) => {
  console.log("daily weather fetch");
  let dailyURL = ` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely&appid=${apiKey}&units=metric`;
  axios.get(dailyURL).then(showDailyWeather);
};

//to get the hourly weather forcast response
const getHourlyWeather = (lat, long) => {
  console.log("hourly weather fetch");
  let hourlyURL = ` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily,current,minutely&appid=${apiKey}&units=metric`;
  axios.get(hourlyURL).then(showHourlyWeather);
};

//inital value set
window.onload = () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=melbourne&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
};
