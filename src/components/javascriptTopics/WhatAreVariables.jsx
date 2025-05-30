import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const WhatAreVariables = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    { label: 'Declaring a variable with var', code: 'var x;' },
    { label: 'Declaring and assigning with var', code: 'var x = 10;' },
    { label: 'Using let and const', code: 'let y = 20;\nconst z = 30;' }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In JavaScript, variables are used to store data. They are essential for storing, retrieving, and manipulating information in a program.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        There are a few different ways to declare variables in JavaScript, each with its own syntax and behavior. Let’s explore how they work.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Declaring Variables</h2>
        <p className="text-sm sm:text-base md:text-lg">
          To declare a variable in JavaScript, you can use the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">var</code> keyword followed by a name. For example:
        </p>

        {codeSnippets.map((snippet, index) => (
          <div key={index} className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(snippet.code, index)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">let and const</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Besides <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">var</code>, JavaScript also offers <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">let</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">const</code> for declaring variables:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li><code>let</code> allows reassignment.</li>
          <li><code>const</code> creates a constant that cannot be reassigned.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Common Data Types</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          JavaScript supports several data types:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li><strong>Numbers</strong> — e.g., <code>10</code>, <code>3.14</code></li>
          <li><strong>Strings</strong> — e.g., <code>"hello"</code>, <code>'world'</code></li>
          <li><strong>Booleans</strong> — e.g., <code>true</code>, <code>false</code></li>
          <li><strong>Arrays</strong> — e.g., <code>[1, 2, 3]</code></li>
          <li><strong>Objects</strong> — e.g., <code>{`{ name: "John", age: 30 }`}</code></li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Variable Naming Rules
      </p>
    </div>
  );
};

export default WhatAreVariables;
