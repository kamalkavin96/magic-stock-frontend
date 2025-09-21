import {
  Menu as MenuIcon, BarChart2, TrendingUp, Users, PieChart, Settings, Radar, Gem,
  Home, LineChart, Flame, Newspaper, Handshake, Activity, Layers, Landmark, Banknote,
  User, GraduationCap, Eye, Bell, StickyNote, ClipboardList, Star, Calendar, Shield, CandlestickChart
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Stocks",
    icon: CandlestickChart,
    submenu: [
      { label: "Market Home", path: "/market/market-home", icon: Home },
      { label: "Indices", path: "/market/indices", icon: LineChart },
      { label: "Stocks", path: "/market/stocks", icon: Flame },
      { label: "News & Updates", path: "/market/news-updates", icon: Newspaper },
      { label: "Deals", path: "/market/deals", icon: Handshake },
      {label: "Corprate Actions", path: "/market/corp-actions", icon: Users},
      { label: "FII / DII Activity", path: "/market/fii-dii-activity", icon: Activity },
      { label: "Sectors", path: "/market/sectors", icon: Layers },
      {label: "Screener", path: "/market/screener", icon: Radar},
      { label: "IPO", path: "/market/ipo", icon: Landmark },
      { label: "Investors", path: "/market/investors", icon: User },
      { label: "SME Zone", path: "/market/sme-zone", icon: ClipboardList },
      { label: "Learn", path: "/market/learn", icon: GraduationCap },
    ],
  },
  {
    label: "Bonds",
    icon: Landmark,
    submenu: [
      { label: "Government", path: "/bonds/goverment", icon: BarChart2 },
      { label: "Corporate", path: "/bonds/corporate", icon: TrendingUp },
      { label: "Bond Yields", path: "/bonds/yields", icon: PieChart },
      { label: "New Issues", path: "/bonds/issues", icon: PieChart },
    ],
  },
  {
    label: "Gold",
    icon: Gem,
    submenu: [
      { label: "Overview", path: "/gold/overview", icon: BarChart2 },
      { label: "Physical Gold", path: "/gold/physical", icon: TrendingUp },
      { label: "Digital Gold", path: "/gold/digital", icon: PieChart },
      { label: "Gold ETFs", path: "/gold/etf", icon: PieChart },
      { label: "Sovereign Gold Bonds", path: "/gold/sovereign-gold-bonds", icon: PieChart },
    ],
  },
  {
    label: "ETF",
    icon: Eye,
    submenu: [
      { label: "Watchlist", path: "/myse/watchlist", icon: Eye },
      { label: "Alerts", path: "/myse/alerts", icon: Bell },
      { label: "Notes", path: "/myse/notes", icon: StickyNote },
    ],
  },
  {
    label: "Mutual Funds",
    icon: PieChart,
    submenu: [
      { label: "MF Overview", path: "/mf/overview", icon: PieChart },
      { label: "Top Funds", path: "/mf/top-funds", icon: Star },
      { label: "SIP Tracker", path: "/mf/sip-tracker", icon: Calendar },
    ],
  },
  {
    label: "Fixed Deposits",
    icon: Banknote,
    submenu: [
      { label: "Overview", path: "/fd/overview", icon: PieChart },
      { label: "Bank FDs", path: "/fd/bank-fd", icon: Star },
      { label: "Corporate FDs", path: "/fd/corp-fd", icon: Calendar },
      { label: "FD Calculator", path: "/fd/fd-calc", icon: Calendar },
      { label: "Best Rates", path: "/fd/best-rate", icon: Calendar },
    ],
  },
  {
    label: "Real Estate",
    icon: Banknote,
    submenu: [
      { label: "Overview", path: "/real-estate/overview", icon: PieChart },
      { label: "REITs", path: "/real-estate/reits", icon: Star },
      { label: "Property Index", path: "/real-estate/property-index", icon: Calendar },
      { label: "Market Trends", path: "/real-estate/market-trends", icon: Calendar },
    ],
  },
  {
    label: "My SE",
    icon: Settings,
    submenu: [
      { label: "Account", path: "/settings/account", icon: User },
      { label: "Preferences", path: "/settings/preferences", icon: ClipboardList },
      { label: "Security", path: "/settings/security", icon: Shield },
      { label: "Watchlist", path: "/myse/watchlist", icon: Eye },
      { label: "Alerts", path: "/myse/alerts", icon: Bell },
      { label: "Notes", path: "/myse/notes", icon: StickyNote },
    ],
  },
];

const SidebarMenuItem = ({
  label, Icon, submenu, isOpen, setOpenMenu, openSubMenu, setOpenSubMenu, lowScreen, setOpenSideBar, hoverSideBar, openSideBar
}) => {
  const toggleMenu = () => setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <li key={label}>
      <button
        className={`text-balance flex items-center w-full px-2 h-10 py-1.5 text-left  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700
          ${isOpen ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900"}
          `}
        onClick={toggleMenu}
      >
        <Icon size={18} />
        {(openSideBar || hoverSideBar) && (
          <>
            <span className="ml-3 flex-1">{label}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <div className={`transition-all duration-300 overflow-hidden ${isOpen && (openSideBar || hoverSideBar) ? "max-h-[1000px]" : "max-h-0"}`}>
        <ul className="ml-6 mt-1 space-y-1">
          {submenu.map(({ label: subLabel, path, icon: SubIcon }) => (
            <li key={subLabel} className={`text-sm ${openSubMenu === subLabel ? "bg-gray-100 dark:bg-gray-700 rounded-lg text-blue-500" : "dark:text-gray-300"}`}>
              <Link
                to={path}
                className="font-light flex items-center px-2 py-1 text-sm rounded  hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => {
                  setOpenSubMenu(subLabel);
                  if (lowScreen) setOpenSideBar(false);
                }}
              >
                <SubIcon size={16} />
                <span className="ml-3 flex-1">{subLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const AppLeftPanel = ({ openSideBar, setOpenSideBar, hoverSideBar, setHoverSideBar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [lowScreen, setLowScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setLowScreen(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <>
      <nav
        className={`fixed top-0  left-0 z-40 h-screen mt-16 bg-white border-r border-gray-200 dark:bg-black ${lowScreen && openSideBar === false ? "dark:border-hidden border-hidden" : "dark:border-gray-700" } transition-all duration-300 ease-in-out
        ${openSideBar ? "w-64 md:w-64" : "w-0 lg:w-16 lg:hover:w-64"}`}
        role="navigation"
        aria-label="Sidebar"
        onMouseEnter={() => setHoverSideBar(true)}
        onMouseLeave={() => setHoverSideBar(false)}
      >
        <div className={`h-full px-3 pb-60 mt-4 scrollbar-thin overflow-y-auto ${lowScreen && openSideBar === false ? "hidden" : "" }`}>
          <ul className="space-y-2 font-medium">
            {menuItems.map(({ label, icon, submenu }) => (
              <SidebarMenuItem
                key={label}
                label={label}
                Icon={icon}
                submenu={submenu}
                isOpen={openMenu === label}
                setOpenMenu={setOpenMenu}
                openSubMenu={openSubMenu}
                setOpenSubMenu={setOpenSubMenu}
                lowScreen={lowScreen}
                setOpenSideBar={setOpenSideBar}
                hoverSideBar={hoverSideBar}
                openSideBar={openSideBar}
              />
            ))}
          </ul>
        </div>
      </nav>

      {openSideBar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="fixed inset-0 bg-black opacity-50 dark:opacity-80 z-30 lg:hidden"
        />
      )}
    </>
  );
};

export default AppLeftPanel;
