//To get the current date and time
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

/* ----- Function to get the timestamp(millsecs from 1970yr) to current ----- */

const formatDate = (timestamp) => {
  //cal the date
  const curr = new Date(timestamp);
  let cityDay = days[curr.getDay()];
  let cityMonth = months[curr.getMonth()];
  let cityDate = curr.getDate();
  let cityHrs = curr.getHours();
  let cityMins = curr.getMinutes();
  cityHrs = `${cityHrs < 10 ? `${cityHrs}`.padStart(2, "0") : cityHrs}`;
  cityMins = `${cityMins < 10 ? `${cityMins}`.padStart(2, "0") : cityMins}`;
  let cityYear = curr.getFullYear();
  dateElem.innerHTML = `${cityDate} ${cityMonth} ${cityYear}`;
  timeElem.textContent = `${cityDay} ${cityHrs}:${cityMins} hrs`;
  setBgStyle(cityHrs);
};
