import React from "react";
import Filter from "./Filter";
import Search from "./Search";

export default function SearchFilter({ setCountry, setFilter }) {
  return (
    <div className="seachingSection">
      <Search setFilter={setFilter} setCountry={setCountry} />
      <Filter setFilter={setFilter} />
    </div>
  );
}
