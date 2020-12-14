let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

/* ---------------------- Check for city within the obj --------------------- */

//function to convert temperature to fahreniet from celsius
let ctof = (cel) => {
  let f = cel * (9 / 5) + 32;
  return f;
};

//function to get the weather properties of city
getWeather = (city) => {
  const deg = weather[city]["temp"];
  let fahren = ctof(deg).toFixed(2);
  const humid = weather[city]["humidity"];
  alert(
    `It is currently ${deg}°C (${fahren}°F) in ${city} with a humidity of ${humid}% .`
  );
};

//check for city and get its weather
let city = prompt("Enter a city.");
city = city.trim(); //to trim off white spaces at the end
if (city.length > 0) {
  city = city.toLowerCase();
  let chkCity = city in weather; //checking whether entered city is in the given JSON obj weather
  if (chkCity) {
    getWeather(city);
  } else {
    let url = `https://www.google.com/search?q=weather+${city}`;
    alert(
      `Sorry, we don't know the weather for this city, try going to ${url} .`
    );
  }
} else {
  alert("Enter a city !");
}
