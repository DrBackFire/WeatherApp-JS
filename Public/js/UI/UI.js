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
    const toC = temp.temp - 273.15;
    console.log(toC);
    document.querySelector(".temp").textContent = `${Math.floor(toC)}°c`;
  }

  static setHi_low(temp) {
    const toC_min = temp.temp_min - 273.15;
    const toC_max = temp.temp_max - 273.15;
    document.querySelector(".hi-low").textContent = `
    ${Math.floor(toC_min)} °c / 
    ${Math.floor(toC_max)} °c
    `;
  }

  static setCurrent(weather) {
    document.querySelector(".weather").textContent = weather;
  }

  static error(err) {
    swal("Something Went Wrong!", `${err}`, "error");
  }
}
