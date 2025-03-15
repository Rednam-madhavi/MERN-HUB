import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaHome, FaSun, FaMoon, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";
import '/src/App.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const menuItems = [
        { name: 'html', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'css', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'javascript', icon: <FaJs className="text-yellow-500" /> },
        { name: 'bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
        { name: 'tailwindCss', icon: <SiTailwindcss className="text-teal-500" /> },
        { name: 'react', icon: <FaReact className="text-blue-400" /> },
        { name: 'node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'express', icon: <SiExpress className="text-black dark:text-white " /> },
        { name: 'mongodb', icon: <FaDatabase className="text-green-700" /> },
        { name: 'next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> }
    ];

    return (
        <>
            <nav className="flex justify-between items-center bg-white dark:bg-gray-900 py-3 px-6 text-black dark:text-white sticky top-0 z-50 shadow-md">

                <Link to="/" className="font-semibold text-xl cursor-pointer flex items-center">
                    <FaHome size={24} className='mr-1' />MERN<span className="font-light">Hub</span>
                </Link>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full transition-all duration-300 focus:outline-none"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? <FaSun className="text-white" size={26} /> : <FaMoon className="text-gray-900" size={26} />}
                </button>

            </nav>

            <div className="w-full overflow-x-auto custom-scrollbar flex justify-center bg-white dark:bg-gray-900 p-3 text-black dark:text-white border-b border-gray-300 dark:border-gray-700 shadow-lg sticky top-0 z-50">

                <ul className="flex gap-4 px-3">
                    {menuItems.map((item) => (
                        <Link key={item.name} to={`/${item.name}`} className="px-3 py-2 flex items-center gap-1 rounded-lg transition-colors duration-300 hover:scale-125">
                            {item.icon}
                            <li className="whitespace-nowrap">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
                        </Link>
                    ))}
                </ul>

            </div>


        </>
    );
};

export default Navbar;
