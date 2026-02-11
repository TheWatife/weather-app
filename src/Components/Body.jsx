import React from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";

export default function Body() {
  return (
    <div
      className="grid grid-cols-3 gap-x-10 gap-y-4 grid-rows-[repeat(3, minmax(0, 0.5fr))]
     max-lgg:grid-cols-[repeat(3, minmax(0, 0.25fr))] max-lg:grid-cols-[repeat(3, minmax(0, 0.15fr))]
      max-md:grid-cols-1 max-md:grid-rows-[repeat(3, minmax(0, 1.5fr))]"
    >
      <Current />
      <Daily />
      <Hourly />
    </div>
  );
}
