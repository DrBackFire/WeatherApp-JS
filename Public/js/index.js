axios
  .get("https://maps.googleapis.com/maps/api/geocode/json", {
    params: {
      address: "brisbane",
      key: "AIzaSyDKbB8UU_VvM-PffHsAmP8lwMSKE3ZiHm8",
    },
  })
  .then((response) => {
    console.log(response.data);
  });

axios({
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "fbd685c5aamsh8b1d93568dc8c70p17fb7cjsn13fbdb1a870d",
    useQueryString: true,
  },
  params: {
    lat: "-27.4697707",
    lon: "153.0251235",
    units: "%22metric%22 or %22imperial%22",
    mode: "xml%2C html",
  },
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
