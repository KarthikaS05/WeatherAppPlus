const currLoc = document.querySelector("#currLoc");
const searchBtn = document.querySelector("#search");

const body = document.querySelector("body");
const container = document.getElementById("weatherDetails");

const place = document.querySelector("#city");
const city = document.querySelector("#searchInput");
const cityTemp = document.querySelector("#temp");

const tempDesc = document.querySelector("#tempDesc");
const tempMaxMin = document.querySelector("#tempMaxMin");
const tempRealFeel = document.querySelector("#tempRealFeel");
const humidityNow = document.querySelector("#humidity");
const windSpeedElem = document.querySelector("#wind");
const formSearch = document.querySelector(".searchBar");
const weatherImgElem = document.querySelector("#weatherImg");

//to DO - get time from response
//const dayElem = document.querySelector("#day");
const dateElem = document.querySelector("#date");
const timeElem = document.querySelector("#day_time");

//time wise weather
const hrForecast = document.querySelector("#forecast");
//day wise forcast
const dayForecast = document.querySelector("#days");

/* window.onload = () => {
  navigator.geolocation.getCurrentPosition(showPosition);
};
 */
