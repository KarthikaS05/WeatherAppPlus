let now = new Date();

let h4Day = document.querySelector("#day");
let pDate = document.querySelector("#date");
let pTime = document.querySelector("#time");

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

h4Day.innerHTML = `${day}`;
pDate.innerHTML = `${date} ${month} ${year}`;
pTime.innerHTML = `${hours}:${minutes} hrs`;

function setCity(event) {
  event.preventDefault();
  console.log(event);
  let city = document.querySelector("#city");
  let cityValue = document.querySelector("#searchInput");
  console.log(cityValue.value);
  if (cityValue !== null && cityValue.value.length > 0) {
    city.innerHTML = cityValue.value.toUpperCase();
  } else {
    alert("Please enter a city");
  }
}

/* let search = document.querySelector("#search");
search.addEventListener("click", setCity); */
let cityValue = document.querySelector("#searchInput");
cityValue.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    setCity(event);
  }
});

let form = document.querySelector(".searchBar");
form.addEventListener("submit", setCity);
//function to convert temperature to fahreniet from celsius
let ctof = (cel) => {
  console.log(`cel = ${cel}`);
  let f = cel * (9 / 5) + 32;
  console.log(`to F = ${f}`);
  return f;
};

let ftoC = (fah) => {
  console.log(`f = ${fah}`);
  let c = ((fah - 32) * 5) / 9;
  console.log(` to cel = ${c}`);
  return c;
};

let temp = document.querySelector("#temp");

console.log(temp.innerHTML);

function setDegToCel(event) {
  console.log("set to cel");
  event.preventDefault();
  let c = ftoC(temp.innerHTML);
  temp.innerHTML = c;
  console.log(`Deg to cel = ${c}`);
  fahr.classList.toggle("isDisabled");
  cel.classList.toggle("isDisabled");
}

function setDegToFahr(event) {
  console.log("set to Fahr");
  event.preventDefault();
  const disabled = cel.classList.contains("isDisabled");
  console.log(disabled);
  if (disabled) {
    console.log("remove ");
    cel.classList.remove("isDisabled");
  }
  let fah = ctof(temp.innerHTML);
  temp.innerHTML = fah;

  fahr.classList.toggle("isDisabled");
  console.log(`Deg to f = ${fah}`);
}
let cel = document.querySelector("#cel");
cel.addEventListener("click", setDegToCel);
let fahr = document.querySelector("#fahr");
fahr.addEventListener("click", setDegToFahr);
