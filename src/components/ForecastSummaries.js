/* eslint-disable react/no-array-index-key */
import React from "react";
import ForecastSummary from "./ForecastSummary";
import forecastData from "../data/forecast.json";

function ForecastSummaries() {
  const { forecasts } = forecastData;
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast, index) => (
        <ForecastSummary
          key={index}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          maxTemp={forecast.temperature.max}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
