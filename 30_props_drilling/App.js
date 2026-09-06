import React from "react";
import Parent from "./components/Parent";
/*Props driling means access state from parent componet to child and its subchild these flow of data is called props driling . parent->child->subchild..
Props drilling means passing data/state from a parent component → child → sub-child through props, especially when the intermediate component doesn't actually need that data.
*/
export default function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}
