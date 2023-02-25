let weatherData = [];

const getWeather = () => {
  fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
  )
    .then((res) => res.json())
    .then((weatherInfo) => (weatherData = weatherInfo));
};
