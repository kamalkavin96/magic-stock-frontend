// import {
//     Bar,
//     BarChart,
//     XAxis,
//     YAxis,
//     Tooltip,
//     Cell,
//     ResponsiveContainer,
//     LabelList,
// } from "recharts";

// import { Link, useNavigate } from "react-router-dom";

// export default function IndicesPerformanceChart({ data = [] }) {
//     // Sort by original pChange descending
//     const sortedData = [...data].sort((a, b) => b.pChange - a.pChange);

//     // Add absolute value field for rendering
//     const transformedData = sortedData.map(item => ({
//         ...item,
//         absPChange: Math.abs(item.pChange)
//     }));

//     const chartHeight = sortedData.length * 32;
//     const navigate = useNavigate();

//     return (
//         <div className="w-full max-w-4xl mx-auto p-2 space-y-6">
//             <ResponsiveContainer width="100%" height={chartHeight}>
//                 <BarChart
//                     data={transformedData}
//                     layout="vertical"
//                     margin={{ top: 25, right: -40, left: 10, bottom: -20 }}

//                 >
//                     <XAxis
//                         type="number"
//                         domain={[0, 'dataMax + 1']}
//                         tickFormatter={(value) =>
//                             `${value.toFixed(2)}%`
//                         }
//                         tick={false}
//                         axisLine={false}
//                         tickLine={false}
//                     />
//                     <YAxis
//                         type="category"
//                         dataKey="index_name"
//                         tick={({ x, y, payload }) => (
//                             <foreignObject x={x - 165} y={y - 12} width={120} height={24}>
//                                 <Link
//                                     to={payload.value}
//                                     xmlns="http://www.w3.org/1999/xhtml"
//                                     className="text-xs font-medium px-2.5 py-0.5  dark:bg-gray-900 w-fit  hover:text-blue-700
//                                     dark:hover:text-blue-500 dark:text-gray-100 text-gray-900"
//                                     style={{
//                                         whiteSpace: 'nowrap',
//                                         overflow: 'hidden',
//                                         textOverflow: 'ellipsis',
//                                         fontSize: 11
//                                     }}
//                                 >
//                                     {payload.value}
//                                 </Link>
//                             </foreignObject>
//                         )}
//                         width={160}
//                         axisLine={false}
//                         tickLine={false}
//                     />
//                     <Tooltip
//                         formatter={(value, name, props) =>
//                             `${props.payload.pChange > 0 ? "+" : ""}${props.payload.pChange.toFixed(2)}%`
//                         }
//                         labelStyle={{ fontWeight: "bold" }}
//                         itemStyle={{ fontSize: 14 }}
//                         cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
//                     />
//                     <Bar
//                         dataKey="absPChange"
//                         radius={[0, 4, 4, 0]}
//                         onClick={(data) => navigate(data.index_symbol)}
//                         style={{ cursor: "pointer", }}
//                     >
//                         {transformedData.map((entry, index) => (
//                             <Cell
//                                 key={`cell-${index}`}
//                                 fill={entry.pChange >= 0 ? "#00C49F" : "#FF5C5C"}
//                             />
//                         ))}
//                         <LabelList
//                             dataKey="pChange"
//                             position="left"
//                             content={({ value, x, y, width, height, index }) => {
//                                 const entry = transformedData[index]; // Access the current entry safely
//                                 return (
//                                     <text
//                                         x={x - 5}
//                                         y={y + height / 2}
//                                         textAnchor="end"
//                                         dominantBaseline="middle"
//                                         fill={entry.pChange >= 0 ? "#00C49F" : "#FF5C5C"}
//                                         fontSize={12}
//                                         fontWeight={500}
//                                     >
//                                         {`${value > 0 ? "+" : ""}${value.toFixed(2)}%`}
//                                     </text>
//                                 );
//                             }}
//                         />
//                     </Bar>
//                 </BarChart>
//             </ResponsiveContainer>
//         </div>
//     );
// }
import { Link, useNavigate } from "react-router-dom";
import {
  TrendingUp, TrendingDown
} from "lucide-react";

export default function IndicesPerformanceChart({ data = [] }) {
  const sortedData = [...data].sort((a, b) => b.pChange - a.pChange);
  const navigate = useNavigate();

  const maxAbsChange = Math.max(...data.map((d) => Math.abs(d.pChange)));
  const dynamicMax = maxAbsChange + 1;

  return (
    <div className="backdrop-blur-sm w-full max-w-4xl mx-auto p-4 bg-white dark:bg-slate-900">
      {/* Content */}
      <div className="space-y-4">
        {sortedData.map((item) => {
          const positive = item.pChange >= 0;
          const progress = (Math.abs(item.pChange) / dynamicMax) * 100;
          const progressBarColor = positive ? "bg-green-500" : "bg-red-500";
          const textColor = positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400";

          return (
            <div key={item.index_symbol}>
              <div className="flex items-center justify-between mb-1">
                <Link
                  to={item.index_symbol}
                  className="text-sm text-gray-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  {item.index_name}
                </Link>



                <div className={`${item.pChange > 0 ? "text-green-500" : "text-red-500"} flex ml-2
                         text-xs font-medium px-2 rounded-2xl`}>
                  {item.pChange > 0 ?
                    <TrendingUp className="text-green-500" size={20} strokeWidth={2} absoluteStrokeWidth /> :
                    <TrendingDown className="text-red-500" size={20} strokeWidth={2} absoluteStrokeWidth />
                  }

                  <span className="ml-2 flex items-center">
                    {item.pChange > 0 ? "+" : ""}
                    {item.pChange}%
                  </span>

                </div>


              </div>
              <div
                className="h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden cursor-pointer"
                onClick={() => navigate(item.index_symbol)}
              >
                <div
                  className={`h-full ${progressBarColor} rounded-full transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

