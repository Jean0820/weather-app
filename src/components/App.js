/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import forecastData from "../data/forecast.json";

function App() {
  const { location } = forecastData;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails country={location.country} city={location.city} />
    </div>
  );
}

export default App;
