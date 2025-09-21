import SearchBox from "../ui/SearchBox";
import ThemeToggle from "./ThemeToggle";


const AppNavBar = ({ toggleSidebar }) => (
  <nav className="fixed mb-4 top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out">
    <div className="pr-3 py-2">
      <div className="flex justify-between items-center">

        {/* Left: Sidebar toggle + Logo */}
        <div className="flex items-center">

          <button
            onClick={toggleSidebar}
            className="mx-5 inline-flex items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z"
              />
            </svg>
          </button>

          <span className="ml-2 text-xl ps-2 font-bold 
          bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            MagicStock
          </span>

        </div>
        <div className="me-10 flex items-center justify-center">
          <ThemeToggle></ThemeToggle>
        </div>
        {/* Right: Search Box */}
        <div className="me-10">
          <SearchBox />
        </div>
      </div>
    </div>
  </nav>
);
export default AppNavBar;
