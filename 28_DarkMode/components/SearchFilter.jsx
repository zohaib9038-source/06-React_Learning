import React from "react";
import Filter from "./Filter";
import Search from "./Search";

export default function SearchFilter({ setProduct, setFilter }) {
  return (
    <div className="seachingSection">
      <Search setFilter={setFilter} setProduct={setProduct} />
      <Filter setFilter={setFilter} />
    </div>
  );
}
