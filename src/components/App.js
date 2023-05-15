/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import forecastData from "../data/forecast.json";
import ForecastSummary from "./ForecastSummary";

function App() {
  const { location, forecasts } = forecastData;
  return (
    <div className="App">
      <LocationDetails country={location.country} city={location.city} />
      {forecasts.map((forecast, index) => (
        <ForecastSummary
          // eslint-disable-next-line react/no-array-index-key
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

export default App;
