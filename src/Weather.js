import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CorrectDay from "./CorrectDay";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ run: false });

  function showTemperature(response) {
    setWeatherInfo({
      run: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,

      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherInfo.run) {
    return (
      <div className="Weather p-4">
        <form className="mb-2">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />{" "}
            </div>
          </div>
        </form>
        <h1>{weatherInfo.city}</h1>
        <ul>
          <li>
            <CorrectDay date={weatherInfo.date} />
          </li>
          <li className="text-capitalize">{weatherInfo.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="party cloudy"
            />
            <span className="temperature"> {weatherInfo.temperature}</span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherInfo.humidity}%</li>
              <li>Wind: {weatherInfo.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);

    return "Loading...";
  }
}
