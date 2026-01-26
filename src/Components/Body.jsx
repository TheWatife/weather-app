import React from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";

export default function Body() {
  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-4 grid-rows-[repeat(3, minmax(0, 0.5fr))]">
      <Current />
      <Daily />
      <Hourly />
    </div>
  );
}
