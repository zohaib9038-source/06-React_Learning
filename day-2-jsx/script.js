// let h2 = <h2>Hello jsx </h2>;

// let root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h2);

import React from "react";
import ReactDOM from "react-dom/client";

let obj = {
  name: "zohaib",
};

let div = (
  <div>
    <h1>hello {obj.name}</h1>
    <p>first para</p>
    <button>Click on me</button>
  </div>
);
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);

console.log(div);
