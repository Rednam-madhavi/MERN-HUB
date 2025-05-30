import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Constructor = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const codeSnippet = `function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);`;

  const codeWithMethod = `function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
    };
}`;

  const handleCopy = (code) => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        A <strong>constructor</strong> is a special method in object-oriented programming (OOP) used to create and initialize new objects. In JavaScript, constructor functions are used to define properties and methods shared across multiple instances.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Basic Constructor Function</h2>
      <p className="text-sm sm:text-base md:text-lg">
        Here's an example of a simple constructor function named <code>Person</code>:
      </p>

      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {codeSnippet}
        </pre>
        <button
          onClick={() => handleCopy(codeSnippet)}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <p className="text-sm sm:text-base md:text-lg">
        The <code>this</code> keyword refers to the current object being created. Use <code>new</code> to create new instances from the constructor.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Adding Methods to Constructors</h2>
      <p className="text-sm sm:text-base md:text-lg">
        You can define methods directly inside the constructor. Here's an updated example that adds a <code>greet()</code> method:
      </p>

      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {codeWithMethod}
        </pre>
        <button
          onClick={() => handleCopy(codeWithMethod)}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <p className="text-sm sm:text-base md:text-lg">
        Now every <code>Person</code> object created will have a personalized greeting method.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Static Method
      </p>
    </div>
  );
};

export default Constructor;
