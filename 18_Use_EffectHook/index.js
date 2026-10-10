import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./app.css";
let root = createRoot(document.querySelector("#root"));
root.render(<App />);
