import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const DocumentObject = () => {
    const clipboard = useClipboard();
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (code, index) => {
        clipboard.copy(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const codeSnippets = [
        {
            description: 'Access an element by ID and change its text:',
            code: `document.getElementById("myElement").innerHTML = "This is my new text";`,
        },
        {
            description: 'Access multiple elements by class name and change their content:',
            code: `let elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "This is my new text";
}`,
        },
        {
            description: 'Create and append a new div element to the page:',
            code: `let newDiv = document.createElement("div");
document.body.appendChild(newDiv);`,
        },
    ];

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
            
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The JavaScript <code>document</code> object is part of the <code>window</code> object and represents the current web page. It allows developers to access and manipulate elements of the page, as well as the DOM tree structure.
            </p>

            {codeSnippets.map((snippet, index) => (
                <div key={index} className="space-y-2">
                    <p className="text-sm sm:text-base md:text-lg">{snippet.description}</p>
                    <div className="relative">
                        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                            {snippet.code}
                        </pre>
                        <button
                            onClick={() => handleCopy(snippet.code, index)}
                            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            {copiedIndex === index ? (
                                <CheckIcon className="h-6 w-6 text-green-500" />
                            ) : (
                                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            ))}

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>document</code> object also provides methods such as <code>createElement()</code> and <code>createTextNode()</code> for dynamically generating elements on the page.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Understanding the <code>document</code> object is crucial for DOM manipulation and creating dynamic, interactive web experiences. While it's widely supported across modern browsers, always check for compatibility when using advanced features.
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: GetElementById
            </p>
        </div>
    );
};

export default DocumentObject;
