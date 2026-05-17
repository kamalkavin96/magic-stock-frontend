import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { EQUITY_ICON_URL } from "../../config/urlConfig";

export default function StockTable({ stocks = [], type }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortIcon = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const sortedStocks = useMemo(() => {
    const sorted = [...stocks];

    sorted.sort((a, b) => {
      let aVal;
      let bVal;

      switch (sortConfig.key) {
        case "symbol":
          aVal = a.symbol || "";
          bVal = b.symbol || "";
          break;

        case "ltp":
          aVal = a.ltp || 0;
          bVal = b.ltp || 0;
          break;

        case "dayChgPct":
          aVal = a.dayChgPct || 0;
          bVal = b.dayChgPct || 0;
          break;

        case "volume":
          aVal = a.volume || 0;
          bVal = b.volume || 0;
          break;

        default:
          return 0;
      }

      if (typeof aVal === "string") {
        return sortConfig.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      return sortConfig.direction === "asc"
        ? aVal - bVal
        : bVal - aVal;
    });

    return sorted;
  }, [stocks, sortConfig]);

  return (
    <div
      className="
      overflow-x-auto
      rounded
      bg-white
      dark:bg-gray-900"
    >
      <table className="w-full min-w-[520px] table-fixed text-sm">
        <thead
          className="
          sticky
          top-0
          z-20
          bg-gray-50
          dark:bg-gray-800
          border-b
          border-gray-200
          dark:border-gray-700"
        >
          <tr
            className="
            text-[11px]
            uppercase
            tracking-wide
            text-gray-500
            dark:text-gray-400"
          >
            {/* Stock */}
            <th
              onClick={() => handleSort("symbol")}
              className="
              sticky
              left-0
              z-30
              px-2
              py-3
              w-[150px]
              text-left
              cursor-pointer
              bg-gray-50
              dark:bg-gray-800"
            >
              Stock {sortIcon("symbol")}
            </th>

            {/* LTP */}
            <th
              onClick={() => handleSort("ltp")}
              className="
              px-1
              py-3
              w-[75px]
              text-left
              cursor-pointer"
            >
              LTP {sortIcon("ltp")}
            </th>

            {/* Change */}
            <th
              onClick={() => handleSort("dayChgPct")}
              className="
              px-1
              py-3
              w-[85px]
              text-left
              cursor-pointer"
            >
              Chg {sortIcon("dayChgPct")}
            </th>

            {/* Volume */}
            <th
              onClick={() => handleSort("volume")}
              className="
              px-1
              py-3
              w-[90px]
              text-left
              cursor-pointer"
            >
              Vol {sortIcon("volume")}
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedStocks.map((stock) => (
            <tr
              key={stock.id}
              className="
              border-b
              border-gray-100
              dark:border-gray-800
              hover:bg-gray-50
              dark:hover:bg-gray-800/70
              transition"
            >
              {/* Sticky stock column */}
              <td
                className="
                sticky
                left-0
                z-10
                px-1
                py-3
                w-[150px]
                min-w-[150px]
                bg-white
                dark:bg-gray-900"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="
                    h-8
                    w-8
                    rounded-lg
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    border-gray-200
                    dark:border-gray-700
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    shrink-0"
                  >
                    <img
                      className="w-5 h-5 rounded-full"
                      src={`${EQUITY_ICON_URL}/${stock.symbol}.png`}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      alt={stock.symbol}
                    />
                  </div>

                  <div className="overflow-hidden">
                    <Link
                      to={`/market/stocks/${stock.symbol}`}
                      className="
                      text-sm
                      font-semibold
                      text-gray-900
                      dark:text-white
                      hover:text-blue-600
                      dark:hover:text-blue-400
                      truncate
                      block"
                    >
                      {stock.symbol}
                    </Link>

                    <p
                      className="
                      text-[10px]
                      text-gray-500
                      truncate"
                    >
                      NSE
                    </p>
                  </div>
                </div>
              </td>

              {/* LTP */}
              <td
                className="
                px-1
                py-3
                w-[75px]
                whitespace-nowrap
                font-semibold
                text-gray-900
                dark:text-white"
              >
                ₹{stock.ltp?.toLocaleString()}
              </td>

              {/* Change */}
              <td className="px-1 py-3 w-[85px]">
                <span
                  className={`
                  px-2
                  py-0.5
                  rounded-full
                  text-[10px]
                  font-bold
                  inline-flex
                  items-center
                  
                  ${
                    type === "gainer"
                      ? `
                        bg-green-100
                        text-green-700
                        dark:bg-green-900/30
                        dark:text-green-400
                      `
                      : `
                        bg-red-100
                        text-red-700
                        dark:bg-red-900/30
                        dark:text-red-400
                      `
                  }
                `}
                >
                  {type === "gainer" ? "▲" : "▼"}

                  <span className="ml-1">
                    {stock.dayChgPct?.toFixed(2)}%
                  </span>
                </span>
              </td>

              {/* Volume */}
              <td
                className="
                px-1
                py-3
                w-[90px]
                whitespace-nowrap
                text-gray-600
                dark:text-gray-300
                font-medium"
              >
                {stock.volume?.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}