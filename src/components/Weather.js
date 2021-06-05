import React from "react";
import "./Weather.css";

function Weather(props) {
  return (
    <div className="weather__data">
      <h1 className="weather__temp">{props.data?.main?.temp} Degree celcius</h1>
      <h5 className="weather__city">{props.data?.name}, India</h5>
    </div>
  );
}

export default Weather;
