import React from "react";

export default function Card({ name, capital, flags, region, population }) {
  return (
    <div className="countryContent">
      <img src={flags} alt="" />
      <div className="countryInfo">
        <h3>{name}</h3>
        <p>
          <span>Population</span>
          <span>:{population}</span>
        </p>
        <p>
          <span>Region</span> <span>:{region}</span>
        </p>
        <p>
          <span>Capital:</span>
          <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}
