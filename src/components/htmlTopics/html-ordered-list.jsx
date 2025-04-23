import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Orderlist from '../../assets/html/list2.png';

const OrderedList = () => {
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

    // Ordered list example code snippet
    const orderedListExample = `<ol>
  <li>Mango</li>
  <li>Orange</li>
  <li>Litchi</li>
</ol>`;

    // Ordered list with start attribute code snippet
    const startAttributeExample = `<ol type="A" start="3">
  <li>Pen</li>
  <li>Pencil</li>
</ol>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                An ordered list is a list of items that are arranged in a specific, sequential order. Each item in the list is usually numbered to indicate its position in the sequence. Ordered lists are commonly used when the sequence of the items is important, such as in step-by-step instructions or rankings.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Syntax</h2>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ol>
  <li>Item 1</li>
  <li>item 2</li>
  <li>Item 3</li>
</ol>`}</code>
                <button
                    onClick={() => handleCopy(orderedListExample, 'orderedList')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Ordered List Example"
                >
                    {copied.orderedList ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Example:</p>
            <img
                src={Orderlist}
                alt="Ordered list"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Key Points</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Ordered lists are used for items that follow a sequence.</li>
                <li>They are created using the <code>&lt;ol&gt;</code> (Ordered List) tag.</li>
                <li>List items are enclosed within <code>&lt;li&gt;</code> (List Item) tags.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Basic Example</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Here’s an example of an ordered list with three items:
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ol>
  <li>Mango</li>
  <li>Orange</li>
  <li>Litchi</li>
</ol>`}</code>
                <button
                    onClick={() => handleCopy(orderedListExample, 'orderedList')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Ordered List Example"
                >
                    {copied.orderedList ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Output</h2>
            <div className="space-y-4">
                <ol className="list-decimal pl-6 space-y-2">
                    <li>Mango</li>
                    <li>Orange</li>
                    <li>Litchi</li>
                </ol>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Setting the 'type' Attribute</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>type</code> attribute specifies the style of numbering. You have several options:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Uppercase Roman Numerals: Use <code>type="I"</code></li>
                <li>Lowercase Roman Numerals: Use <code>type="i"</code></li>
                <li>Arabic Numerals: Use <code>type="1"</code> (This is the default if the type attribute is not specified)</li>
                <li>Lowercase Alphabetical Letters: Use <code>type="a"</code></li>
                <li>Uppercase Alphabetical Letters: Use <code>type="A"</code></li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Setting the 'start' Attribute</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>start</code> attribute specifies the starting number for the list.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ol type="A" start="3">
  <li>Pen</li>
  <li>Pencil</li>
</ol>`}</code>
                <button
                    onClick={() => handleCopy(startAttributeExample, 'start')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Start Attribute Example"
                >
                    {copied.start ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Output</h2>
            <div className="space-y-4">
                <ol className="list-decimal pl-6 space-y-2" start="3" type="A">
                    <li>Pen</li>
                    <li>Pencil</li>
                </ol>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Definition List
            </p>
        </div>
    );
};

export default OrderedList;
