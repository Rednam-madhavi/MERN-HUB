import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Unorderlist from '../../assets/html/list1.png';
import Orderlist from '../../assets/html/list2.png';
import Deflist from '../../assets/html/list3.png';

const HtmlLists = () => {
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

    // HTML list examples
    const unorderedListExample = `
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>`;

    const orderedListExample = `
<ol>
    <li>First Step</li>
    <li>Second Step</li>
    <li>Third Step</li>
</ol>`;

    const definitionListExample = `
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Our day-to-day lives often involve the use of lists. For example, when we go shopping, the bill we receive includes a list of all the items we've purchased. Similarly, web developers use lists to neatly display data on websites.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Types of HTML Lists</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                HTML provides different types of lists to display data in various forms. Each list contains one or more list items.
                <ul className="list-disc pl-6">
                    <li><span className='font-semibold'>Unordered List:</span> Displays items using bullets.</li>
                    <li><span className='font-semibold'>Ordered List:</span> Displays items in a numerical sequence, and supports various numbering styles like Arabic numerals, Roman numerals, etc.</li>
                    <li><span className='font-semibold'>Definition List:</span> Organizes items in a format similar to a dictionary, with terms and their corresponding definitions.</li>
                </ul>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">An Unordered List</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                An unordered list uses bullets to display items. It's suitable for listing items where the order doesn't matter.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`}</code>
                <button
                    onClick={() => handleCopy(unorderedListExample, 'unordered')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Unordered List Example"
                >
                    {copied.unordered ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Example:</p>

            <img
                src={Unorderlist}
                alt="Unordered list"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">An Ordered List</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                An ordered list uses numbers or other types of markers to indicate the sequence of items. It's ideal for listing steps in a process or ranking items in order of importance.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<ol>
    <li>Item 1</li>
    <li>Item 2</li>
</ol>`}</code>
                <button
                    onClick={() => handleCopy(orderedListExample, 'ordered')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Ordered List Example"
                >
                    {copied.ordered ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Example:</p>
            <img
                src={Orderlist}
                alt="Ordered list"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">A Definition List</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                A definition list arranges items in a format similar to a dictionary, with a term followed by its definition. This is useful for glossaries or to display metadata.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>`}</code>
                <button
                    onClick={() => handleCopy(definitionListExample, 'definition')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Definition List Example"
                >
                    {copied.definition ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Example:</p>
            <img
                src={Deflist}
                alt="Definition list"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />
        </div>
    );
};

export default HtmlLists;
