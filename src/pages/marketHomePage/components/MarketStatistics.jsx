import {
  ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, BarChart, PieChart, Activity,
  Rocket, AlertTriangle, CalendarArrowDown, Target, CalendarArrowUp, ArrowDownToLine, ArrowUpToLine
} from "lucide-react";

const marketStats = {
  totalStocks: 2986,
  advancers: 2341,
  decliners: 530,
  unchanged: 15,
  newHigh: 186,
  newLow: 42,
  upperCircuit: 24,
  lowerCircuit: 18
};

const cardItem = (icon, label, value, index, totalItems, columns = 4) => {
  const isLastColumn = (index + 1) % columns === 0;
  const isLastRow = index >= totalItems - columns;

  return (
    <div
      key={label}
      className={`py-4 px-4 border-gray-300 dark:border-gray-700`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 h-full gap-2">
        <div className="p-2 flex items-center justify-center">{icon}</div>
        <div className="grid grid-rows-2 items-center gap-2 justify-center">
          <div className="flex items-center justify-center text-center h-full">
            <span className="text-md text-muted-foreground text-nowrap">{label}</span>
          </div>
          <p className="text-sm flex items-center justify-center">{value}</p>
        </div>
      </div>
    </div>
  );
};

export function MarketStatistics1() {
  const items = [
    { icon: <Target className="text-blue-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "Total Stocks", value: marketStats.totalStocks },
    { icon: <TrendingUp className="text-green-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "Advance", value: marketStats.advancers },
    { icon: <TrendingDown className="text-red-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "Decline", value: marketStats.decliners },
    { icon: <AlertTriangle className="text-orange-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "No Change", value: marketStats.unchanged },
  ];

  return (
    <div className="shadow-md rounded-2xl w-full dark:text-gray-100 bg-white dark:bg-gray-900 dark:border-1 dark:border-gray-700 overflow-hidden">
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {items.map((item, index) => cardItem(item.icon, item.label, item.value, index, items.length, 4))}
      </div>
    </div>
  );
}

export function MarketStatistics2() {
  const items = [
    { icon: <CalendarArrowUp className="text-green-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "52w High", value: marketStats.newHigh },
    { icon: <CalendarArrowDown className="text-red-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "52w Low", value: marketStats.newLow },
    { icon: <ArrowUpToLine className="text-green-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "Upper Circuit", value: marketStats.upperCircuit },
    { icon: <ArrowDownToLine className="text-red-500" size={20} strokeWidth={2} absoluteStrokeWidth />, label: "Lower Circuit", value: marketStats.lowerCircuit },
  ];

  return (
    <div className="shadow-md rounded-2xl w-full dark:text-gray-100 bg-white dark:bg-gray-900 dark:border-1 dark:border-gray-700 overflow-hidden">
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {items.map((item, index) => cardItem(item.icon, item.label, item.value, index, items.length, 4))}
      </div>
    </div>
  );
}
