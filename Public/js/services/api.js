// Getting geolocation from Google API
import UI from "../UI/UI.js";

export default class API {
  static async getWeather(lat, lon) {
    const response = await axios({
      method: "post",
      url: "/weather",
      data: {
        lat,
        lon,
      },
    });
    this.setWeather(response.data.weather[0]);
    this.setTemp(response.data.main);
    this.setHi_low(response.data.main);
    console.log(response.data);
  }
  catch(error) {
    UI.error(error);
  }

  static setWeather(data) {
    UI.setCurrent(data.main);
  }

  static setTemp(temp) {
    UI.setTemp(temp);
  }

  static setHi_low(temp) {
    UI.setHi_low(temp);
  }
}
