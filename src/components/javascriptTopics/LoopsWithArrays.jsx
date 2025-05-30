import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const LoopsWithArrays = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    {
      title: 'Using for Loop',
      code: `var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}`
    },
    {
      title: 'Using forEach Method',
      code: `var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
    console.log(element);
});`
    },
    {
      title: 'Using for...of Loop',
      code: `var myArray = [1, 2, 3, 4, 5];
for (var element of myArray) {
    console.log(element);
}`
    }
  ];

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Arrays are one of the most important data structures in JavaScript, often paired with loops for element iteration.
        JavaScript provides several options to loop through arrays effectively:
      </p>

      {codeSnippets.map((snippet, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">{snippet.title}</h2>
          <div className="relative">
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
        </div>
      ))}

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">When to Use Which Loop?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Use the traditional <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">for</code> loop when you need control over the index or plan to modify the array during iteration.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">forEach</code> method offers a cleaner syntax and is great for read-only operations.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">for...of</code> loop is concise and ideal for directly accessing values without dealing with indices.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Map, Filter and Reduce
      </p>
    </div>
  );
};

export default LoopsWithArrays;
