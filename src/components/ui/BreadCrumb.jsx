import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const getSegmentName = (segment) => {
    const decoded = decodeURIComponent(segment);
    return decoded
      .replace(/[-_]/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="w-full px-4 py-2 my-4 border-1 border-gray-200 rounded-md bg-white dark:bg-gray-900 dark:border-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse border-red-300">
        <li>
          <Link
            to="/"
            className="flex items-center text-sm font-medium dark:text-gray-100 text-gray-900 hover:text-blue-400 py-1 rounded-md transition-colors"
          >
            <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const path = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={path} className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 dark:text-gray-100 text-gray-900 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>

              {isLast ? (
                <span className="text-sm font-semibold text-blue-500 px-3 py-1 rounded-md">
                  {getSegmentName(segment)}
                </span>
              ) : (
                <Link
                  to={path}
                  className="text-sm font-medium dark:text-gray-100 text-gray-900 hover:text-blue-400 px-3 py-1 rounded-md transition-colors"
                >
                  {getSegmentName(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
