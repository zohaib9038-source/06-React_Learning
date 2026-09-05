import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import ShimmerEffect from "./ShimmerEffect";
export default function ProductCard({ product, filter }) {
  console.log(filter);
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((product) => {
        setProduct(product.products);
      });
  }, []);

  if (Product.length == 0) {
    return <ShimmerEffect />;
  }

  return (
    <>
      <div className="product">
        {filter
          ? Product.filter((data) => {
              return data.brand?.toLowerCase().includes(filter);
            }).map((product, index) => {
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
                  data={product}
                />
              );
            })
          : Product.filter((data) => {
              return data.title.toLowerCase().includes(product);
            }).map((product, index) => {
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
                  data={product}
                />
              );
            })}
      </div>
    </>
  );
}
