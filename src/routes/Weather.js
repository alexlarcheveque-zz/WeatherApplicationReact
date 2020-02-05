import React from "react";

function Weather(props) {
  function convertToFaren(temp) {
    return ((temp - 273.15) * (9 / 5) + 32).toFixed(2);
  }

  return (
    <div>
      <h1 class="display-3"> {props.city} </h1>
      <p>
        {" "}
        Temperature: {convertToFaren(props.mainTemp)} <span>&#8457;</span>
      </p>
      <p>
        {" "}
        Feels Like: {convertToFaren(props.feelsLike)} <span>&#8457;</span>
      </p>
      <p> Weather: {props.weather} </p>
    </div>
  );
}

export default Weather;
