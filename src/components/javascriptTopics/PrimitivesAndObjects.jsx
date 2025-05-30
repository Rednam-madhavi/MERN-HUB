import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const PrimitivesAndObjects = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const codeSnippet = `let x = 10;
x = 20; // x is now 20

let obj = { name: "John", age: 30 };
obj.age = 31; // the age property of obj is now 31`;

    const handleCopy = () => {
        clipboard.copy(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                In JavaScript, data types fall into two major categories: <strong>Primitives</strong> and <strong>Objects</strong>.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Primitives</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Primitives are the most basic data types in JavaScript. They include:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-sm sm:text-base md:text-lg">
                    <li>Numbers (e.g. <code>10</code>, <code>3.14</code>)</li>
                    <li>Strings (e.g. <code>"hello"</code>, <code>'world'</code>)</li>
                    <li>Booleans (<code>true</code>, <code>false</code>)</li>
                    <li>Null (absence of value)</li>
                    <li>Undefined (uninitialized value)</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg">
                    Primitives are <strong>immutable</strong>, which means their values cannot be changed once created.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Objects</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Objects are more complex and represent real-world entities or abstract data structures. They are composed of key-value pairs, where values can be any type (even other objects).
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                    Unlike primitives, <strong>objects are mutable</strong>. Their properties can be changed or updated after creation.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Example</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Below is an example showing how primitives and objects behave:
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                        {codeSnippet}
                    </pre>
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        {copied ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                        ) : (
                            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Primitives</strong> are simple and immutable, while <strong>objects</strong> are more powerful, flexible, and mutable. Understanding these differences helps you write more effective and predictable JavaScript code.
                </p>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Operators and Expressions
            </p>
        </div>
    );
};

export default PrimitivesAndObjects;
