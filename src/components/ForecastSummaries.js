/* eslint-disable react/no-array-index-key */
import React from "react";
import "../styles/App.css";
import ForecastSummary from "./ForecastSummary";
import forecastData from "../data/forecast.json";

function ForecastSummaries({ onForecastSelect }) {
  const { forecasts } = forecastData;
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast, index) => (
        <ForecastSummary
          key={index}
          date={forecast.date}
          icon={forecast.icon}
          description={forecast.description}
          onSelect={onForecastSelect}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
