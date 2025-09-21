import { Link } from "react-router-dom";
import SampleChart from "../components/charts/SampleChart";
import { INDICES_ICON_URL } from "../config/urlConfig";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import StockTable from "../components/charts/StockTable";

const youtubeNews = [
  {
    title: "NDTV Profit - Live",
    url: "https://www.youtube.com/watch?v=_N7Ll9Jec1g",
  },
  {
    title: "CNBC - Live",
    url: "https://www.youtube.com/watch?v=1_Ih0JYmkjI",
  },
  {
    title: "Money Control - Live",
    url: "https://www.youtube.com/watch?v=6cKqFW9DMHA",
  },
];

const NewsCard = ({ title, url }) => {
  const videoId = new URL(url).searchParams.get("v");
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <div className="bg-white shadow-md p-4 hover:shadow-lg transition">
      {/* Embedded Video for Desktop */}
      <div className="hidden md:block mb-2">
        <div className="h-64 md:h-64">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Thumbnail for Mobile */}
      <div className="block md:hidden mb-2">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-auto rounded-md"
        />
      </div>

      <h4 className="text-md font-semibold text-gray-800 text-center">{title}</h4>
    </div>
  );
};

// Timeframe Selector Component
const TimeframeSelector = ({ setRange, setInterval }) => {
  const [selectedRange, setSelectedRange] = useState("1d");
  return (

    <ul className="grid grid-cols-9 text-sm font-medium text-center text-gray-700 shadow-sm border border-gray-300 divide-x divide-gray-300">
      {[
        { label: "1d", range: "1day", interval: "15min" },
        { label: "1w", range: "1week", interval: "1hour" },
        { label: "1m", range: "1month", interval: "1day" },
        { label: "3m", range: "3month", interval: "1day" },
        { label: "6m", range: "6month", interval: "1day" },
        { label: "1y", range: "1year", interval: "3day" },
        { label: "3y", range: "3year", interval: "10day" },
        { label: "5y", range: "5year", interval: "2week" },
        { label: "All", range: "30year", interval: "1month" },

      ].map((period, index) => (
        <li
          className={`cursor-pointer ${selectedRange === period.label ? "bg-gray-200 text-gray-900" : ""}`}
          key={period.label}
          onClick={() => {
            setSelectedRange(period.label)
            setRange(period.range)
            setInterval(period.interval)
            console.log({
              range: period.range,
              interval: period.interval
            })
          }}>
          <span
            onClick={() => {
              setRange(period.range)
              setInterval(period.interval)
            }}
            className={`inline-block w-full py-1   ${index === 0
              ? "text-gray-900 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
              } focus:ring-2 focus:ring-blue-300 focus:outline-none`}
            aria-current={index === 0 ? "page" : undefined}
          >
            {period.label}
          </span>
        </li>
      ))}
    </ul>
  )
};

const TimeframeSelectorTopStock = () => {
  const [selectedRange, setSelectedRange] = useState("1d");
  return (

    <ul className="grid mb-4 grid-cols-9 text-sm font-medium text-center text-gray-700 shadow-sm border border-gray-300 divide-x divide-gray-300">
      {[
        { label: "1d", range: "1day", interval: "15min" },
        { label: "1w", range: "1week", interval: "1hour" },
        { label: "1m", range: "1month", interval: "1day" },
        { label: "3m", range: "3month", interval: "1day" },
        { label: "6m", range: "6month", interval: "1day" },
        { label: "1y", range: "1year", interval: "3day" },
        { label: "3y", range: "3year", interval: "10day" },
        { label: "5y", range: "5year", interval: "2week" },
        { label: "All", range: "30year", interval: "1month" },

      ].map((period, index) => (
        <li
          className={`cursor-pointer ${selectedRange === period.label ? "bg-gray-200 text-gray-900" : ""}`}
          key={period.label}
          onClick={() => {
            setSelectedRange(period.label)
          }}
        >
          <span
            onClick={() => {
              setRange(period.range)
              setInterval(period.interval)
            }}
            className={`inline-block w-full py-1   ${index === 0
              ? "text-gray-900 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
              } focus:ring-2 focus:ring-blue-300 focus:outline-none`}
            aria-current={index === 0 ? "page" : undefined}
          >
            {period.label}
          </span>
        </li>
      ))}
    </ul>
  )
};


// Price Change Component
const PriceChange = ({ value }) => {
  const isPositive = value > 0;
  return (
    <div className="flex items-center">
      <span className={`text-sm font-semibold ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {isPositive ? "+" : ""}
        {value}%
      </span>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-4 h-4 ml-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={isPositive
            ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            : "M5.293 12.707a1 1 0 011.414 0L10 9.414l3.293 3.293a1 1 0 111.414-1.414l-4-4a1 1 0 01-1.414 0l-4 4a1 1 0 010 1.414z"
          }
          clipRule="evenodd"
        />
      </svg> */}
    </div>
  );
};

// Live Indicator Component
const LiveIndicator = ({ isLive = false }) => (
  <span
    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${isLive ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"} inline-flex items-center`}
  >
    <span className={isLive ? "blinking-icon mr-1" : "mr-1"}>
      {isLive ? "🟢" : "🔴"}
    </span>
    {isLive ? "Live" : "Closed"}
  </span>
);

// Index Card Component
const IndexCard = ({ name, price, change, pChange, isLive = false, iconName = "nifty", symbol }) => {
  const [range, setRange] = useState("1day")
  const [interval, setInterval] = useState("15min")
  return (
    <div className="shadow-md w-full p-4 bg-white">
      <div className="grid grid-cols-2 mb-2">

        <div className="flex">
          <div className="flex items-center">
            <img
              className="w-10 h-10 mr-4 rounded-full"
              src={`${INDICES_ICON_URL}/${iconName}.png`}
              alt={`${name} icon`}
            />
          </div>
          <div className="flex items-center">
            <h4 className="text-lg font-semibold">{name}</h4>
          </div>
        </div>

        <div className="flex ml-auto  rounded-md">
          <div className="grid grid-cols-1 w-full">

            {/* <LiveIndicator isLive={isLive} /> */}
            <div className="flex">
              <span className="text-md flex items-center justify-center font-bold text-zinc-800 ml-2">{price}</span>
              {/* <h4 className="text-sm flex items-end text-green-500 ml-2">{change}</h4> */}
              <div className="text-sm flex text-green-500 ml-2">
                <PriceChange value={pChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimeframeSelector setRange={setRange} setInterval={setInterval} />
      <SampleChart change={change} symbol={symbol} range={range} interval={interval} />
    </div>
  )
};

// Main Page
export default function MarketHomePage() {
  const indices = [
    {
      name: "Nifty 50",
      symbol: "NIFTY 50",
      price: "24303.75",
      change: 100.23,
      pChange: 1.23,
      isLive: false,
      iconName: "nifty",
    },
    {
      name: "Bank Nifty",
      symbol: "BANKNIFTY",
      price: "24303.75",
      change: 100.23,
      pChange: 1.23,
      isLive: false,
      iconName: "nifty",
    },
    {
      name: "Sensex",
      symbol: "NIFTY",
      price: "24303.75",
      change: -100.23,
      pChange: -1.23,
      isLive: false,
      iconName: "bse",
    },
  ];

  const topStock = {
    topGainers: [
      { name: "RELIANCE", price: "2840", change: "+3.2%" },
      { name: "INFY", price: "1540", change: "+2.9%" },
      { name: "HCLTECH", price: "1225", change: "+2.7%" },
      { name: "TATASTEEL", price: "118", change: "+2.5%" },
      { name: "ITC", price: "430", change: "+2.2%" },
      { name: "ONGC", price: "168", change: "+2.0%" },
    ],
    topLosers: [
      { name: "TCS", change: "-2.1%", price: "3600" },
      { name: "WIPRO", change: "-1.9%", price: "430" },
      { name: "BAJAJ-AUTO", change: "-1.7%", price: "7450" },
      { name: "CIPLA", change: "-1.6%", price: "1210" },
      { name: "POWERGRID", change: "-1.5%", price: "252" },
      { name: "AXISBANK", change: "-1.3%", price: "1035" },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex justify-between mt-4">
        <h4 className="text-xl font-bold text-gray-800">Market Overview</h4>
        <Link to="/market/indices" className="flex items-center text-blue-500 hover:text-blue-700">
          View All
        </Link>
      </div>

      {/* Index Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {indices.map((index, i) => (
          <IndexCard key={i} {...index} />
        ))}
      </div>

      <h4 className="text-xl font-bold text-gray-800">Top Stocks</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Gainers */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold mb-4">Top Gainers</h3>

            <div className="">
              <select
                className="w-32 ms-2 h-7 px-2 text-sm py-1 border border-gray-300 rounded-md"
                name="range"
                id="range"
              >
                <option value="1">Nifty 50</option>
                <option value="2">Nifty Bank</option>
                <option value="3">Nifty 100</option>
              </select>
            </div>

          </div>
          <TimeframeSelectorTopStock />
          <StockTable stocks={topStock.topGainers} type="gainer" />
        </div>

        {/* Top Losers */}
        <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold mb-4">Top Loser</h3>

            <div className="">
              <select
                className="w-32 ms-2 h-7 px-2 text-sm py-1 border border-gray-300 rounded-md"
                name="range"
                id="range"
              >
                <option value="1">Nifty 50</option>
                <option value="2">Nifty Bank</option>
                <option value="3">Nifty 100</option>
              </select>
            </div>

          </div>
          <TimeframeSelectorTopStock />
          <StockTable stocks={topStock.topLosers} type="loser" />
        </div>
      </div>


      {/* Live News Section */}
      <h4 className="text-xl font-bold text-gray-800">Live News Video</h4>

      {/* Desktop Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {youtubeNews.map((news, i) => (
          <NewsCard key={i} {...news} />
        ))}
      </div>


      {/* Trending Section */}
      <div className="text-2xl font-bold text-gray-800">Trending Now</div>

      {/* Full-Width Card */}
      <div className="bg-white shadow-md p-4 h-200">
        <h3 className="text-lg font-semibold mb-2">Big Full Card</h3>
        <p className="text-gray-600">
          This card spans full width and contains more detailed content...
        </p>
      </div>
    </div>
  );
}
