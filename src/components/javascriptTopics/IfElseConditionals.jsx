import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const IfElseConditionals = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `if (condition) {
  // code to be executed if condition is true
}`,
    `if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}`,
    `let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}`,
  ];

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">if</code> statement in JavaScript is used to execute a block of code if a certain condition is met. 
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">else</code> clause executes if the condition is not met.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Basic Syntax</h2>

        <p className="text-sm sm:text-base md:text-lg">Only if condition:</p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeSnippets[0]}
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[0], 0)}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 0 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        <p className="text-sm sm:text-base md:text-lg">With else clause:</p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeSnippets[1]}
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[1], 1)}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 1 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here's a simple example that checks if a number is greater than 5:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeSnippets[2]}
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[2], 2)}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 2 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        <p className="text-sm sm:text-base md:text-lg">
          In this case, the condition <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">x &gt; 5</code> is <strong>true</strong>, so the output will be:
        </p>
        <pre className="bg-gray-50 dark:bg-gray-800 text-green-600 dark:text-green-400 text-sm sm:text-base p-3 rounded border border-gray-200 dark:border-gray-700 shadow-inner">
x is greater than 5
        </pre>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: If else ladder
      </p>
    </div>
  );
};

export default IfElseConditionals;
