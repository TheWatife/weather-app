import React, { useContext } from "react";
import { UserLocation } from "./Create";
import useWeatherContext from "../Hooks/useWeatherContext";
import CurrentSkeleton from "./CurrentSkeleton";

export default function Current() {
  const { location, info, tempSystem } = useContext(UserLocation);
  const { displayIcon } = useWeatherContext();

  if (!location) return <CurrentSkeleton />;
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
    <div className="row-start-1 row-end-2 col-start-1 col-end-2 w-3xl max-lgg:w-151 max-lg:w-110 max-md:w-full">
      <div className="bg-[url(./images/bg-today-large.svg)] max-md:bg-[url('./images/bg-today-small.svg')] rounded-xl max-lgg:w-150 max-lg:w-110 max-md:w-full  max-md:bg-cover bg-no-repeat">
        <div className="px-10 mt-5 rounded-2xl text-neutral-100 h-70 max-xs:h-60 flex justify-between items-center max-md:block max-md:text-center ">
          <div className="mb-30 max-md:mb-0 max-md:text-center">
            <h1 className="text-3xl max-lgg:text-2xl max-lg:text-xl max-md:text-4xl max-md:pt-12 max-xss:pt-8 max-xs:text-2xl max-xss:text-xl font-bold">{`${state}, ${country}`}</h1>
            <p className="font-thin max-lg:text-sm max-md:text-xl max-xs:text-sm max-xss:text-xs pt-3">
              {date}
            </p>
          </div>
          <div className="flex max-md:justify-between max-md:px-15 max-sm:px-5 max-xs:px-3 max-xss:px-0 mb-10 max-xs:mt-5">
            <img
              src={displayIcon()}
              alt="weather-icon"
              className="w-35 pb-20 max-lgg:w-25 max-lg:w-20 max-md:w-30 max-xs:w-22"
            />
            <h1 className="text-7xl max-lg:text-5xl pt-5 font-semibold italic max-md:text-7xl max-xs:text-5xl">{`${Math.round(temp)}°`}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap text-neutral-100 gap-5 max-lgg:gap-2 max-sm:gap-3 max-xss:gap-2 mt-10">
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl md:basis-[23%] basis-[48%] h-30 max-lgg:h-25 max-md:h-30 max-xss:h-25 p-3 max-md:pl-5 max-md:pt-4 max-xss:pl-3">
          <p className="font-extralight text-md max-lgg:text-sm max-lg:text-[12px] max-md:text-lg max-xss:text-sm">
            Feels Like
          </p>
          <h1 className="font-normal text-3xl max-lgg:text-2xl max-lg:text-lg max-md:text-3xl max-xss:text-2xl pt-5 max-md:pt-3">
            {Math.round(feelsLike)}°
          </h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl md:basis-[23%] basis-[48%]  h-30 max-lgg:h-25 max-md:h-30  max-xss:h-25 p-3 max-md:pl-5 max-md:pt-4 max-xss:pl-3">
          <p className="font-extralight text-md max-lgg:text-sm max-lg:text-[12px] max-md:text-lg max-xss:text-sm">
            Humidity
          </p>
          <h1 className="font-normal text-3xl max-lgg:text-2xl max-lg:text-lg max-md:text-3xl max-xss:text-2xl pt-5 max-md:pt-3">
            {humidity}%
          </h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl md:basis-[23%] basis-[48%] h-30 max-lgg:h-25 max-md:h-30 max-xss:h-25 p-3 max-md:pl-5 max-md:pt-4 max-xss:pl-3">
          <p className="font-extralight text-md max-lgg:text-sm max-lg:text-[12px] max-md:text-lg max-xss:text-sm">
            Wind
          </p>
          <h1 className="font-normal text-3xl max-lgg:text-2xl max-lg:text-[15px] max-md:text-3xl max-xss:text-[17px] pt-5 max-md:pt-3">
            {Math.round(wind)} {windUnit}
          </h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl md:basis-[23%] basis-[48%] h-30 max-lgg:h-25 max-md:h-30 max-xss:h-25 p-3 max-md:pl-5 max-md:pt-4 max-xss:pl-3">
          <p className="font-extralight text-md max-lgg:text-sm max-lg:text-[12px] max-md:text-lg max-xss:text-sm">
            Precipitation
          </p>
          <h1 className="font-normal text-3xl max-lgg:text-2xl max-lg:text-lg max-md:text-3xl max-xss:text-2xl pt-5 max-md:pt-3">
            {precipitation} {pptUnit}
          </h1>
        </div>
      </div>
    </div>
  );
}
