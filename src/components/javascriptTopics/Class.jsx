import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Class = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const codeBlock = `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
    }
}`;

  const handleCopy = () => {
    clipboard.copy(codeBlock);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Object-oriented programming (OOP) is a paradigm that uses <strong>objects</strong> and their interactions to design applications.
        One of the fundamental concepts of OOP is the <strong>class</strong>. In JavaScript, classes define blueprints for objects.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Defining a Class</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          A class is defined using the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">class</code> keyword followed by its name. The body contains properties and methods.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example: Creating a Person Class</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here's how to create a class and use the <strong>constructor</strong> to initialize properties:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeBlock}
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

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Adding Methods</h2>
        <p className="text-sm sm:text-base md:text-lg">
          You can add methods like <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">greet()</code> to the class. This improves code reusability and encapsulation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Classes help define reusable and maintainable code. JavaScript classes support properties, methods, and even advanced features like inheritance and polymorphism.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Objects
      </p>
    </div>
  );
};

export default Class;
