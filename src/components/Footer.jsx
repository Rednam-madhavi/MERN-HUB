import React from "react";
import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 border-t border-gray-500">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">

                {/* Social Icons */}
                <div className="flex gap-6 mb-4 md:mb-0">
                    <a
                        href="https://github.com/Rednam-madhavi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-600 dark:text-white hover:text-gray-950 dark:hover:text-gray-100 hover:scale-125 transition-colors duration-300 text-3xl"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://wa.me/+919100736575"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-gray-600 dark:text-white hover:text-green-600 dark:hover:text-green-600  hover:scale-125 transition-colors duration-300 text-3xl"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="mailto:rednammadhavi@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="text-gray-600 dark:text-white hover:text-red-600 dark:hover:text-red-600 hover:scale-125 transition-colors duration-300 text-3xl"
                    >
                        <FaEnvelope />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/rednam-naga-madhavi-242825318/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-700  hover:scale-125 transition-colors duration-300 text-3xl"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* Copyright Text */}
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Rednam Madhavi. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
