import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

export default function SampleChart({ change, symbol, range, interval }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/history/${symbol}/${range}/${interval}`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map(item => ({
          date: item.timestamp,
          price: item.close
        }));
        setData(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
      });
  }, [symbol, range, interval]);

  const areaColor = change < 0 ? "#ff4444" : "#60f789";
  const strokeColor = change < 0 ? "#ff4444" : "#38cc2b";

  // Calculate min and max values for Y-axis
  const minPrice = Math.min(...data.map(d => d.price));
  const maxPrice = Math.max(...data.map(d => d.price));

  return (
    <div className="w-full mt-2 max-w-2xl mx-auto">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ left: -40, right: 12, bottom: 0, top: 5 }}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={false}
            interval={0}
            // tickMargin={8}
            // tickSize={1}
            tickFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />
          <YAxis
            domain={[minPrice - (minPrice / 100 * .2), maxPrice + (maxPrice / 100 * .1)]} // Y-axis starts from min price
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <Tooltip
            labelFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })
            }
            formatter={(value) => [`${value}`, "Price"]}
            contentStyle={{
              fontSize: "12px",
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
            }}
            labelStyle={{
              fontSize: "11px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "4px"
            }}
            itemStyle={{
              fontSize: "12px",
              color: "#555"
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke={strokeColor}
            strokeWidth={3}
            fill={areaColor}
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
