import IndicesPerformanceChart from "../components/charts/IndicesPerformanceChart";
import HeaderRow from "../components/ui/HeaderRow";
import { useEffect, useState } from "react";
import { API_V1_BASSE_URL } from "../config/urlConfig";

export default function IndicesPage() {
  const [indicesData, setIndicesData] = useState([]);

  const [indicesTotal, setIndicesTotal] = useState(0);
  const [indicesAdv, setIndicesAdv] = useState(0);
  const [indicesDec, setIndicesDec] = useState(0);
  const [indicesNutral, setIndicesNutral] = useState(0);

  // FILTER STATE
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Fetch Data
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
        console.error("Error fetching data:", error);
      });
  };

  // Auto Refresh
  useEffect(() => {
    fetchIndicesData();

    const interval = setInterval(() => {
      fetchIndicesData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // FILTER LOGIC
  const filteredData = indicesData
    .map((category) => {
      let filteredIndices = category.indices;

      if (selectedFilter === "ADV") {
        filteredIndices = category.indices.filter((item) => item.pchange > 0);
      }

      if (selectedFilter === "DEC") {
        filteredIndices = category.indices.filter((item) => item.pchange < 0);
      }

      if (selectedFilter === "NEU") {
        filteredIndices = category.indices.filter((item) => item.pchange === 0);
      }

      return {
        ...category,
        indices: filteredIndices,
      };
    })
    .filter((category) => category.indices.length > 0);

  return (
    <div className="space-y-6 mb-4">
      {/* HEADER */}
      <HeaderRow header={"Indices Performance"}>
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {/* CATEGORY */}
          <button
            onClick={() => setSelectedFilter("CATEGORY")}
            className={`
              text-xs
              font-medium
              px-3
              py-1
              rounded-full
              transition-all
              ${
                selectedFilter === "CATEGORY"
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-orange-200 dark:bg-orange-900 dark:text-orange-100"
              }
            `}
          >
            Category {indicesData.length}
          </button>

          {/* TOTAL */}
          <button
            onClick={() => setSelectedFilter("ALL")}
            className={`
              text-xs
              font-medium
              px-3
              py-1
              rounded-full
              transition-all
              ${
                selectedFilter === "ALL"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-200 dark:bg-blue-900 dark:text-blue-100"
              }
            `}
          >
            Total {indicesTotal}
          </button>

          {/* ADVANCE */}
          <button
            onClick={() => setSelectedFilter("ADV")}
            className={`
              text-xs
              font-medium
              px-3
              py-1
              rounded-full
              transition-all
              ${
                selectedFilter === "ADV"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-100"
              }
            `}
          >
            Advance {indicesAdv}
          </button>

          {/* DECLINE */}
          <button
            onClick={() => setSelectedFilter("DEC")}
            className={`
              text-xs
              font-medium
              px-3
              py-1
              rounded-full
              transition-all
              ${
                selectedFilter === "DEC"
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-rose-200 dark:bg-rose-900 dark:text-rose-100"
              }
            `}
          >
            Decline {indicesDec}
          </button>

          {/* NEUTRAL */}
          <button
            onClick={() => setSelectedFilter("NEU")}
            className={`
              text-xs
              font-medium
              px-3
              py-1
              rounded-full
              transition-all
              ${
                selectedFilter === "NEU"
                  ? "bg-gray-700 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-800 dark:text-gray-100"
              }
            `}
          >
            Un Change {indicesNutral}
          </button>
        </div>
      </HeaderRow>

      {/* CARDS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-4
          items-start
        "
      >
        {filteredData.map((category, index) => {
          const positiveCount = category.indices.filter(
            (item) => item.pchange > 0,
          ).length;

          const negativeCount = category.indices.filter(
            (item) => item.pchange < 0,
          ).length;

          const neutralCount = category.indices.filter(
            (item) => item.pchange === 0,
          ).length;

          return (
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
              {/* CARD HEADER */}
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
                    sm:text-base
                    font-bold
                    text-gray-800
                    dark:text-gray-100
                  "
                >
                  {category.category}
                </h3>

                
              </div>

              {/* CHART */}
              <div className="p-4">
                <IndicesPerformanceChart data={category.indices} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
