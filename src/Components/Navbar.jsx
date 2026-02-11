import React from "react";
import Units from "./Units";

export default function Navbar() {
  return (
    <nav className="flex place-content-between mb-10 max-lgg:mb-8">
      <img
        src="images/logo.svg"
        alt="logo"
        className="max-lgg:w-40 max-lg:w-35 max-sm:w-30 max-xss:w-25"
      />
      <div>
        <Units />
      </div>
    </nav>
  );
}
