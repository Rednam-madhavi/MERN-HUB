import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ForLoops = () => {
  const clipboard = useClipboard();
  const [copiedCodeIndex, setCopiedCodeIndex] = useState(null);

  const codeSnippets = [
    {
      title: 'Standard For Loop',
      code: `for (let i = 1; i <= 10; i++) {
  console.log(i);
}`,
    },
    {
      title: 'For-In Loop',
      code: `let person = {
  name: "John",
  age: 30,
  job: "developer"
};
 
for (let key in person) {
  console.log(key + ": " + person[key]);
}`,
    },
    {
      title: 'For-Of Loop',
      code: `let numbers = [1, 2, 3, 4, 5];
 
for (let number of numbers) {
  console.log(number);
}`,
    },
  ];

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <strong>For loops</strong> are a common control flow structure that let you repeat a block of code multiple times. JavaScript supports:
      </p>
      <ul className="list-disc list-inside text-sm sm:text-base md:text-lg pl-4">
        <li>Standard <code>for</code> loop</li>
        <li><code>for-in</code> loop (for object properties)</li>
        <li><code>for-of</code> loop (for iterable values)</li>
      </ul>

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
              {copiedCodeIndex === index ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      ))}

      <div className="space-y-4">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <strong>Use for loops</strong> to iterate arrays, objects, and more. Choose the loop type that fits your use case:
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg pl-4">
          <li>Use <code>for</code> for precise iteration with counters.</li>
          <li>Use <code>for-in</code> to loop through object keys.</li>
          <li>Use <code>for-of</code> to loop through array or string values.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: While Loop
      </p>
    </div>
  );
};

export default ForLoops;
