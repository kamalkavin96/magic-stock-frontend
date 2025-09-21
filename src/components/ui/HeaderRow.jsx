import { Link } from "react-router-dom";

export default function HeaderRow({ header, linkText = null, link = null, children }) {
    return (
        <div className="flex justify-between m-2">
            <div className="grid grid-cols-1 items-center">
                <h4 className="text-xl font-semibold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
                    {header}
                </h4>

                <div className="flex mt-2">
                    {children}
                </div>


            </div>
            {linkText && link ? (
                <div className="flex justify-end">
                    <Link to={link} className="text-sm flex items-center justify-checked text-blue-500 hover:text-blue-700">
                        {linkText}
                    </Link>
                </div>
            ) : (
                <div />
            )}
        </div>

    );
}
