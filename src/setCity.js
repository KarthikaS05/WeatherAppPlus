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
