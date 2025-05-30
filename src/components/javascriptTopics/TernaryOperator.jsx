import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const TernaryOperator = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const codeSnippet = `let x = 10;
let y = 20;
let max;

max = (x > y) ? x : y;

console.log(max); // Outputs: 20`;

  const handleCopy = () => {
    clipboard.copy(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <strong>ternary operator</strong> is a shorthand way to write an <code>if-else</code> statement in JavaScript.
        It takes the form:
        <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded mx-1">condition ? value1 : value2</code>,
        where <em>condition</em> is a boolean expression, and <em>value1</em> and <em>value2</em> are the outcomes.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Example Usage:</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeSnippet}
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

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In the example above, the ternary operator checks whether <code>x</code> is greater than <code>y</code>.
        If true, <code>max</code> is assigned <code>x</code>; otherwise, it gets <code>y</code>.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        This operator is <strong>great for concise logic</strong>, but avoid using it for complex or nested conditions —
        those are better handled with traditional <code>if-else</code> statements for clarity.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: For Loops
      </p>
    </div>
  );
};

export default TernaryOperator;
