// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import App from "../App";
import MarketHomePage from "../pages/MarketHomePage";
import IndicesPage from "../pages/IndicesPage";
import NewsAndUpdatesPage from "../pages/NewsAndUpdatesPage";
import StockPage from "../pages/StockPage";
import SectorPage from "../pages/SectorPage";
import IndicesDetailsPage from "../pages/IndicesDetailsPage";
import StockDetailPage from "../pages/StockDetailPage";
import MarketHomeIndex from "../pages/marketHomePage/MarketHomeIndex";
import BankFDPage from "../pages/fixedDeposits/bankFdsPage/BankFdsPage";
import ScreenerPage from "../pages/screeners/ScreenerPage";
import IndustriesPage from "../pages/IndustriesPage";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-150 bg-gray-100 dark:bg-gray-900 text-center p-4">
            <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
                404 - Page Not Found
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                The page you are looking for does not exist.
            </p>
            <div className="flex space-x-4">
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
                >
                    Go Back
                </button>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
}

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="/market">
                <Route path="stock-detail" element={<StockDetailPage></StockDetailPage>}></Route>
                <Route path="market-home" element={<MarketHomeIndex />} />
                <Route path="indices" >
                    <Route index element={<IndicesPage />}></Route>
                    <Route path=":indexName" element={<IndicesDetailsPage />} />
                    <Route path=":indexName/:stockName" element={<StockDetailPage />} />
                </Route>
                <Route path="news-updates" element={<NewsAndUpdatesPage />} />
                <Route path="stocks" >
                    <Route index element={<StockPage />}></Route>
                    <Route path=":stockName" element={<StockDetailPage />} />
                </Route>
                <Route path="sectors">
                    <Route index element={<SectorPage />}></Route>
                    <Route path=":sectorName" element={<IndustriesPage />} />
                </Route>
                <Route path="screener" element={<ScreenerPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/fd">
                <Route path="bank-fd" element={<BankFDPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
);

export default AppRoutes;
