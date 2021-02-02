//display 3hrs weather forcast
const showForeCast = (response) => {
  let forecast = null;
  hrForecast.innerHTML = `<div class="col-12" style="margin-bottom: 20px">
      <h4 id="hourly">Hourly Forecast</h4>
    </div>`;

  for (let i = 0; i < 6; i++) {
    forecast = response.data.list[i];
    const {
      dt,
      main: { temp },
    } = forecast;

    const { main, description, icon } = forecast.weather[0];
    let icURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    hrForecast.innerHTML += `<div class="col-2">
          <p>${formatTime(dt * 1000)}</p>
           <h3><strong>${Math.round(temp)}° </strong></h3>
          <img src=${icURL} alt="">
          <p>${description}</p>
         </div>`;
  }
};

//display hourly weather forcast for next 6 hours
const showHourlyWeather = (response) => {
  console.log("show hourly weather");

  console.log(response.data.hourly[0]);
  let hourly = null;
  hrForecast.innerHTML = `<div class="col-12" style="margin-bottom: 20px">
      <h4 id="hourly">Hourly Forecast</h4>
    </div>`;

  for (let i = 0; i < 6; i++) {
    hourly = response.data.hourly[i];
    const { dt, temp } = hourly;

    const { description, icon } = hourly.weather[0];
    let icURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    hrForecast.innerHTML += `<div class="col-2">
          <p>${formatTime(dt * 1000)}</p>
           <h3><strong>${Math.round(temp)}° </strong></h3>
          <img src=${icURL} alt="">
          <p>${description}</p>
         </div>`;
  }
};

//Display daily weather forcast for next 6 days
const showDailyWeather = (response) => {
  console.log("show daily weather");
  console.log(response.data.daily[1]);
  let dailyForecast = null;
  dayForecast.innerHTML = `<div class="col-12" style="margin-bottom: 20px">
          <h4>Next 6 Days</h4>
      </div>`;

  for (let i = 1; i < 7; i++) {
    dailyForecast = response.data.daily[i];
    const {
      dt,
      temp: { max, min },
    } = dailyForecast;
    const { description, icon } = dailyForecast.weather[0];
    let icURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    dayForecast.innerHTML += `<div class="col-2">
          <p>${formatDay(dt * 1000)}</p>
           <h3>${Math.round(min)}° | <strong>${Math.round(max)}° </strong></h3>
          <img src=${icURL} alt="">
          <p>${description}</p>
         </div>`;
  }
};

//axios.get(forecastUrl).then(showForeCast);

const formatTime = (timestamp) => {
  const t = new Date(timestamp);
  let hrs = t.getHours();
  hrs = `${hrs < 10 ? `${hrs}`.padStart(2, "0") : hrs}`;
  let mins = t.getMinutes();
  mins = `${mins < 10 ? `${mins}`.padStart(2, "0") : mins}`;
  return `${hrs}:${mins} hrs`;
};

const formatDay = (timestamp) => {
  const nxt = new Date(timestamp);
  const d = days[nxt.getDay()];
  return d;
};
