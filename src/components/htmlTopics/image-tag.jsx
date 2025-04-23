import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Img from '../../assets/html/img.mp4';

const ImageTag = () => {
    const clipboard = useClipboard();
    const [copiedIndex, setCopiedIndex] = useState(null);

    const snippets = [
        `<img src="image's path" />`,
        `<img src="images/profile_picture.jpg" alt="Profile Picture" />`,
        `<img src="image.png" alt="Description" width="300" height="100" />`
    ];

    const handleCopy = (code, index) => {
        clipboard.copy(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-lg sm:text-xl">
                Images play a crucial role in enhancing web pages by providing visual context that complements textual content.
                In HTML, the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag is used to embed images into web pages.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold">Basic Syntax for Embedding Images</h3>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-base font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                    {snippets[0]}
                </pre>
                <button
                    onClick={() => handleCopy(snippets[0], 0)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copiedIndex === 0 ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5" />}
                </button>
            </div>

            <div className="my-4">
                <video
                    src={Img}
                    controls
                    className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold">Key Features of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> Tag</h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                <li>It’s a self-closing tag, meaning it doesn’t require a closing tag.</li>
                <li>Common attributes: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> (source) and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> (alternative text).</li>
                <li>Supports formats like PNG, JPEG, JPG, and GIF.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold">Setting Mandatory Attributes</h3>
            <p className="text-base sm:text-lg">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> attributes are essential:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                <li><strong>src</strong>: Specifies the image path.</li>
                <li><strong>alt</strong>: Provides descriptive text for screen readers and SEO.</li>
            </ul>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-base font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                    {snippets[1]}
                </pre>
                <button
                    onClick={() => handleCopy(snippets[1], 1)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copiedIndex === 1 ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5" />}
                </button>
            </div>

            <p className="text-base sm:text-lg">
                <strong>Tip:</strong> Right-click an image &gt; Properties &gt; Location to find its path.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold">Setting Image Dimensions</h3>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-base font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                    {snippets[2]}
                </pre>
                <button
                    onClick={() => handleCopy(snippets[2], 2)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copiedIndex === 2 ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5" />}
                </button>
            </div>

            <p className="text-base sm:text-lg">
                While you can use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">height</code> in HTML,
                modern best practices recommend using CSS for styling flexibility.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold">SEO and Layout Stability</h3>
            <p className="text-base sm:text-lg">
                Specifying image dimensions in the tag helps browsers allocate space even before loading, improving <strong>CLS (Cumulative Layout Shift)</strong>,
                which benefits your page's SEO and ranking.
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Pre Tag
            </p>
        </div>
    );
};

export default ImageTag;
