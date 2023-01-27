import React from "react";

export default function ConvertTemperature(props) {
  return (
    <div className="ConvertTemperature ">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
