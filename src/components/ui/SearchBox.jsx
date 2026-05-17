import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EquityService from "../../services/equityService"

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (search.trim().length >= 2) {
        setLoading(true);

        const data = await EquityService.searchSymbols(search);

        setFilteredData(data);
        setLoading(false);
      } else {
        setFilteredData([]);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <form className="max-w-md mx-auto ms-10 relative">
      <label
        htmlFor="stock-search"
        className="sr-only"
      >
        Search
      </label>

      <div className="flex">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          id="stock-search"
          type="search"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search stocks (SBI, REL...)"
          className="
          w-full
          p-2
          ps-10
          text-sm
          rounded-xl
          border
          border-gray-300
          dark:border-gray-700
          bg-white
          dark:bg-gray-800
          text-gray-900
          dark:text-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500"
        />
      </div>

      {(filteredData.length > 0 || loading) && (
        <ul
          className="
          absolute
          z-50
          mt-2
          w-full
          bg-white
          dark:bg-gray-800
          border
          border-gray-200
          dark:border-gray-700
          rounded-xl
          overflow-hidden
          shadow-xl
          max-h-72
          overflow-y-auto"
        >
          {loading && (
            <li className="px-4 py-3 text-gray-500">
              Searching...
            </li>
          )}

          {!loading &&
            filteredData.map((item, idx) => (
              <Link
                key={idx}
                to={`/market/stocks/${item}`}
                onClick={() => {
                  setSearch("");
                  setFilteredData([]);
                }}
              >
                <li
                  className="
                  px-4
                  py-3
                  cursor-pointer
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                  text-gray-800
                  dark:text-gray-100
                  border-b
                  border-gray-100
                  dark:border-gray-700"
                >
                  {item}
                </li>
              </Link>
            ))}

          {!loading &&
            search.length >= 2 &&
            filteredData.length === 0 && (
              <li className="px-4 py-3 text-gray-500">
                No stocks found
              </li>
            )}
        </ul>
      )}
    </form>
  );
};

export default SearchBox;