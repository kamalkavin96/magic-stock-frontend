import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import IndicesTableChart from "../components/charts/IndicesTableChart";
import TreeMapChart from "../components/charts/TreeMapChart";
import { useEffect, useRef, useState } from "react";

export default function IndicesDetailsPage() {

    let params = useParams();

    const sectorWeightData = [{
        "label": "Capital Goods 8.7%",
        "colour": "#f6b08e",
        "weight": 8.7,
        "groups": [{
            "label": "ABB 1.29%",
            "weight": 1.29,
            "id": "1",
            "date": "24-04-2025"
        }, {
            "label": "CGPOWER 1.79%",
            "weight": 1.79,
            "id": "2",
            "date": "24-04-2025"
        }, {
            "label": "DUMMYSIEMS 0.95%",
            "weight": 0.95,
            "id": "3",
            "date": "24-04-2025"
        }, {
            "label": "HAL 3.54%",
            "weight": 3.54,
            "id": "4",
            "date": "24-04-2025"
        }, {
            "label": "SIEMENS 1.11%",
            "weight": 1.11,
            "id": "5",
            "date": "24-04-2025"
        },],
        "id": "0"
    }, {
        "label": "Power 8.81%",
        "colour": "#eedebc",
        "weight": 8.81,
        "groups": [{
            "label": "ADANIENSOL 1.51%",
            "weight": 1.51,
            "id": "6",
            "date": "24-04-2025"
        }, {
            "label": "ADANIGREEN 1.29%",
            "weight": 1.29,
            "id": "7",
            "date": "24-04-2025"
        }, {
            "label": "ADANIPOWER 1.97%",
            "weight": 1.97,
            "id": "8",
            "date": "24-04-2025"
        }, {
            "label": "JSWENERGY 1.17%",
            "weight": 1.17,
            "id": "9",
            "date": "24-04-2025"
        }, {
            "label": "TATAPOWER 2.88%",
            "weight": 2.88,
            "id": "10",
            "date": "24-04-2025"
        },],
        "id": "1"
    }, {
        "label": "Construction Materials 3.43%",
        "colour": "#ebc5ec",
        "weight": 3.43,
        "groups": [{
            "label": "AMBUJACEM 1.65%",
            "weight": 1.65,
            "id": "11",
            "date": "24-04-2025"
        }, {
            "label": "SHREECEM 1.78%",
            "weight": 1.78,
            "id": "12",
            "date": "24-04-2025"
        },],
        "id": "2"
    }, {
        "label": "Financial Services 20.61%",
        "colour": "#a8f3a1",
        "weight": 20.61,
        "groups": [{
            "label": "BAJAJHFL 0.53%",
            "weight": 0.53,
            "id": "13",
            "date": "24-04-2025"
        }, {
            "label": "BAJAJHLDNG 2.32%",
            "weight": 2.32,
            "id": "14",
            "date": "24-04-2025"
        }, {
            "label": "BANKBARODA 2.02%",
            "weight": 2.02,
            "id": "15",
            "date": "24-04-2025"
        }, {
            "label": "CANBK 1.45%",
            "weight": 1.45,
            "id": "16",
            "date": "24-04-2025"
        }, {
            "label": "CHOLAFIN 2.83%",
            "weight": 2.83,
            "id": "17",
            "date": "24-04-2025"
        }, {
            "label": "ICICIGI 1.95%",
            "weight": 1.95,
            "id": "18",
            "date": "24-04-2025"
        }, {
            "label": "ICICIPRULI 1.02%",
            "weight": 1.02,
            "id": "19",
            "date": "24-04-2025"
        }, {
            "label": "IRFC 1.03%",
            "weight": 1.03,
            "id": "20",
            "date": "24-04-2025"
        }, {
            "label": "LICI 0.78%",
            "weight": 0.78,
            "id": "21",
            "date": "24-04-2025"
        }, {
            "label": "PFC 2.74%",
            "weight": 2.74,
            "id": "22",
            "date": "24-04-2025"
        }, {
            "label": "PNB 1.54%",
            "weight": 1.54,
            "id": "23",
            "date": "24-04-2025"
        }, {
            "label": "RECLTD 2.38%",
            "weight": 2.38,
            "id": "24",
            "date": "24-04-2025"
        },],
        "id": "3"
    }, {
        "label": "Automobile and Auto Components 6.54%",
        "colour": "#c985f4",
        "weight": 6.54,
        "groups": [{
            "label": "BOSCHLTD 1.07%",
            "weight": 1.07,
            "id": "25",
            "date": "24-04-2025"
        }, {
            "label": "HYUNDAI 0.9%",
            "weight": 0.9,
            "id": "26",
            "date": "24-04-2025"
        }, {
            "label": "MOTHERSON 1.74%",
            "weight": 1.74,
            "id": "27",
            "date": "24-04-2025"
        }, {
            "label": "TVSMOTOR 2.83%",
            "weight": 2.83,
            "id": "28",
            "date": "24-04-2025"
        },],
        "id": "4"
    }, {
        "label": "Oil Gas & Consumable Fuels 7.04%",
        "colour": "#f0f1ec",
        "weight": 7.04,
        "groups": [{
            "label": "BPCL 2.54%",
            "weight": 2.54,
            "id": "29",
            "date": "24-04-2025"
        }, {
            "label": "GAIL 2.26%",
            "weight": 2.26,
            "id": "30",
            "date": "24-04-2025"
        }, {
            "label": "IOC 2.24%",
            "weight": 2.24,
            "id": "31",
            "date": "24-04-2025"
        },],
        "id": "5"
    }, {
        "label": "Fast Moving Consumer Goods 11.78%",
        "colour": "#6a81f5",
        "weight": 11.78,
        "groups": [{
            "label": "BRITANNIA 2.79%",
            "weight": 2.79,
            "id": "32",
            "date": "24-04-2025"
        }, {
            "label": "DABUR 1.26%",
            "weight": 1.26,
            "id": "33",
            "date": "24-04-2025"
        }, {
            "label": "GODREJCP 2.63%",
            "weight": 2.63,
            "id": "34",
            "date": "24-04-2025"
        }, {
            "label": "UNITDSPR 2%",
            "weight": 2.0,
            "id": "35",
            "date": "24-04-2025"
        }, {
            "label": "VBL 3.1%",
            "weight": 3.1,
            "id": "36",
            "date": "24-04-2025"
        },],
        "id": "6"
    }, {
        "label": "Healthcare 5.88%",
        "colour": "#9bf3e3",
        "weight": 5.88,
        "groups": [{
            "label": "DIVISLAB 3.42%",
            "weight": 3.42,
            "id": "37",
            "date": "24-04-2025"
        }, {
            "label": "TORNTPHARM 1.51%",
            "weight": 1.51,
            "id": "38",
            "date": "24-04-2025"
        }, {
            "label": "ZYDUSLIFE 0.95%",
            "weight": 0.95,
            "id": "39",
            "date": "24-04-2025"
        },],
        "id": "7"
    }, {
        "label": "Realty 3.49%",
        "colour": "#e7f56a",
        "weight": 3.49,
        "groups": [{
            "label": "DLF 1.89%",
            "weight": 1.89,
            "id": "40",
            "date": "24-04-2025"
        }, {
            "label": "LODHA 1.6%",
            "weight": 1.6,
            "id": "41",
            "date": "24-04-2025"
        },],
        "id": "8"
    }, {
        "label": "Consumer Services 8.79%",
        "colour": "#4bfffc",
        "weight": 8.79,
        "groups": [{
            "label": "DMART 2.87%",
            "weight": 2.87,
            "id": "42",
            "date": "24-04-2025"
        }, {
            "label": "INDHOTEL 3.12%",
            "weight": 3.12,
            "id": "43",
            "date": "24-04-2025"
        }, {
            "label": "NAUKRI 2.41%",
            "weight": 2.41,
            "id": "44",
            "date": "24-04-2025"
        }, {
            "label": "SWIGGY 0.4%",
            "weight": 0.4,
            "id": "45",
            "date": "24-04-2025"
        },],
        "id": "9"
    }, {
        "label": "Consumer Durables 1.76%",
        "colour": "#bbe2e9",
        "weight": 1.76,
        "groups": [{
            "label": "HAVELLS 1.76%",
            "weight": 1.76,
            "id": "46",
            "date": "24-04-2025"
        },],
        "id": "10"
    }, {
        "label": "Services 4.7%",
        "colour": "#eedebc",
        "weight": 4.7,
        "groups": [{
            "label": "INDIGO 4.7%",
            "weight": 4.7,
            "id": "47",
            "date": "24-04-2025"
        },],
        "id": "11"
    }, {
        "label": "Metals & Mining 4.59%",
        "colour": "#eedebc",
        "weight": 4.59,
        "groups": [{
            "label": "JINDALSTEL 1.5%",
            "weight": 1.5,
            "id": "48",
            "date": "24-04-2025"
        }, {
            "label": "VEDL 3.09%",
            "weight": 3.09,
            "id": "49",
            "date": "24-04-2025"
        },],
        "id": "12"
    }, {
        "label": "Information Technology 1.82%",
        "colour": "#eedebc",
        "weight": 1.82,
        "groups": [{
            "label": "LTIM 1.82%",
            "weight": 1.82,
            "id": "50",
            "date": "24-04-2025"
        },],
        "id": "13"
    }, {
        "label": "Chemicals 2.05%",
        "colour": "#f6b08e",
        "weight": 2.05,
        "groups": [{
            "label": "PIDILITIND 2.05%",
            "weight": 2.05,
            "id": "51",
            "date": "24-04-2025"
        },],
        "id": "14"
    },]

    const stockData = {
        topGainers: [
            { name: "RELIANCE", change: "+3.2%", price: "2840", volume: "2.3M" },
            { name: "INFY", change: "+2.9%", price: "1540", volume: "1.9M" },
            { name: "HCLTECH", change: "+2.7%", price: "1225", volume: "1.5M" },
            { name: "TATASTEEL", change: "+2.5%", price: "118", volume: "3.2M" },
            { name: "ITC", change: "+2.2%", price: "430", volume: "2.1M" },
            { name: "ONGC", change: "+2.0%", price: "168", volume: "1.2M" },
        ],
        topLosers: [
            { name: "TCS", change: "-2.1%", price: "3600", volume: "1.1M" },
            { name: "WIPRO", change: "-1.9%", price: "430", volume: "1.5M" },
            { name: "BAJAJ-AUTO", change: "-1.7%", price: "7450", volume: "600K" },
            { name: "CIPLA", change: "-1.6%", price: "1210", volume: "700K" },
            { name: "POWERGRID", change: "-1.5%", price: "252", volume: "2.4M" },
            { name: "AXISBANK", change: "-1.3%", price: "1035", volume: "3.3M" },
        ],
    };

    let navigate = useNavigate();

    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
          setWidth(containerRef.current.offsetWidth);
        }
    
        // Optional: Handle window resizing
        const handleResize = () => {
          if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <>
            <div className="space-y-6 my-2">
                {/* Header Row */}
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold text-gray-800">{params.indexName} Overview</h3>
                </div>

                {/* Index Cards */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div ref={containerRef}>
                        <TreeMapChart width={width}></TreeMapChart>
                    </div>
                </div>

                {/* Index Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 text-green-600">Top Gainers</h3>
                        <IndicesTableChart stocks={stockData.topGainers} type={"gainer"} indicesName={params.indexName}></IndicesTableChart>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 text-red-600">Top loser</h3>
                        <IndicesTableChart stocks={stockData.topLosers} type={"loser"}></IndicesTableChart>
                    </div>
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
        </>
    )
}


