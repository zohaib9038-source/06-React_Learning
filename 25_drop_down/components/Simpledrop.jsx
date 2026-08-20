import React, { useState } from "react";

export default function Simpledrop() {
  const [country, setCountry] = useState("Switzerland");
  function Onchange(e) {
    setCountry(e.target.value);
  }
  return (
    <select value={country} onChange={Onchange}>
      <option value="">...select below..</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Germany">Germany</option>
      <option value="Switzerland">Switzerland</option>
    </select>
  );
}
