import React from 'react';
import { Link } from 'react-router-dom';
import '/src/App.css';

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row justify-between bg-white p-3 text-black border-b border-gray-800 shadow-lg sticky top-0 z-50">
            <Link to="/" className="font-semibold text-xl cursor-pointer p-2 whitespace-nowrap">
                MERN<span className="font-light">Hub</span>
            </Link>

            <div className="w-full md:w-auto overflow-x-auto custom-scrollbar">
                <ul className="flex gap-4 whitespace-nowrap px-3">
                    {['html', 'css', 'javascript', 'bootstrap', 'tailwindCss', 'react', 'node.js', 'express', 'mongodb', 'next.js'].map((item) => (
                        <Link key={item} to={`/${item}`}>
                            <li className="cursor-pointer rounded-lg hover:bg-gray-600 hover:text-white px-3 py-2 transition-all">
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
