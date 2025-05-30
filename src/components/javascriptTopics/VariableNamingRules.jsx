import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const VariableNamingRules = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `var x = 10; // x is a number
var y = "hello"; // y is a string
var z = [1, 2, 3]; // z is an array`,

    `var x = 10;
console.log(x); // prints 10

x = "hello";
console.log(x); // prints "hello"`,

    `var x = 10;
var y = 20;
var z = x + y; // z is 30

var str1 = "hello";
var str2 = "world";
var str3 = str1 + " " + str2; // str3 is "hello world"`
  ];

  const handleCopy = (index, code) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        JavaScript is a <strong>dynamically-typed</strong> language, which means that you don't have to specify the data type of a variable when you declare it. The type is inferred from the assigned value. For example:
      </p>

      {/* Code Block 1 */}
      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {codeSnippets[0]}
        </pre>
        <button
          onClick={() => handleCopy(0, codeSnippets[0])}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copiedIndex === 0 ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold">Variable Naming Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li>Variable names can only contain letters, digits, underscores, and dollar signs.</li>
          <li>They cannot start with a digit.</li>
          <li>Variable names are <strong>case-sensitive</strong>.</li>
        </ul>
        <p className="text-sm sm:text-base md:text-lg">
          It’s good practice to use <strong>descriptive</strong> and <strong>meaningful</strong> names to improve code readability.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Using Variables</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Once declared, variables can store and retrieve data throughout your program:
        </p>

        {/* Code Block 2 */}
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeSnippets[1]}
          </pre>
          <button
            onClick={() => handleCopy(1, codeSnippets[1])}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 1 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        <p className="text-sm sm:text-base md:text-lg">
          You can also use variables in expressions and operations, such as:
        </p>

        {/* Code Block 3 */}
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeSnippets[2]}
          </pre>
          <button
            onClick={() => handleCopy(2, codeSnippets[2])}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 2 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Primitives and Objects
      </p>
    </div>
  );
};

export default VariableNamingRules;
