import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const BlockElements = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(null);

    const blockTags = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'hr', 'address', 'article',
        'aside', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset',
        'figcaption', 'figure', 'footer', 'form', 'header', 'li', 'main',
        'nav', 'noscript', 'ol', 'ul', 'pre', 'section', 'table', 'video'
    ];

    const example = `<div>\n  <h1>This is a heading</h1>\n  <p>This is a paragraph inside a block element.</p>\n</div>`;

    const handleCopy = (text, tag) => {
        clipboard.copy(text);
        setCopied(tag);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-lg">You already know about HTML inline elements. All HTML tags have specific display behavior: they are either block-level elements or inline elements.</p>

            <h3 className="text-xl font-semibold">What are Block-level Elements?</h3>
            <p className="text-base">Block-level elements are those that start on a new line and take up the entire width of their container by default. They essentially claim all the horizontal space for themselves, pushing any content that comes after them to a new line.</p>

            <h4 className="text-lg font-semibold">Characteristics of Block-level Elements:</h4>
            <ul className="list-disc ml-6 space-y-1 text-base">
                <li>Always start on a new line.</li>
                <li>Take up the full width available.</li>
                <li>Width and height can be controlled via CSS.</li>
                <li>Can contain other block-level as well as inline elements.</li>
            </ul>

            <h4 className="text-lg font-semibold">Example:</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded font-mono overflow-x-auto whitespace-pre-wrap">
                    {example}
                </pre>
                <button
                    onClick={() => handleCopy(example, 'example')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                    {copied === 'example' ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
                </button>
            </div>

            <h4 className="text-lg font-semibold">Common Block-level Elements:</h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base">
                {blockTags.map(tag => (
                    <code
                        key={tag}
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded inline-block text-center"
                    >
                        &lt;{tag}&gt;
                    </code>
                ))}
            </div>
            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Lists
            </p>
        </div>
    );
};

export default BlockElements;
