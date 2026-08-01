import Increase from "./Increase";
import "../css/style.css";
import { useState } from "react";
import Heading from "./Heading";
const Counter = ({}) => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    if (count >= 10) {
      return;
    } else {
      setCount(count + 1);
    }
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  console.log("render...");
  return (
    <>
      {/* <h2 className="center">{count}</h2> */}
      <div className="appleContainer">
        {count >= 10 && <p>Max reached</p>}
        <Heading textColor={count >= 0 ? "green" : "red"} count={count} />
        <Increase
          disabled={count >= 10}
          clickHandling={Increment}
          Increment="Increment"
        />
        <Increase
          disabled={count <= 0}
          clickHandling={Decrement}
          Increment="Decrement"
        />
        <Increase clickHandling={Reset} Increment="Reset" />
      </div>
    </>
  );
};

export default Counter;
