import HeaderRow from "../../components/ui/HeaderRow";
import IndexCard from "./components/IndexCard";
import { MarketStatistics1, MarketStatistics2 } from "./components/MarketStatistics";
import TrendingCard from "./components/TrendingCard";
import { TrendingIndices, TrendingIndustry, TrendingSector } from "./components/TrendingCards";




export default function MarketHomeIndex() {


    const indicesData = [
        {
            name: "Nifty 50",
            symbol: "NIFTY 50",
            groww_symbol: "NIFTY",
            iconName: "nifty",
            exchange: "nse"
        },
        {
            name: "Bank Nifty",
            symbol: "BANKNIFTY",
            groww_symbol: "BANKNIFTY",
            iconName: "nifty",
            exchange: "nse"
        },
        {
            name: "Sensex",
            symbol: "NIFTY",
            groww_symbol: "NIFTY",
            iconName: "bse",
            exchange: "bse"
        },
    ];

    return (
        <div className="space-y-6 pb-100">

            <HeaderRow header={"Market Overview"} link={"/market/indices"} linkText={"View All"} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {indicesData.map((index, i) => (
                    <IndexCard key={i} {...index} />
                ))}
            </div>

            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                    <HeaderRow header={"Market Breadth"} />
                    <MarketStatistics1 />
                </div>
                <div>
                    <HeaderRow header={"Market Statistics"} />
                    <MarketStatistics2 />
                </div>
            
           
            </div>
           
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <HeaderRow header={"Trending Sector"} link={"/market/sectors"} linkText={"View All"} />
                    <TrendingSector></TrendingSector>
                </div>
                <div>
                    <HeaderRow header={"Trending Industry"} link={"/market/sectors"} linkText={"View All"} />
                    <TrendingIndustry></TrendingIndustry>
                </div>
                <div>
                    <HeaderRow header={"Trending Indices"} link={"/market/indices"} linkText={"View All"} />
                    <TrendingIndices></TrendingIndices>
                </div>
            </div>


        </div>
    );
}