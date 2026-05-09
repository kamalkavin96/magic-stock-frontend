import { Link } from "react-router-dom";
import { SECTOR_ICON_URL } from "../config/urlConfig";
import { useEffect, useState } from "react";
import HeaderRow from "../components/ui/HeaderRow";
import { Search, Filter } from 'lucide-react';
import { API_V1_BASSE_URL } from "../config/urlConfig";

function capitalizeFirstLetter(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const SectorHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-6 rounded-xl shadow-lg mb-6">
            <h1 className="text-3xl font-bold mb-1">Stock Market Scanner</h1>
            <p className="text-lg opacity-90 mb-6">
                Find market opportunities with our powerful scanning tools
            </p>

            {/* <form className="relative flex items-center" onSubmit={handleSubmit}>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="search"
                        className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search by scanner name, tag or description..."
                        required
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button
                        type="submit"
                        className="absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="flex flex-wrap gap-2 mt-4">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Filter className="mr-1 h-4 w-4" />
                    Bullish
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Filter className="mr-1 h-4 w-4" />
                    Bearish
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Filter className="mr-1 h-4 w-4" />
                    Technical
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Filter className="mr-1 h-4 w-4" />
                    Fundamental
                </button>
            </div> */}
        </div>
    );
};

const renderSkeleton = () => {
    return [...Array(22)].map((_, index) => (
        <div key={index} className="flex shadow-md p-2 w-full bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-2xl animate-pulse">
            <div className="w-40 h-30 bg-gray-300 dark:bg-gray-700 rounded-2xl" />
            <div className="w-60 flex flex-col justify-between ml-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
            </div>
        </div>
    ));
};

export default function SectorPage() {

    const [sectorData, setSectorData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_V1_BASSE_URL}/sector/get-all`)
            .then(response => response.json())
            .then(data => {
                setSectorData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])

    return (
        <div className="space-y-6 m-1 mb-10">

            {/* <SectorHeader /> */}

            <HeaderRow header={"Sector List"} link={"/market/indices"} linkText={"View All"} />

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">

                {loading ? renderSkeleton() : null}

                {sectorData.map((sector, index) => (
                    <Link to={"/market/sectors/" + sector.logoName} key={sector.id}>
                        <div className="flex shadow-md p-2 w-full dark:text-gray-100 bg-white dark:bg-gray-900 dark:border-1 dark:border-gray-700 rounded-2xl ">
                            <div className="w-40">
                                <img
                                    className="object-cover w-30 h-30 rounded-2xl"
                                    src={SECTOR_ICON_URL + '/' + sector.logoName + ".png"}
                                    alt="Sector Icon"
                                />
                            </div>
                            <div className="w-60 pl-1">
                                <div className="h-1/2 flex items-end">
                                    <h5 className="text-gray-900 dark:text-gray-100 font-bold">{sector.name}</h5>
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm mb-1 h-1/2 flex items-start">
                                    Industries: {sector.industryCount} | Stocks: {sector.stockCount}
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}


            </div>
        </div>

    );
}