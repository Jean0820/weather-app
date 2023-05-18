import React from "react";
import "../styles/App.css";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  const { date, icon, temperature, description, onSelect } = props;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button
        className="more-details-button"
        type="button"
        onClick={() => {
          onSelect(date);
        }}
      >
        More details
      </button>
    </div>
  );
};

export default ForecastSummary;
