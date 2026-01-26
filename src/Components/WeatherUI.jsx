import React, { useContext } from "react";
import { UserLocation } from "./Create";
import Error from "./Error";
import Search from "./Search";
import Body from "./Body";
import Loading from "./Loading";
import NoResult from "./NoResult";

export default function WeatherUI() {
  const { loading, data } = useContext(UserLocation);

  return (
    <div>
      <div>
        <h1 className="text-center text-neutral-100 text-5xl mb-10 font-bold font-bricolage">
          How's the sky looking today?
        </h1>
        <Search />
        {loading && <Loading />}
        {/* {data.results.length === 0 && <NoResult />} */}
      </div>
      {/* {error && !loading && <Error />} */}
    </div>
  );
}
