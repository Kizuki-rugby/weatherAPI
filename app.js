const access_key = "c16cd0d608ce7d0c8302c50430918068";
const form = document.querySelector('form');
const locationInput = document.querySelector('input[type=text]');
const temperatureElement = document.querySelector('.degree');
const descriptionElement = document.querySelector('.forecast');
const locationElement = document.querySelector('.location');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = locationInput.value;
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.current.temperature;
      const description = data.current.weather_descriptions[0];
      const windSpeed = data.current.wind_speed;
      temperatureElement.textContent = `${temperature}°C`;
      descriptionElement.textContent = description;
      locationElement.textContent = `Current weather in ${location}:`;
      console.log(temperature);
    })
    .catch(error => console.log('error', error));
});
