import React from "react";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import CountriesCard from "./components/countriesCard";
import { useState } from "react";
export default function App() {
  const [country, setCountry] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />
      <main>
        <SearchFilter setFilter={setFilter} setCountry={setCountry} />
        <CountriesCard filter={filter} country={country} />
      </main>
    </>
  );
}
