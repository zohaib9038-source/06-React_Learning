import React from "react";
import React from "react";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";

export default function Home() {
  const [product, setProduct] = useState("");
  const [filter, setFilter] = useState("");
  const [IsDark] = useOutletContext();

  return (
    <main className={IsDark ? "dark" : ""}>
      <SearchFilter setFilter={setFilter} setProduct={setProduct} />
      <ProductCard filter={filter} product={product} />
    </main>
  );
}
