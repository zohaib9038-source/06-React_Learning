import { createRoot } from "react-dom/client";
import "./style.css";

import { Component } from "react";

const root = createRoot(document.getElementById("root"));

// function Card(title, key, brand, img, price) {
//   return (
//     <div className="card" key={key}>
//       <img src={img} alt="" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{brand}</p>
//         <p>
//           <b>{price}</b>
//         </p>
//       </div>
//     </div>
//   );
// }

// Except the above function we can use object as a parameter because above function we have maintain the order but in object we do not need to maintain order

function Card(props) {
  const { title, img, price, brand } = props;
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>{price}</b>
        </p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    let cardContainer = response.products.map((product) => {
      return (
        <Card
          title={product.title}
          key={product.id}
          brand={product.brand}
          img={product.images[0]}
          price={product.price}
        />
      );
    });
    root.render(<div className="cardContainer">{cardContainer}</div>);
  });

// component in react
// function card2() {
//   return <h1>Hello world</h1>;
// }
