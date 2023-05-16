/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import forecastData from "../data/forecast.json";

import ForecastSummaries from "./ForecastSummaries";

function App() {
  const { location } = forecastData;
  return (
    <div className="App">
      <LocationDetails country={location.country} city={location.city} />
      <ForecastSummaries />
    </div>
  );
}

export default App;
