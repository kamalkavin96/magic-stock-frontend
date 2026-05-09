import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderRow from "../components/ui/HeaderRow";

import { Building2, Layers3, Landmark } from "lucide-react";

import { API_V1_BASSE_URL, SECTOR_ICON_URL } from "../config/urlConfig";

const renderSkeleton = () => {
  return [...Array(12)].map((_, index) => (
    <div
      key={index}
      className="
        bg-white
        dark:bg-gray-900
        border
        border-gray-200
        dark:border-gray-700
        rounded-3xl
        overflow-hidden
        animate-pulse
        h-[280px]
      "
    >
      {/* IMAGE */}
      <div className="h-[160px] bg-gray-300 dark:bg-gray-700" />

      {/* CONTENT */}
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 rounded bg-gray-300 dark:bg-gray-700" />

        <div className="flex gap-2">
          <div className="h-6 w-24 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="h-6 w-24 rounded-full bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  ));
};

export default function SectorPage() {
  const [sectorData, setSectorData] = useState([]);
  const [loading, setLoading] = useState(true);

  // TOTAL COUNTS
  const totalIndustry = sectorData.reduce(
    (sum, sector) => sum + sector.industryCount,
    0,
  );

  const totalStocks = sectorData.reduce(
    (sum, sector) => sum + sector.stockCount,
    0,
  );

  // FETCH
  useEffect(() => {
    fetch(`${API_V1_BASSE_URL}/sector/get-all`)
      .then((response) => response.json())
      .then((data) => {
        setSectorData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 m-1 mb-10">
      {/* HEADER */}
      <HeaderRow
        header={"Sector List"}
        link={"/market/indices"}
        linkText={"View All"}
      >
        <div className="flex flex-wrap gap-2 mb-2">
          {/* SECTORS */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-blue-100
              text-blue-700
              dark:bg-blue-900
              dark:text-blue-100
              text-xs
              font-semibold
            "
          >
            <Building2 size={14} />
            Sectors {sectorData.length}
          </div>

          {/* INDUSTRIES */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-emerald-100
              text-emerald-700
              dark:bg-emerald-900
              dark:text-emerald-100
              text-xs
              font-semibold
            "
          >
            <Layers3 size={14} />
            Industries {totalIndustry}
          </div>

          {/* STOCKS */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-rose-100
              text-rose-700
              dark:bg-rose-900
              dark:text-rose-100
              text-xs
              font-semibold
            "
          >
            <Landmark size={14} />
            Stocks {totalStocks}
          </div>
        </div>
      </HeaderRow>

      {/* GRID */}
      <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-5
            gap-5
        "
      >
        {/* SKELETON */}
        {loading ? renderSkeleton() : null}

        {/* CARDS */}
        {sectorData.map((sector) => (
          <Link
            to={`/market/sectors/${sector.logoName}`}
            key={sector.id}
            className="group"
          >
            <div
              className="
                h-[280px]

                bg-white
                dark:bg-gray-900

                border
                border-gray-200
                dark:border-gray-700

                rounded-3xl
                overflow-hidden

                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* IMAGE SECTION */}
              <div
                className="
                  relative
                  h-[160px]
                  overflow-hidden

                  bg-gradient-to-br
                  from-slate-100
                  via-slate-200
                  to-slate-300

                  dark:from-slate-800
                  dark:via-slate-900
                  dark:to-black
                "
              >
                {/* BLUR BACKGROUND */}
                <img
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    scale-110
                    blur-md
                    opacity-40
                  "
                  src={`${SECTOR_ICON_URL}/${sector.logoName}.png`}
                  alt={sector.name}
                />

                {/* MAIN IMAGE */}
                <img
                  className="
                    relative
                    z-10

                    w-full
                    h-full

                    object-contain
                    p-4

                    transition-all
                    duration-500

                    group-hover:scale-105
                    group-hover:rotate-[1deg]
                  "
                  src={`${SECTOR_ICON_URL}/${sector.logoName}.png`}
                  alt={sector.name}
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-black/10
                    to-transparent
                    z-0
                  "
                />

                {/* SHINE EFFECT */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500

                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent

                    -translate-x-full
                    group-hover:translate-x-full
                  "
                />
              </div>

              {/* CONTENT */}
              <div
                className="
                  p-4
                  flex
                  flex-col
                  justify-center
                  h-[120px]
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    text-base
                    font-bold
                    text-gray-800
                    dark:text-gray-100
                    truncate
                  "
                >
                  {sector.name}
                </h3>

                {/* BADGES */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {/* INDUSTRY */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1
                      px-2.5
                      py-1
                      rounded-full

                      bg-blue-100
                      text-blue-700

                      dark:bg-blue-900
                      dark:text-blue-100

                      text-[11px]
                      font-semibold
                    "
                  >
                    <Layers3 size={12} />
                    Industries {sector.industryCount}
                  </div>

                  {/* STOCKS */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1
                      px-2.5
                      py-1
                      rounded-full

                      bg-emerald-100
                      text-emerald-700

                      dark:bg-emerald-900
                      dark:text-emerald-100

                      text-[11px]
                      font-semibold
                    "
                  >
                    <Landmark size={12} />
                    Stocks {sector.stockCount}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
