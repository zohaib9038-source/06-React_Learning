import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

let root = createRoot(document.querySelector("#root"));

function FoodCard(props) {
  const { img, deliveryDate, foodName, ingredients } = props;
  console.log(ingredients);
  return (
    <div className="food_card">
      <div className="img-container">
        <img src={img} alt="img not found" />
        <p>{deliveryDate}</p>
      </div>

      <div className="card_content">
        <div className="order-details">
          <h4>{foodName}</h4>
          <button>
            {" "}
            <a href="./">Order Now</a>
          </button>
        </div>
        <ul className="list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const foodContent = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UGKZv23nhH1TteAOgbbOi53qCV-ChTkRMFl4TlM8jA&s=10",
    deliveryDate: "Food delivery until 10 Aug",
    foodName: "Cherry pineapple Cake",
    ingredients: ["Cream", "sugar", "strawberry", "cherry"],
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeTAKAFnVK0N2Lgo9FeLRuy523vxoL6TO9bhJ3T7wbw&s=10",
    deliveryDate: "Food delivery until 10 Aug",
    foodName: "Cherry chip Cake",
    ingredients: ["Almond", "pistachio", "strawberry", "cherry"],
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0V3HepS4SU-d63NYTpAC9k09xcqYIXvvCcTg4M3wvg&s=10",
    deliveryDate: "Food delivery until 10 Aug",
    foodName: "Cherry almond Cake",
    ingredients: ["Almond", "pistachio", "strawberry", "cherry"],
  },
];

root.render(
  <div className="food-container">
    {foodContent.map((item) => (
      <FoodCard
        key={item.id}
        img={item.img}
        deliveryDate={item.deliveryDate}
        foodName={item.foodName}
        ingredients={item.ingredients}
      />
    ))}
  </div>,
);
