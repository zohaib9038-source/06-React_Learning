import React, { useContext, useState } from "react";
import { CountCartContext } from "./CountCartContext";
export default function ProductItem({ name, id, price, data }) {
  const { cartArr, setCartArr } = useContext(CountCartContext);

  function updateArr(data){
    if(cartArr.length>0){
     let results=cartArr.filter((obj)=>(obj.id!=data.id));
      setCartArr([...results,data]);
      console.log(cartArr)
    }else{
      setCartArr((prev) => [...prev, data]);
    }
   
  }
  
  return (
    <div className="carditem">
      <h3>{name}</h3>
      <p>{price}</p>
      <button
        onClick={(e) => {
          
          updateArr(data);
        }}
        id={id}
      >
        Add to cart
      </button>
    </div>
  );
}