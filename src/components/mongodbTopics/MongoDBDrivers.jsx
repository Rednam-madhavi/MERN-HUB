import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBDrivers = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (codeSnippet, type) => {
        try {
            clipboard.copy(codeSnippet);
            setCopied((prevState) => ({
                ...prevState,
                [type]: true,
            }));

            setTimeout(() => {
                setCopied((prevState) => ({
                    ...prevState,
                    [type]: false,
                }));
            }, 2000);
        } catch (error) {
            console.error("Failed to copy to clipboard:", error);
        }
    };

    // Code snippet for copying
    const driversList = `
  MongoDB Drivers:
  - C
  - C++
  - C#
  - Go
  - Java
  - Node.js
  - PHP
  - Python
  - Ruby
  - Rust
  - Scala
  - Swift
  
  Community supported libraries: https://www.mongodb.com/docs/drivers/
  `;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The MongoDB Shell (<code>mongosh</code>) is great, but generally you will need to use MongoDB in your application. To do this, MongoDB has many language drivers.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The language drivers allow you to interact with your MongoDB database using the methods you've learned so far in <code>mongosh</code> but directly in your application.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Officially Supported MongoDB Drivers</h2>
            <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg">
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>Go</li>
                <li>Java</li>
                <li>Node.js</li>
                <li>PHP</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>Rust</li>
                <li>Scala</li>
                <li>Swift</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Community Supported Libraries</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                There are also other community-supported libraries available. You can find more details and documentation at the following link:
            </p>
            <a
                href="https://www.mongodb.com/docs/drivers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
            >
                MongoDB Drivers Documentation
            </a>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">MongoDB Drivers List</h2>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{driversList}</code>
                <button
                    onClick={() => handleCopy(driversList, 'driversList')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy MongoDB Drivers List"
                >
                    {copied.driversList ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Next Step</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Let's see how to use these drivers using Node.js in the next section.
            </p>
        </div>
    );
};

export default MongoDBDrivers;
