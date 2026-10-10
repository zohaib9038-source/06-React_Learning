import React from "react";

export default function Header() {
  return (
    <header>
      <div className="world">Where in the world?</div>
      <div className="darkMode">
        <button>
          <span className="material-symbols-outlined"> nightlight </span>
          Dark Mode
        </button>
      </div>
    </header>
  );
}
