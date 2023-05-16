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
          icon={forecast.icon}
          description={forecast.description}
          maxTemp={forecast.temperature.max}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
