import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
    celsius: 7,
    humidity: 45,
    wind: 4,
  };
  return (
    <div className="Weather">
      <h2>{weatherData.city}</h2>
      <div className="row">
        <div className="col-4 current-temperature">
          <p>
            <span className="temp">{weatherData.celsius}</span>
            <span className="unit">°C|°F</span>
          </p>
        </div>
        <div className="col-4 current-weather-icon">
          <img src={weatherData.imgUrl} />
        </div>
        <div className="col-4 current-weather-info">
          <ul>
            <li>{weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}