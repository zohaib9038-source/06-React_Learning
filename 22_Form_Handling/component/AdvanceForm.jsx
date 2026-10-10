import React from "react";

export default function AdvanceForm() {
  return (
    <>
      <form action="">
        <label htmlFor="">
          Male: <input type="radio" name="gender" value="male" />
        </label>
        <br />
        <label htmlFor="">
          Female <input type="radio" name="gender" value="female" />
        </label>
        <br />
        <select name="country" id="">
          <option value="uk">uk</option>
          <option value="USA">USA</option>
          <option value="Pk">Pk</option>
        </select>
        <br />
        <label htmlFor="">
          <input type="checkbox" name="agree" id="" />i aggree to terms and
          codition
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
