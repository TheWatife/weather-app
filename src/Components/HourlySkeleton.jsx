import React, { useContext } from "react";
import { UserLocation } from "./Create";
import getHourOfDay from "../Helpers/hourUtilis";

export default function HourlySkeleton() {
  const { info, selectedDay } = useContext(UserLocation);
  const dayOfWeek = info?.hourly;
  const dayOfTheWeek = getHourOfDay(dayOfWeek, selectedDay);
  return (
    <div className="sticky top-0 max-h-[99vh] row-start-1 row-end-3 col-start-3 col-end-4 text-neutral-100 p-5 border-2 border-neutral-600 bg-neutral-800 rounded-xl mt-5 overflow-y-auto scrollbar-blend">
      <div className="sticky z-10 bg-opacity-100 flex justify-between">
        <h1 className="sticky">Hourly Forecast</h1>
        <div>
          <button className="flex gap-2 bg-neutral-600 rounded-xl py-2 px-4">
            <h1>-</h1>
            <img src="images/icon-dropdown.svg" />
          </button>
        </div>
      </div>
      <div>
        {dayOfTheWeek.map((hour, i) => {
          return (
            <div
              className="top-10 bg-neutral-700 max-h-[50vh] flex justify-between items-center p-2 pr-4 border-2 border-neutral-600 rounded-lg my-5"
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
