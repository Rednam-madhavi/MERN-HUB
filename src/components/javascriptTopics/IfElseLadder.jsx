import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const IfElseLadder = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const syntaxCode = `if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else if (condition3) {
  // code if condition3 is true
} else {
  // code if all conditions are false
}`;

  const exampleCode = `let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}`;

  const handleCopy = ({ code, index }) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <strong>"if-else ladder"</strong> is a control structure in JavaScript that lets you execute different blocks of code based on multiple conditions.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Syntax</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre">
{syntaxCode}
          </pre>
          <button
            onClick={() => handleCopy({ code: syntaxCode, index: 0 })}
            aria-label="Copy syntax code"
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 0 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">How it Works</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          JavaScript checks each condition in order. If one evaluates to <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">true</code>, it runs that block and skips the rest. If none match, the <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">else</code> block executes.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre">
{exampleCode}
          </pre>
          <button
            onClick={() => handleCopy({ code: exampleCode, index: 1 })}
            aria-label="Copy example code"
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 1 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          In this example, <code>x = 10</code>. The first two conditions are false, so it checks <code>x &gt; 5</code>, which is <strong>true</strong>. Hence, it logs:
          <br />
          <span className="inline-block mt-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded shadow">
            "x is greater than 5 but less than or equal to 10"
          </span>
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: JavaScript Switch Case
      </p>
    </div>
  );
};

export default IfElseLadder;
