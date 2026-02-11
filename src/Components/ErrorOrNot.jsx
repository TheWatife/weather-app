import React, { useContext } from "react";
import { UserLocation } from "./Create";
import Error from "./Error";
import WeatherUI from "./WeatherUI";

export default function ErrorOrNot() {
  const { geocodingAPI } = useContext(UserLocation);
  return (
    <div>
      {geocodingAPI?.isError && !geocodingAPI?.isSuccess ? (
        <Error />
      ) : (
        <WeatherUI />
      )}
    </div>
  );
}
