import API from "./services/api.js";
import UI from "./UI/UI.js";

window.addEventListener("DOMContentLoaded", () => {
  // Getting geolocation from Google API
  const searchCity = document.querySelector("[data-search-city]");
  const searchBox = new google.maps.places.SearchBox(searchCity);

  searchBox.addListener("places_changed", () => {
    const place = searchBox.getPlaces()[0];
    if (place == null) return;

    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    console.log(place);
    API.getWeather(latitude, longitude);
    UI.setDate();
    UI.setAddress(place.formatted_address);
  });
});
