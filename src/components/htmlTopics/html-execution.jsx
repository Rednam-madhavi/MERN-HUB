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
        setTimeout(() => setCopied(false), 2000); // Reset "copied" status after 2 seconds
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
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
                Your Journey to Creating Your First Website Begins Here!
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Let's mark this as an important milestone: the creation of your first website! And what's a better way to start than with the traditional <strong>"Hello, World!"</strong>?
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Why "Hello, World!"?</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    In the programming world, "Hello, World!" is more than just a phrase. It's a tradition, an emotion, a simple program that teaches you the syntax and gets you started. And guess what? HTML is no different!
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                    Our first website will display the text <span className="font-semibold text-blue-600">"Hello World"</span>.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Let's Get Started: Setting Up Your VS Code</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    If you haven't already set up your environment, open Visual Studio Code (VS Code).
                </p>
                <img
                    src={vsCodeOpen}
                    alt="VS Code Open"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(vsCodeOpen)}
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Creating a New File</h2>
                <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
                    <li>Click on "Open Folder" and select or create a folder. (e.g., <code>html-tutorial</code>)</li>
                    <li>Click on the "New File" icon in VS Code.</li>
                    <li>Name the file <code>index.html</code> and press Enter.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Pasting the Code</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Paste the following code inside your <code>index.html</code> file:
                </p>

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
                        className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        {copied ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                        ) : (
                            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Going Live using Live Server</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Click the <strong>"Go Live"</strong> icon at the bottom-right corner of your VS Code window.
                </p>
                <img
                    src={goLiveIcon}
                    alt="Go Live Icon"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(goLiveIcon)}
                />
                <p className="text-sm sm:text-base md:text-lg">
                    If you don’t see the button, make sure the <strong>Live Server</strong> extension is installed.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Your First Website is Live!</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    If you've followed along, you should now see your very first website displaying:
                </p>
                <img
                    src={helloWorldPreview}
                    alt="Hello World Website"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(helloWorldPreview)}
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Live Preview Extension</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Another great extension is <strong>HTML Preview</strong>. Install it by searching for "HTML Preview" in the VS Code Extensions tab.
                </p>
                <img
                    src={livepreview}
                    alt="HTML Livepreview extension"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(livepreview)}
                />
                <p className="text-sm sm:text-base md:text-lg">
                    It adds a preview button within VS Code that shows a live preview of your HTML — right inside the editor!
                </p>
                <img
                    src={htmlPreviewBtn}
                    alt="Live HTML Preview Button"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(htmlPreviewBtn)}
                />
                <p className="text-sm sm:text-base md:text-lg">
                    Perfect for following this tutorial without needing to switch to a browser.
                </p>
                <img
                    src={htmlPreviewLive}
                    alt="Live HTML Preview in action"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                    onClick={() => openModal(htmlPreviewLive)}
                />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 p-1 rounded"
                        >
                            ✕
                        </button>
                        <img
                            src={modalImage}
                            alt="Modal Preview"
                            className="max-w-full max-h-[90vh] rounded-md shadow-lg"
                        />
                    </div>
                </div>
            )}

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML  Page Structure
            </p>
        </div>
    );
};

export default Execution;
