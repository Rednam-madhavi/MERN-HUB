import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import comments from '../../assets/html/comments.mp4';

const HtmlComments = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        clipboard.copy(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Comments in HTML are like little notes you leave in your code for yourself or other people. These notes help make the code easier to understand but don't show up on the actual website. The web browser just skips over them!
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold">Key Points About HTML Comments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
                <li>Comments are ignored by web browsers.</li>
                <li>They aid in code readability and documentation.</li>
                <li>HTML comments are denoted by <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;!-- content --&gt;</code>.</li>
                <li>The shortcut key for commenting out code is <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Ctrl + /</code>.</li>
                <li>HTML supports both single-line and multi-line comments.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold">Types of Comments in HTML</h2>

            <h3 className="text-lg sm:text-xl font-semibold">Single-line Comments</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Single-line comments are contained within one line. They are useful for short annotations.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mt-2">Example:</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
                    {`<!-- This is a single-line comment -->`}
                </pre>
                <button
                    onClick={() => handleCopy('<!-- This is a single-line comment -->')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                As you can see in the video below, the text inside the comment is not rendered.
            </p>

            <div className="my-4">
                <video
                    src={comments}
                    controls
                    className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">Multi-line Comments</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Multi-line comments span across multiple lines, making them ideal for detailed explanations or temporarily disabling blocks of code.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mt-2">Example:</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
                    {`<!-- 
  This is a multi-line comment.
  It spans multiple lines.
-->`}
                </pre>
                <button
                    onClick={() => handleCopy('<!-- \n  This is a multi-line comment.\n  It spans multiple lines.\n-->')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Comments are an essential part of coding! Use them to improve the readability of your code and communicate better with other developers.
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Id & Classes
            </p>
        </div>
    );
};

export default HtmlComments;
