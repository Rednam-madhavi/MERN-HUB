import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Encapsulation = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`function Person(name, age) {
    let privateAge = age;
    this.name = name;
 
    this.getAge = function() {
        return privateAge;
    }
}
 
let person = new Person("John", 30);
console.log(person.name); // "John"
console.log(person.privateAge); // undefined
console.log(person.getAge()); // 30`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Encapsulation is a fundamental concept in object-oriented programming (OOP) that refers to the practice of hiding the internal details of an object from other objects and code.
        In JavaScript, encapsulation is achieved by using <strong>closures</strong> and pseudo-access modifiers.
      </p>

      <p className="text-sm sm:text-base md:text-lg">
        For example, here’s how you can create private variables using closures:
      </p>

      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
{`function Person(name, age) {
    let privateAge = age;
    this.name = name;
 
    this.getAge = function() {
        return privateAge;
    }
}
 
let person = new Person("John", 30);
console.log(person.name); // "John"
console.log(person.privateAge); // undefined
console.log(person.getAge()); // 30`}
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
        In this example, <code>privateAge</code> is not accessible outside the function, but it’s still preserved via the <code>getAge</code> method. This is a basic form of encapsulation using JavaScript's function scopes and closures.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        JavaScript does not natively support <code>private</code>, <code>public</code>, or <code>protected</code> access modifiers like other languages. However, you can emulate them with modern syntax using <code>#privateField</code> or by using TypeScript.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium text-center mt-10">
        Next Chapter: Inheritance
      </p>
    </div>
  );
};

export default Encapsulation;
