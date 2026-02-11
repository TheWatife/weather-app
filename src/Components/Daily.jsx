import React, { useContext } from "react";
import useWeatherContext from "../Hooks/useWeatherContext";
import { UserLocation } from "./Create";
import orderedDailyIndices from "../Helpers/dateUtilis";
import DailySkeleton from "./DailySkeleton";

export default function Daily() {
  const { info } = useContext(UserLocation);

  const dailyForecast = info?.daily?.time || <DailySkeleton />;
  const indices = orderedDailyIndices(dailyForecast);

  const { displayIcon } = useWeatherContext();

  return (
    <div className="row-start-2 row-end-3 col-start-1 col-end-2 text-neutral-100 w-3xl max-lgg:w-151 max-lg:w-110 max-md:w-full mt-5">
      <h1>Daily Forecast</h1>
      <div className="flex flex-wrap gap-3 max-lg:gap-2 max-xs:gap-1 mt-5">
        {indices.map((idx) => {
          const dateStr = dailyForecast[idx];
          const day = new Date(dateStr + "T00:00:00").toLocaleDateString(
            "en-US",
            { weekday: "short" },
          );
          const weatherIcon = info?.daily?.weathercode?.[idx] ?? null;
          const maxTemp = info?.daily?.temperature_2m_max?.[idx] ?? "N/A";
          const minTemp = info?.daily?.temperature_2m_min?.[idx] ?? "N/A";
          return (
            <div
              className="border-2 border-neutral-600 bg-neutral-800 rounded-xl lgg:basis-[99px] lg:basis-[73px] md:basis-[74px] basis-[32%] px-3 max-lgg:px-1 max-md:px-4 py-5 max-xss:px-2 text-center"
              key={idx}
            >
              <h3 className="text-xl max-lgg:text-sm max-lgg:pr-1 max-md:text-lg max-xss:text-sm">
                {day}
              </h3>
              <img
                className="w-15 mx-auto max-lgg:w-10 max-lg:w-8 max-md:w-15 max-xss:w-10"
                src={displayIcon(weatherIcon)}
                alt={`weather-${idx}`}
              />
              <span className="flex justify-between">
                <p className="text-xl max-lgg:text-[14px] max-lg:text-[12px] max-md:text-xl max-xss:text-sm">
                  {Math.round(maxTemp)}°
                </p>
                <p className="text-xl max-lgg:text-[15px] max-lg:text-[12px] max-md:text-xl max-xss:text-sm">
                  {Math.round(minTemp)}°
                </p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
