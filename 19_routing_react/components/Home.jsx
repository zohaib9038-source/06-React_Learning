import React from "react";
import React from "react";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import CountriesCard from "./countriesCard";
import { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <main>
      <SearchFilter setFilter={setFilter} setCountry={setCountry} />
      <CountriesCard filter={filter} country={country} />
    </main>
  );
}
