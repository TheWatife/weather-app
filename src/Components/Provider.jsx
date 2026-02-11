import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserLocation } from "./Create";
import Loading from "./Loading";
import Error from "./Error";

/************ API KEY ***********/
const locationEndpoint = "https://geocoding-api.open-meteo.com/v1/search?name";
const locationPara = "&count=10&language=en&format=json";
const greenEndpoint = "https://api.open-meteo.com/v1/forecast";
const greenPara =
  "daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code,relative_humidity_2m";
const imper =
  "wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";

function UserProvider({ children }) {
  /******* STATES */
  const [country, setCountry] = useState("Nigeria");
  const [search, setSearch] = useState(country);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState();
  const [reload, setReload] = useState(0);
  const [unitClick, setUnitClick] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [tempSystem, setTempSystem] = useState("metric");

  const unitSystem = {
    temp: {
      label: "Temperature",
      values: [
        {
          key: "metric",
          label: "Celsius (°C)",
        },
        {
          key: "imperial",
          label: "Farenheit (°F)",
        },
      ],
    },
    wind: {
      label: "Wind Speed",
      values: [
        { key: "metric", unit: "km/h" },
        { key: "imperial", unit: "mph" },
      ],
    },
    ppt: {
      label: "Precipitation",
      values: [
        { key: "metric", unit: "millimeters (mm)" },
        { key: "imperial", unit: "inches (in)" },
      ],
    },
  };

  const API_URL = {
    metric: `${greenEndpoint}?latitude=${latitude}&longitude=${longitude}&${greenPara}`,
    imperial: `${greenEndpoint}?latitude=${latitude}&longitude=${longitude}&${greenPara}&${imper}`,
  };

  const fetchData = async (search) => {
    const res = await fetch(`${locationEndpoint}=${search}${locationPara}`);
    if (!res.ok) {
      throw new Error("Error loading Data");
    }
    const dataRes = await res.json();
    const first = dataRes?.results?.[0];
    if (first) {
      setLatitude(first.latitude);
      setLongitude(first.longitude);
    } else {
      setLatitude("");
      setLongitude("");
    }
    setLocation(dataRes);
    console.log(dataRes);

    return dataRes;
  };

  const greenwichData = async (tempSystem) => {
    const greenRes = await fetch(API_URL[tempSystem]);
    if (!greenRes.ok) {
      throw new Error("Error loading greenwichData");
    }
    const greenwichData = await greenRes.json();
    setInfo(greenwichData);
    return greenwichData;
  };

  //   /****** FUNCTIONS *******/

  function handleClick() {
    setSearch(country);
  }

  function triggerReload() {
    setReload((prev) => prev + 1);
  }

  /******** QUERIES  *******/
  const geocodingAPI = useQuery({
    queryKey: ["location", search, reload],
    queryFn: () => fetchData(search),
    enabled: !!search,
  });

  const greenwichAPI = useQuery({
    queryKey: ["greenwich", tempSystem, latitude, longitude],
    queryFn: () => greenwichData(tempSystem),
    enabled: !!latitude && !!longitude,
  });

  return (
    <UserLocation.Provider
      value={{
        info,
        location,
        latitude,
        longitude,
        search,
        selectedUnit,
        setSearch,
        unitClick,
        setUnitClick,
        tempSystem,
        setTempSystem,
        setCountry,
        setSelectedUnit,
        handleClick,
        triggerReload,
        geocodingAPI,
        greenwichAPI,
        unitSystem,
      }}
    >
      {children}
    </UserLocation.Provider>
  );
}

export { UserProvider };
