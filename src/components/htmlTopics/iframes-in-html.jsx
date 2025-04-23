import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const IFramesInHtml = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (code, id) => {
        clipboard.copy(code);
        setCopied((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [id]: false })), 2000);
    };

    const basicSyntax = `<iframe src="URL" width="width" height="height"></iframe>`;
    const youtubeExample = `<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>`;
    const mapsExample = `<iframe src="https://maps.google.com/maps?q=LOCATION&output=embed" frameborder="0"></iframe>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                iFrames, or Inline Frames, are an integral part of modern web development. They allow you to embed another HTML page within your current page. In this lesson, we'll explore the utility of iFrames, their attributes, and common use-cases.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold">What is an iFrame?</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                An iFrame is an HTML element that enables an inline frame for embedding external content. Essentially, you can load another web page within a designated area of your current webpage.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold">Why Use iFrames?</h2>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                <li><strong>Content Isolation:</strong> Improves security by isolating third-party content.</li>
                <li><strong>Modularity:</strong> Easily embed external plugins, widgets, or content.</li>
                <li><strong>Resource Separation:</strong> Allows content within an iFrame to load separately.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold">Basic Syntax</h2>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{basicSyntax}</code>
                <button
                    onClick={() => handleCopy(basicSyntax, 'basic')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Basic Syntax"
                >
                    {copied.basic ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold">Common Attributes</h2>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code>: Specifies the URL of the page to embed.</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">height</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width</code>: Define the dimensions.</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">frameborder</code>: Indicates whether to display a border.</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">scrolling</code>: Controls the scrollbars.</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">name</code>: Useful for targeting the iFrame with JavaScript.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold">Practical Examples</h2>

            <h3 className="text-lg font-semibold mt-4">Embedding a YouTube Video</h3>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{youtubeExample}</code>
                <button
                    onClick={() => handleCopy(youtubeExample, 'youtube')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy YouTube Embed Code"
                >
                    {copied.youtube ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg font-semibold mt-4">Embedding Google Maps</h3>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{mapsExample}</code>
                <button
                    onClick={() => handleCopy(mapsExample, 'maps')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Google Maps Embed Code"
                >
                    {copied.maps ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                iFrames offer a convenient way to embed external content into your web pages. Their flexibility and ease of use make them an invaluable tool for modern web development.
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                End Of HTML Tutorial
            </p>
        </div>
    );
};

export default IFramesInHtml;
