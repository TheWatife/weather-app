import React from "react";
import Units from "./Units";

export default function Navbar() {
  return (
    <nav className="flex place-content-between mb-10">
      <img src="images/logo.svg" alt="logo" />
      <div>
        <Units />
      </div>
    </nav>
  );
}
