import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TrendingTable(
    { data, imageKey = null, linkKey = null, baseImageUrl = "", linkBasePath = "" }
) {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setColumns(Object.keys(data[0]));
        }
    }, [data]);

    if (!data || data.length === 0) {
        return <p className="text-gray-500 p-4">No data available.</p>;
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-100">
                    <tr>
                        {columns.map((col) => (
                            <th key={col} className="px-4 py-3">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr
                            key={i}
                            className="bg-white border-b hover:bg-gray-50 transition border-gray-100"
                        >
                            {columns.map((col) => (
                                <td key={col} className="px-4 py-3">
                                    {col === imageKey ? (
                                        <img
                                            src={`${baseImageUrl}/${row[col]}.png`}
                                            alt={row[col]}
                                            className="w-10 h-10 rounded-full"
                                        />
                                    ) : col === linkKey ? (
                                        <Link to={`${linkBasePath}/${row[col]}`} className="text-blue-600 hover:underline">
                                            {row[col]}
                                        </Link>
                                    ) : (
                                        row[col]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
