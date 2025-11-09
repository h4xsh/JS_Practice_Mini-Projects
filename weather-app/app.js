const apiKey = "60bb8c71be7e3b2a1b185c05e9ad7ec3";
const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherInfo = document.querySelector(".weather-info");

button.addEventListener("click", getWeather);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather();
});

async function getWeather() {
  const city = input.value.trim();
  if (city === "") {
    weatherInfo.classList.remove("hidden");
    weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;

    weatherInfo.classList.remove("hidden");
    weatherInfo.innerHTML = `
      <p><strong>${city.toUpperCase()}</strong></p>
      <p>Temperature: ${temperature}°C</p>
      <p>Feels like: ${feelsLike}°C</p>
      <p>Humidity: ${humidity}%</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    `;
  } catch (error) {
    weatherInfo.classList.remove("hidden");
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
  }
}
