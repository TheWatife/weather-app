import React, { useContext, useState } from "react";
import { UserLocation } from "./Create";
import getHourOfDay from "../Helpers/hourUtilis";
import useWeatherContext from "../Hooks/useWeatherContext";

export default function Hourly() {
  const [dayClicked, setDayClicked] = useState(false);
  const { info } = useContext(UserLocation);
  const dayOfWeek = info?.hourly;
  const dayListed = info?.daily?.time;

  // const currentDay = Array.from(
  //   new Set(dayOfWeek?.time.map((t) => t.split("T")[0]))
  // );

  const [selectedDay, setSelectedDay] = useState("");
  console.log("day I Clicked:", selectedDay);

  const { displayIcon } = useWeatherContext();
  function getDate(weekday) {
    return dayListed.find(
      (d) =>
        new Date(d).toLocaleDateString("en-US", { weekday: "long" }) === weekday
    );
  }

  if (!dayOfWeek?.time) return <p>Loading data...</p>;

  const dayOfTheWeek = getHourOfDay(dayOfWeek, selectedDay);
  console.log("dayOfTheWeek (filtered):", dayOfTheWeek);

  return (
    <div className="sticky top-0 max-h-[99vh] row-start-1 row-end-3 col-start-3 col-end-4 text-neutral-100 p-5 border-2 border-neutral-600 bg-neutral-800 rounded-xl mt-5 overflow-y-auto scrollbar-blend">
      <div className="sticky z-10 bg-opacity-100 flex justify-between">
        <h1 className="sticky">Hourly Forecast</h1>
        <div>
          <button
            className="flex gap-2 bg-neutral-600 rounded-xl py-2 px-4"
            onClick={() => setDayClicked(!dayClicked)}
          >
            <h1>
              {selectedDay
                ? new Date(selectedDay).toLocaleDateString("en-US", {
                    weekday: "long",
                  })
                : "-"}
            </h1>
            <img src="images/icon-dropdown.svg" />
          </button>
          {dayClicked && (
            <div className="border-1 border-neutral-600 bg-neutral-800 rounded-xl absolute w-[15vw] right-0 mt-3 z-10 px-3">
              {dayListed?.map((day, i) => {
                const dayPicked = new Date(day).toLocaleDateString("en-US", {
                  weekday: "long",
                });
                return (
                  <div
                    key={day}
                    className={`py-1 ${
                      dayPicked === i && "bg-neutral-900 rounded-lg p-2"
                    }`}
                    onClick={() => setSelectedDay(getDate(dayPicked))}
                  >
                    <p>{dayPicked}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* <div className="flex gap-2 bg-neutral-600 rounded-xl py-2 px-4">
          <select
            className="border-0"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            {dayListed?.map((day) => {
              return (
                <option
                  className="border-0 bg-neutral-700"
                  key={day}
                  value={day}
                >
                  {new Date(day).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </option>
              );
            })}
          </select>
        </div> */}
      </div>

      <div>
        {dayOfTheWeek.length === 0 ? (
          <p>No data available for the selected day.</p>
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
                className="top-10 bg-neutral-700 max-h-[50vh] flex justify-between items-center p-2 pr-4 border-2 border-neutral-600 rounded-lg my-5"
                key={i}
              >
                <div className="flex gap-0">
                  <img className="w-10" src={displayIcon(weatherIcon)} />
                  <p className="mt-2">{meridian}</p>
                </div>
                <p>{hour.temp}°</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
