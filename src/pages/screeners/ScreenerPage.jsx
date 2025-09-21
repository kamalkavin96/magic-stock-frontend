import React, { useState } from "react";
import HeaderRow from "../../components/ui/HeaderRow";
import SearchBox from "../../components/ui/SearchBox";
import { Link } from "react-router-dom";
import { Search, Filter } from 'lucide-react';

function ScannerAccordion({ name, description, tags, tagsColor }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 m-2">
            <button
                className="w-full text-left font-medium text-sm text-gray-800 dark:text-gray-200 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {name}
                {/* <span className="text-gray-500 text-xs">{isOpen ? "-" : "+"}</span> */}
            </button>
            {isOpen && (
                <div className="mt-2 text-sm text-gray-900 dark:text-gray-300">
                    <p>{description}</p>
                    {tags?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className={`bg-blue-100 text-${tagsColor}-100 bg-${tagsColor}-300 dark:bg-${tagsColor}-900 dark:text-${tagsColor}-100 px-2 py-0.5 rounded-full text-xs`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function ScannerMetaCard({ title, scanners }) {
    return (
        <div className="flex flex-col shadow-md p-4 w-full dark:text-gray-100 bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-2xl">
            <p className="font-semibold mb-2">{title}</p>
            <div className="space-y-2">
                {scanners?.map((scanner, idx) => (
                    <Link to={scanner.path}>
                        <ScannerAccordion
                            key={idx}
                            name={scanner.name}
                            description={scanner.description}
                            tags={scanner.tags}
                            tagsColor={scanner.color}
                        />
                    </Link>

                ))}
            </div>
        </div>
    );
}



const ScannerHeader = () => {
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
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg mb-6">
      <h1 className="text-3xl font-bold mb-1">Stock Market Scanner</h1>
      <p className="text-lg opacity-90 mb-6">
        Find market opportunities with our powerful scanning tools
      </p>
      
      <form className="relative flex items-center" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};


export default function ScreenerPage() {
    const scannersList = [
        {
            group: "Price Scans",
            types: [
                {
                    name: "Price Gain or Fall",
                    scanners: [
                        {
                            name: "Top Gainers",
                            path: "top-gainers",
                            description: "Stocks with highest price gain today.",
                            tags: ["Bullish", "Momentum"],
                            color: "green"
                        },
                        {
                            name: "Top Losers",
                            path: "top-losers",
                            description: "Stocks with highest price drop today.",
                            tags: ["Bearish", "Volatility"],
                            color: "red"
                        },
                    ],
                },
                {
                    name: "52w High and Low",
                    scanners: [
                        {
                            name: "52w High",
                            path: "52w-high",
                            description: "Stocks making new 52-week highs.",
                            tags: ["Breakout", "Bullish"],
                            color: "green"
                        },
                        {
                            name: "52w Low",
                            path: "52w-low",
                            description: "Stocks at new 52-week lows.",
                            tags: ["Breakdown", "Bearish"],
                            color: "red"
                        },
                    ],
                },
                {
                    name: "Gap Up and Down",
                    scanners: [
                        {
                            name: "Gap Up Opening",
                            path: "gap-up-opening",
                            description: "Stocks that opened higher than previous close.",
                            tags: ["Gap Up", "Bullish"],
                            color: "green"
                        },
                        {
                            name: "Gap Down Opening",
                            path: "gap-down-opening",
                            description: "Stocks that opened lower than previous close.",
                            tags: ["Gap Down", "Bearish"],
                            color: "red"
                        },
                    ],
                },
                {
                    name: "OHLC Scan",
                    scanners: [
                        {
                            name: "Open = High",
                            path: "open-equ-high",
                            description: "Potential intraday bearish indicator.",
                            tags: ["Reversal", "Bearish"],
                            color: "red"
                        },
                        {
                            name: "Open = Low",
                            path: "open-equ-low",
                            description: "Potential intraday bullish indicator.",
                            tags: ["Reversal", "Bullish"],
                            color: "green"
                        },
                        {
                            name: "Open = Close",
                            path: "open-equ-close",
                            description: "Indecision candle pattern (Doji-like).",
                            tags: ["Neutral", "Consolidation"],
                            color: "orange"
                        },
                    ],
                },
            ],
        },
        {
            group: "Volume Scans",
            types: [
                {
                    name: "Volume Breakouts",
                    scanners: [
                        {
                            name: "High Volume Spike",
                            path: "high-volume-spike",
                            description: "Unusual spike in trading volume.",
                            tags: ["Momentum", "Volatility"],
                            color: "red"
                        },
                        {
                            name: "Unusual Volume",
                            path: "unusual-volume",
                            description: "Volume significantly above average.",
                            tags: ["Alert", "Breakout"],
                            color: "green"
                        },
                    ],
                },
                {
                    name: "Low Volume",
                    scanners: [
                        {
                            name: "Low Volume Consolidation",
                            path: "low-volume-consolidation",
                            description: "Low volume range-bound movement.",
                            tags: ["Sideways", "Neutral"],
                            color: "orange"
                        },
                    ],
                },
                {
                    name: "Delivery Volume",
                    scanners: [
                        {
                            name: "High Delivery %",
                            path: "high-delivery",
                            description: "Higher delivery suggests strong interest.",
                            tags: ["Investor Activity", "Bullish"],
                            color: "green"
                        },
                        {
                            name: "Low Delivery %",
                            path: "low-delivery",
                            description: "Low delivery may indicate speculation.",
                            tags: ["Trader Interest", "Volatility"],
                            color: "orange"

                        },
                    ],
                },
            ],
        },
        {
            group: "Breakout Scans",
            types: [
                {
                    name: "Price Breakouts",
                    scanners: [
                        {
                            name: "Resistance Breakout",
                            path: "resistance-breakout",
                            description: "Stock breaking above resistance.",
                            tags: ["Bullish", "Breakout"],
                            color: "green"
                        },
                        {
                            name: "Support Breakdown",
                            path: "support-breakdown",
                            description: "Stock falling below support.",
                            tags: ["Bearish", "Breakdown"],
                            color: "red"
                        },
                    ],
                },
                {
                    name: "Volume Breakouts",
                    scanners: [
                        {
                            name: "Breakout with Volume",
                            path: "breakout-with-volume",
                            description: "Strong move backed by volume.",
                            tags: ["Confirmed Move", "Momentum"],
                            color: "green"

                        },
                    ],
                },
            ],
        },
        {
            group: "Intraday Scans",
            types: [
                {
                    name: "Intraday Movers",
                    scanners: [
                        {
                            name: "Intraday Gainers",
                            path: "intraday-gainers",
                            description: "Stocks gaining intraday.",
                            tags: ["Short-term", "Bullish"],
                            color: "green"
                        },
                        {
                            name: "Intraday Losers",
                            path: "intraday-losers",
                            description: "Stocks falling intraday.",
                            tags: ["Short-term", "Bearish"],
                            color: "red"
                        },
                    ],
                },
                {
                    name: "Volatility Scans",
                    scanners: [
                        {
                            name: "High Volatility Stocks",
                            path: "high-volatility",
                            description: "Stocks with big price swings.",
                            tags: ["Volatile", "High Risk"],
                            color: "red"
                        },
                        {
                            name: "Low Volatility Stocks",
                            path: "low-volatility",
                            description: "Stable low-risk stocks.",
                            tags: ["Stable", "Low Risk"],
                            color: "green"
                        },
                    ],
                },
            ],
        },
        {
            group: "Technical Scans",
            types: [
                {
                    name: "Moving Averages",
                    scanners: [
                        {
                            name: "Price Above 50 DMA",
                            path: "price-above-50dma",
                            description: "Bullish trend above 50-day moving average.",
                            tags: ["Bullish", "Trend"],
                            color: "green"
                        },
                        {
                            name: "Price Below 50 DMA",
                            path: "price-below-50dma",
                            description: "Bearish trend below 50-day moving average.",
                            tags: ["Bearish", "Trend"],
                            color: "red"
                        },
                        {
                            name: "Golden Crossover (50 > 200 DMA)",
                            path: "golden-crossover",
                            description: "Bullish crossover signal.",
                            tags: ["Golden Cross", "Long Term"],
                            color: "green"
                        },
                        {
                            name: "Death Crossover (50 < 200 DMA)",
                            path: "death-crossover",
                            description: "Bearish crossover signal.",
                            tags: ["Death Cross", "Long Term"],
                            color: "red"
                        },
                    ],
                },
                {
                    name: "Indicators",
                    scanners: [
                        {
                            name: "RSI Overbought",
                            path: "rsi-overbought",
                            description: "RSI indicates overbought condition.",
                            tags: ["Overbought", "Correction Risk"],
                            color: "red"
                        },
                        {
                            name: "RSI Oversold",
                            path: "rsi-oversold",
                            description: "RSI indicates oversold condition.",
                            tags: ["Oversold", "Rebound"],
                            color: "green"
                        },
                        {
                            name: "MACD Bullish Crossover",
                            path: "macd-bullish-crossover",
                            description: "MACD indicates bullish trend start.",
                            tags: ["Bullish", "Momentum"],
                            color: "green"
                        },
                        {
                            name: "MACD Bearish Crossover",
                            path: "macd-bearish-crossover",
                            description: "MACD indicates bearish trend start.",
                            tags: ["Bearish", "Momentum"],
                            color: "red"
                        },
                    ],
                },
            ],
        },
        {
            group: "Fundamental Scans",
            types: [
                {
                    name: "Valuation",
                    scanners: [
                        {
                            name: "Low PE Stocks",
                            path : "low-pe",
                            description: "Stocks with low Price to Earnings ratio.",
                            tags: ["Value Investing", "Undervalued"],
                            color: "red"
                        },
                        {
                            name: "High Dividend Yield",
                            path: "high-dividend-yield",
                            description: "Stocks offering high dividends.",
                            tags: ["Income", "Dividend"],
                            color: "green"
                        },
                    ],
                },
                {
                    name: "Profitability",
                    scanners: [
                        {
                            name: "High ROE Stocks",
                            path: "high-roe",
                            description: "Companies with strong return on equity.",
                            tags: ["Efficient", "Profitable"],
                            color: "green"
                        },
                        {
                            name: "High Net Profit Margin",
                            path: "high-net-profit-margin",
                            description: "Firms with good profit margins.",
                            tags: ["Margin", "Strong Business"],
                            color: "green"
                        },
                    ],
                },
            ],
        },
        {
            group: "Candlestick Pattern Scans",
            types: [
                {
                    name: "Bullish Patterns",
                    scanners: [
                        {
                            name: "Bullish Engulfing",
                            path: "bullish-engulfing",
                            description: "Bullish reversal candlestick pattern.",
                            tags: ["Bullish", "Reversal"],
                            color: "green"
                        },
                        {
                            name: "Morning Star",
                            path: "morning-star",
                            description: "Reversal after a downtrend.",
                            tags: ["Bullish", "Trend Change"],
                            color: "red"
                        },
                        {
                            name: "Hammer",
                            path: "hammer",
                            description: "Potential bullish signal.",
                            tags: ["Reversal", "Bullish"],
                            color: "green"
                        },
                    ],
                },
                {
                    name: "Bearish Patterns",
                    scanners: [
                        {
                            name: "Bearish Engulfing",
                            path: "bearish-engulfing",
                            description: "Bearish reversal pattern.",
                            tags: ["Bearish", "Reversal"],
                            color: "red"
                        },
                        {
                            name: "Evening Star",
                            path: "evening-star",
                            description: "Indicates trend reversal to bearish.",
                            tags: ["Bearish", "Trend Change"],
                            color: "green"
                        },
                        {
                            name: "Shooting Star",
                            path: "shooting-star",
                            description: "Bearish pattern after uptrend.",
                            tags: ["Bearish", "Reversal"],
                            color: "red"
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="space-y-6 pb-24">

            <ScannerHeader />

            {scannersList.map((section, index) => (
                <React.Fragment key={index}>

                    <div className="flex justify-between m-4">
                        <h4 className="text-xl font-semibold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
                            {section.group}
                        </h4>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {section.types?.map((type, idx) => (
                            <ScannerMetaCard
                                key={idx}
                                title={type.name}
                                scanners={type.scanners}
                            />
                        ))}
                    </div>

                </React.Fragment>
            ))
            }

        </div >
    );


}
