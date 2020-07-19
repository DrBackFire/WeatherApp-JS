// Getting geolocation from Google API
export const geoLocation = async (location) => {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: location,
          key: "AIzaSyDKbB8UU_VvM-PffHsAmP8lwMSKE3ZiHm8",
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: lon,
          appid: "196b509ce7a99dc59e9e53fdae7d60ca",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
