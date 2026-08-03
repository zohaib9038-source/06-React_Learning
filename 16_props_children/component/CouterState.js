import React, { use, useState } from "react";

export default function CouterState({ style }) {
  //   console.log(useState()); //return array 1st vaue undefine beacuse we do not pass any value and second is fucntion which is used for updation
  console.log("rendering..");
  /* how work behind the scene ye ik arrow maintain karta he like if i have two state hain
  [firstsatevalue,secondstate value] or yahan se pher value upadate karta he
  exmapel
  [0,5] 
   const [count, setCount] = useState(0);
     const [count, setCount] = useState(5);
  */
  console.log();
  const [count, setCount] = useState(0);
  return (
    <div style={style}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log(count);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          console.log(count);
        }}
      >
        increase
      </button>
    </div>
  );
}
