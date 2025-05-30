import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const VarVsLetVsConst = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    clipboard.copy(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeLet = `if (x > 10) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ReferenceError: y is not defined`;

  const codeConst = `const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable.`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In JavaScript, variables can be declared using <code>var</code>, <code>let</code>, or <code>const</code>. Each keyword behaves differently in terms of scope, hoisting, and mutability.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">1. <code>var</code></h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <code>var</code> is function-scoped and was the only way to declare variables before ES6. It can lead to unexpected behaviors due to hoisting and lack of block scope.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">2. <code>let</code></h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <code>let</code> is block-scoped and allows reassignment. It's a better alternative to <code>var</code> for mutable values.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">Example:</p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeLet}
          </pre>
          <button
            onClick={() => handleCopy(codeLet)}
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
        <h2 className="text-xl sm:text-2xl font-semibold">3. <code>const</code></h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <code>const</code> is also block-scoped but does not allow reassignment. Variables must be initialized upon declaration.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">Example:</p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeConst}
          </pre>
          <button
            onClick={() => handleCopy(codeConst)}
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
        <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          - Use <code>let</code> when you need to reassign values.<br />
          - Use <code>const</code> when the value should not change.<br />
          - Avoid <code>var</code> in modern JavaScript unless necessary for legacy reasons.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: If else conditionals
      </p>
    </div>
  );
};

export default VarVsLetVsConst;
