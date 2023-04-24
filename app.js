const access_key = "c16cd0d608ce7d0c8302c50430918068";
const form = document.querySelector('form');
const locationInput = document.querySelector('input[type=text]');
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.degree');
const descriptionElement = document.querySelector('.forecast');
const weatherInfo = document.querySelector('.weather-info');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = locationInput.value;
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.current.temperature;
      const description = data.current.weather_descriptions[0];
      const windSpeed = data.current.wind_speed;
      locationElement.innerHTML = `Current weather in ${location}:`;
      temperatureElement.innerHTML = `${temperature}°C`;
      descriptionElement.innerHTML = description;
      weatherInfo.innerHTML = `Wind speed: ${windSpeed} km/h`;
    })
    .catch(error => console.log('error', error));
});
