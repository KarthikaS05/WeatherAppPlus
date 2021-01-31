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
  let c = ftoC(currTemp).toFixed(2);
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
  let fah = ctof(currTemp).toFixed(2);
  temp.textContent = `${fah} ℉`;

  fahr.classList.toggle("isDisabled");
  console.log(`Deg to f = ${fah}`);
};

const cel = document.querySelector("#cel");
cel.addEventListener("click", setDegToCel);
const fahr = document.querySelector("#fahr");
fahr.addEventListener("click", setDegToFahr);
