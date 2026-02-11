import React, { useContext, useState } from "react";
import { UserLocation } from "./Create";
import getHourOfDay from "../Helpers/hourUtilis";
import useWeatherContext from "../Hooks/useWeatherContext";
import Loading from "./Loading";
import HourlySkeleton from "./HourlySkeleton";

export default function Hourly() {
  const [dayClicked, setDayClicked] = useState(false);
  const { info } = useContext(UserLocation);
  const dayOfWeek = info?.hourly;
  const dayListed = info?.daily?.time;

  const [selectedDay, setSelectedDay] = useState("");
  console.log("day I Clicked:", selectedDay);
  console.log("information", info);

  const { displayIcon } = useWeatherContext();
  function getDate(weekday) {
    return dayListed.find(
      (d) =>
        new Date(d).toLocaleDateString("en-US", { weekday: "long" }) ===
        weekday,
    );
  }

  if (!dayOfWeek?.time) return <HourlySkeleton />;

  const dayOfTheWeek = getHourOfDay(dayOfWeek, selectedDay);
  console.log("dayOfTheWeek (filtered):", dayOfTheWeek);

  return (
    <div
      className="sticky top-0 max-h-[99vh] row-start-1 row-end-3 col-start-3 col-end-4 max-md:row-start-3 max-md:row-end-4 max-md:col-start-1 
     max-md:col-end-2 text-neutral-100 p-5 max-lg:px-2 max-md:px-5 border-2 border-neutral-600 bg-neutral-800 rounded-xl mt-5 overflow-y-auto scrollbar-blend "
    >
      <div className="sticky z-10 bg-opacity-100 flex justify-between">
        <h1 className="sticky max-lg:text-[11px] max-md:text-lg max-xss:text-sm max-lg:mt-2">
          Hourly Forecast
        </h1>
        <div>
          <button
            className="flex gap-2 bg-neutral-600 rounded-xl py-2 px-4 max-lg:px-2"
            onClick={() => setDayClicked(!dayClicked)}
          >
            <h1 className="max-lg:text-[10px] max-md:text-[16px] max-xss:text-[12px]">
              {selectedDay
                ? new Date(selectedDay).toLocaleDateString("en-US", {
                    weekday: "long",
                  })
                : "-"}
            </h1>
            <img src="images/icon-dropdown.svg" />
          </button>
          {dayClicked && (
            <div className="border-1 border-neutral-600 bg-neutral-800 rounded-xl absolute w-[15vw] max-md:w-[20vw] max-sm:w-[25vw] max-xss:w-[40vw] right-0 mt-3 z-10 py-2">
              {dayListed?.map((day) => {
                const dayPicked = new Date(day).toLocaleDateString("en-US", {
                  weekday: "long",
                });
                return (
                  <div
                    key={day}
                    className={`py-1`}
                    onClick={() => setSelectedDay(getDate(dayPicked))}
                  >
                    <p
                      className={`${
                        dayPicked ===
                        new Date(selectedDay).toLocaleDateString("en-US", {
                          weekday: "long",
                        })
                          ? "bg-neutral-700 rounded-xl p-2 mx-1"
                          : "bg-neutral-800 px-3"
                      }`}
                    >
                      {dayPicked}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div>
        {dayOfTheWeek.length === 0 ? (
          <p className="max-xss:text-sm">Pick a day from the dropdown above.</p>
        ) : (
          dayOfTheWeek.map((hour, i) => {
            const weatherIcon = info?.daily?.weathercode?.[i] ?? null;

            const meridian = new Date(hour.time).toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            });
            console.log("meridian:", meridian);

            return (
              <div
                className="top-10 bg-neutral-700 max-h-[50vh] flex justify-between items-center p-2 max-lg:py-1 pr-4 border-2 border-neutral-600 rounded-lg my-5"
                key={i}
              >
                <div className="flex gap-0">
                  <img
                    className="w-10 max-lg:w-7"
                    src={displayIcon(weatherIcon)}
                  />
                  <p className="mt-2 max-lg:text-sm max-lg:mt-1">{meridian}</p>
                </div>
                <p>{Math.round(hour.temp)}°</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
