import { useContext } from "react";
import { UserLocation } from "./Create";

export default function Search() {
  const { setCountry, handleClick, country } = useContext(UserLocation);

  return (
    <div className="flex justify-center max-md:flex-col">
      <button className="flex bg-neutral-800 px-5 py-2 rounded-xl w-100 max-lgg:w-80 max-lg:w-60 max-md:w-full focus:outline-2 focus:outline-offset-2 focus:outline-neutral-100">
        <img src="images\icon-search.svg" alt="search-icon" className="w-4" />
        <input
          className="text-neutral-100 pl-3 cursor-pointer outline-0 cursor-pointer max-lgg:text-md max-md:text-lg"
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
          className="bg-blue-500 rounded-xl max-md:w-full px-5 py-2 ml-3 max-md:ml-0 max-md:mt-5 text-neutral-100 max-lgg:text-md cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
}
