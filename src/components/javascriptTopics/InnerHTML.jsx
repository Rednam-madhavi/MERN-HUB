import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const InnerHTML = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    {
      label: 'Example HTML:',
      content: `<div id="myDiv">
  <p>This is my paragraph</p>
  <p>This is my paragraph</p>
</div>`,
    },
    {
      label: 'JavaScript Example:',
      content: `let myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "<p>This is my new text</p>";`,
    },
  ];

  const handleCopy = (index, content) => {
    clipboard.copy(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>innerHTML</code> property is part of the JavaScript <strong>HTMLElement</strong> object. It allows developers to access and manipulate the HTML content of an element by returning the content between the opening and closing tags as a string of HTML.
      </p>

      {codeSnippets.map((snippet, index) => (
        <div key={index} className="relative">
          <h2 className="text-lg sm:text-xl font-semibold">{snippet.label}</h2>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-600 text-sm sm:text-base overflow-x-auto shadow-md whitespace-pre-wrap">
            {snippet.content}
          </pre>
          <button
            onClick={() => handleCopy(index, snippet.content)}
            className="absolute top-[2.2rem] right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === index ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      ))}

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>innerHTML</code> property is a powerful way to add, remove, or replace elements and even update text and attributes dynamically.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Keep in mind that using <code>innerHTML</code> can pose <strong>security risks</strong> if you inject untrusted content. It also completely replaces the element’s content and removes any event listeners previously attached.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In conclusion, <code>innerHTML</code> is a handy tool for building dynamic and interactive web pages, but it must be used with caution.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: OuterHTML
      </p>
    </div>
  );
};

export default InnerHTML;
