import { useContext } from "react";
import { UserLocation } from "./Create";

export default function Search() {
  const { setCountry, handleClick, country } = useContext(UserLocation);

  return (
    <div className="flex justify-center">
      <button className="flex bg-neutral-800 px-5 py-2 rounded-xl w-100 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-100">
        <img src="images\icon-search.svg" alt="search-icon" />
        <input
          className="text-neutral-100 pl-3 cursor-pointer outline-0 cursor-pointer"
          type="text"
          placeholder="Search for a place..."
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </button>
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 rounded-xl px-5 py-2 ml-3 text-neutral-100 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
}
