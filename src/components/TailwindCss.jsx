import React from "react";
import { SiTailwindcss } from "react-icons/si";

const TailwindCss = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[83.2vh] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md text-center  flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105">
        <SiTailwindcss className="text-teal-500 mb-4" size={150} />
        <h1 className="text-3xl font-bold mb-2">Tailwind CSS</h1>
        <p className="text-lg text-center max-w-md mb-6 text-gray-700 dark:text-gray-300">
          A utility-first CSS framework packed with classes to build modern and responsive designs quickly.
        </p>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold bg-blue-500 dark:bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-transform transform hover:scale-105"
        >
          Visit Tailwind CSS
        </a>
      </div>
    </div>
  );
};

export default TailwindCss;