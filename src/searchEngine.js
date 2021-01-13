/* when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city. */

//Sample url to get current weather
/*https://api.openweathermap.org/data/2.5?q=Lisbon&units=metric&appid=YOURKEY
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 */

//show temp for the searched city
function showTemp(response) {
  console.log(response);
  /*  let tempValue = Math.round(response.data.main.temp);
  console.log(tempValue); */
  /* 
  console.log(response.data?.name || "Cannot Find the city"); */

  //obj destructuring
  const {
    main: { temp, temp_min, temp_max, feels_like, humidity },
    name,
  } = response.data;

  const { main, description, icon } = response.data.weather[0];

  console.log(place.innerHTML);
  console.log(city.value);
  place.innerHTML = name || city.value;
  cityTemp.textContent = `${temp}℃`;
  tempDesc.textContent = response.data.weather[0].description;

  tempDesc.textContent =
    tempDesc.innerHTML.charAt(0).toUpperCase() + tempDesc.innerHTML.slice(1);
  tempMaxMin.textContent = `${temp_max}℃ / ${temp_min}℃ `;
  tempRealFeel.textContent = `Feels Like: ${feels_like}℃`;
  humidityNow.textContent = `Humidity: ${humidity}%`;

  let tempIcon = response.data.weather[0].icon;
  let iconURL = `http://openweathermap.org/img/wn/${tempIcon}@2x.png`;
  //setting def value
  document.getElementById("weatherImg").src = iconURL;

  weatherImgIlus[main] &&
    (document.getElementById("weatherImg").src = weatherImgIlus[main]);
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
  // cityName && axios.get(apiUrl).then(showTemp);
  /* 
  axios
    .get(apiUrl)
    .then(showTemp)
    .catch(() => {
      console.log("error");
    }); */

  cityName &&
    axios
      .get(apiUrl)
      .then(showTemp)
      .catch((error) => {
        console.log("error");
        alert("please enter a valid city");
      });

  formSearch.reset(); //clearing the prev value
};

formSearch.addEventListener("submit", searchCity);

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
  console.log(position);
  const {
    coords: { latitude: la, longitude: lo },
  } = position;
  console.log(la, lo);

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

const currLoc = document.querySelector("#currLoc");
currLoc.addEventListener("click", getLocation);
