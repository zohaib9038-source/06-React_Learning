import React from "react";
import { useState } from "react";
export default function Dynamicdrop() {
  const countries = ["pakistan", "germany", "switzerland"];
  const [countrymode, setCountryMode] = useState("Switzerland");
  function Onchange(e) {
    setCountryMode(e.target.value);
    console.log(e.target.value);
  }
  return (
    <select value={countrymode} onChange={Onchange}>
      <option value="">...select below...</option>
      {countries.map((country) => {
        return (
          <option key={country} value={country}>
            {country}
          </option>
        );
      })}
    </select>
  );
}
