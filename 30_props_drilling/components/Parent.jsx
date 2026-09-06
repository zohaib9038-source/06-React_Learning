import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const name = "Zohaib";
  return (
    <>
      <Child name={name} />
    </>
  );
}
