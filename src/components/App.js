/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState('');

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const getForecast = (setSelectedDate, setForecasts, setLocation) => {
    const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";
  
    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  };
  return (
    <div className="weather-app">
      <LocationDetails country={location.country} city={location.city} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
