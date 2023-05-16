import React from "react";

interface Props {
  date: String;
  description: String;
  icon: String;
  maxTemp: Int16Array;
}
function ForecastSummary({ date, description, icon, maxTemp }: Props) {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__temperature">{icon}</div>
      <div className="forecast-summary__description">{maxTemp} &deg;C</div>
      <div className="forecast-summary__icon">{description}</div>
    </div>
  );
}

export default ForecastSummary;
