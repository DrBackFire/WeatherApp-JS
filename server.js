const express = require("express");
const axios = require("axios");
require("dotenv/config");

const app = express();

// Getting data from HTML form
app.use(express.json());

// Static folder
app.use(express.static("public"));

// Handling post req to get data from weather api
app.post("/weather", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: req.body.lat, // from front end post req
          lon: req.body.lon,
          appid: process.env.appid, // From .env file
        },
      }
    );
    return res.json(response.data); // Sending down data to Frontend
  } catch (error) {
    return error;
  }
});

// Setting a Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
