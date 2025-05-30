import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MathJS = () => {
    const clipboard = useClipboard();
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (code, index) => {
        clipboard.copy(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const codeSnippets = [
        {
            label: 'Math.random()',
            code: `console.log(Math.random());\n// Output: a random number between 0 and 1 (e.g. 0.3456)`
        },
        {
            label: 'Math.floor()',
            code: `console.log(Math.floor(3.8));\n// Output: 3`
        },
        {
            label: 'Math.ceil()',
            code: `console.log(Math.ceil(3.2));\n// Output: 4`
        },
        {
            label: 'Math.max() & Math.min()',
            code: `console.log(Math.max(3, 5, 7, 9));\n// Output: 9\nconsole.log(Math.min(3, 5, 7, 9));\n// Output: 3`
        },
        {
            label: 'Math.PI & Math.E',
            code: `console.log(Math.PI);\n// Output: 3.141592653589793\nconsole.log(Math.E);\n// Output: 2.718281828459045`
        }
    ];

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The JavaScript <code>Math</code> object provides a wide range of mathematical operations and constants. It's commonly used for generating random numbers, performing rounding operations, and accessing constants like <code>π</code> and <code>e</code>.
            </p>

            <div className="space-y-6">
                {codeSnippets.map((snippet, index) => (
                    <div key={index} className="space-y-2">
                        <h2 className="text-lg sm:text-xl font-semibold">{snippet.label}</h2>
                        <div className="relative">
                            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                                {snippet.code}
                            </pre>
                            <button
                                onClick={() => handleCopy(snippet.code, index)}
                                className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                {copiedIndex === index ? (
                                    <CheckIcon className="h-6 w-6 text-green-500" />
                                ) : (
                                    <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Number
            </p>
        </div>
    );
};

export default MathJS;
