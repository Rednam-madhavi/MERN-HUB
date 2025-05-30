import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Polymorphism = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        clipboard.copy(`class Shape {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log(\`Drawing a \${this.name}\`);
    }
}

class Circle extends Shape {
    draw() {
        console.log(\`Drawing a Circle\`);
    }
}

class Square extends Shape {
    draw() {
        console.log(\`Drawing a Square\`);
    }
}

let shape = new Shape("Shape");
let circle = new Circle();
let square = new Square();

shape.draw(); // Drawing a Shape
circle.draw(); // Drawing a Circle
square.draw(); // Drawing a Square`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Polymorphism is a fundamental concept in object-oriented programming (OOP) that refers to the ability of different objects to respond to the same method call in different ways. In JavaScript, polymorphism is achieved by using <strong>function overriding</strong> and simulating <strong>function overloading</strong>.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Function Overloading</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    JavaScript does not support function overloading natively. However, you can simulate it by using the <code>arguments</code> object to check the number and types of arguments.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Function Overriding</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Function overriding refers to the ability of a subclass to provide a different implementation of a method already defined in the superclass. This is how polymorphism is usually implemented in JavaScript.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Code Example</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Here’s a simple demonstration of polymorphism using class inheritance:
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                        {`class Shape {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log(\`Drawing a \${this.name}\`);
    }
}

class Circle extends Shape {
    draw() {
        console.log(\`Drawing a Circle\`);
    }
}

class Square extends Shape {
    draw() {
        console.log(\`Drawing a Square\`);
    }
}

let shape = new Shape("Shape");
let circle = new Circle();
let square = new Square();

shape.draw(); // Drawing a Shape
circle.draw(); // Drawing a Circle
square.draw(); // Drawing a Square`}
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

            <div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6">
                    In conclusion, polymorphism allows objects to exhibit different behaviors under a common interface, making code more extensible and easier to manage in large applications.
                </p>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Abstraction
            </p>
        </div>
    );
};

export default Polymorphism;
