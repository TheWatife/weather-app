import React, { useContext } from "react";
import { UserLocation } from "../Components/Create";
import sunny from "/images/icon-sunny.webp";
import partlyCloudy from "/images/icon-partly-cloudy.webp";
import fog from "/images/icon-fog.webp";
import drizzle from "/images/icon-drizzle.webp";
import rain from "/images/icon-rain.webp";
import snow from "/images/icon-snow.webp";
import thunderstorm from "/images/icon-storm.webp";

export default function useWeatherContext() {
  const context = useContext(UserLocation) || {};
  function displayIcon(code) {
    const weatherCode = code ?? context.info?.current?.weather_code ?? null;

    if (weatherCode != null) {
      // Example mapping for Open-Meteo weather codes (adjust to your icons)
      if ([1, 2, 3].includes(weatherCode)) return partlyCloudy;
      if ([45, 48].includes(weatherCode)) return fog;
      if ([51, 53, 55, 56, 57].includes(weatherCode)) return drizzle;
      if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) return rain;
      if ([71, 73, 75, 76].includes(weatherCode)) return snow;
      if ([95, 96, 99].includes(weatherCode)) return thunderstorm;
      if (weatherCode === 0) return sunny;
    }
    return sunny;
  }
  return { displayIcon };
}
