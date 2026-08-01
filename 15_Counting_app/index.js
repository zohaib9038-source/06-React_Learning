import { createRoot } from "react-dom/client";
import App from "./app";
import "./css/style.css";
let root = createRoot(document.querySelector("#root"));

root.render(<App />);
