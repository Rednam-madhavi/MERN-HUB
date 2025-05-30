import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const OuterHTML = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        clipboard.copy(`let myDiv = document.getElementById("myDiv");
myDiv.outerHTML = "<div><p>This is my new text</p></div>";`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>outerHTML</code> property is part of the JavaScript <code>HTMLElement</code> object. It allows developers to access and manipulate the *entire HTML* of an element, including the element's own tags.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Example HTML Structure</h2>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base border border-gray-300 dark:border-gray-600 overflow-x-auto">
{`<div id="myDiv">
    <p>This is my paragraph</p>
    <p>This is my paragraph</p>
</div>`}
                </pre>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">JavaScript Code Using <code>outerHTML</code></h2>
                <p className="text-sm sm:text-base md:text-lg">
                    This JavaScript replaces the entire <code>&lt;div&gt;</code> element with new HTML content:
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base border border-gray-300 dark:border-gray-600 overflow-x-auto shadow-md">
{`let myDiv = document.getElementById("myDiv");
myDiv.outerHTML = "<div><p>This is my new text</p></div>";`}
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
                <h2 className="text-xl sm:text-2xl font-semibold">Difference from <code>innerHTML</code></h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The key difference is that <code>outerHTML</code> includes the element itself (its opening and closing tags), while <code>innerHTML</code> only affects what's inside the element.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Use Cases and Considerations</h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
                    <li>Replacing an entire HTML element dynamically.</li>
                    <li>Injecting custom markup including attributes.</li>
                    <li><span className="font-semibold text-red-600">Caution:</span> Inserting untrusted HTML without sanitizing can lead to security vulnerabilities (XSS attacks).</li>
                    <li>Replacing an element removes it from the DOM — including any event listeners attached to it.</li>
                </ul>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Class
            </p>
        </div>
    );
};

export default OuterHTML;
