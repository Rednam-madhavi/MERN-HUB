import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Example from '../../assets/css/mediaqueries1.webp';
import Output1 from '../../assets/css/mediaqueries2.webp';
import Output2 from '../../assets/css/mediaqueries3.webp';

const CSSMediaQueries = () => {
    const [copied, setCopied] = useState(null);
    const clipboard = useClipboard();

    const handleCopy = (code, id) => {
        clipboard.copy(code);
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
    };

    const mediaQueryCode = `@media (max-width: 800px) {
  body {
    background-color: lightblue;
  }
}`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                CSS Media Queries are used to apply different styles depending on the device's screen size or other features, making your website responsive.
            </p>

            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Media Query Example</h2>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{mediaQueryCode}</pre>
                    <button
                        onClick={() => handleCopy(mediaQueryCode, 1)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 1 ? (
                            <CheckIcon className="w-5 h-5 text-green-500" />
                        ) : (
                            <ClipboardIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>

                <h3 className="text-md font-medium">Example:</h3>
                <img
                    src={Example}
                    alt="Media Query Example Code"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />

                <h3 className="text-md font-medium">Output (Default):</h3>
                <img
                    src={Output1}
                    alt="Media Query Output - Default"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />

                <h3 className="text-md font-medium">Output when screen ≤ 800px:</h3>
                <img
                    src={Output2}
                    alt="Media Query Output - Condition True"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            <div className="py-4 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Why Use Media Queries?</h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
                    <li>To create responsive layouts for different devices.</li>
                    <li>To apply styles conditionally based on screen size, resolution, or orientation.</li>
                    <li>To improve user experience on all devices.</li>
                </ul>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
                Next Chapter: CSS 2D Transform
            </p>
        </div>
    );
};

export default CSSMediaQueries;
