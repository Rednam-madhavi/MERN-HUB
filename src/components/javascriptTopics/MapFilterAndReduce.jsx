import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MapFilterAndReduce = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`var myArray = [1, 2, 3, 4, 5];

// Map: Multiply each element by 2
var multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]

// Filter: Get even numbers
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Reduce: Sum all elements
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum); // 15`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Arrays are one of the most essential data structures in JavaScript. When working with arrays, we often need to transform, filter, or reduce them. JavaScript provides powerful built-in methods: <strong>map</strong>, <strong>filter</strong>, and <strong>reduce</strong>.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">map</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <code>map</code> method returns a new array with results of calling a provided function on every element:
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">filter</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <code>filter</code> method returns a new array containing elements that pass a condition provided by a function.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">reduce</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <code>reduce</code> method applies a function against an accumulator to reduce the array to a single value.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Combined Example</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here's how they work individually and how you might combine them:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre-wrap">
{`var myArray = [1, 2, 3, 4, 5];

// Map: Multiply each element by 2
var multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]

// Filter: Get even numbers
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Reduce: Sum all elements
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum); // 15`}
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

      <div>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          These methods do not modify the original array. They return new results, making your code cleaner and more functional.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Date
      </p>
    </div>
  );
};

export default MapFilterAndReduce;
