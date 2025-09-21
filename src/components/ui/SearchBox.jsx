import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyData = ["RELIANCE", "TCS", "INFY", "HDFCBANK", "ICICIBANK", "KOTAKBANK", "HINDUNILVR", "SBIN", "LT", "AXISBANK", "ITC", "BHARTIARTL", "ASIANPAINT", "MARUTI", "HCLTECH", "WIPRO", "SUNPHARMA", "ULTRACEMCO", "POWERGRID", "NESTLEIND"];

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        console.log(value);

        if (value.length >= 3) {
            const filtered = dummyData.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            console.log(filtered);
            setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    };

    return (
        <form className="max-w-md mx-auto ms-10 relative">
            <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="flex">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
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
                    type="search"
                    id="default-search"
                    value={search}
                    onChange={handleSearchChange}
                    className="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-100 focus:border-blue-100 dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-100"
                    placeholder="Search Stocks"
                    required
                />
                {/* <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button> */}
            </div>
            {filteredData.length > 0 && (
                <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md max-h-60 overflow-y-auto shadow-lg">
                    {filteredData.map((item, idx) => (
                        <Link
                            key={idx}
                            to={`market/stocks/${item}`}
                            onClick={() => {
                                setFilteredData([]);
                                setSearch("");
                            }}
                        >
                            <li
                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            >
                                {item}
                            </li>
                        </Link>

                    ))}
                </ul>
            )}
        </form>
    );
};

export default SearchBox;
