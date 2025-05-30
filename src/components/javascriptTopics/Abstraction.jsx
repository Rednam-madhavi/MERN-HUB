import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Abstraction = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleCopy = () => {
    clipboard.copy(`function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot instantiate abstract class Shape");
  }
  this.draw = function () {
    throw new Error("Cannot call abstract method draw from Shape");
  };
}

function Circle() {
  Shape.call(this);
  this.draw = function () {
    console.log("Drawing a Circle");
  };
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let circle = new Circle();
circle.draw(); // "Drawing a Circle"
let shape = new Shape(); // Error: Cannot instantiate abstract class Shape`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Abstraction is a fundamental concept in object-oriented programming (OOP) that refers to the practice of <strong>hiding implementation details</strong> and exposing only the essential features of an object.
        JavaScript does not natively support abstract classes, but similar behavior can be achieved through function constructors and prototypes.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Simulating Abstract Classes in JavaScript</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          In JavaScript, we can simulate abstract classes by throwing errors in the base class to prevent direct instantiation and enforce method overrides in child classes.
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot instantiate abstract class Shape");
  }
  this.draw = function () {
    throw new Error("Cannot call abstract method draw from Shape");
  };
}

function Circle() {
  Shape.call(this);
  this.draw = function () {
    console.log("Drawing a Circle");
  };
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let circle = new Circle();
circle.draw(); // "Drawing a Circle"
let shape = new Shape(); // Error: Cannot instantiate abstract class Shape`}
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
        <h2 className="text-xl sm:text-2xl font-semibold">What About Interfaces?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Interfaces are not built into JavaScript but are available through languages like <strong>TypeScript</strong>. Interfaces define a contract that implementing classes must fulfill, promoting consistency across implementations.
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 p-1 rounded"
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt="Modal Preview"
              className="max-w-full max-h-[90vh] rounded-md shadow-lg"
            />
          </div>
        </div>
      )}

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        End Of JavaScript Tutorial
      </p>
    </div>
  );
};

export default Abstraction;
