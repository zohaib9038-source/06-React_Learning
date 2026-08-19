import React from "react";
import { useState } from "react";
export default function DynamicBtn() {
  const [gender, setGender] = useState("");
  let language = ["html", "CSS", "js"];
  function onchange(e) {
    setGender(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      {language.map((lang) => {
        return (
          <label key={lang} htmlFor={lang}>
            <input
              type="radio"
              name="gender"
              value={lang}
              checked={gender === lang}
              id={lang}
              onChange={onchange}
            />
            {lang}
          </label>
        );
      })}
    </>
  );
}
