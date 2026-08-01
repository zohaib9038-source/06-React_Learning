import React from "react";

export default function Heading({ count, textColor }) {
  return <h2 style={{ color: textColor }}>{count}</h2>;
}
