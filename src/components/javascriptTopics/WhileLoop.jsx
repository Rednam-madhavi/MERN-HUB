import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const WhileLoop = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exampleCode1 = `let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}`;

  const exampleCode2 = `let input = "";

while (input !== "yes" && input !== "no") {
  input = prompt("Please enter 'yes' or 'no':");
}`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <code className="text-blue-600">while</code> loops are a control flow structure that repeats a block of code as long as a specified condition is true.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
          {`while (condition) {
  // code to be executed
}`}
        </pre>
        <p className="text-sm sm:text-base md:text-lg">
          The condition is checked before each iteration. If it evaluates to <code>true</code>, the loop body runs. If it becomes <code>false</code>, the loop exits.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example: Counting from 1 to 10</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {exampleCode1}
          </pre>
          <button
            onClick={() => handleCopy(exampleCode1)}
            className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copied ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
        <p className="text-sm sm:text-base md:text-lg">
          This loop prints numbers <strong>1 through 10</strong> to the console.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Importance of Updating the Condition</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Failing to update the condition inside the loop can lead to an <strong>infinite loop</strong>.
          Always ensure that the loop progresses toward a stopping point.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Practical Example: User Input</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {exampleCode2}
          </pre>
          <button
            onClick={() => handleCopy(exampleCode2)}
            className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copied ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
        <p className="text-sm sm:text-base md:text-lg">
          This loop keeps asking the user for input until they enter <code>yes</code> or <code>no</code>.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">When to Use a While Loop?</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Use <code className="text-blue-600">while</code> loops when you don't know ahead of time how many iterations are needed. They're ideal for scenarios like waiting for user input, polling a service, or processing data until a condition is met.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Functions
      </p>
    </div>
  );
};

export default WhileLoop;
