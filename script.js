const weatherData = {
  delhi: {
    current: { temp: "25°C", condition: "Cloudy" },
    tomorrow: { temp: "27°C", condition: "Sunny" },
    dayAfter: { temp: "24°C", condition: "Rainy" }
  },
  hyderabad: {
    current: { temp: "28°C", condition: "Sunny" },
    tomorrow: { temp: "30°C", condition: "Cloudy" },
    dayAfter: { temp: "26°C", condition: "Rainy" }
  },
  mumbai: {
    current: { temp: "29°C", condition: "Rainy" },
    tomorrow: { temp: "31°C", condition: "Cloudy" },
    dayAfter: { temp: "32°C", condition: "Sunny" }
  },
  chennai: {
    current: { temp: "32°C", condition: "Sunny" },
    tomorrow: { temp: "33°C", condition: "Sunny" },
    dayAfter: { temp: "31°C", condition: "Cloudy" }
  },
  bangalore: {
    current: { temp: "22°C", condition: "Cloudy" },
    tomorrow: { temp: "23°C", condition: "Rainy" },
    dayAfter: { temp: "24°C", condition: "Sunny" }
  }
};

function getWeather() {
  const city = document.getElementById("cityInput").value.toLowerCase().trim();
  const display = document.getElementById("weatherDisplay");
  const currentDiv = document.getElementById("currentWeather");
  const tomorrowDiv = document.getElementById("tomorrowWeather");
  const dayAfterDiv = document.getElementById("dayAfterWeather");

  if (weatherData[city]) {
    const cityData = weatherData[city];
    display.style.display = "block";

    currentDiv.innerHTML = `<h2>${city.toUpperCase()}</h2>
      <h3>${cityData.current.temp}</h3>
      <p>${cityData.current.condition}</p>`;

    tomorrowDiv.innerHTML = `<h3>Tomorrow</h3>
      <p>${cityData.tomorrow.temp}</p>
      <p>${cityData.tomorrow.condition}</p>`;

    dayAfterDiv.innerHTML = `<h3>Day After</h3>
      <p>${cityData.dayAfter.temp}</p>
      <p>${cityData.dayAfter.condition}</p>`;
  } else {
    display.style.display = "block";
    currentDiv.innerHTML = `<h2>${city.toUpperCase()}</h2><p>❌ Data not available</p>`;
    tomorrowDiv.innerHTML = "";
    dayAfterDiv.innerHTML = "";
  }
}

