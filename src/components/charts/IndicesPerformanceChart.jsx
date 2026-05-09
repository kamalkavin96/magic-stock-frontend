import { Link, useNavigate } from "react-router-dom";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useMemo, useState } from "react";

export default function IndicesPerformanceChart({ data = [] }) {
  const navigate = useNavigate();

  // LOCAL FILTER FOR EACH CARD
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // FILTER + SORT
  const sortedData = useMemo(() => {
    let filtered = [...data];

    if (selectedFilter === "ADV") {
      filtered = filtered.filter((item) => item.pchange > 0);
    }

    if (selectedFilter === "DEC") {
      filtered = filtered.filter((item) => item.pchange < 0);
    }

    if (selectedFilter === "NEU") {
      filtered = filtered.filter((item) => item.pchange === 0);
    }

    return filtered.sort((a, b) => b.pchange - a.pchange);
  }, [data, selectedFilter]);

  // COUNTS
  const totalCount = data.length;

  const positiveCount = data.filter((item) => item.pchange > 0).length;

  const negativeCount = data.filter((item) => item.pchange < 0).length;

  const neutralCount = data.filter((item) => item.pchange === 0).length;

  // MAX VALUE
  const maxAbsChange = Math.max(
    ...data.map((d) => Math.abs(d.pchange || 0)),
    1,
  );

  return (
    <div
      className="
        h-[620px]
        min-h-[620px]
        max-h-[620px]

        flex
        flex-col
        overflow-hidden
      "
    >
      {/* FILTERS */}
      <div className="flex flex-wrap gap-2 mb-3">
        {/* TOTAL */}
        <button
          onClick={() => setSelectedFilter("ALL")}
          className={`
            text-[11px]
            font-medium
            px-2
            py-1
            rounded-full
            transition-all
            ${
              selectedFilter === "ALL"
                ? "bg-blue-600 text-white shadow"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
            }
          `}
        >
          Total {totalCount}
        </button>

        {/* ADVANCE */}
        <button
          onClick={() => setSelectedFilter("ADV")}
          className={`
            text-[11px]
            font-medium
            px-2
            py-1
            rounded-full
            transition-all
            ${
              selectedFilter === "ADV"
                ? "bg-emerald-600 text-white shadow"
                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-100"
            }
          `}
        >
          Advance {positiveCount}
        </button>

        {/* DECLINE */}
        <button
          onClick={() => setSelectedFilter("DEC")}
          className={`
            text-[11px]
            font-medium
            px-2
            py-1
            rounded-full
            transition-all
            ${
              selectedFilter === "DEC"
                ? "bg-rose-600 text-white shadow"
                : "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-100"
            }
          `}
        >
          Decline {negativeCount}
        </button>

        {/* NEUTRAL */}
        <button
          onClick={() => setSelectedFilter("NEU")}
          className={`
            text-[11px]
            font-medium
            px-2
            py-1
            rounded-full
            transition-all
            ${
              selectedFilter === "NEU"
                ? "bg-gray-700 text-white shadow"
                : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-100"
            }
          `}
        >
          Neutral {neutralCount}
        </button>
      </div>

      {/* CONTENT */}
      <div
        className="
          flex-1
          overflow-y-auto
          pr-1
          pb-2

          scrollbar-thin
          scrollbar-thumb-gray-300
          dark:scrollbar-thumb-slate-700

          space-y-3
        "
      >
        {sortedData.map((item) => {
          const positive = item.pchange >= 0;

          const progress = (Math.abs(item.pchange || 0) / maxAbsChange) * 100;

          return (
            <div
              key={item.index_symbol}
              onClick={() => navigate(item.index_symbol)}
              className="
                p-3
                rounded-xl
                border
                border-gray-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
                hover:border-blue-400
                dark:hover:border-blue-500
                hover:shadow-md
                transition-all
                cursor-pointer
              "
            >
              {/* TOP */}
              <div className="flex items-start justify-between gap-3">
                {/* LEFT */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={item.index_symbol}
                    onClick={(e) => e.stopPropagation()}
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-800
                      dark:text-gray-100
                      truncate
                      hover:text-blue-600
                      dark:hover:text-blue-400
                    "
                    title={item.index_name}
                  >
                    {item.index_name}
                  </Link>

                  {/* BADGES */}
                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    {/* LTP */}
                    <span
                      className={`
                        text-[11px]
                        font-semibold
                        px-2
                        py-0.5
                        rounded-full
                        ${
                          positive
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200"
                            : "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200"
                        }
                      `}
                    >
                       {Number(item.last).toFixed(2)}
                    </span>

                    {/* CHANGE */}
                    <span
                      className={`
                        text-[11px]
                        font-semibold
                        px-2
                        py-0.5
                        rounded-full
                        ${
                          positive
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200"
                            : "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200"
                        }
                      `}
                    >
                       {Number(item.change).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* RIGHT */}
                <div
                  className={`
                    flex
                    items-center
                    shrink-0
                    text-sm
                    font-bold
                    ${
                      positive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-rose-600 dark:text-rose-400"
                    }
                  `}
                >
                  {positive ? (
                    <TrendingUp size={18} strokeWidth={2.5} />
                  ) : (
                    <TrendingDown size={18} strokeWidth={2.5} />
                  )}

                  <span className="ml-1 whitespace-nowrap">
                    {positive ? "+" : ""}
                    {Number(item.pchange).toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-3">
                <div
                  className="
                    h-2
                    rounded-full
                    bg-gray-200
                    dark:bg-slate-700
                    overflow-hidden
                  "
                >
                  <div
                    className={`
                      h-full
                      rounded-full
                      transition-all
                      duration-500
                      ${positive ? "bg-emerald-500" : "bg-rose-500"}
                    `}
                    style={{
                      width: `${Math.max(progress, 4)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
