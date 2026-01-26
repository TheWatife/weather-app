import React, { useContext } from "react";
import { UserLocation } from "./Create";

export default function Units() {
  const {
    unitSystem,
    unitClick,
    selectedUnit,
    tempSystem,
    setUnitClick,
    setSelectedUnit,
    setTempSystem,
  } = useContext(UserLocation);

  return (
    <div>
      <div
        onClick={() => {
          setUnitClick(!unitClick);
        }}
        className="flex gap-2 bg-neutral-800 rounded-xl py-2 px-4"
      >
        <img src="images/icon-units.svg" />
        <p className="text-neutral-100">Units</p>
        <img src="images/icon-dropdown.svg" />
      </div>
      {unitClick && (
        <div className="absolute mt-5 right-11 z-10 border-1 w-[18vw] border-neutral-600 rounded-xl pt-0 px-3 pb-5 bg-neutral-800">
          <h1 className="text-neutral-100">Switch to {tempSystem}</h1>
          {Object.entries(unitSystem).map(([paramKey, paramValue]) => {
            console.log(paramKey);

            console.log(paramValue);
            return (
              <div key={paramKey}>
                <p className="text-neutral-300 mt-3 pl-2 border-top-3">
                  {paramValue.label}
                </p>

                <p>
                  {paramValue.values.map((units, i) => {
                    function changeUnit(item) {
                      setSelectedUnit(item);
                      setTempSystem(item);
                    }
                    console.log("tempSystem:", tempSystem);
                    console.log("selectedUnit:", selectedUnit);
                    return (
                      <div
                        onClick={() => changeUnit(units.key)}
                        className={`text-neutral-100 cursor-pointer px-2 my-1 ${
                          selectedUnit === i && "bg-neutral-700 rounded-lg p-2"
                        }`}
                        key={units.key}
                      >
                        <p>{units.label}</p>
                        <p>{units.unit}</p>
                      </div>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
