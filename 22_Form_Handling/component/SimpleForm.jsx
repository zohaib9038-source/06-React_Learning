import React, { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();
    console.log("Name", name, " ", "Email", email);
  }
  return (
    <form action="" onSubmit={HandleSubmit}>
      <label htmlFor="text">Name:</label>
      <input
        type="text"
        name="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <button>submit</button>
    </form>
  );
}
