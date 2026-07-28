// import { user } from "./data.js";
import { createRoot } from "react-dom/client";
const h1 = <h1>Hello world</h1>;
let root = createRoot(document.querySelector("#root"));
root.render(h1);
console.log("hellow");
