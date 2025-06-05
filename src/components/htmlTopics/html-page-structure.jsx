import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import structure from '../../assets/html/html-tag-structure-image.png';
import output from '../../assets/html/output.png';

const PageStructure = () => {
    const clipboard = useClipboard();
    const [copiedBlock, setCopiedBlock] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

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
    <h1>This is a heading</h1>
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
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg leading-relaxed p-4 rounded-md overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-sm font-mono whitespace-pre-wrap">
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
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">HTML Page Structure</h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                An HTML document is structured using a set of nested tags. Each tag is enclosed within
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded mx-1">&lt;...&gt;</code>
                and acts as a container for content or other tags.
            </p>

            <div className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Basic HTML Document</h2>
                {renderCodeBlock("basicStructure", codeBlocks.basicStructure)}
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                This is how the title appears on an HTML page.
            </p>
            <p className="italic text-base text-indigo-600 dark:text-indigo-400">HTML Title Video</p>

            <div className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">A Typical HTML Page</h2>
                {renderCodeBlock("typicalPage", codeBlocks.typicalPage)}
            </div>

            <div className="py-4 sm:py-5 space-y-4">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Almost every website follows this structure. The visible content goes inside the
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded mx-1">&lt;body&gt;</code> tag.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 rounded">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        <strong>Essential Tags:</strong> <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>,
                        <code>&lt;title&gt;</code>, <code>&lt;body&gt;</code>
                    </p>
                </div>
            </div>

            <div className="py-4 sm:py-5 space-y-4">
                {[
                    { title: "DOCTYPE Declaration", desc: "<!DOCTYPE html> informs the browser about HTML version. HTML5 is the latest." },
                    { title: "HTML Root Element", desc: "<html> wraps the document. </html> closes it." },
                    { title: "Head Section", desc: "<head> contains metadata like title, CSS, and scripts." },
                    { title: "Title Tag", desc: "<title> sets the tab title shown in the browser." },
                    { title: "Body Tag", desc: "<body> includes all visible content for the page." },
                ].map(({ title, desc }) => (
                    <div key={title}>
                        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                        <p className="text-sm sm:text-base md:text-lg">{desc}</p>
                    </div>
                ))}
            </div>

            <div className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Summary</h2>
                <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
                    <li><code>&lt;!DOCTYPE html&gt;</code> defines HTML5 document type.</li>
                    <li><code>&lt;html lang="en"&gt;</code> sets the language of the document.</li>
                    <li><code>&lt;head&gt;</code> includes metadata like title, styles, and scripts.</li>
                    <li><code>&lt;body&gt;</code> contains all visible content.</li>
                    <li><code>&lt;h1&gt;</code> to <code>&lt;p&gt;</code> are typical content tags.</li>
                </ul>
            </div>

            <div className="py-4 sm:py-5">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">HTML Document Visualization</h2>
                <img
                    src={structure}
                    alt="HTML Tag Structure"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"


                    onClick={() => openModal(structure)}
                />
            </div>

            <div className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Rendered Browser Output</h2>
                <p className="text-sm sm:text-base md:text-lg">Consider this HTML code:</p>
                {renderCodeBlock("browserRender", codeBlocks.browserRender)}
                <p className="text-sm sm:text-base md:text-lg">Rendered Output:</p>
                <img
                    src={output}
                    alt="HTML Output Preview"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(output)}
                />
                <p className="text-sm sm:text-base md:text-lg mt-2">
                    The browser displays the title in the tab and the body content in the main window.
                </p>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl mx-auto">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-1 rounded-full"
                        >
                            ✕
                        </button>
                        <img src={currentImage}
                            alt="Zoomed Working"
                            className="rounded-lg shadow-lg max-h-[90vh]" />
                    </div>
                </div>
            )}

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
                Next Chapter: <span className="text-blue-600 dark:text-blue-400">HTML Tags</span>
            </p>
        </div>
    );
};

export default PageStructure;
