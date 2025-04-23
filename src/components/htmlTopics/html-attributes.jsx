import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const HtmlAttributes = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = (code) => {
        clipboard.copy(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                HTML attributes are used to define the characteristics of an HTML element. They are placed within the element's opening tag and consist of two parts: the <strong>name</strong> and the <strong>value</strong>.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
                <li><strong>Name:</strong> Specifies the property for that element.</li>
                <li><strong>Value:</strong> Sets the value of that property for the element.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold">Types of HTML Attributes</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">There are three main types of HTML attributes:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
                <li><strong>Core Attributes:</strong> Basic attributes like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">class</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code>.</li>
                <li><strong>Internationalization Attributes:</strong> For language and region adaptation like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">lang</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">dir</code>.</li>
                <li><strong>Generic Attributes:</strong> Custom data attributes like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">data-*</code>.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold">Core Attributes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code></li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">class</code></li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">title</code></li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code></li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold">ID Attribute</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The ID attribute is used to assign a unique identifier to an HTML element. Each element with an ID has its own unique identity. Multiple elements cannot have the same ID.
            </p>

            <h4 className="text-base sm:text-lg font-semibold mt-2">Example:</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
                    {`<p id="html">This is an HTML tutorial</p>
<p id="python">This is a Python tutorial</p>`}
                </pre>
                <button
                    onClick={() => handleCopy(`<p id="html">This is an HTML tutorial</p>
<p id="python">This is a Python tutorial</p>`)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold">Class Attribute</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The class attribute is used to associate an HTML element with a class, typically for styling or JavaScript manipulation. Multiple elements can share the same class.
            </p>

            <h4 className="text-base sm:text-lg font-semibold mt-2">Example:</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
                    {`<p class="highlight">Styled with a class</p>`}
                </pre>
                <button
                    onClick={() => handleCopy(`<p class="highlight">Styled with a class</p>`)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold">Title Attribute</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The title attribute provides additional information about an element and is often displayed as a tooltip when hovered over.
            </p>

            <h4 className="text-base sm:text-lg font-semibold mt-2">Example:</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
                    {`<h4 title="hello, motto">Title attribute</h4>`}
                </pre>
                <button
                    onClick={() => handleCopy(`<h4 title="hello, motto">Title attribute</h4>`)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold">Style Attribute</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The style attribute allows for inline styling using CSS properties directly inside HTML elements.
            </p>

            <h4 className="text-base sm:text-lg font-semibold mt-2">Example:</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
                    {`<p style="color: blue; font-weight: bold;">Styled with inline CSS</p>`}
                </pre>
                <button
                    onClick={() => handleCopy(`<p style="color: blue; font-weight: bold;">Styled with inline CSS</p>`)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold">Case Sensitivity</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                HTML is flexible with case sensitivity—attributes can be written in uppercase or lowercase. However, lowercase is recommended for consistency and compatibility.
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Comments
            </p>
        </div>
    );
};

export default HtmlAttributes;
