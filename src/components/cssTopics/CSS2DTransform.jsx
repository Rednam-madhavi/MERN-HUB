import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import translate from '../../assets/css/2D-1.webp';
import translate2 from '../../assets/css/2D-2.webp';
import rotate from '../../assets/css/2D-3.webp';
import scale from '../../assets/css/2D-4.webp';
import skew from '../../assets/css/2D-5.webp';


const CSS2DTransform = () => {
    const [copied, setCopied] = useState(null);
    const clipboard = useClipboard();

    const handleCopy = (code, id) => {
        clipboard.copy(code);
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                CSS 2D Transforms allow you to modify the coordinate space of elements to achieve rotation, scaling, translation, or skewing effects in two dimensions.
            </p>

            {/* Translate */}
            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Translate Example</h2>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  transform: translate(50px, 100px);\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  transform: translate(50px, 100px);\n}`, 1)}
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
                    src={translate}
                    alt="Translate Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
                <h3 className="text-md font-medium">Output:</h3>
                <img
                    src={translate2}
                    alt="Translate Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            {/* Rotate */}
            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Rotate Example</h2>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  transform: rotate(45deg);\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  transform: rotate(45deg);\n}`, 2)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 2 ? (
                            <CheckIcon className="w-5 h-5 text-green-500" />
                        ) : (
                            <ClipboardIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
                <h3 className="text-md font-medium">Output:</h3>
                <img
                    src={rotate}
                    alt="Rotate Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            {/* Scale */}
            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Scale Example</h2>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  transform: scale(1.5);\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  transform: scale(1.5);\n}`, 3)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 3 ? (
                            <CheckIcon className="w-5 h-5 text-green-500" />
                        ) : (
                            <ClipboardIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
                <h3 className="text-md font-medium">Output:</h3>
                <img
                    src={scale}
                    alt="Scale Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            {/* Skew */}
            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Skew Example</h2>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  transform: skew(20deg, 10deg);\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  transform: skew(20deg, 10deg);\n}`, 4)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 4 ? (
                            <CheckIcon className="w-5 h-5 text-green-500" />
                        ) : (
                            <ClipboardIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
                <h3 className="text-md font-medium">Output:</h3>
                <img
                    src={skew}
                    alt="Skew Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            {/* Summary */}
            <div className="py-4 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Common 2D Transform Functions</h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
                    <li><strong>translate(x, y)</strong> – Moves the element from its current position.</li>
                    <li><strong>rotate(angle)</strong> – Rotates the element clockwise by a given angle.</li>
                    <li><strong>scale(x, y)</strong> – Scales the element’s size.</li>
                    <li><strong>skew(x, y)</strong> – Skews the element along the X and Y axes.</li>
                </ul>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
                Next Chapter: CSS Transitions
            </p>
        </div>
    );
};

export default CSS2DTransform;
