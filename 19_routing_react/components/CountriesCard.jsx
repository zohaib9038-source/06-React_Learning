import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import ShimmerEffect from "./ShimmerEffect";
export default function CountriesCard({ country, filter }) {
  console.log(filter);

  const [countriesdata, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((product) => {
        setCountriesData(product.products);
      });
  }, []);

  if (countriesdata.length == 0) {
    return <ShimmerEffect />;
  }

  return (
    <>
      <div className="countries">
        {filter
          ? countriesdata
              .filter((data) => {
                return data.brand?.toLowerCase().includes(filter);
              })
              .map((product, index) => {
                return (
                  <Card
                    title={product.title}
                    price={product.price}
                    img={product.images[0]}
                    rating={product.rating}
                    brand={product.brand}
                    stock={product.stock}
                    key={product.id}
                    id={product.id}
                  />
                );
              })
          : countriesdata
              .filter((data) => {
                return data.title.toLowerCase().includes(country);
              })
              .map((product, index) => {
                return (
                  <Card
                    title={product.title}
                    price={product.price}
                    img={product.images[0]}
                    rating={product.rating}
                    brand={product.brand}
                    stock={product.stock}
                    key={product.id}
                    id={product.id}
                  />
                );
              })}
      </div>
    </>
  );
}
