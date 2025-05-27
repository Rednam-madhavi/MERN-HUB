import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const WhatIsAHook = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `// import statements
// Can't call here
const Blogs = () => {
    // Can call here
    return <h1>Blogs</h1>;
};

export default Blogs;`,
    `const Blogs = () => {
    // Can call here
    if (true){
        // Can't call here
    }
    return <h1>Blogs</h1>;
};

export default Blogs;`,
  ];

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Hooks were added to React in version <strong>16.8</strong>. They let you use state and other React features
        <strong> without writing a class</strong>.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Although states have largely replaced classes in React, there is <strong>no plan to remove classes</strong> from React.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Things to Keep in Mind While Using Hooks:</h2>

        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>You must import the hook first</li>
          <li>You must import it from <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">react</code></li>
          <li>Hooks can only be called in React <strong>Function Components</strong></li>
        </ul>

        <div className="space-y-2">
          <p className="text-sm sm:text-base md:text-lg">Example:</p>
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {codeSnippets[0]}
            </pre>
            <button
              onClick={() => handleCopy(codeSnippets[0], 0)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === 0 ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>Hooks cannot be <strong>conditional</strong></li>
          <li>Hooks do not work inside <strong>class components</strong></li>
          <li>
            Hooks must be called at the <strong>top level</strong> of a component — not inside blocks like <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">if</code>, loops, or functions
          </li>
        </ul>

        <div className="space-y-2">
          <p className="text-sm sm:text-base md:text-lg">Example of incorrect usage:</p>
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {codeSnippets[1]}
            </pre>
            <button
              onClick={() => handleCopy(codeSnippets[1], 1)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === 1 ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Topic: React useState Hook
      </p>
    </div>
  );
};

export default WhatIsAHook;
