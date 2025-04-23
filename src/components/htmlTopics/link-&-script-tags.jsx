import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Script from '../../assets/html/script-tag.mp4';
import Link from '../../assets/html/link.jpg'

const LinkAndScript = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (snippet, key) => {
        clipboard.copy(snippet);
        setCopied((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000);
    };

    const linkExample = `<link rel="stylesheet" type="text/css" href="styles.css">`;
    const scriptExample = `<script src="script.js" type="text/javascript"></script>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;link&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;script&gt;</code> tags are essential elements within an HTML document’s <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;head&gt;</code> section. They allow you to link external stylesheets and scripts, enhancing both presentation and interactivity.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-6">The &lt;link&gt; Tag</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>&lt;link&gt;</code> tag is commonly used to connect an external CSS file to your HTML document. It’s a self-closing tag and belongs inside the <code>&lt;head&gt;</code> section.
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{linkExample}</code>
                <button
                    onClick={() => handleCopy(linkExample, 'link')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy link tag"
                >
                    {copied.link ? (
                        <CheckIcon className="w-6 h-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <img
                src={Link}
                alt="Link Tag Example"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />

            <h2 className="text-2xl sm:text-3xl font-semibold mt-6">The &lt;script&gt; Tag</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>&lt;script&gt;</code> tag is used to include JavaScript files or code blocks in your HTML. Unlike the <code>&lt;link&gt;</code> tag, it requires a closing tag: <code>&lt;/script&gt;</code>.
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{scriptExample}</code>
                <button
                    onClick={() => handleCopy(scriptExample, 'script')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy script tag"
                >
                    {copied.script ? (
                        <CheckIcon className="w-6 h-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>


            <div className="my-4">
                <video
                    src={Script}
                    controls
                    className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> tags are vital for linking stylesheets and JavaScript files. Proper use of these tags helps keep your HTML clean and your website functional and styled efficiently.
            </p>
        </div>
    );
};

export default LinkAndScript;
