import React from "react";

interface Props {
  country: string;
  city: string;
}

function LocationDetails({ country, city }: Props) {
  return (
    <div>
      {country},{city}
    </div>
  );
}

export default LocationDetails;
