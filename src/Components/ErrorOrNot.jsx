import React, { useContext } from "react";
import { UserLocation } from "./Create";
import Error from "./Error";
import WeatherUI from "./WeatherUI";

export default function ErrorOrNot() {
  const { data } = useContext(UserLocation);
  return <div>{data ? <WeatherUI /> : <Error />}</div>;
}
