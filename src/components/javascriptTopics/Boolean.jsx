import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const Boolean = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeBlocks = [
    {
      label: 'Creating Boolean Values',
      code: `var isTrue = Boolean(1);
console.log(isTrue); // Output: true
var isFalse = Boolean(0);
console.log(isFalse); // Output: false`
    },
    {
      label: 'Logical Operators: AND (&&) and OR (||)',
      code: `var x = true;
var y = false;
console.log(x && y); // Output: false
console.log(x || y); // Output: true`
    },
    {
      label: 'NOT (!) Operator',
      code: `console.log(!x); // Output: false
console.log(!y); // Output: true`
    },
    {
      label: 'Using valueOf() Method',
      code: `var b = new Boolean(true);
console.log(b.valueOf()); // Output: true`
    }
  ];

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The JavaScript <strong>Boolean</strong> object is a built-in object that provides a way to work with Boolean (<code>true</code>/<code>false</code>) values in your scripts. It allows logical operations such as AND (<code>&&</code>), OR (<code>||</code>), and NOT (<code>!</code>).
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Boolean values can be created using the <code>Boolean()</code> function or by directly assigning <code>true</code> or <code>false</code> to a variable.
      </p>

      {codeBlocks.map((block, index) => (
        <div key={index} className="space-y-2">
          <h2 className="text-lg sm:text-xl font-semibold">{block.label}</h2>
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {block.code}
            </pre>
            <button
              onClick={() => handleCopy(block.code, index)}
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

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>valueOf()</code> method returns the primitive boolean value from a Boolean object. This is helpful when you're working with Boolean objects rather than primitive values.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Window Object
      </p>
    </div>
  );
};

export default Boolean;
