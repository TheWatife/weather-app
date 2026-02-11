import React, { useContext } from "react";
import { UserLocation } from "./Create";
// import getHourOfDay from "../Helpers/hourUtilis";

export default function HourlySkeleton() {
  const { selectedDay } = useContext(UserLocation);
  // const dayOfWeek = info?.hourly;
  // const dayOfTheWeek = getHourOfDay(dayOfWeek, selectedDay);
  const hourOfDay = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  return (
    <div className="sticky top-0 max-h-[99vh] row-start-1 row-end-3 col-start-3 col-end-4 max-md:row-start-3 max-md:row-end-4 max-md:col-start-1 max-md:col-end-2 text-neutral-100 p-5 border-2 border-neutral-600 bg-neutral-800 rounded-xl mt-5 overflow-y-auto scrollbar-blend">
      <div className="sticky z-10 bg-opacity-100 flex justify-between">
        <h1 className="sticky">Hourly Forecast</h1>
        <div>
          <button className="flex gap-2 bg-neutral-600 rounded-xl py-2 px-4">
            <h1 className="max-lg:text-[10px] max-md:text-[16px]">
              {selectedDay
                ? new Date(selectedDay).toLocaleDateString("en-US", {
                    weekday: "long",
                  })
                : "-"}
            </h1>
            <img src="images/icon-dropdown.svg" />
          </button>
        </div>
      </div>
      <div>
        {hourOfDay.map((hour, i) => {
          return (
            <div
              className="top-10 bg-neutral-700 max-h-[50vh] flex justify-between items-center p-2 pr-4 max-md:py-4 border-2 border-neutral-600 rounded-lg my-5"
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
