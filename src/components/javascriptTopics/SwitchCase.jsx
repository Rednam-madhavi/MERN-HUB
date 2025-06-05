import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const SwitchCase = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const syntaxCode = `switch (expression) {
  case value1:
    // code to execute if expression == value1
    break;
  case value2:
    // code to execute if expression == value2
    break;
  ...
  default:
    // code to execute if expression does not match any case
}`;

  const exampleCode = `let x = "apple";
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
}`;

  const handleCopy = ({ code, index }) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">switch</code> statement in JavaScript allows you to execute one block of code among many based on the value of a variable or expression. It’s a cleaner alternative to writing multiple <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">if-else</code> statements.
      </p>

      {/* Syntax */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Syntax</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre">
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
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Each <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">case</code> checks if the expression matches its value. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">break</code> statement stops further evaluation. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">default</code> block runs if none of the cases match.
        </p>
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here's an example of using a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">switch</code> statement:
        </p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre">
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
          In this example, the value of <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">x</code> is <code>"apple"</code>, which matches the first case. So, it logs <strong>"x is an apple"</strong> to the console. No further cases are checked.
        </p>
      </div>

      {/* Next Topic */}
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Topic: Ternary Operator
      </p>
    </div>
  );
};

export default SwitchCase;
