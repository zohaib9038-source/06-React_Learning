import React, { use, useState } from "react";

export default function Header({ cart = "0" }) {
  return (
    <header>
      <div className="world">ShopSmart?</div>
      <div className="darkMode">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            <span>{cart}</span>
          </svg>
          <span className="no_of_cart">0</span>
          <span className="material-symbols-outlined"> nightlight </span>
          Dark Mode
        </button>
      </div>
    </header>
  );
}
