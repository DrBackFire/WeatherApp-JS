import { geoLocation, getWeather } from "./services/api.js";

class UI {
  static printData(weatherParams) {
    const Div = document.getElementById("content");

    Div.innerHTML = `
        <h3>${weatherParams.lat}</h3>
        <h3>${weatherParams.lng}</h3>
    `;
  }
}

class API {
  static getGeo() {
    // Getting geolocation from Google API
    geoLocation("germany").then((response) => {
      console.log(response.data.results[0]);

      const weatherParams = response.data.results[0].geometry.location;

      UI.printData(weatherParams);

      // Sending geometry to the weather api
      this.weather(weatherParams);
    });
  }

  static weather(weatherParams) {
    getWeather(weatherParams.lat, weatherParams.lng).then((response) => {
      console.log(response.data);
    });
  }
}

API.getGeo();

// getWeather().then((response) => {
//   console.log(response.data);
// });
