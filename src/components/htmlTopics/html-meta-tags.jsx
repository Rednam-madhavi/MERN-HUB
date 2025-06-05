import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Meta from '../../assets/html/meta.jpg';

const HtmlMetaTag = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});
    const [isOpen, setIsOpen] = useState(false);


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

    // Meta tag example code snippet
    const metaTagsExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="This is a description of the web page">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Your Name">
    <title>Document</title>
</head>
<body>
    <!-- Your content here -->
</body>
</html>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>&lt;meta&gt;</code> tags in HTML provide metadata about the HTML document. Metadata is data (information) about data. <code>&lt;meta&gt;</code> tags always go inside the document's <code>&lt;head&gt;</code> tag and are typically used to specify the character set, page description, keywords, author, and other metadata.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">HTML Meta Tags Example</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Below is an example HTML code snippet that includes various types of <code>&lt;meta&gt;</code> tags commonly used:
            </p>

            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="This is a description of the web page">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Your Name">
    <title>Document</title>
</head>
<body>
    <!-- Your content here -->
</body>
</html>`}</code>
                <button
                    onClick={() => handleCopy(metaTagsExample, 'meta')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Meta Tags Example"
                >
                    {copied.meta ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Explanation of Each Meta Tag</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Below is an explanation of the most commonly used <code>&lt;meta&gt;</code> tags:
            </p>

            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Character Encoding (<code>charset</code>):</strong> <code>&lt;meta charset="UTF-8"&gt;</code> sets the character encoding for the webpage. UTF-8 is the most common and recommended.
                </li>
                <li>
                    <strong>Viewport:</strong> <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> sets the viewport to scale the page to the screen width, useful for responsive design.
                </li>
                <li>
                    <strong>IE Compatibility:</strong> <code>&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;</code> specifies that the page should be rendered using the latest rendering engine available on Internet Explorer.
                </li>
                <li>
                    <strong>Description:</strong> <code>&lt;meta name="description" content="This is a description of the web page"&gt;</code> provides a brief description of the webpage, which search engines may use in search results.
                </li>
                <li>
                    <strong>Keywords:</strong> <code>&lt;meta name="keywords" content="HTML, CSS, JavaScript"&gt;</code> specifies keywords for the webpage, which were historically used by search engines but are less relevant today.
                </li>
                <li>
                    <strong>Author:</strong> <code>&lt;meta name="author" content="Your Name"&gt;</code> indicates the name of the author of the webpage.
                </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">How to Add Favicon in HTML?</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                A favicon is a small icon that appears next to your website's title in browser tabs. It helps in branding and easy identification among multiple tabs.
            </p>
            <img
                src={Meta}
                alt="Favicon Example"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl mx-auto">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-1 rounded-full"
                        >
                            ✕
                        </button>
                        <img src={Meta}
                            alt="Zoomed Meta"
                            className="rounded-lg shadow-lg max-h-[90vh]"
                        />
                    </div>
                </div>
            )}

            <h3 className="text-lg sm:text-xl font-semibold mt-4">Steps:</h3>
            <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Step 1:</strong> Create/Choose Favicon - Make a square image, usually 16x16 or 32x32 pixels, in .ico format. You can create a favicon from this website.</li>
                <li><strong>Step 2:</strong> Upload Favicon - Place the .ico file in your website's root directory, where index.html is located.</li>
                <li><strong>Step 3:</strong> Update HTML - Insert the following code in the <code>&lt;head&gt;</code> section of your index.html file:
                    <code>&lt;link rel="icon" href="favicon.ico" type="image/x-icon"&gt;</code>
                </li>
                <li><strong>Step 4:</strong> Test - Open your site in different browsers to make sure the favicon appears.</li>
            </ol>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Link & Script Tags
            </p>
        </div>
    );
};

export default HtmlMetaTag;
