import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import example from '../../assets/css/inherit1.webp';
import output from '../../assets/css/inherit2.webp';

const CSSInherit = () => {
    const [copied, setCopied] = useState(false);
    const clipboard = useClipboard();

    const codeExample = `div {\n  color: inherit;\n}`;

    const handleCopy = () => {
        clipboard.copy(codeExample);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>inherit</code> keyword in CSS allows a property to explicitly inherit its value from the parent element. This can be applied to any individual CSS property or to all properties at once using the <code>all</code> shorthand.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                This is useful when you want to ensure that a child element maintains the styling of its parent, especially in complex layouts or when overriding default styles.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold">Syntax:</h2>
            <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                <pre>{codeExample}</pre>
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                >
                    {copied ? (
                        <CheckIcon className="w-5 h-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="w-5 h-5" />
                    )}
                </button>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Example:</h2>
                <img
                    src={example}
                    alt="CSS Inherit Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />


            </div>

            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img
                    src={output}
                    alt="CSS Inherit Output"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>
        </div>
    );
};

export default CSSInherit;
