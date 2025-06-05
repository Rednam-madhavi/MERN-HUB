import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import vsCodeOpen from '../../assets/html/vs-code-open.png';
import goLiveIcon from '../../assets/html/vs-code-go-live.png';
import helloWorldPreview from '../../assets/html/hello-world-html.png';
import livepreview from '../../assets/html/preview-html-extension.png';
import htmlPreviewBtn from '../../assets/html/preview-button-live-html-preview.png';
import htmlPreviewLive from '../../assets/html/live-preview-html-in-action.png';

const Execution = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const handleCopy = () => {
        clipboard.copy(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  Hello World
</body>
</html>`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Let's mark this as an important milestone: the creation of your first website! And what's a better way to start than with the traditional <strong>"Hello, World!"</strong>?
            </p>

            {/* Why Hello World */}
            <section className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Why "Hello, World!"?</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    In the programming world, "Hello, World!" is more than just a phrase. It's a tradition, an emotion, a simple program that teaches you the syntax and gets you started.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                    Our first website will display the text <span className="font-semibold text-blue-600">"Hello World"</span>.
                </p>
            </section>

            {/* Setting up VS Code */}
            <section className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Let's Get Started: Setting Up Your VS Code</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">Open Visual Studio Code (VS Code).</p>
                <img
                    src={vsCodeOpen}
                    alt="VS Code Open"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(vsCodeOpen)}
                />
            </section>

            {/* Creating index.html */}
            <section className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Creating a New File</h2>
                <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
                    <li>Select or create a folder using "Open Folder".</li>
                    <li>Click the "New File" icon and name it <code>index.html</code>.</li>
                </ul>
            </section>

            {/* Copy Code Block */}
            <section className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Pasting the Code</h2>
                <p className="text-sm sm:text-base md:text-lg">Paste the following code inside your <code>index.html</code>:</p>
                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  Hello World
</body>
</html>`}
                    </pre>
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        {copied ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                    </button>
                </div>
            </section>

            {/* Go Live Section */}
            <section className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Going Live using Live Server</h2>
                <p className="text-sm sm:text-base md:text-lg">Click the <strong>"Go Live"</strong> button in the VS Code status bar.</p>
                <img
                    src={goLiveIcon}
                    alt="Go Live Icon"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(goLiveIcon)}
                />
                <p className="text-sm sm:text-base md:text-lg">Make sure the <strong>Live Server</strong> extension is installed.</p>
            </section>

            {/* Live Website Preview */}
            <section className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Your First Website is Live!</h2>
                <p className="text-sm sm:text-base md:text-lg">You should now see your website displaying:</p>
                <img
                    src={helloWorldPreview}
                    alt="Hello World Website"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(helloWorldPreview)}
                />
            </section>

            {/* HTML Preview Extension */}
            <section className="py-4 sm:py-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Live Preview Extension</h2>
                <p className="text-sm sm:text-base md:text-lg">Install the <strong>HTML Preview</strong> extension.</p>
                <img
                    src={livepreview}
                    alt="HTML Live Preview Extension"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(livepreview)}
                />
                <p className="text-sm sm:text-base md:text-lg">It adds a preview button right inside VS Code!</p>
                <img
                    src={htmlPreviewBtn}
                    alt="Live HTML Preview Button"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(htmlPreviewBtn)}
                />
                <img
                    src={htmlPreviewLive}
                    alt="Live Preview in Action"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(htmlPreviewLive)}
                />
            </section>

            {/* Modal Viewer */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl mx-auto">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-1 rounded-full"
                        >
                            ✕
                        </button>
                        <img src={modalImage}
                            alt="Zoomed Working"
                            className="rounded-lg shadow-lg max-h-[90vh]" />
                    </div>
                </div>
            )}

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Page Structure
            </p>
        </div>
    );
};

export default Execution;
