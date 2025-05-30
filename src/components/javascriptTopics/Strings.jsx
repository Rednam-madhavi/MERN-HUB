import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Strings = () => {
  const clipboard = useClipboard();
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    clipboard.copy(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeSamples = [
    {
      label: "Length Method",
      code: `var str = "Hello World";
console.log(str.length); // 11`,
    },
    {
      label: "Concat Method",
      code: `var str1 = "Hello";
var str2 = " World";
console.log(str1.concat(str2)); // "Hello World"`,
    },
    {
      label: "IndexOf Method",
      code: `var str = "Hello World";
console.log(str.indexOf("W")); // 6`,
    },
    {
      label: "Slice Method",
      code: `var str = "Hello World";
console.log(str.slice(6)); // "World"`,
    },
    {
      label: "Replace Method",
      code: `var str = "Hello World";
console.log(str.replace("World", "Universe")); // "Hello Universe"`,
    },
    {
      label: "Case Methods",
      code: `var str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"`,
    },
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        One of the most important aspects of JavaScript is its ability to manipulate strings — sequences of characters. In this guide, we’ll explore the basics and useful built-in methods to work with them efficiently.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What is a String?</h2>
        <p className="text-sm sm:text-base md:text-lg">
          A string in JavaScript is a sequence of characters enclosed in either single or double quotes:
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-600 shadow-sm text-sm sm:text-base">
          "Hello World"<br />
          'Hello World'
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Common String Methods</h2>
        {codeSamples.map((sample, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-medium text-lg sm:text-xl">{sample.label}</h3>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-600 shadow-md">
                {sample.code}
              </pre>
              <button
                onClick={() => handleCopy(sample.code)}
                className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {copiedCode === sample.code ? (
                  <CheckIcon className="h-6 w-6 text-green-500" />
                ) : (
                  <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm sm:text-base md:text-lg mt-8">
        These are just a few examples of the powerful string manipulation methods in JavaScript. Mastering them allows you to create dynamic and interactive applications with ease.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: Arrays and Array Methods
      </p>
    </div>
  );
};

export default Strings;
