import React from "react";
import "./ShimmerCss.css";
export default function ShimmerEffect() {
  return (
    <>
      <div className="countries">
        {Array.from({ length: 10 }).map((ele, i) => {
          return <div key={i} className="countryContent shimmercss"></div>;
        })}
      </div>
    </>
  );
}
