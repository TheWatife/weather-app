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
        className={`flex gap-2 bg-neutral-800 rounded-xl py-2 px-4 max-xss:px-2 max-xss:py-1 max-xss:rounded-lg
         ${unitClick ? "outline-2 outline-offset-2 outline-neutral-100" : " "} `}
      >
        <img className="max-xs:w-[10px]" src="images/icon-units.svg" />
        <p className="text-neutral-100 max-lgg:text-sm max-sm:text-[12px] max-xss:text-[10px]">
          Units
        </p>
        <img className="max-xs:w-[8px]" src="images/icon-dropdown.svg" />
      </div>
      {unitClick && (
        <div className="absolute mt-5 right-11 max-xss:right-5 z-10 border-1 w-[18vw] max-lg:w-[20vw] max-md:w-[30vw] max-xss:w-[45vw] pt-3  border-neutral-600 rounded-xl pt-0 px-3 pb-5 bg-neutral-800">
          <h1 className="text-neutral-100 max-xss:text-[13px]">
            Switch to {tempSystem}
          </h1>
          {Object.entries(unitSystem).map(([paramKey, paramValue]) => {
            console.log(paramKey);

            console.log(paramValue);
            return (
              <div key={paramKey}>
                <p className="text-neutral-300 mt-3 pl-2 border-top-3 max-sm:text-sm">
                  {paramValue.label}
                </p>

                <p>
                  {paramValue.values.map((units) => {
                    function changeUnit(item) {
                      setSelectedUnit(item);
                      setTempSystem(item);
                    }
                    console.log("tempSystem:", tempSystem);
                    console.log("selectedUnit:", selectedUnit);
                    return (
                      <div
                        onClick={() => changeUnit(units.key)}
                        className={`text-neutral-100 cursor-pointer px-2 my-1 max-md:text-sm 
                        ${units.key === tempSystem ? "bg-neutral-700 rounded-xl px-3 py-2" : ""}`}
                        key={units.key}
                      >
                        <p className="max-lg:text-md">{units.label}</p>
                        <div className="flex justify-between">
                          <p className="max-lg:text-sm">{units.unit}</p>
                          {units.key === tempSystem && (
                            <img
                              src="images/icon-checkmark.svg"
                              alt="checkmark-icon"
                            />
                          )}
                        </div>
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
