import React, { createContext } from "react";
import Parent from "./components/Parent";
import { usercontext } from "./components/UserContext";

// usecontext is used when you need to pass props to mutiple child component that is why we use usecontext instead of props;
/*
useContext is used when multiple components need to access the same data without passing props through every level of the component tree.

Example concept

Without Context (Props Drilling):
Parent → Child → GrandChild → GreatGrandChild

You have to pass the same prop through each component, even if only the last component needs it.

With Context:
Context → Any component that needs the data

So, we use useContext mainly to avoid props drilling and share data between multiple components.*/

export default function App() {
  // const user = "Zohaib ";
  // const userDetails = { name: "zohaib", role: "dev" };//for mutiple value
  return (
    <usercontext.Provider value={user}>
      <Parent />
    </usercontext.Provider>
  );
}
