import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ArraysAndArrayMethods = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `var myArray = [1, "Hello", [2, 3]];`,
    `var myArray = [1, "Hello", [2, 3]];
console.log(myArray.length);`,
    `var myArray = [1, "Hello", [2, 3]];
myArray.push("World");
console.log(myArray);`,
    `var myArray = [1, "Hello", [2, 3], "World"];
myArray.pop();
console.log(myArray);`,
    `var myArray = [1, "Hello", [2, 3]];
myArray.shift();
console.log(myArray);`,
    `var myArray = [1, "Hello", [2, 3]];
myArray.unshift(0);
console.log(myArray);`,
    `var myArray = [1, "Hello", [2, 3]];
console.log(myArray.slice(1, 2));`,
    `var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.log(myArray);`
  ];

  const handleCopy = (snippet, index) => {
    clipboard.copy(snippet);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        One of the most important data structures in JavaScript is the <strong>array</strong>, which is a collection of elements. Here, we’ll explore the basics of arrays and common methods used to manipulate them.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What is an Array?</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Arrays are collections of items stored in a single variable. They can contain any data type including other arrays.
        </p>
        <CodeBlock snippet={codeSnippets[0]} onCopy={() => handleCopy(codeSnippets[0], 0)} copied={copiedIndex === 0} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Common Array Methods</h2>

        <Method title="1. length" description="Returns the number of elements in an array." snippet={codeSnippets[1]} index={1} />

        <Method title="2. push" description="Adds an element to the end of the array." snippet={codeSnippets[2]} index={2} />

        <Method title="3. pop" description="Removes the last element of the array." snippet={codeSnippets[3]} index={3} />

        <Method title="4. shift" description="Removes the first element of the array." snippet={codeSnippets[4]} index={4} />

        <Method title="5. unshift" description="Adds an element to the beginning of the array." snippet={codeSnippets[5]} index={5} />

        <Method title="6. slice" description="Extracts a portion of the array without modifying the original." snippet={codeSnippets[6]} index={6} />

        <Method title="7. splice" description="Adds or removes elements at a specified index." snippet={codeSnippets[7]} index={7} />
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Loops with Arrays
      </p>
    </div>
  );

  function Method({ title, description, snippet, index }) {
    return (
      <div className="space-y-2">
        <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg">{description}</p>
        <CodeBlock snippet={snippet} onCopy={() => handleCopy(snippet, index)} copied={copiedIndex === index} />
      </div>
    );
  }

  function CodeBlock({ snippet, onCopy, copied }) {
    return (
      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre-wrap">
          {snippet}
        </pre>
        <button
          onClick={onCopy}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>

      </div>

    );
  }
};

export default ArraysAndArrayMethods;
