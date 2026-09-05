import React from "react";

export default function Search({ setCountry, setFilter }) {
  return (
    <div className="searchByCountry">
      <span className="material-symbols-outlined"> search </span>
      <input
        onChange={(e) => {
          setCountry(e.target.value.toLowerCase());
          setFilter("");
        }}
        type="text"
        placeholder="Seach by product"
      />
    </div>
  );
}
