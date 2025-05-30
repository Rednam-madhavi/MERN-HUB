import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const HistoryObject = () => {
    const clipboard = useClipboard();
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = (code) => {
        clipboard.copy(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const codeSnippets = {
        pushState: `history.pushState(null, null, "https://www.example.com");`,
        back: `history.back();`,
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The JavaScript <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">history</code> object is a part of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">window</code> object and provides access to the browser's history. It allows developers to manipulate the browser's history and change the current URL without reloading the page.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Using <code>pushState()</code></h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">pushState()</code> method adds a new entry to the browser's history and changes the URL without reloading the page.
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                        {codeSnippets.pushState}
                    </pre>
                    <button
                        onClick={() => handleCopy(codeSnippets.pushState)}
                        className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        {copiedCode === codeSnippets.pushState ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                        ) : (
                            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Using <code>replaceState()</code></h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">replaceState()</code> method works similarly but replaces the current entry instead of adding a new one.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Navigating History: <code>back()</code> and <code>forward()</code></h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    You can navigate through the browser's history using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">back()</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">forward()</code> methods.
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                        {codeSnippets.back}
                    </pre>
                    <button
                        onClick={() => handleCopy(codeSnippets.back)}
                        className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        {copiedCode === codeSnippets.back ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                        ) : (
                            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Checking History Length</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">history.length</code> property returns the number of entries in the session history.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Limitations</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The history object can only manipulate entries within the same origin. It’s also part of the HTML5 spec, so check browser compatibility before using it.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The JavaScript <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">history</code> object is vital for building SPAs and enhancing UX. Understand its methods and limitations to use it effectively.
                </p>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Navigator Object
            </p>
        </div>
    );
};

export default HistoryObject;
