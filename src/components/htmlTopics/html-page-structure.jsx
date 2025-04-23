import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import structure from '../../assets/html/html-tag-structure-image.png';
import output from '../../assets/html/output.png';

const PageStructure = () => {
    const clipboard = useClipboard();
    const [copiedBlock, setCopiedBlock] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null); // Store which image is clicked

    const codeBlocks = {
        basicStructure: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
   <!-- content -->
</body>
</html>`,
        typicalPage: `<html>
<head>
    <title>Page title</title>
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
</body>
</html>`,
        browserRender: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h1> This is a heading</h1>
    <p>This is a paragraph</p>
</body>
</html>`
    };

    const handleCopy = (id, code) => {
        clipboard.copy(code);
        setCopiedBlock(id);
        setTimeout(() => setCopiedBlock(null), 2000);
    };

    const renderCodeBlock = (id, code) => (
        <div className="relative my-6">
            <pre className="bg-gray-100 dark:bg-gray-700 text-[0.95rem] leading-relaxed p-4 rounded-md overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-sm font-mono whitespace-pre-wrap">
                {code}
            </pre>
            <button
                onClick={() => handleCopy(id, code)}
                className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
                {copiedBlock === id ? (
                    <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                    <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
            </button>
        </div>
    );

    const openModal = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-800 dark:text-gray-100">
            <p className="text-lg leading-7">An HTML document is structured using a set of nested tags. Each tag is enclosed within <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;...&gt;</code> angle brackets and acts as a container for content or other HTML tags.</p>

            <p className="text-lg">Let's take a look at a basic HTML document structure:</p>
            {renderCodeBlock("basicStructure", codeBlocks.basicStructure)}

            <p className="text-lg">This is how the title appears on an HTML page:</p>
            <p className="italic text-base text-indigo-600 dark:text-indigo-400">HTML Title Video</p>

            <p className="text-lg">A typical HTML page looks like this:</p>
            {renderCodeBlock("typicalPage", codeBlocks.typicalPage)}

            <p className="text-lg">Almost every website uses this structure. The main content goes inside the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;body&gt;</code> tag. No worries if this looks complicated; let's break it down!</p>

            <div className="space-y-6">
                <p className="text-base"><strong>Note:</strong> Essential HTML tags: <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;/head&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;/body&gt;</code>, <code>&lt;/html&gt;</code></p>

                {[
                    { title: "DOCTYPE Declaration", desc: "<!DOCTYPE html> informs the web browser about the HTML version being used. The latest is HTML5." },
                    { title: "HTML Root Element", desc: "<html> wraps the whole document. </html> closes it." },
                    { title: "Head Section", desc: "<head> contains metadata and links to styles/scripts. </head> ends the head." },
                    { title: "Title Tag", desc: "<title>Document</title> sets the browser tab title." },
                    { title: "Body Tag", desc: "<body> holds all visible content. </body> ends it." },
                ].map(({ title, desc }) => (
                    <div key={title}>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p className="text-base">{desc}</p>
                    </div>
                ))}
            </div>

            <p className="text-lg">Every HTML page should include these essential elements. In upcoming tutorials, we'll explore more!</p>

            <h2 className="text-2xl font-bold">Summary</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
                <li><code>&lt;!DOCTYPE html&gt;</code> specifies HTML5 document type.</li>
                <li><code>&lt;html lang="en"&gt;</code> defines document language.</li>
                <li><code>&lt;head&gt;</code> holds metadata and title.</li>
                <li><code>&lt;body&gt;</code> contains visible page content.</li>
                <li><code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code> are content tags.</li>
            </ul>

            <div>
                <h2 className="text-2xl font-bold">Visualization of an HTML Document</h2>
                <img
                    src={structure}
                    alt="HTML Tag Structure"
                    className="w-full max-w-xl mx-auto rounded-md shadow-md mt-4 cursor-pointer"
                    onClick={() => openModal(structure)}
                />
            </div>

            <div>
                <h2 className="text-2xl font-bold mt-10">How This Content Appears in a Web Browser</h2>
                <p className="text-base mt-2">Consider this HTML code:</p>
                {renderCodeBlock("browserRender", codeBlocks.browserRender)}
                <p className="text-base mt-2">Rendered Output:</p>
                <img
                    src={output}
                    alt="HTML Output Preview"
                    className="w-full max-w-xl mx-auto rounded-md shadow-md mt-4 cursor-pointer"
                    onClick={() => openModal(output)}
                />
            </div>

            <p className="mt-4 text-base">
                In the browser, the title bar displays the content inside the <code>&lt;title&gt;</code> tag, and the body content appears in the main window.
            </p>


            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 p-1 rounded"
                        >
                            ✕
                        </button>
                        <img
                            src={currentImage}
                            alt="Full View"
                            className="max-w-full max-h-[90vh] rounded-md shadow-lg"
                        />
                    </div>
                </div>
            )}

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Tags
            </p>
        </div>
    );
};

export default PageStructure;
