import React from "react";
import moment from "moment";

const ForecastDetails = (props) => {
  const { forecast } = props;
  return (
    <div className="forecast-details">
      <div className="forecast-detail date">
        <h3>{moment(forecast.date).format("ddd Do MMM")}</h3>
      </div>
      <div className="forecast-detail">
        <b>Max Temperature:</b> {forecast.temperature.max} &deg;C
      </div>
      <div className="forecast-detail">
        <b>Min Temperature:</b> {forecast.temperature.min} &deg;C
      </div>
      <div className="forecast-detail">
        <b>Humidity:</b> {forecast.humidity} %
      </div>
      <div className="forecast-detail">
        <b>Wind:</b> {forecast.wind.speed}mph {forecast.wind.direction}
      </div>
    </div>
  );
};

export default ForecastDetails;
