import { useContext } from "react";
import { UserLocation } from "./Create";

export default function Error() {
  const { triggerReload } = useContext(UserLocation);
  return (
    <div className="text-neutral-100 text-center">
      <img
        className="mx-auto h-10"
        src="images/icon-error.svg"
        alt="error-icon"
      />
      <h1 className="text-5xl font-bold my-10">Something went wrong</h1>
      <p className="w-[33vw] leading-6 mx-auto">
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        onClick={triggerReload}
        className="bg-neutral-800 flex gap-x-2 mx-auto mt-5 px-4 py-2 rounded-xl cursor-pointer"
      >
        <img src="images/icon-retry.svg" />
        <p>Retry</p>
      </button>
    </div>
  );
}
