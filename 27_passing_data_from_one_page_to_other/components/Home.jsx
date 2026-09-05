import React from "react";
import React from "react";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <main>
      <SearchFilter setFilter={setFilter} setProduct={setProduct} />
      <ProductCard filter={filter} product={product} />
    </main>
  );
}
