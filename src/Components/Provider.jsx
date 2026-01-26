import React, { useEffect, useState } from "react";
import { UserLocation } from "./Create";
const locationEndpoint = "https://geocoding-api.open-meteo.com/v1/search?name";
const locationPara = "&count=10&language=en&format=json";
const greenEndpoint = "https://api.open-meteo.com/v1/forecast";
const greenPara =
  "daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code,relative_humidity_2m";
const imper =
  "wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";
function UserProvider({ children }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);
  const [data, setData] = useState(null);
  const [country, setCountry] = useState("Nigeria");
  const [search, setSearch] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState();
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
        {
          unit: "km/h",
        },
        {
          unit: "mph",
        },
      ],
    },
    ppt: {
      label: "Precipitation",
      values: [
        {
          unit: "millimeters (mm)",
        },
        {
          unit: "inches (in)",
        },
      ],
    },
  };

  const API_URL = {
    metric: `${greenEndpoint}?latitude=${latitude}&longitude=${longitude}&${greenPara}`,
    imperial: `${greenEndpoint}?latitude=${latitude}&longitude=${longitude}&${greenPara}&${imper}`,
  };

  useEffect(() => {
    async function fetchLocation() {
      try {
        const res = await fetch(`${locationEndpoint}=${search}${locationPara}`);
        if (!res.ok) {
          throw new Error(
            `Network error: ${res.status}`,
            console.log(res, res.status),
          );
        }

        const jsonData = await res.json();
        console.log(jsonData);
        // if (
        //   !jsonData.results ||
        //   jsonData.results[0] ||
        //   jsonData.results.length === 0
        // ) {
        //   throw new Error("No results found at tjis moment");
        // }
        setData(jsonData);
        const lat = jsonData.results[0]?.latitude;
        console.log(lat);
        const long = jsonData.results[0]?.longitude;
        console.log(long);
        setLatitude(lat);
        setLongitude(long);
        setLocation(jsonData);
      } catch (err) {
        setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchLocation();
  }, [search, setError, setData, setLoading, reload]);

  useEffect(() => {
    async function fetchGreenwich() {
      if (!latitude || !longitude) {
        return (
          <button className="flex bg-neutral-800 px-5 py-2 rounded-xl w-100 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-100">
            <img src="images/icon-loading.svg" alt="loading-icon" />
            <p className="text-neutral-100 pl-3">Search in progress</p>
          </button>
        );
      }
      const greenRes = await fetch(API_URL[tempSystem]);
      const greenData = await greenRes.json();
      setInfo(greenData);
    }
    fetchGreenwich();
  }, [latitude, longitude, tempSystem]);

  function handleClick() {
    setSearch(country);
  }

  const triggerReload = () => {
    setError(null);
    setReload((prev) => prev + 1);
    handleClick();
  };

  return (
    <UserLocation.Provider
      value={{
        reload,
        error,
        loading,
        data,
        country,
        search,
        latitude,
        longitude,
        info,
        location,
        unitClick,
        selectedUnit,
        tempSystem,
        unitSystem,
        triggerReload,
        setCountry,
        setSearch,
        setLatitude,
        setLongitude,
        handleClick,
        setUnitClick,
        setSelectedUnit,
        setTempSystem,
      }}
    >
      {children}
    </UserLocation.Provider>
  );
}

export { UserProvider };
