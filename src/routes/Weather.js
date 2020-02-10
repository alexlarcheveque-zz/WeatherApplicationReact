import React from "react";
import "./Weather.css";

function Weather(props) {
  function convertToFaren(temp) {
    return ((temp - 273.15) * (9 / 5) + 32).toFixed(2);
  }

  return (
    <div>
      <h1 class="card-title"> {props.city} </h1>
      <p class="card-text">
        Temperature: {convertToFaren(props.mainTemp)} <span>&#8457;</span>
      </p>
      <p class="card-text">
        Feels Like: {convertToFaren(props.feelsLike)} <span>&#8457;</span>
      </p>
      <p class="card-text">Weather: {props.weather}</p>
    </div>
  );
}

export default Weather;
