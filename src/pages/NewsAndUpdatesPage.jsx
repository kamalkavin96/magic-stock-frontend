import { useState } from "react";

const categories = ["Spotlight", "Corporate", "IPO", "Earnings", "Economy"];

const newsData = [
  {
    id: 1,
    title: "LTIMindtree Mar 2025 Net Profit ₹1123 Cr vs ₹1100 Cr YoY",
    category: "IT - Software",
    summary: "Revenue ₹9772 Cr vs ₹8893 Cr YoY.",
    image: "https://logo.clearbit.com/ltimindtree.com",
  },
  {
    id: 2,
    title: "Tata Consumer Net Profit ₹349 Cr vs ₹212 Cr YoY",
    category: "FMCG",
    summary: "Revenue ₹4608 Cr vs ₹3926 Cr YoY.",
    image: "https://logo.clearbit.com/tataconsumer.com",
  },
  {
    id: 3,
    title: "Infosys Q4 Results: Net Profit ₹6,128 Cr, Revenue ₹38,654 Cr",
    category: "IT - Services",
    summary: "Attrition reduced to 12.5%. Beat street expectations.",
    image: "https://logo.clearbit.com/infosys.com",
  },
  {
    id: 4,
    title: "LIC IPO 2025: Government plans to divest 3% more stake",
    category: "IPO",
    summary: "Expected to raise ₹18,000 Cr in 2nd tranche.",
    image: "https://logo.clearbit.com/licindia.in",
  },
  {
    id: 5,
    title: "India’s GDP grows 7.8% in Q4 FY24, beating estimates",
    category: "Economy",
    summary: "Driven by strong manufacturing and services sector growth.",
    image: "https://via.placeholder.com/60",
  },
];

const topGainers = [
  { name: "HCL Technologies", symbol: "HCLTECH", price: "₹1,594.00", change: "+7.71%" },
  { name: "LTIMindtree Ltd", symbol: "LTIM", price: "₹4,536.70", change: "+5.01%" },
  { name: "TCS", symbol: "TCS", price: "₹3,944.20", change: "+4.02%" },
  { name: "Adani Ent", symbol: "ADANIENT", price: "₹3,148.00", change: "+3.55%" },
  { name: "Axis Bank", symbol: "AXISBANK", price: "₹1,132.75", change: "+2.90%" },
];

export default function MarketNewsPage() {
  const [activeTab, setActiveTab] = useState("news");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews =
    activeCategory === "All"
      ? newsData
      : newsData.filter((item) => item.category.includes(activeCategory));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-8 bg-gray-50 min-h-screen font-sans">
      {/* Left: News Panel */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">News & Updates</h2>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4">
          {["news", "announcements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white border text-gray-700"
              }`}
            >
              {tab === "news" ? "News" : "Announcements"}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === "All"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeCategory === cat
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News List */}
        {activeTab === "news" ? (
          <div className="space-y-4">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="flex items-start bg-white rounded-md p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt="news thumb"
                  className="w-16 h-16 object-contain rounded-md mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-gray-600 mt-1">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 italic mt-6">No announcements currently available.</div>
        )}
      </div>

      {/* Right: Top Gainers */}
      <div className="bg-white rounded-md shadow-md p-5 h-fit sticky top-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Top Gainers</h3>
          <span className="text-blue-600 text-sm cursor-pointer">Large Cap</span>
        </div>
        <div className="space-y-4">
          {topGainers.map((stock, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium text-gray-900">{stock.name}</p>
                <p className="text-xs text-gray-500">{stock.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{stock.price}</p>
                <p className="text-green-600 text-sm">{stock.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
