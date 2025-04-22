import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Working from '../../assets/html/skeletaltag.png';

const SkeletalTag = () => {
    const clipboard = useClipboard();
    const [copiedTag, setCopiedTag] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleCopy = (text, tag) => {
        clipboard.copy(text);
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 2000);
    };

    const renderTagSection = (title, tagCode, description) => (
        <div className="relative space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm overflow-x-auto font-mono text-gray-800 dark:text-gray-200">
                    {tagCode}
                </pre>
                <button
                    onClick={() => handleCopy(tagCode, title)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedTag === title ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Let's discuss some basic HTML tags known as <strong>skeletal tags</strong>.
            </p>

            {renderTagSection(
                '<html> Tag: Root of an HTML Page',
                `<html>
  <!-- Content -->
</html>`,
                'The <html> tag is the root element that wraps all the content on the page. It generally contains two main sections: the header (<head>) and the body (<body>).' 
            )}

            {renderTagSection(
                '<head> Tag: Header Part of an HTML Page',
                `<head>
  <!-- Header Content -->
</head>`,
                'The <head> tag contains meta information and the title of the document. While the title appears in the browser tab, meta information is often used for SEO purposes.'
            )}

            {renderTagSection(
                '<title> Tag: Title of an HTML Page',
                `<title>
  Title Name
</title>`,
                `The <title> tag defines the title of the document, which is displayed in the browser's title tab.`
            )}

            {renderTagSection(
                '<body> Tag: Body of an HTML Page',
                `<body>
  Body Content
</body>`,
                'The <body> tag encloses the main content of the page, and everything within this tag is displayed in the browser.'
            )}

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The image below shows the skeletal tags and essential tags needed to define the layout of a webpage:
            </p>

            <img
                src={Working}
                alt="VS Code Open"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                onClick={() => setIsOpen(true)}
            />

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
                            src={Working}
                            alt="Skeletal HTML Full View"
                            className="max-w-full max-h-[90vh] rounded-md shadow-lg"
                        />
                    </div>
                </div>
            )}

            <p className="text-center font-semibold text-lg mt-8">
                Next, we'll look at how to use Heading tags in HTML.
            </p>
        </div>
    );
};

export default SkeletalTag;
