import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Inheritance = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`function Person(name, age) {
    this.name = name;
    this.age = age;
}
 
Person.prototype.greet = function() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
}
 
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}
 
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
 
let student = new Student("John", 25, "Computer Science");
console.log(student.greet()); // "Hello, my name is John and I am 25 years old."
console.log(student.major); // "Computer Science"`);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Inheritance is a fundamental concept in object-oriented programming (OOP) that allows developers to create a new class that inherits properties and methods from an existing class. In JavaScript, inheritance is achieved by using the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">prototype</code> property and the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Object.create()</code> method.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        JavaScript uses a prototype-based inheritance model. Each object has a <strong>prototype chain</strong>, meaning it can inherit properties and methods from another object referenced by its prototype.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Here's an example demonstrating how inheritance works in JavaScript:
      </p>

      {/* Code Block with Copy Button */}
      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre-wrap">
{`function Person(name, age) {
    this.name = name;
    this.age = age;
}
 
Person.prototype.greet = function() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
}
 
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}
 
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
 
let student = new Student("John", 25, "Computer Science");
console.log(student.greet()); // "Hello, my name is John and I am 25 years old."
console.log(student.major); // "Computer Science"`}
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
        In this example, the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Student</code> constructor function inherits from <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Person</code>. This is achieved using <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Object.create()</code>, and the constructor is reset to <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Student</code>.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Unlike class-based languages like Java or C#, JavaScript uses this prototype chain to achieve inheritance. Understanding this helps you write more reusable and efficient code.
      </p>

      <p className="text-sm sm:text-base md:text-lg font-medium text-center mt-10 text-gray-800 dark:text-gray-200">
        Next Chapter: Polymorphism
      </p>
    </div>
  );
};

export default Inheritance;
