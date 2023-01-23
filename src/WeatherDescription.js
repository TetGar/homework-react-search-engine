import React from "react";
import CorrectDay from "./CorrectDay";
import WeatherIcon from "./WeatherIcon";
import ConvertTemperature from "./ConvertTemperature";

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
          <div className="d-flex">
            <div className="WeatherIcon">
              <WeatherIcon code={props.data.icon} size={55} />
            </div>
            <div>
              {" "}
              <ConvertTemperature celsius={props.data.temperature} />
            </div>
          </div>
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
