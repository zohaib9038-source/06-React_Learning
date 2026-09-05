import React, { use, useState } from "react";

export default function Header({ theme }) {
  const [IsDark, setIsDark] = theme;
  // not best way to directly use dom
  // if (IsDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }
  return (
    <header className={IsDark ? "dark" : ""}>
      <div className="world">ShopSmart?</div>
      <div
        className="darkMode"
        onClick={() => {
          setIsDark(!IsDark);
          localStorage.setItem("theme", JSON.stringify(!IsDark));
        }}
      >
        <button className="theme">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg> */}
          <span className="material-symbols-outlined">
            {" "}
            {IsDark ? "nightlight" : "sunny"}{" "}
          </span>
          {IsDark ? "Dark" : "sunny"} Mode
        </button>
      </div>
    </header>
  );
}
