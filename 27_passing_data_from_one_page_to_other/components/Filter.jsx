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
          <option value="Filter by region">Filter By brand</option>
          <option value="Gucci">Gucci</option>
          <option value="Chanel">Chanel</option>
          <option value="Dolce & Gabbana">Dolce & Gabbana</option>
        </select>
      </form>
    </div>
  );
}
