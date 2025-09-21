import { Link } from "react-router-dom";
import { EQUITY_ICON_URL } from "../../config/urlConfig";
import { useEffect, useState } from "react";


export default function StockTable({ stocks, type }) {

    const [columnNames, setColumnNames] = useState([])

    useEffect(()=>{
        setColumnNames(Object.keys(stocks[0]))
    },[stocks])


    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-md text-left text-gray-700 dark:text-gray-300">
          <thead className="w-full text-sm uppercase ">
            <tr>
              {columnNames.map((name) => (
                <th key={name} className="px-4 py-3">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr
                key={stock.name}
                className=" border-b hover:bg-gray-50 transition dark:border-gray-700"
              >
                <td className="px-4 py-3 font-xs text-gray-900 dark:text-gray-300">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={EQUITY_ICON_URL+"/"+stock.name+".png"}
                      alt="Graph icon"
                    />
                    
                    <Link to={"/market/stocks/"+stock.name}><span className="font-xs">{stock.name}</span></Link>
                  </div>
                </td>
                <td className={`px-4 py-3 font-semibold ${type === "gainer" ? "text-green-600" : "text-red-600"}`}>
                  {stock.price}
                </td>
                <td className={`px-4 py-3 font-semibold ${type === "gainer" ? "text-green-600" : "text-red-600"}`}>
                  ₹{stock.change}
                </td>
                {/* <td className="px-4 py-3">{stock.volume}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }