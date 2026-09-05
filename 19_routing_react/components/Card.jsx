import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
export default function Card({
  rating,
  brand = "no",
  img,
  stock,
  title,
  price,
  id,
}) {
  return (
    <>
      <div className="countryContent">
        <Link to={`/product/id=${id}`}>
          <img src={img} alt="" />
        </Link>
        <div className="productDetails">
          <div className="priceTitle">
            <h5>{title}</h5>
            <p>
              <span>$:{price}</span>
            </p>
          </div>
          <div className="ratingStock">
            <p>
              <span>rating: </span>
              <span>{rating}</span>
            </p>
            <p>
              <span>stock: </span>
              <span>{stock}</span>
            </p>
          </div>

          <p>
            <span>brand: </span>
            <span>{brand}</span>
          </p>
        </div>
        <button>Add to card</button>
      </div>
    </>
  );
}
