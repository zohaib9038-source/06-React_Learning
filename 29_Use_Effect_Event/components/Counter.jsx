import React, { useEffect, useEffectEvent, useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       console.log(count); //it always show old values(like 0) increment ni kare ga is hi problem ko solve karne ke lye UseEffect Event use hota he
//       setCount((pre) => pre + 1);
//     }, 1000);
//   }, []);
//   return <h2>Count:{count}</h2>;
// }

// useEffect event solve above problem which show always value 0
export default function Counter() {
  const Tick = useEffectEvent(() => {
    console.log(count); //now it will fix above problem
    setCount((pre) => pre + 1);
  });

  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      Tick();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return <h2>Count:{count}</h2>;
}
