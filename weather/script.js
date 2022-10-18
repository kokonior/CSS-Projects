const form = document.querySelector(".top-section form");
const input = document.querySelector(".top-section input");
const temp = document.querySelector(".temp");
const max = document.querySelector(".max");
const min = document.querySelector(".min");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
const background = document.querySelector(".background");

const apiKey = "YourApiKey";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  inputVal = inputVal.toUpperCase();

  //ajax

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, sys } = data;
      console.log(data);
      city.textContent = `${inputVal}`;
      temp.textContent = `${main.temp}°C`;
      max.textContent = `Max:${main.temp_max}°C`;
      min.textContent = `Min:${main.temp_min}°C`;
      humidity.textContent = `Humidity:${main.humidity}%`;
    });

  max.classList.add("visible");
  min.classList.add("visible");
  temp.classList.add("visible");
  humidity.classList.add("visible");
  background.classList.add("visible");
});
