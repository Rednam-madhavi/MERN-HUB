import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Date = () => {
    const clipboard = useClipboard();
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = (code) => {
        clipboard.copy(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const code1 = `var currentDate = new Date();
console.log(currentDate);`;

    const code2 = `var date = new Date();
date.setDate(15);
date.setFullYear(2022);
console.log(date);`;

    const code3 = `var date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                JavaScript's <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Date</code> object allows you to work with dates and times in your scripts.
                It can be used to get the current date and time, or to manipulate and format them in various ways.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Creating a Date Object</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    You can create a date object using <code>new Date()</code>. Here's an example:
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-md text-sm sm:text-base overflow-x-auto border border-gray-300 dark:border-gray-700">
                        {code1}
                    </pre>
                    <button
                        onClick={() => handleCopy(code1)}
                        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        {copiedCode === code1 ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                        ) : (
                            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>

                <p className="text-sm sm:text-base md:text-lg">
                    <strong>Output:</strong> Thu Jan 14 2021 15:15:38 GMT+0530 (India Standard Time)
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Manipulating Dates</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    You can change date values using methods like <code>setDate()</code> and <code>setFullYear()</code>:
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-md text-sm sm:text-base overflow-x-auto border border-gray-300 dark:border-gray-700">
                        {code2}
                    </pre>
                    <button
                        onClick={() => handleCopy(code2)}
                        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        {copiedCode === code2 ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                        ) : (
                            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>

                <p className="text-sm sm:text-base md:text-lg">
                    <strong>Output:</strong> Sat Jan 15 2022 15:15:38 GMT+0530 (India Standard Time)
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Formatting Dates</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Use <code>toLocaleString()</code> to format dates and specify time zones:
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-md text-sm sm:text-base overflow-x-auto border border-gray-300 dark:border-gray-700">
                        {code3}
                    </pre>
                    <button
                        onClick={() => handleCopy(code3)}
                        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        {copiedCode === code3 ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                        ) : (
                            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>

                <p className="text-sm sm:text-base md:text-lg">
                    <strong>Output:</strong> <br />
                    1/14/2021, 3:45:38 PM <br />
                    1/14/2021, 10:15:38 AM (UTC)
                </p>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Math
            </p>
        </div>
    );
};

export default Date;
