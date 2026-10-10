// useEffect Api is related to producs but our projects related to country that is why we need to handle this project related to API

import React, { useEffect, useState } from "react";
import Card from "./Card";
import countriesdata from "../Countriesdata";
export default function CountriesCard({ country, filter }) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("hy");
        setCountries(data.products);
      });
  }, []);
  {
    console.log(countries);
    console.log(countriesdata);
  }

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counting
      </button>
      <div className="countries">
        {filter
          ? countriesdata
              .filter((data) => {
                return data.region.toLowerCase().includes(filter);
              })
              .map((country, index) => {
                return (
                  <Card
                    region={country.region}
                    population={country.population}
                    flags={country.flags.png}
                    name={country.name.common}
                    capital={country.capital?.[0]}
                    key={index}
                  />
                );
              })
          : countriesdata
              .filter((data) => {
                return data.name.common.toLowerCase().includes(country);
              })
              .map((country, index) => {
                return (
                  <Card
                    region={country.region}
                    population={country.population}
                    flags={country.flags.png}
                    name={country.name.common}
                    capital={country.capital?.[0]}
                    key={index}
                  />
                );
              })}
      </div>
    </>
  );
}
