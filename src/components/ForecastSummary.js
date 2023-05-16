import React from "react";
import "../styles/App.css";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

interface Props {
  date: String;
  description: String;
  icon: String;
  temperature: Int16Array;
}
function ForecastSummary({ date, description, icon, temperature }: Props) {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">{temperature} &deg;C</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

export default ForecastSummary;
