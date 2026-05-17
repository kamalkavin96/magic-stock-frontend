import { useState, useEffect } from "react";
import IndicesService from "../services/indicesService";
import EquityService from "../services/equityService";
import StockTable from "../components/charts/StockTable";

export default function MarketHomePage() {
  const [selectedIndex, setSelectedIndex] = useState("");

  const [indices, setIndices] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadIndices = async () => {
    try {
      const data = await IndicesService.getIndicesList();

      setIndices(data || []);
    } catch (err) {
      console.log(err);
      setIndices([]);
    }
  };

  const loadMarketData = async () => {
    if (!selectedIndex) return;

    try {
      setLoading(true);

      const [gainerData, loserData] = await Promise.all([
        EquityService.getGainers(selectedIndex),
        EquityService.getLosers(selectedIndex),
      ]);

      setGainers(gainerData || []);
      setLosers(loserData || []);
    } catch (err) {
      console.log(err);

      setGainers([]);
      setLosers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIndices();
  }, []);

  useEffect(() => {
    if (indices.length > 0) {
      setSelectedIndex(indices[0].symbol);
    }
  }, [indices]);

  useEffect(() => {
    loadMarketData();
  }, [selectedIndex]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3
            className="
      text-2xl
      font-bold
      text-gray-900
      dark:text-white"
          >
            Market Overview
          </h3>

          <p
            className="
      text-sm
      text-gray-500
      dark:text-gray-400
      mt-1"
          >
            Live market index performance
          </p>
        </div>

        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(e.target.value)}
          className="
            px-4
            py-2.5
            rounded-xl
            border
            border-gray-200
            dark:border-gray-700
            bg-white
            dark:bg-gray-800
            text-gray-800
            dark:text-gray-100
            shadow-sm
            hover:border-blue-500
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500/30
            transition
            cursor-pointer"
        >
          {indices.map((index) => (
            <option
              key={index.id}
              value={index.symbol}
              className="
              bg-white
              dark:bg-gray-800"
            >
              {index.symbol}
            </option>
          ))}
        </select>
      </div>

      {loading && <div>Loading...</div>}

      {/* Chart Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Gainers */}
        <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-4 dark:border-1 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-green-600">
            Top Gainers
          </h3>
          <StockTable stocks={gainers} type="gainer" />
        </div>

        {/* Top Losers */}
        <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-4 dark:border-1 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-red-600">
            Top Losers
          </h3>
          <StockTable stocks={losers} type="loser" />
        </div>
      </div>
    </div>
  );
}
