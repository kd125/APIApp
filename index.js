const getWeather = () => {
  const city = document.getElementById("city-input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f10265ad8eb5cb3fb062771b2c175276`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayWeather(data);
    });
};

const displayWeather = (weather) => {
  let tempDisplay = document.getElementById("temperature");
  let descriptionDisplay = document.getElementById("description");
  tempDisplay.innerHTML = weather.main.temp;
  descriptionDisplay.innerHTML = weather.weather[0].description;
};
