import React from "react";

interface Props {
  country: String;
  city: String;
}
function LocationDetails({ country, city }: Props) {
  return (
    <h1 className="location-details">
      {city}, {country}
    </h1>
  );
}

export default LocationDetails;
