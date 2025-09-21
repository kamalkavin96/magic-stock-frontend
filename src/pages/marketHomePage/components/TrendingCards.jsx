function TrendingTable({ title, data }) {
    return (
        <div className=" rounded-2xl shadow-md p-4 bg-white dark:bg-gray-900 rounded w-full dark:border-1 dark:border-gray-700">
            {/* <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h2> */}
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <tr>
                        <th className="px-2 py-2 truncate">Name</th>
                        <th className="px-2 py-2 truncate">Price</th>
                        <th className="px-2 py-2 truncate">Change (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-2 py-3 text-nowrap">{row.name}</td>
                            <td className="px-2 py-3">{row.price}</td>
                            <td className={`px-2 py-3 text-right font-medium ${row.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {row.change > 0 ? '+' : ''}{row.change.toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Wrappers for specific types
export function TrendingSector() {
    const data = [
        { name: "Auto", price:1000, change: 1.25 },
        { name: "IT", price:1000, change: -0.58 },
        { name: "FMCG", price:1000, change: 0.92 },
        { name: "Pharma", price:1000, change: -1.05 },
        { name: "Realty", price:1000, change: 1.88 },
    ];
    return <TrendingTable title="Trending Sectors" data={data} />;
}

export function TrendingIndustry() {
    const data = [
        { name: "Steel", price:1000, change: 2.1 },
        { name: "Banks", price:1000, change: -1.3 },
        { name: "Telecom", price:1000, change: 0.7 },
        { name: "Infrastructure", price:1000, change: 1.2 },
        { name: "Energy", price:1000, change: -0.4 },
    ];
    return <TrendingTable title="Trending Industries" data={data} />;
}

export function TrendingIndices() {
    const data = [
        { name: "Nifty 50", price:1000, change: 0.65 },
        { name: "Bank Nifty", price:1000, change: -0.45 },
        { name: "Nifty IT", price:1000, change: 1.1 },
        { name: "Nifty Pharma", price:1000, change: 0.5 },
        { name: "Nifty FMCG", price:1000, change: -0.2 },
    ];
    return <TrendingTable title="Trending Indices" data={data} />;
}
