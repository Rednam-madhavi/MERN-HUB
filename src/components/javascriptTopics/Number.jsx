import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Number = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `console.log(Number("3.14")); // Output: 3.14
console.log(Number(true)); // Output: 1`,

    `console.log(parseInt("3")); // Output: 3
console.log(parseFloat("3.14")); // Output: 3.14`,

    `console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324`,

    `console.log(1 / 0); // Output: Infinity
console.log(-1 / 0); // Output: -Infinity`,

    `console.log((3.1415926535897932384626433832795).toFixed(2)); // Output: "3.14"`
  ];

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-base md:text-lg leading-relaxed">
        The JavaScript <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Number</code> object provides utilities for working with numeric values. It includes methods for converting, formatting, and examining number values.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Using <code>Number()</code> for Conversion</h2>
          <p className="text-base md:text-lg leading-relaxed">Convert strings and booleans to numbers using the <code>Number()</code> constructor.</p>
          <CodeBlock code={codeSnippets[0]} index={0} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Using <code>parseInt()</code> and <code>parseFloat()</code></h2>
          <p className="text-base md:text-lg leading-relaxed">Convert strings into integers or floating-point numbers.</p>
          <CodeBlock code={codeSnippets[1]} index={1} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Maximum and Minimum Number Values</h2>
          <p className="text-base md:text-lg leading-relaxed">Access extreme numerical values with <code>Number.MAX_VALUE</code> and <code>Number.MIN_VALUE</code>.</p>
          <CodeBlock code={codeSnippets[2]} index={2} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Infinity in JavaScript</h2>
          <p className="text-base md:text-lg leading-relaxed">Division by zero yields <code>Infinity</code> or <code>-Infinity</code>.</p>
          <CodeBlock code={codeSnippets[3]} index={3} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Formatting with <code>toFixed()</code></h2>
          <p className="text-base md:text-lg leading-relaxed">Format numbers to a fixed number of decimal places.</p>
          <CodeBlock code={codeSnippets[4]} index={4} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Boolean
      </p>
    </div>
  );
};

const CodeBlock = ({ code, index, handleCopy, copiedIndex }) => {
  return (
    <div className="relative mt-4">
      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-sm whitespace-pre-wrap">
        {code}
      </pre>
      <button
        onClick={() => handleCopy(code, index)}
        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {copiedIndex === index ? (
          <CheckIcon className="h-5 w-5 text-green-500" />
        ) : (
          <ClipboardIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default Number;
