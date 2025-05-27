import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import props from '../../assets/react/props.png';

const ReactProps = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const codeSnippet = `function Cat(props) {
  return <h1>Meow's color is {props.color}</h1>;
}

// Usage
<Cat color="purple" />`;

  const handleCopy = () => {
    clipboard.copy(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        Understanding Props in React
      </h1>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <strong>Props</strong> (short for "properties") are arguments passed into React components via HTML-like attributes.
        They allow components to be dynamic and reusable by passing data from one component to another.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example: Passing Props</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Below is an example of a functional React component called <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">Cat</code> that accepts a <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-sm">color</code> prop.
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {codeSnippet}
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

        <h2 className="text-xl sm:text-2xl font-semibold">Output</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          When rendered, the component will display:
        </p>

        <img
          src={props}
          alt="React Props Example"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ReactProps;
