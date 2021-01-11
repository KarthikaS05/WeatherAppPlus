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
