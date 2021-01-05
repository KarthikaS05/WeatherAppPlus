//To get the current date and time
let now = new Date();
const h4Day = document.querySelector("#day");
const pDate = document.querySelector("#date");
const pTime = document.querySelector("#time");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
const months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

//Feature #1 - set current date and time
h4Day.innerHTML = `${day}`;
pDate.innerHTML = `${date} ${month} ${year}`;
pTime.innerHTML = `${hours}:${minutes} hrs`;

//Feature #2
//to set the city from search input
const setCity = (event) => {
  event.preventDefault();
  const city = document.querySelector("#city");
  //const cityValue = document.querySelector("#searchInput");
  console.log(cityValue.value);
  if (cityValue !== null && cityValue.value.length > 0) {
    city.innerHTML = cityValue.value.toUpperCase();
  } else {
    alert("Please enter a city");
  }
};

/* let search = document.querySelector("#search");
search.addEventListener("click", setCity); */
const cityValue = document.querySelector("#searchInput");
cityValue.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    setCity(event);
  }
});

const form = document.querySelector(".searchBar");
form.addEventListener("submit", setCity);

//Bonus Feature
//function to convert temperature to fahreniet from celsius

let ctof = (cel) => {
  console.log(`cel = ${cel}`);
  let f = cel * (9 / 5) + 32;
  console.log(`to F = ${f}`);
  return f;
};

//function to convert temperature to celsius from fahreniet
let ftoC = (fah) => {
  console.log(`f = ${fah}`);
  let c = ((fah - 32) * 5) / 9;
  console.log(` to cel = ${c}`);
  return c;
};

const temp = document.querySelector("#temp");

//event to set temperature to C
const setDegToCel = (event) => {
  console.log("set to cel");
  event.preventDefault();
  let [currTemp] = temp.innerText.split(" "); //to get 20 and discard ℉
  console.log(currTemp);
  let c = ftoC(currTemp);
  temp.textContent = `${c} ℃`;
  console.log(`Deg to cel = ${c}`);
  fahr.classList.toggle("isDisabled");
  cel.classList.toggle("isDisabled");
};

//event to set temperature to F
const setDegToFahr = (event) => {
  console.log("set to Fahr");
  event.preventDefault();
  const disabled = cel.classList.contains("isDisabled");
  console.log(disabled);
  if (disabled) {
    console.log("remove ");
    cel.classList.remove("isDisabled");
  }
  //split gives array ["20","℃"]
  //[currTemp] = 20
  let [currTemp] = temp.innerText.split(" "); //to get number and discard ℃
  console.log(currTemp);
  let fah = ctof(currTemp);
  temp.textContent = `${fah} ℉`;

  fahr.classList.toggle("isDisabled");
  console.log(`Deg to f = ${fah}`);
};

const cel = document.querySelector("#cel");
cel.addEventListener("click", setDegToCel);
const fahr = document.querySelector("#fahr");
fahr.addEventListener("click", setDegToFahr);
