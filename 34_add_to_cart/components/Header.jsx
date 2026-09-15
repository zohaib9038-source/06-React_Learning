import React, { useContext } from "react";
import { CountCartContext } from "./CountCartContext";
import { Link } from "react-router-dom";
export default function Header() {
  const{cartArr,setCartArr}=useContext(CountCartContext);
  return (
    <header>
      <div>
        <i className="fa-solid fa-cart-shopping"></i>
        My Shop
      </div>
      <div className="cart">
        <a href="">Home</a>
        <Link to={`/details`}>cart{cartArr.length > 0 ? "(" + cartArr.length + ")" : ""}</Link>
      </div>
    </header>
  );
}
