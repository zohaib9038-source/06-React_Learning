import Button from "./Button";

const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url)
  .href;
const RightArrow = new URL("../assets/images/right-arrow.png", import.meta.url)
  .href;
import Basket from "./Basket";
let totalAppl = 10;
let rigthApple = 0;
let leftApple = totalAppl - rigthApple;
import React, { useState } from "react";
import CouterState from "./CouterState";

import renderApp from "../index";
const AppleCounter = ({ onClick }) => {
  let totalApple = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalApple - rightAppleCount,
  );
  const LeftclickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
      console.log(rightAppleCount, leftAppleCount);
    }
  };
  const RightclickHandler = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount - 1);
      setRightAppleCount(rightAppleCount + 1);
      console.log(rightAppleCount, leftAppleCount);
    }
  };
  return (
    <>
      <CouterState style={{ textAlign: "center" }} />
      <div className="appleContainer">
        <Basket no_off_apples={leftAppleCount} basket_number={1} />
        <Button
          imgurl={LeftArrow}
          title="LeftArrow"
          clickHandler={LeftclickHandler}
        />
        <Button
          imgurl={RightArrow}
          title="RightArrow"
          clickHandler={RightclickHandler}
        />
        <Basket no_off_apples={rightAppleCount} basket_number="2" />
      </div>
    </>
  );
};

export default AppleCounter;
