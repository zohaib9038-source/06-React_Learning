import React from "react";

export default function Search({ setProduct, setFilter }) {
  return (
    <div className="searchByCountry">
      <span className="material-symbols-outlined"> search </span>
      <input
        onChange={(e) => {
          setProduct(e.target.value.toLowerCase());
          setFilter("");
        }}
        type="text"
        placeholder="Seach by product"
      />
    </div>
  );
}
