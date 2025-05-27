import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactUseCallback = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`const handleState = useCallback(() => {
  setState({ ...state, type: 'CONFIRMED' });
}, [state]);`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono">useCallback</code> Hook returns a memoized callback function.
        It’s useful when you want to avoid unnecessary re-creations of functions on every render, especially in performance-critical areas.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Without <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono">useCallback</code>, a function would be redefined on every render,
        breaking referential equality and potentially causing unnecessary re-renders in child components.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">When to Use <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono">useCallback</code>?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Even when using <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono">React.memo</code>, passing a new function prop will cause the child to re-render due to referential inequality.
          This is where <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono">useCallback</code> helps by memoizing the function.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Example</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here's how you use it:
        </p>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
{`const handleState = useCallback(() => {
  setState({ ...state, type: 'CONFIRMED' });
}, [state]);`}
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
          This function will only be recreated when the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono">state</code> changes.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Topic: React useMemo
      </p>
    </div>
  );
};

export default ReactUseCallback;
