import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const GetElementById = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>getElementById Example</title>
</head>
<body>
  <div id="myDiv">This is my div</div>
  <script>
    let myDiv = document.getElementById("myDiv");
    myDiv.innerHTML = "This is my new text";
  </script>
</body>
</html>`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>getElementById()</code> method is a part of the JavaScript <code>document</code> object. It allows developers to access a specific element on a web page by its unique ID.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        This method returns the first element that matches the specified ID, or <code>null</code> if no such element is found.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example HTML</h2>
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {`<div id="myDiv">This is my div</div>`}
        </pre>

        <h2 className="text-xl sm:text-2xl font-semibold">JavaScript to Access the Element</h2>
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {`let myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "This is my new text";`}
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Full Example</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here's the complete HTML + JavaScript snippet. You can copy and test this directly in your browser:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>getElementById Example</title>
</head>
<body>
  <div id="myDiv">This is my div</div>
  <script>
    let myDiv = document.getElementById("myDiv");
    myDiv.innerHTML = "This is my new text";
  </script>
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
        <h2 className="text-xl sm:text-2xl font-semibold">Why Use <code>getElementById()</code>?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          This method allows you to easily access a specific element without needing to traverse the entire DOM. It’s very efficient for targeting unique elements in your document.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <strong>Note:</strong> The ID should be unique across the document, and it's <strong>case-sensitive</strong> — <code>myDiv</code> and <code>mydiv</code> are different.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: GetElementsByClassName
      </p>
    </div>
  );
};

export default GetElementById;
