import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const GetElementsByTagName = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`let elements = document.getElementsByTagName("p");
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "This is my new text";
}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>getElementsByTagName()</code> method is part of the JavaScript DOM API. It allows developers to access multiple elements on a web page by their HTML tag name. It returns a live <code>HTMLCollection</code> of matched elements.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example HTML:</h2>
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded-md shadow overflow-x-auto border border-gray-300 dark:border-gray-600">
          {`<p>This is my paragraph</p>
<p>This is my paragraph</p>
<p>This is my paragraph</p>`}
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">JavaScript Code:</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded-md shadow overflow-x-auto border border-gray-300 dark:border-gray-600">
            {`let elements = document.getElementsByTagName("p");
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "This is my new text";
}`}
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
        <h2 className="text-xl sm:text-2xl font-semibold">Why Use It?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          This method is especially useful for selecting multiple elements of the same tag—like all <code>&lt;p&gt;</code> or <code>&lt;li&gt;</code> elements—without assigning specific IDs or classes.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The returned <code>HTMLCollection</code> is <strong>live</strong>, meaning it updates automatically when the DOM changes. It's also <strong>case-sensitive</strong>: <code>"p"</code> and <code>"P"</code> are not the same.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>Use it when you want to access all elements of a specific type.</li>
          <li>Combine it with <code>getElementById</code> or <code>getElementsByClassName</code> for more precise targeting.</li>
          <li>Be mindful of its live nature when manipulating DOM dynamically.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: InnerHTML
      </p>
    </div>
  );
};

export default GetElementsByTagName;
