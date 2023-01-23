import React from "react";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function minTemperature() {
    return Math.round(props.data.temp.max);
  }

  function maxTemperature() {
    return Math.round(props.data.temp.min);
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="DailyForecast">
      <div className="col text-center">
        <div className="Forecast-day"> {day()} </div>
        <div className="Forecast-icon ">
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
        </div>
        <div className="Forecast-temperature">
          <span className="temp-max ">{maxTemperature()}° </span>{" "}
          <span className="temp-min">{minTemperature()}° </span>{" "}
        </div>
      </div>
    </div>
  );
}
