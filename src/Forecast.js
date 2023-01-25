import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  const [run, setRun] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setRun(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setRun(true);
    console.log(response.data.daily);
  }

  if (run) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyTemperature, index) {
            if (index < 5) {
              return (
                <div className="col">
                  {" "}
                  <DailyForecast data={forecast[index]} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
}
