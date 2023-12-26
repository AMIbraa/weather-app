import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import cloud from "../Assets/cloud.png";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";

const WeatherApp = () => {
  let api_key = "7a151f651d9b473fb3e22203231411";

  const search = async () => {
    const element = document.getElementsByClassName("__inputCity");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${element[0].value}&units=Metric`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("__weather-temp");
    const location = document.getElementsByClassName("__weather-loc");

    humidity[0].innerHTML = data.current.humidity + " %";
    wind[0].innerHTML = data.current.wind_kph + " km/h";
    temperature[0].innerHTML = data.current.temp_c + "°C";
    location[0].innerHTML = data.location.name;

    // if (data.condition[0].icon) {
    // }
  };

  return (
    <div className="container">
      <div className="__top-bar">
        <input type="text" className="__inputCity" placeholder="Search" />
        <div
          className="__search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="__weather-img">
        <img src={cloud} alt="" />
      </div>
      <div className="__weather-temp">28 °C</div>
      <div className="__weather-loc">London</div>
      <div className="__data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">50 %</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">20 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
