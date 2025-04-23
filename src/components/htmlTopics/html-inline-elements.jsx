import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Image from '../../assets/html/inline.jpeg';

const InlineElements = () => {
    const clipboard = useClipboard();
    const [copiedTag, setCopiedTag] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleCopy = (text, tag) => {
        clipboard.copy(text);
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 2000);
    };

    const codeSnippets = {
        example1: `<span>This is <strong>important</strong> text.</span>`,
        example2: `<span>This is <div>not recommended</div> text.</span>`,
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-gray-800 dark:text-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold">HTML Inline Elements</h2>
            <p className="text-lg">Inline Elements don't start on a new line. It only takes the width required to cover the content.</p>
            <p className="text-base">HTML elements are generally divided into two categories: Block-level and Inline elements.</p>

            {/* Clickable image */}
            <div className="text-center">
                <img
                    src={Image}
                    alt="HTML Inline Elements"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
            </div>

            {/* Modal for full-size image */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 p-1 rounded"
                        >
                            ✕
                        </button>
                        <img
                            src={Image}
                            alt="HTML Inline Elements Full View"
                            className="max-w-full max-h-[90vh] rounded-md shadow-lg"
                        />
                    </div>
                </div>
            )}

            <p className="text-base">
                No matter what the width is, block elements will always start on a new line and take up the full available width of their container by default. This means they essentially claim all the horizontal space for themselves, pushing any content that comes after them to a new line. But the inline elements will fit snugly within the flow of other elements, taking up only as much width as their content requires.
            </p>

            <h3 className="text-xl font-semibold">What are Inline Elements?</h3>
            <p className="text-base">Inline elements do not start on a new line and only take up as much width as necessary. They are part of the flow within other elements.</p>
            <p className="text-base">Inline elements can contain other inline elements, but they generally should not contain block-level elements. For example, you could nest a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;strong&gt;</code> element within a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;span&gt;</code> like so:</p>

            {/* Example 1 */}
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded font-mono overflow-x-auto">
                    {codeSnippets.example1}
                </pre>
                <button
                    onClick={() => handleCopy(codeSnippets.example1, 'example1')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                    {copiedTag === 'example1' ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
                </button>
            </div>

            <p className="text-base mt-2">However, placing a block-level element like a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;div&gt;</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> inside an inline element is not recommended:</p>

            {/* Example 2 */}
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded font-mono overflow-x-auto">
                    {codeSnippets.example2}
                </pre>
                <button
                    onClick={() => handleCopy(codeSnippets.example2, 'example2')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                    {copiedTag === 'example2' ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-xl font-semibold mt-4">Common Inline Elements</h3>
            <ul className="list-disc ml-6 space-y-1 text-base">
                <li>&lt;span&gt;: A generic inline container for text</li>
                <li>&lt;a&gt;: Defines a hyperlink</li>
                <li>&lt;strong&gt;: Defines important text</li>
                <li>&lt;em&gt;: Defines emphasized text</li>
                <li>&lt;img&gt;: Embeds an image</li>
                <li>&lt;input&gt;: Defines an input control</li>
            </ul>

            <p className="text-base mt-4">This text contains a link, an important text, and an emphasized text.</p>

            <h3 className="text-xl font-semibold mt-4">Styling Inline Elements</h3>
            <p className="text-base">You can use CSS to style inline elements. However, some properties like width and height may not apply.</p>

            <p className="text-base mt-4">Here is an exhaustive list of the most used Inline Elements:</p>

            <h4 className="text-lg sm:text-xl font-semibold mt-4">List of Common Inline Tags</h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base">
                {[
                    'a', 'abbr', 'acronym', 'button', 'br', 'big', 'bdo', 'b', 'cite', 'code',
                    'dfn', 'i', 'em', 'img', 'input', 'kbd', 'label', 'map', 'object', 'output',
                    'tt', 'time', 'samp', 'script', 'select', 'small', 'span', 'strong', 'sub', 'sup', 'textarea'
                ].map(tag => (
                    <code
                        key={tag}
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded inline-block text-center"
                    >
                        &lt;{tag}&gt;
                    </code>
                ))}
            </div>
        </div>
    );
};

export default InlineElements;
