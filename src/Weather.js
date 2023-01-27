import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDescription from "./WeatherDescription";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ run: false });
  const [city, setCity] = useState(props.cityChange);

  function showTemperature(response) {
    setWeatherInfo({
      run: true,
      coords: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function update() {
    const apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    update();
  }

  function handleClick(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.run) {
    return (
      <div className="Weather p-4">
        <form className="mb-2" onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleClick}
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                className="btn btn-primary  w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherDescription data={weatherInfo} />
        <Forecast coords={weatherInfo.coords} />
      </div>
    );
  } else {
    update();
    return "Loading...";
  }
}
