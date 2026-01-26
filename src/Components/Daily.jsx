import React, { useContext } from "react";
import useWeatherContext from "../Hooks/useWeatherContext";
import { UserLocation } from "./Create";
import orderedDailyIndices from "../Helpers/dateUtilis";

export default function Daily() {
  const { info } = useContext(UserLocation);

  const dailyForecast = info?.daily?.time || [];
  const indices = orderedDailyIndices(dailyForecast);

  const { displayIcon } = useWeatherContext();

  return (
    <div className="row-start-2 row-end-3 col-start-1 col-end-2 text-neutral-100 w-3xl mt-5">
      <h1>Daily Forecast</h1>
      <div className="flex gap-3 mt-5">
        {indices.map((idx) => {
          const dateStr = dailyForecast[idx];
          const day = new Date(dateStr + "T00:00:00").toLocaleDateString(
            "en-US",
            { weekday: "short" }
          );
          const weatherIcon = info?.daily?.weathercode?.[idx] ?? null;
          const maxTemp = info?.daily?.temperature_2m_max?.[idx] ?? "N/A";
          const minTemp = info?.daily?.temperature_2m_min?.[idx] ?? "N/A";
          return (
            <div
              className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/7 px-3 py-5 text-center"
              key={idx}
            >
              <h3>{day}</h3>
              <img
                className="w-15 mx-auto"
                src={displayIcon(weatherIcon)}
                alt={`weather-${idx}`}
              />
              <span className="flex justify-between">
                <p className="text-sm">{maxTemp}°</p>
                <p className="text-sm">{minTemp}°</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
