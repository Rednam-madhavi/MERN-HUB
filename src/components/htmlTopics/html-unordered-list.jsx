import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Unorderlist from '../../assets/html/list1.png';
import example from '../../assets/html/unorder.png';

const UnorderedList = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (codeSnippet, type) => {
        try {
            clipboard.copy(codeSnippet);
            setCopied((prevState) => ({
                ...prevState,
                [type]: true,
            }));

            setTimeout(() => {
                setCopied((prevState) => ({
                    ...prevState,
                    [type]: false,
                }));
            }, 2000);
        } catch (error) {
            console.error("Failed to copy to clipboard:", error);
        }
    };

    // Unordered list example code snippet
    const unorderedListExample = `<ul>
  <li>Pen</li>
  <li>Pencil</li>
  <li>Eraser</li>
</ul>`;

    // Unordered list with type attribute code snippet
    const typeAttributeExample = `<ul type="square">
  <li>Notebook</li>
  <li>Marker</li>
</ul>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                An unordered list is a list of items that are not arranged in any specific, sequential order. Unlike ordered lists, the items in an unordered list are typically marked with bullet points, dashes, or other symbols to indicate list membership, but these markers do not imply any particular order.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Syntax for Creating Unordered Lists</h2>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}</code>
                <button
                    onClick={() => handleCopy(unorderedListExample, 'unorderedList')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Unordered List Example"
                >
                    {copied.unorderedList ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Example:</p>
            <img
                src={Unorderlist}
                alt="Unodered list"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Key Characteristics of Unordered Lists</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>No specific sequence is required.</li>
                <li>Typically displayed as bullet points.</li>
                <li>Defined using the <code>&lt;ul&gt;</code> tag.</li>
                <li>Individual items use the <code>&lt;li&gt;</code> tag.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Basic Example</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Here’s an example of an unordered list with three items:
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ul>
  <li>Pen</li>
  <li>Pencil</li>
  <li>Eraser</li>
</ul>`}</code>
                <button
                    onClick={() => handleCopy(unorderedListExample, 'unorderedList')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Unordered List Example"
                >
                    {copied.unorderedList ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Output</h2>
            <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                    <li>Pen</li>
                    <li>Pencil</li>
                    <li>Eraser</li>
                </ul>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Customizing Bullet Points with 'type' Attribute</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                You can specify the style of bullet points using the <code>type</code> attribute. It supports three values:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><code>disc</code> - default bullet style</li>
                <li><code>square</code> - square bullets</li>
                <li><code>circle</code> - circular bullets</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Example Using Square Bullets:</h2>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ul type="square">
  <li>Notebook</li>
  <li>Marker</li>
</ul>`}</code>
                <button
                    onClick={() => handleCopy(typeAttributeExample, 'type')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Type Attribute Example"
                >
                    {copied.type ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Output</h2>
            <div className="space-y-4">
                <img
                    src={example}
                    alt="Example of Unordered List with Square Bullets"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                />

            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Ordered List
            </p>
        </div>
    );
};

export default UnorderedList;
