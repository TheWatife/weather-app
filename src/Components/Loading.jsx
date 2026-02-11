import React from "react";
import CurrentSkeleton from "./CurrentSkeleton";
import DailySkeleton from "./DailySkeleton";
import HourlySkeleton from "./HourlySkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-4 grid-rows-[repeat(3, minmax(0, 0.5fr))] max-md:grid-cols-1 max-md:grid-rows-[repeat(3, minmax(0, 1.5fr))]">
      <CurrentSkeleton />
      <DailySkeleton />
      <HourlySkeleton />
    </div>
  );
}
