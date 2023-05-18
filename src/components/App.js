/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import forecastData from "../data/forecast.json";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App() {
  const { location, forecasts } = forecastData;
  const [selectedDate, setSelectedDate] = useState(forecasts[1].date);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <LocationDetails country={location.country} city={location.city} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

export default App;
