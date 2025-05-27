import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactMemo = () => {
  const clipboard = useClipboard();
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  const handleCopy = (text) => {
    clipboard.copy(text);
    setCopiedSnippet(text);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        By default, React re-renders components on every update. Using <code className="bg-gray-200 px-1 py-0.5 rounded dark:bg-gray-700">memo</code> helps stop this behavior if props haven’t changed.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">The Problem</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Components like <code className="bg-gray-200 px-1 py-0.5 rounded dark:bg-gray-700">Navbar</code> or <code className="bg-gray-200 px-1 py-0.5 rounded dark:bg-gray-700">Footer</code> may re-render unnecessarily, even when their props haven't changed.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          You can test this by putting a <code className="bg-gray-200 px-1 py-0.5 rounded dark:bg-gray-700">console.log()</code> inside the component and observing the render logs.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">The Solution</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <strong>memo</strong> function from React is a simple way to prevent unnecessary re-renders by doing a shallow comparison of props.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          If the props are the same (i.e., the object reference hasn’t changed), React will skip the re-render.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Importing <code>memo</code></h2>
        <p className="text-sm sm:text-base md:text-lg">Here’s how to import it:</p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`import { memo } from "react";`}
          </pre>
          <button
            onClick={() => handleCopy('import { memo } from "react";')}
            className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedSnippet === 'import { memo } from "react";' ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Using <code>memo</code> in Exports</h2>
        <p className="text-sm sm:text-base md:text-lg">Wrap your component export like this:</p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`export default memo(Navbar);`}
          </pre>
          <button
            onClick={() => handleCopy('export default memo(Navbar);')}
            className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedSnippet === 'export default memo(Navbar);' ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Topic: React CSS Styling
      </p>
    </div>
  );
};

export default ReactMemo;
