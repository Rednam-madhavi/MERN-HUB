import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import DefinitionListImage from '../../assets/html/definition-list-html.png';
import DefinitionListVideo from '../../assets/html/definition-list.mp4';

const HtmlDefinitionLists = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleCopy = (codeSnippet) => {
        clipboard.copy(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const exampleCode = `<h1>HTML Definition List</h1>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language: The standard language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets: A stylesheet language used for describing the look and formatting of a document written in HTML.</dd>

  <dt>JavaScript</dt>
  <dd>A programming language commonly used in web development to add interactive features.</dd>
</dl>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                A Definition List in HTML is used to represent a list of terms along with their corresponding descriptions or definitions.
                The Definition List is created using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dl&gt;</code> element,
                which wraps around one or more pairs of <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dt&gt;</code> and
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dd&gt;</code> elements.
            </p>

            <img
                src={DefinitionListImage}
                alt="HTML Definition List Example"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                onClick={() => setIsOpen(true)} // Opens the image on click
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
                            src={DefinitionListImage}
                            alt="HTML Definition List Full View"
                            className="max-w-full max-h-[90vh] rounded-md shadow-lg"
                        />
                    </div>
                </div>
            )}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Definition List Example</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Here's a simple example to illustrate:
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base relative">
                <pre>{exampleCode}</pre>
                <button
                    onClick={() => handleCopy(exampleCode)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Understanding the Example</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dl&gt;</code> is the container for the list.</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dt&gt;</code> defines the terms you want to explain.</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dd&gt;</code> contains the definitions or explanations.</li>
            </ul>

            <div className="my-4">
                <video
                    src={DefinitionListVideo}
                    controls
                    className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                This creates a clean, organized way to present a list of terms and their corresponding definitions—much like a glossary or dictionary.
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Tables
            </p>
        </div>
    );
};

export default HtmlDefinitionLists;
