import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const Notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[83.2vh] bg-white dark:bg-gray-900 dark:text-white px-4 text-center">
            <h1 className="text-9xl  font-extrabold text-gray-800 dark:text-gray-200 animate-pulse">404</h1>
            <p className="text-lg text-gray-600 mt-2 dark:text-gray-400">Oops! The page you are looking for does not exist.</p>
            <Link
                to="/"
                className="mt-6 flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
                <FiHome className="text-xl" />
                Go to Home
            </Link>
        </div>
    );
};

export default Notfound;
