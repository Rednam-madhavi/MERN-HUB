import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const StaticMethod = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        clipboard.copy(`class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(1, 2)); // 3`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                In object-oriented programming, a <strong>static method</strong> is a method that belongs to a class rather than instances of that class. In JavaScript, static methods are declared using the <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">static</code> keyword and are accessible directly from the class — without needing to create an object.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Example: MathHelper class</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Here's an example where a class <code>MathHelper</code> defines a static method <code>add</code>:
                </p>

                <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
{`class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(1, 2)); // 3`}
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
                <h2 className="text-xl sm:text-2xl font-semibold">Why Use Static Methods?</h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
                    <li>They provide utility functions that don’t rely on instance-specific data.</li>
                    <li>They help keep your code organized and grouped within relevant classes.</li>
                    <li>You can use them for operations like calculations, ID generators, etc.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Key Characteristics</h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
                    <li>Accessed via the class name, not instance.</li>
                    <li>Don’t have access to <code>this</code> (unless it refers to the class itself).</li>
                    <li>Cannot access instance properties or methods.</li>
                </ul>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Encapsulation
            </p>
        </div>
    );
};

export default StaticMethod;
