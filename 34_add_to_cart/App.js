import React, { useState } from "react";
import Header from "./components/Header";
import "./app.css";
import Products from "./components/Products";
import { Outlet } from "react-router-dom";
import { CountCartContext } from "./components/CountCartContext";
export default function App() {
  const [cartArr, setCartArr] = useState([]);
  return (
    <CountCartContext.Provider value={{ cartArr, setCartArr }}>
      <Header />
      <Outlet />
    </CountCartContext.Provider>
  );
  // return <Header />;
}