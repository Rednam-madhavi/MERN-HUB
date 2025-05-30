import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const SwitchCase = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`let x = "apple";
switch (x) {
  case "apple":
    console.log("x is an apple");
    break;
  case "banana":
    console.log("x is a banana");
    break;
  case "orange":
    console.log("x is an orange");
    break;
  default:
    console.log("x is something else");
}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">switch</code> statement in JavaScript is a control structure that lets you execute different blocks of code based on a specific value. It’s a great alternative to using multiple <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">if-else</code> statements.
      </p>

      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 text-sm sm:text-base p-4 rounded border border-gray-300 dark:border-gray-700 shadow-md overflow-x-auto">
{`switch (expression) {
  case value1:
    // code to execute if expression == value1
    break;
  case value2:
    // code to execute if expression == value2
    break;
  ...
  default:
    // code to execute if expression does not match any case
}`}
        </pre>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Each <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">case</code> checks if the expression matches its value. The <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">break</code> prevents fall-through. The <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">default</code> case is optional and executes if no match is found.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Example</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here's how a <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">switch</code> statement works:
        </p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-800 text-sm sm:text-base p-4 rounded border border-gray-300 dark:border-gray-700 shadow-md overflow-x-auto">
{`let x = "apple";
switch (x) {
  case "apple":
    console.log("x is an apple");
    break;
  case "banana":
    console.log("x is a banana");
    break;
  case "orange":
    console.log("x is an orange");
    break;
  default:
    console.log("x is something else");
}`}
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
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          In this example, the variable <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">x</code> is compared to each <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">case</code>. Since <code>"apple"</code> matches the first case, it logs <strong>"x is an apple"</strong> to the console.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Topic: Ternary Operator
      </p>
    </div>
  );
};

export default SwitchCase;
