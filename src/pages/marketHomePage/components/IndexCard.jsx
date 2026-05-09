import { useState } from "react"
import { IndexCardTimeFrame } from "./TimeFrame"
import IndexChart from "../chart/IndexChart"
import { INDICES_ICON_URL } from "../../../config/urlConfig"
import {
    TrendingUp, TrendingDown
} from "lucide-react";


export default function IndexCard({ name, price, change, pChange, isLive, iconName, symbol, groww_symbol }) {
    const [range, setRange] = useState("1week")
    const [interval, setInterval] = useState("2hour")

    const [priceValue, setPriceValue] = useState(price)
    const [changeValue, setChangeValue] = useState(change)
    const [pChangeValue, setPChangeValue] = useState(pChange)

    return (
        <div className="shadow-md w-full p-4 dark:text-gray-100 bg-white dark:bg-gray-900 dark:border-1 dark:border-gray-700 rounded-2xl">

            <div className="grid grid-cols-2 mb-2 ">
                <div className="flex">

                    <div className="flex items-center">
                        <img
                            className="w-6 h-6 mr-2 rounded-full"
                            src={`${INDICES_ICON_URL}/${iconName}.png`}
                            alt={`${name} icon`}
                        />
                    </div>
                    <div className="flex items-center">
                        <h4 className="text-md font-semibold">{name}</h4>
                    </div>

                </div>

                <div className="grid grid-cols-1 w-full">
                    <div className="flex justify-end  items-center">
                        <span className="text-md flex items-center justify-center font-bold text-zinc-800 dark:text-gray-100 ml-2">{priceValue}</span>
                        <div className={`text-sm ${pChangeValue > 0 ? "text-green-500" : "text-red-500"} flex ml-2
                         text-xs font-medium me-2 px-2.5 py-0.5 rounded-2xl
                        ${pChangeValue > 0 ? "bg-green-200 dark:bg-green-900" : "bg-red-200 dark:bg-red-900"}`}>
                            {changeValue > 0 ?
                                <TrendingUp className="text-green-500" size={20} strokeWidth={2} absoluteStrokeWidth /> :
                                <TrendingDown className="text-red-500" size={20} strokeWidth={2} absoluteStrokeWidth />
                            }
                            <span className="ml-2 flex items-center">
                                {pChangeValue > 0 ? "+" : ""}
                                {pChangeValue}%
                            </span>

                        </div>
                    </div>
                </div>

            </div>

            <IndexCardTimeFrame
                setRange={setRange}
                setInterval={setInterval}
            />
            <IndexChart
                change={changeValue}
                symbol={groww_symbol}
                range={range}
                interval={interval}
                setChangeValue={setChangeValue}
                setPChangeValue={setPChangeValue}
                setPriceValue={setPriceValue}
            />
        </div>
    )
}
