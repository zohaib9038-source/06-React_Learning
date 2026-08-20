import React from "react";
import { useState } from "react";
export default function DependentDrop() {
  const [countrymode, setCountryMode] = useState("");
  const [city, setCity] = useState("");
  function setCountry(e) {
    setCountryMode(e.target.value);
    setCity("");
    // console.log(e.target.value);
  }
  function setSelectedCity(e) {
    setCity(e.target.value);
  }
  console.log(countrymode, city);
  const countryCity = {
    Pakistan: ["Islamabad", "Karachi", "Lahore"],
    USA: ["New York", "Los Angeles", "chicago"],
    Germany: ["Berlin", "Munich", "Hamburg"],
  };

  return (
    <>
      <select value={countrymode} onChange={setCountry}>
        <option value="">...select below...</option>
        {Object.keys(countryCity).map((country) => {
          return (
            <option key={country} value={country}>
              {country}
            </option>
          );
        })}
      </select>

      {countrymode && (
        <select value={city} onChange={setSelectedCity}>
          <option value="">...select city...</option>
          {countryCity[countrymode].map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}
