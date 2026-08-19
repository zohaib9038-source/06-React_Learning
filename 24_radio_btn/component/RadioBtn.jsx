import { useState } from "react";

export default function RadioBtn() {
  const [gender, setGender] = useState("");
  function Oncahnge(e) {
    setGender(e.target.value);
    console.log(e.target.value);
  }

  return (
    // simple radio btn
    <>
      <label htmlFor="male">
        <input
          type="radio"
          onChange={Oncahnge}
          checked={gender === "male"}
          name="gender"
          value="male"
          id="male"
        />
        Male
      </label>
      <label htmlFor="female">
        <input
          type="radio"
          name="gender"
          checked={gender === "female"}
          onChange={Oncahnge}
          value="female"
          id="female"
        />
        Female
      </label>
    </>
  );
}
