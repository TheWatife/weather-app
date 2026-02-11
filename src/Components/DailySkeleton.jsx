// import React, { useContext } from "react";
// import { UserLocation } from "./Create";
// import orderedDailyIndices from "../Helpers/dateUtilis";

export default function DailySkeleton() {
  const indices = [0, 1, 2, 3, 4, 5, 6];
  // const { info } = useContext(UserLocation);
  // // const dailyForecast = info?.daily?.time || [];
  // const indices = orderedDailyIndices(dailyForecast);
  return (
    <div className="row-start-2 row-end-3 col-start-1 col-end-2 text-neutral-100 w-3xl max-lgg:w-151 max-lg:w-110 max-md:w-full mt-5">
      <h1>Daily Forecast</h1>

      <div className="flex flex-wrap gap-3 max-lg:gap-2 max-xs:gap-1 mt-5">
        {indices.map((idx) => {
          return (
            <div
              className="border-2 border-neutral-600 bg-neutral-800 rounded-xl md:basis-[99px] basis-[32%] px-3 py-5 text-center h-35"
              key={idx}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
