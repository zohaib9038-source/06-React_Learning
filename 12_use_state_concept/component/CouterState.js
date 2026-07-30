import React, { use, useState } from "react";

export default function CouterState({ style }) {
  //   console.log(useState()); //return array 1st vaue undefine beacuse we do not pass any value and second is fucntion which is used for updation
  console.log("rendering..");
  console.log();
  const [count, setCount] = useState(0);
  return (
    <div style={style}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}
