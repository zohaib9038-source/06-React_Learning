import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
export default function App() {
  const [IsDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("theme")),
  );
  return (
    <>
      {/* best way for header here */}
      <Header theme={[IsDark, setIsDark]} />
      <Outlet context={[IsDark, setIsDark]} />
    </>
  );
}
