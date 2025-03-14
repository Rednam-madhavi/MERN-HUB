import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-4 border-t border-gray-800 shadow-md text-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
                {/* Social Media Links */}
                <div className="flex gap-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaGithub /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaTwitter /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaInstagram /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaLinkedin /></a>
                </div>
                
                {/* Copyright */}
                <div className="text-gray-600 mt-2 md:mt-0">
                    &copy; {new Date().getFullYear()} Rednam Madhavi. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;