import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

// ✅ Reusable CopyableCodeBlock Component
const CopyableCodeBlock = ({ code }) => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        clipboard.copy(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base border border-gray-300 dark:border-gray-600 shadow-md overflow-x-auto">
                {code}
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
    );
};

const GetElementsByClassName = () => {
    const htmlCode = `<div class="myClass">This is my div</div>
<div class="myClass">This is my div</div>
<div class="myClass">This is my div</div>`;

    const jsCode = `let elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "This is my new text";
}`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">getElementsByClassName()</code> method is part of the JavaScript <strong>document</strong> object. It allows you to select multiple elements by their class name and returns a live <strong>HTMLCollection</strong> of matched elements.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Example HTML:</h2>
                <CopyableCodeBlock code={htmlCode} />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">JavaScript Code:</h2>
                <CopyableCodeBlock code={jsCode} />
            </div>

            <div className="space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                    This method is especially useful when you want to update or manipulate all elements sharing the same class name. Since it returns a live collection, changes in the DOM will automatically reflect in the collection.
                </p>
                <p className="italic text-yellow-600 dark:text-yellow-400">
                    ⚠️ This method is <strong>case-sensitive</strong> — <code>myClass</code> is different from <code>myclass</code>.
                </p>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: GetElementsByName
            </p>
        </div>
    );
};

export default GetElementsByClassName;
