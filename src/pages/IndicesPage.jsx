import IndicesPerformanceChart from "../components/charts/IndicesPerformanceChart";
import HeaderRow from "../components/ui/HeaderRow";
import { useEffect, useState } from "react";

import {
  LayoutGrid,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

import { API_V1_BASSE_URL } from "../config/urlConfig";

export default function IndicesPage() {
  const [indicesData, setIndicesData] = useState([]);

  const [indicesTotal, setIndicesTotal] = useState(0);
  const [indicesAdv, setIndicesAdv] = useState(0);
  const [indicesDec, setIndicesDec] = useState(0);
  const [indicesNutral, setIndicesNutral] = useState(0);

  // FILTER STATE
  const [selectedFilter, setSelectedFilter] =
    useState("ALL");

  // FETCH DATA
  const fetchIndicesData = () => {
    fetch(`${API_V1_BASSE_URL}/indices/nse/info`)
      .then((response) => response.json())
      .then((fetchedData) => {
        setIndicesData(fetchedData);

        let total = 0;
        let adv = 0;
        let dec = 0;
        let nut = 0;

        fetchedData.forEach((category) => {
          category.indices.forEach((index) => {
            total += 1;

            if (index.pchange > 0) {
              adv += 1;
            } else if (index.pchange < 0) {
              dec += 1;
            } else {
              nut += 1;
            }
          });
        });

        setIndicesTotal(total);
        setIndicesAdv(adv);
        setIndicesDec(dec);
        setIndicesNutral(nut);
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error
        );
      });
  };

  // AUTO REFRESH
  useEffect(() => {
    fetchIndicesData();

    const interval = setInterval(() => {
      fetchIndicesData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // GLOBAL FILTER
  const filteredData = indicesData
    .map((category) => {
      let filteredIndices = category.indices;

      if (selectedFilter === "ADV") {
        filteredIndices = category.indices.filter(
          (item) => item.pchange > 0
        );
      }

      if (selectedFilter === "DEC") {
        filteredIndices = category.indices.filter(
          (item) => item.pchange < 0
        );
      }

      if (selectedFilter === "NEU") {
        filteredIndices = category.indices.filter(
          (item) => item.pchange === 0
        );
      }

      return {
        ...category,
        indices: filteredIndices,
      };
    })
    .filter(
      (category) =>
        category.indices.length > 0
    );

  return (
    <div className="space-y-6 mb-4">
      {/* HEADER */}
      <HeaderRow header={"Indices Performance"}>
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {/* CATEGORY */}
          <button
            onClick={() =>
              setSelectedFilter("CATEGORY")
            }
            className={`
              inline-flex
              items-center
              gap-2

              text-xs
              font-semibold

              px-3
              py-1.5

              rounded-full
              transition-all
              duration-300

              hover:scale-[1.03]

              ${
                selectedFilter === "CATEGORY"
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-100"
              }
            `}
          >
            <LayoutGrid size={14} />
            Category {indicesData.length}
          </button>

          {/* TOTAL */}
          <button
            onClick={() =>
              setSelectedFilter("ALL")
            }
            className={`
              inline-flex
              items-center
              gap-2

              text-xs
              font-semibold

              px-3
              py-1.5

              rounded-full
              transition-all
              duration-300

              hover:scale-[1.03]

              ${
                selectedFilter === "ALL"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
              }
            `}
          >
            <BarChart3 size={14} />
            Total {indicesTotal}
          </button>

          {/* ADV */}
          <button
            onClick={() =>
              setSelectedFilter("ADV")
            }
            className={`
              inline-flex
              items-center
              gap-2

              text-xs
              font-semibold

              px-3
              py-1.5

              rounded-full
              transition-all
              duration-300

              hover:scale-[1.03]

              ${
                selectedFilter === "ADV"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-100"
              }
            `}
          >
            <TrendingUp size={14} />
            Advance {indicesAdv}
          </button>

          {/* DEC */}
          <button
            onClick={() =>
              setSelectedFilter("DEC")
            }
            className={`
              inline-flex
              items-center
              gap-2

              text-xs
              font-semibold

              px-3
              py-1.5

              rounded-full
              transition-all
              duration-300

              hover:scale-[1.03]

              ${
                selectedFilter === "DEC"
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-100"
              }
            `}
          >
            <TrendingDown size={14} />
            Decline {indicesDec}
          </button>

          {/* NEUTRAL */}
          <button
            onClick={() =>
              setSelectedFilter("NEU")
            }
            className={`
              inline-flex
              items-center
              gap-2

              text-xs
              font-semibold

              px-3
              py-1.5

              rounded-full
              transition-all
              duration-300

              hover:scale-[1.03]

              ${
                selectedFilter === "NEU"
                  ? "bg-gray-700 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-100"
              }
            `}
          >
            <Minus size={14} />
            Neutral {indicesNutral}
          </button>
        </div>
      </HeaderRow>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-4
          items-start
        "
      >
        {filteredData.map(
          (category, index) => (
            <div
              key={index}
              className="
                bg-white
                dark:bg-gray-900
                border
                border-gray-200
                dark:border-gray-700
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {/* HEADER */}
              <div
                className="
                  sticky
                  top-0
                  z-10
                  bg-white
                  dark:bg-gray-900
                  border-b
                  border-gray-100
                  dark:border-gray-800
                  px-4
                  py-3
                "
              >
                <h3
                  className="
                    text-sm
                    font-bold
                    text-gray-800
                    dark:text-gray-100
                  "
                >
                  {category.category}
                </h3>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <IndicesPerformanceChart
                  data={category.indices}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}