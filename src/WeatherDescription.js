import React from "react";
import CorrectDay from "./CorrectDay";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <CorrectDay date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="party cloudy"
          />
          <span className="temperature"> {props.data.temperature}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
