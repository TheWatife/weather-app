import React, { useContext } from "react";
import { UserLocation } from "./Create";
import useWeatherContext from "../Hooks/useWeatherContext";
import Loading from "./Loading";

export default function Current() {
  const { location, info, tempSystem } = useContext(UserLocation);
  const { displayIcon } = useWeatherContext();

  if (!location) return;
  if (!info) return;

  const state = location.results[0].name;
  const country = location.results[0].country;
  const temp = info.current.temperature_2m;
  const feelsLike = info.current.apparent_temperature;
  const humidity = info?.current?.relative_humidity_2m;
  const wind = info.current.wind_speed_10m;
  const precipitation = info.current.precipitation;
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  let windUnit;
  let pptUnit;

  if (tempSystem === "metric") {
    windUnit = "km/h";
  } else {
    windUnit = "mph";
  }
  if (tempSystem === "metric") {
    pptUnit = "mm";
  } else {
    pptUnit = "in";
  }

  return (
    <div className="row-start-1 row-end-2 col-start-1 col-end-2 w-3xl">
      <div className="bg-[url(./images/bg-today-large.svg)] bg-no-repeat">
        <div className="px-10 mt-5 rounded-2xl text-neutral-100 h-70 flex justify-between items-center">
          <div className="mb-30">
            <h1 className="text-3xl font-bold">{`${state}, ${country}`}</h1>
            <p className="font-thin pt-3">{date}</p>
          </div>
          <div className="flex mb-10">
            <img
              src={displayIcon()}
              alt="weather-icon"
              className="w-35 pb-20"
            />
            <h1 className="text-7xl pt-5 font-semibold italic">{`${temp}°`}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-neutral-100 gap-5 mt-10">
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Feels Like</p>
          <h1 className="font-normal text-3xl pt-5">{feelsLike}°</h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Humidity</p>
          <h1 className="font-normal text-3xl pt-5">{humidity}%</h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Wind</p>
          <h1 className="font-normal text-3xl pt-5">
            {wind} {windUnit}
          </h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Precipitation</p>
          <h1 className="font-normal text-3xl pt-5">
            {precipitation} {pptUnit}
          </h1>
        </div>
      </div>
    </div>
  );
}
