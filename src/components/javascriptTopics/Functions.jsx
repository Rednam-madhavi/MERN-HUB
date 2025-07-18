import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Functions = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeBlocks = [
    {
      title: 'Basic Function Syntax',
      description: "Here's the basic syntax for defining a function in JavaScript:",
      code: `function functionName(parameters) {
  // code to be executed
}`,
    },
    {
      title: 'Function Examples',
      description: 'Below are several function examples, including traditional, arrow, and nested functions:',
      code: `function square(x) {
  return x * x;
}

let result = square(5);  // returns 25

function add(x, y) {
  return x + y;
}

const squareArrow = (x) => {
  return x * x;
};

function outerFunction(x) {
  function innerFunction() {
    // code to be executed
  }
  // more code
}`,
    },
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        JavaScript functions are blocks of code that can be defined and executed whenever needed. They are a crucial part of JavaScript programming and are used to perform specific tasks or actions.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Functions are often referred to as <strong>"first-class citizens"</strong> in JavaScript because they can be treated like any other value—assigned to variables, passed as arguments, or returned as values.
      </p>

      {codeBlocks.map((block, index) => (
        <div className="space-y-4" key={index}>
          <h2 className="text-xl sm:text-2xl font-semibold">{block.title}</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">{block.description}</p>
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {block.code}
            </pre>
            <button
              onClick={() => handleCopy(block.code, index)}
              className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Advanced Concepts</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          JavaScript also supports advanced techniques like anonymous functions, passing functions as arguments, and higher-order functions. These are powerful tools that enhance the flexibility and expressiveness of your code.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Strings
      </p>
    </div>
  );
};

export default Functions;
