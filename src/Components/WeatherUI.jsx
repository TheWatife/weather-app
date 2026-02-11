import React, { useContext } from "react";
import { UserLocation } from "./Create";
import Search from "./Search";
import Body from "./Body";
import Loading from "./Loading";
import NoResult from "./NoResult";

export default function WeatherUI() {
  const { geocodingAPI, greenwichAPI } = useContext(UserLocation);

  return (
    <div>
      <div>
        <h1
          className="text-center text-neutral-100 text-5xl mb-10 max-lgg:mb-7 
        font-bold font-bricolage max-lgg:text-4xl max-lg:text-3xl 
        max-md:text-8xl max-sm:text-7xl max-xs:text-6xl 
        max-xss:text-5xl"
        >
          How's the sky looking today?
        </h1>
        <Search />
        <div>
          {geocodingAPI?.isLoading || greenwichAPI?.isLoading ? (
            <Loading />
          ) : geocodingAPI?.isSuccess ? (
            !geocodingAPI.data?.results?.[0] ? (
              <NoResult />
            ) : (
              <Body />
            )
          ) : null}
          {/* {!geocodingAPI.data ? (
            <NoResult />
          ) : geocodingAPI.isLoading || greenwichAPI.isLoading ? (
            <Loading />
          ) : (
            <Body />
          )} */}
        </div>
      </div>
    </div>
  );
}
