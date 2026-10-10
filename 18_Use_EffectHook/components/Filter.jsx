import React from "react";

export default function Filter({ setFilter }) {
  return (
    <div className="searchByRegion">
      <form action="">
        <select
          name=""
          id=""
          onChange={(e) => {
            setFilter(e.target.value.toLowerCase());
            // console.log(e.target.value);
          }}
        >
          <option value="Filter by region">Filter By region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
      </form>
    </div>
  );
}
