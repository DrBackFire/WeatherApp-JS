export default class UI {
  static setAddress(place) {
    document.querySelector(".city").textContent = place;
  }

  static setDate() {
    const date = new Date();
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dateTimeFormat.formatToParts(date);

    document.querySelector(".date").textContent = `${day} ${month} ${year}`;
  }

  static setTemp(temp) {
    const toC = (temp.temp - 32) * (5 / 9);
    console.log(toC);
    document.querySelector(".temp").textContent = `${Math.floor(toC)}°c`;
  }

  static setHi_low(temp) {
    const toC_min = (temp.temp_min - 32) * (5 / 9)
    const toC_max = (temp.temp_man - 32) * (5 / 9)
    document.querySelector(".hi-low").textContent = `
    ${temp.temp_min} °F / 
    ${temp.temp_max} °F
    `;
  }

  static setCurrent(weather) {
    document.querySelector(".weather").textContent = weather;
    console.log(weather);
  }
}
