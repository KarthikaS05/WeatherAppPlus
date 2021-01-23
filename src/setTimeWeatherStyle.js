//change weather image wrt weather main value
const weatherImgIlus = {
  Rain: "images/rainIlus.svg",
  Thunderstorm: "images/strom.svg",
  Drizzle: "images/rain.svg",
  Snow: "images/snow.svg",
  Clear: "images/clearSky.svg",
  Clouds: "images/cloud.svg",
  //Mist
  //Smoke
  //Haze
  //Dust
  //Fog
  //Sand
  //Ash
  //Squall
  Tornado: "images/tornado.svg",
};

//change background color and image wrt time
const body = document.querySelector("body");

const container = document.getElementById("weatherDetails");
const bgImg = {
  morning: {
    imgM: "images/bg.jpg",
    colrM: "linear-gradient(to bottom, #b9d1eea2 35%, #b2e2e9c2 70%)",
  },
  dawn: {
    imgDa: "images/sunrise.jpg",
    colrDa:
      "linear-gradient(to bottom, rgba(47, 71, 101,.2) 39%, rgba(236, 177, 121,.3) 80%)",
  },
  dusk: {
    imgDu: "images/sunset.jpg",
    colrDu:
      "linear-gradient(to bottom, rgba(0, 102, 220,.2) 30%, rgba(220, 154, 228,.2) 60%)",
  },
  night: {
    imgN: "images/night.jpg",
    colrN:
      "linear-gradient(to top, rgba(105, 110, 114,.7) 39%, rgba(188, 179, 169,.5) 70%)",
  },
};

const {
  morning: { imgM, colrM },
  dawn: { imgDa, colrDa },
  dusk: { imgDu, colrDu },
  night: { imgN, colrN },
} = bgImg;

const bgProp = "no-repeat center center/cover";

if (hours >= 5 && hours <= 7) {
  //dawn
  body.style.background = `url(${imgDa}) ${bgProp}`;
  container.style.background = `${colrDa}`;
} else if (hours > 7 && hours < 18) {
  //day
  body.style.background = `url(${imgM}) ${bgProp}`;
  container.style.background = `${colrM}`;
} else if (hours > 17 && hours < 20) {
  //dusk
  body.style.background = `url(${imgDu}) ${bgProp}`;
  container.style.background = `${colrDu}`;
} else {
  //night
  body.style.background = `url(${imgN}) ${bgProp}`;
  container.style.background = `${colrN}`;
}
