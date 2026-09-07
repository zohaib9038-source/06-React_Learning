import React, { useContext } from "react";
import { usercontext } from "./UserContext";
export default function SubChild() {
  const userName = useContext(usercontext);
  return <h2>user:{userName}</h2>;
}
