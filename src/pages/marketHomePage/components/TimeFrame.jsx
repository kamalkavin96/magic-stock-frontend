import { useEffect, useState } from "react"

export function IndexCardTimeFrame({ setRange, setInterval }) {

    const [selectedRange, setSelectedRange] = useState("1d")
    const timeFrame = [
        { label: "1d", range: "1day", interval: "5min" },
        { label: "1w", range: "1week", interval: "2hour" },
        { label: "1m", range: "1month", interval: "1day" },
        { label: "3m", range: "3month", interval: "1day" },
        { label: "6m", range: "6month", interval: "1day" },
        { label: "1y", range: "1year", interval: "1week" },
        { label: "3y", range: "3year", interval: "2week" },
        { label: "5y", range: "5year", interval: "3week" },
        { label: "All", range: "30year", interval: "1month" },
    ]
    return (
        <ul className="grid grid-cols-9 text-sm font-medium text-center text-gray-700 dark:text-gray-100 shadow-sm border border-gray-700 divide-x divide-gray-700">
            {timeFrame.map((period, index) => (
                <li
                    className={`cursor-pointer ${selectedRange === period.label ? "bg-gray-200 text-gray-900" : ""}`}
                    key={period.label}
                    onClick={() => {
                        setSelectedRange(period.label)
                        setRange(period.range)
                        setInterval(period.interval)
                    }}>
                    <span
                        onClick={() => {
                            setRange(period.range)
                            setInterval(period.interval)
                        }}
                        className={`inline-block w-full py-1 focus:ring-2 focus:ring-blue-300 focus:outline-none`}
                        aria-current={index === 0 ? "page" : undefined}
                    >
                        {period.label}
                    </span>
                </li>
            ))}
        </ul>
    )
}
