import React, { useState } from "react";

export default function CheckBox() {
  const [data, setData] = useState({
    email: "",
    css: false,
  });
  console.log(data);
  function OnChanged(e) {
    const { name, type, value, checked } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={data.email}
          onChange={OnChanged}
        />
      </label>
      <label htmlFor="css">
        <input
          type="checkbox"
          name="css"
          id="css"
          checked={data.css}
          onChange={OnChanged}
        />
        CSS
      </label>
    </>
  );
}
