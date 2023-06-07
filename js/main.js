//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getWeather);

function getWeather() {
  let apiKey = "9291e0f45d9d4cc3b4e731ebd4f0e3fa";
  let cityName = document.querySelector("input").value.toLocaleLowerCase();
  let units = "imperial";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  fetch(weatherUrl)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let windSpeed = data.wind.speed;
      let city = data.name;
      let humidity = data.main.humidity;
      let temp = Math.round(data.main.temp);
      let weatherCondition = data.weather[0].main.toLocaleLowerCase();
      console.log("heyy");
      document.querySelector(".city").innerText = `${city}`;
      document.querySelector(".humidity").innerText = `${humidity}%`;
      document.querySelector(".wind").innerText = `${windSpeed}m/hr`;
      document.querySelector(".temp").innerText = `${temp}°F`;
      switch (weatherCondition) {
        case "clouds":
          document.querySelector(".weather-icon").src = `img/clouds.png`;
          break;
        case "clear":
          document.querySelector(".weather-icon").src = `img/clear.png`;
          break;
        case "drizzle":
          document.querySelector(".weather-icon").src = `img/drizzle.png`;
          break;
        case "mist":
          document.querySelector(".weather-icon").src = `img/mist.png`;
          break;
        case "snow":
          document.querySelector(".weather-icon").src = `img/snow.png`;
          break;
      }
      document.querySelector(".weather").style.display = "block";
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//older version- this needs you to always input your zipcode to get your geoLocation
// async function getWeather() {
//   let apiKey = '9291e0f45d9d4cc3b4e731ebd4f0e3fa';
//   let zipCode = 53704;
//   let countryCode = 'us';
//   const { lon, lat } = await geoCordFinder(zipCode, countryCode, apiKey);
//   let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
//   fetch(weatherUrl)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//       /*
//       potential type of weahter
//       -sunny
//       -snow
//       - snow
//       - rainy
//       constants
//         -humidity numbers
//       -windy
//         - windy spead= documment.querdata.wind
//       */
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     });
// }

// function geoCordFinder(zipcode, countryCode, key) {
//   let url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode}&appid=${key}`;
//   return fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(obj => {
//       let lon = obj.lon;
//       let lat = obj.lat;

//       return { lon, lat };
//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//       throw err;
//     });
// }

/*
steps to build a weather API 
i need an api key here- 9291e0f45d9d4cc3b4e731ebd4f0e3fa
Open API- open weather 
current weather forcast
- latitude and longitde of location= http://api.openweathermap.org/geo/1.0/zip?zip=53704,us&appid=9291e0f45d9d4cc3b4e731ebd4f0e3fa
once i get the lat and long i use this url  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=imperial

then i will need to get the information based on a certain location 
*/
