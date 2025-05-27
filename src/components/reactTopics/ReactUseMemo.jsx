import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactUseMemo = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`import { useMemo, useState } from "react";
 
const App = () => {
  const [number, setNumber] = useState(0);
  const calculation = useMemo(() => expensiveFunction(number), [number]);
 
  return (
    <div>
      {calculation}
    </div>
  );
};
 
const expensiveFunction = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num = num + i;
  }
  return num;
};

export default App;`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">useMemo</code> Hook returns a <strong>memoized value</strong>. It’s useful to avoid expensive calculations on every render.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        It is similar to <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">useCallback</code>, but while <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">useCallback</code> returns a memoized <em>function</em>, <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">useMemo</code> returns a memoized <em>value</em>.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        It only recalculates the memoized value when one of its dependencies changes — boosting performance.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">When Should You Use It?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        If you have a function that is computationally heavy and should only be re-executed when necessary — like this one:
      </p>

      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow border border-gray-300 dark:border-gray-600 overflow-x-auto">
        <pre className="text-sm sm:text-base font-mono">
{`const expensiveFunction = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};`}
        </pre>
      </div>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        This function runs on every render, which may slow down performance. We can prevent unnecessary re-calculations by memoizing the value with <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">useMemo</code>.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Example Code</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Below is an example of how to use <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">useMemo</code> with an expensive calculation.
      </p>

      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
{`import { useMemo, useState } from "react";
 
const App = () => {
  const [number, setNumber] = useState(0);
  const calculation = useMemo(() => expensiveFunction(number), [number]);
 
  return (
    <div>
      {calculation}
    </div>
  );
};
 
const expensiveFunction = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num = num + i;
  }
  return num;
};

export default App;`}
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

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        React Tutorial Completed
      </p>
    </div>
  );
};

export default ReactUseMemo;
