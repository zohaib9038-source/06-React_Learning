import React, { useState } from "react";

export default function Toggle({}) {
  const [toggle, setToggle] = useState(false);
  function clickHandler() {
    setToggle(!toggle);
  }
  return (
    <div>
      <button onClick={clickHandler}>{toggle ? "🧡Like" : "🤍Liked"}</button>
    </div>
  );
}
