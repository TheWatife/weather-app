import React from "react";

export default function CurrentSkeleton() {
  return (
    <div className="row-start-1 row-end-2 col-start-1 col-end-2 w-3xl mt-5">
      <div className="h-70 bg-neutral-800 rounded-xl text-center py-23">
        <img
          className="mx-auto w-10"
          src="images/icon-loading.svg"
          alt="loading-icon"
        />
        <h1 className="text-2xl text-neutral-100 pt-3">Loading...</h1>
      </div>
      <div className="flex justify-between text-neutral-100 gap-5 mt-10">
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Feels Like</p>
          <h1 className="font-normal text-3xl pt-5">-</h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Humidity</p>
          <h1 className="font-normal text-3xl pt-5">-</h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Wind</p>
          <h1 className="font-normal text-3xl pt-5">-</h1>
        </div>
        <div className="border-2 border-neutral-600 bg-neutral-800 rounded-xl w-1/4 h-30 p-3">
          <p className="font-extralight text-md">Precipitation</p>
          <h1 className="font-normal text-3xl pt-5">-</h1>
        </div>
      </div>
    </div>
  );
}
