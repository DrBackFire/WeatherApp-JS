import "regenerator-runtime/runtime"; // For WebPack
import API from "./services/api.js";
import UI from "./UI/UI.js";

window.addEventListener("DOMContentLoaded", () => {
  // Getting geolocation from Google API
  const searchCity = document.querySelector("[data-search-city]"); // Getting the search box
  const searchBox = new google.maps.places.SearchBox(searchCity);

  searchBox.addListener("places_changed", () => {
    const place = searchBox.getPlaces()[0];
    if (place == null) return; // If place not found

    // Getting geocode
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    console.log(place);
    // Passing geocode to API
    API.getWeather(latitude, longitude);
    // Setting current date
    UI.setDate();
    // Printing address
    UI.setAddress(place.formatted_address);
  });
});
