import React from "react";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      {/* best way for header here */}
      <Header />
      <Outlet />
    </>
  );
}
