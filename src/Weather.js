import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function showTemperature(response) {
    console.log(response.data);
  }

  const apiKey = "50c2acd53349fabd54f52b93c8650d37";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);

  return (
    <div className="Weather p-4">
      <form className="mb-2">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />{" "}
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Tuesday 20:00</li>
        <li>Clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="party cloudy"
          />
          <span className="temperature"> 7</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:70%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
