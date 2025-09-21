import { Link } from "react-router-dom";
import IndicesPerformanceChart from "../components/charts/IndicesPerformanceChart";
import HeaderRow from "../components/ui/HeaderRow";
import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { API_V1_BASSE_URL } from "../config/urlConfig";

export default function IndicesPage() {
  const [indicesData, setIndicesData] = useState([]);
  const [indicesTotal, setIndicesTotal] = useState(0);
  const [indicesAdv, setIndicesAdv] = useState(0);
  const [indicesDec, setIndicesDec] = useState(0);
  const [indicesNutral, setIndicesNutral] = useState(0);

  // function to fetch and calculate
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
            if (index.pChange > 0) {
              adv += 1;
            } else if (index.pChange < 0) {
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

  // fetch once + repeat every 10 sec
  useEffect(() => {
    fetchIndicesData(); // initial call

    const interval = setInterval(() => {
      fetchIndicesData();
    }, 10000); // 10 sec

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="space-y-6 mb-4">
      {/* Header Row */}
      <HeaderRow header={"Indices Performance"}>
        <div className="flex items-center">
          <div className="text-xs text-nowrap font-medium me-2 px-2.5 py-0.5 rounded-full bg-orange-300 dark:bg-orange-900 dark:text-blue-100">
            Catagory {indicesData.length}
          </div>
          <div className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-300 dark:bg-blue-900 dark:text-blue-100">
            Total {indicesTotal}
          </div>
          <div className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-green-300 dark:bg-green-900 dark:text-green-100">
            Advance {indicesAdv}
          </div>
          <div className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-300 dark:bg-red-900 dark:text-red-100">
            Decline {indicesDec}
          </div>
          <div className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-300 dark:bg-red-900 dark:text-red-100">
            Un Change {indicesNutral}
          </div>
        </div>
      </HeaderRow>

      {/* Two Cards Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {indicesData.map((category, index) => {
          const positiveCount = category.indices.filter(
            (index) => index.pChange > 0
          ).length;
          const negativeCount = category.indices.filter(
            (index) => index.pChange < 0
          ).length;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 dark:border-1 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-md p-4 rounded-md"
            >
              <h3 className="text-md font-semibold mb-2 ">
                {category.category}
              </h3>
              <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-300 dark:bg-blue-900 dark:text-blue-100">
                Total {category.indices.length}
              </span>
              <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-green-300 dark:bg-green-900 dark:text-green-100">
                Advance {positiveCount}
              </span>
              <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-300 dark:bg-red-900 dark:text-red-100">
                Decline {negativeCount}
              </span>
              <IndicesPerformanceChart data={category.indices} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
