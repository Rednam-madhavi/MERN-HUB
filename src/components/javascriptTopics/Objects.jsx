import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Objects = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    {
      title: 'Creating an Object using Literal Notation',
      code: `let person = {
  name: "John",
  age: 30,
  greet: function() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }
};`
    },
    {
      title: 'Accessing Object Properties',
      code: `console.log(person.name); // "John"
console.log(person["age"]); // 30`
    },
    {
      title: 'Adding, Updating, and Deleting Properties',
      code: `person.address = "New York";
person["phone"] = "123-456-7890";
delete person.age;`
    },
    {
      title: 'Creating an Object with Constructor Function',
      code: `function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);`
    }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Object-oriented programming (OOP) is a paradigm that uses objects to design applications. In JavaScript, objects are fundamental for representing real-world entities like a person, car, or bank account.
      </p>

      {codeSnippets.map((snippet, index) => (
        <div key={index} className="space-y-2">
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
        <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Objects in JavaScript represent real-world entities and form the foundation of OOP. They can be created using literal notation or constructors, and manipulated using various built-in methods. Mastering objects is crucial for writing robust and maintainable code.
        </p>
      </div>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Constructor
      </p>
    </div>
  );
};

export default Objects;
