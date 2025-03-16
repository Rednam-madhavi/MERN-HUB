import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaHome, FaSun, FaMoon, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";

const Navbar = ({ setIsSidebarOpen }) => {
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem("theme") === "dark");
    const location = useLocation();

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

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className='sticky top-0 z-50'>
            <nav className="flex justify-around items-center bg-white dark:bg-gray-900 py-2 px-6 text-black dark:text-white shadow-md">

                {/* Home Link */}
                <Link to="/" className="font-semibold text-xl flex items-center">
                    <FaHome size={24} className='mr-1' />MERN<span className="font-light">Hub</span>
                </Link>

                <div className="flex items-center">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full transition-all duration-300 focus:outline-none"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <FaSun className="text-white" size={20} /> : <FaMoon className="text-gray-900" size={20} />}
                    </button>

                    {/* Sidebar Menu Button - Hidden on Home Page */}
                    {location.pathname !== "/" && (
                        <button
                            className="md:hidden text-black dark:text-white p-2 rounded-md font-bold"
                            onClick={() => setIsSidebarOpen(prev => !prev)}
                        >
                            <FiMenu size={24} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Horizontal Scrollable Menu */}
            <div className="w-full overflow-x-auto custom-scrollbar bg-white dark:bg-gray-900 p-3 text-black dark:text-white border-b border-gray-300 dark:border-gray-700 shadow-lg">
                <ul className="flex flex-nowrap gap-4 px-2 min-w-max justify-center">
                    {menuItems.map((item) => (
                        <Link key={item.name} to={`/${item.name}`} className="px-3 py-2 flex items-center gap-1 rounded-lg transition-transform duration-300 hover:scale-125">
                            {item.icon}
                            <li className="whitespace-nowrap">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
