import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = [
    { id: 1, p_name: "laptop", price: 4000 ,qty:'1'},
    { id: 2, p_name: "Iphone", price: 6000 ,qty:'1'},
    { id: 3, p_name: "Keyboard", price: 7000,qty:'1'},
    { id: 4, p_name: "Headphone", price: 8000,qty:'1'},
  ];
  
 
  return (
    <div className="cardContainer">
      {products.map((prod) => {
        return (
          <ProductItem
            key={prod.id}
            id={prod.id}
            name={prod.p_name}
            price={prod.price}
            data={prod}
          
          />
        );
      })}
    </div>
  );
}