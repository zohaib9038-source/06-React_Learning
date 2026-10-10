import React, { useState } from "react";

export default function IntermediateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  function HandleChangeEvent(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          name="name"
          onChange={HandleChangeEvent}
          value={formData.name}
        />
        <br />
        <br />
        Email:{" "}
        <input
          type="email"
          name="email"
          onChange={HandleChangeEvent}
          value={formData.email}
        />
        <br />
        <br />
        password:{" "}
        <input
          type="password"
          name="password"
          onChange={HandleChangeEvent}
          value={formData.password}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
