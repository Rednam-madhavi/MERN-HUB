import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactEvents = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    `<button onClick={show}>Show</button>`,
    `<button onClick={() => show('true')}>Show</button>`,
    `<button onClick={(event) => show('true', event)}>Show</button>`
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        Understanding Events in React
      </h1>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        If you've coded even a little in JavaScript, you're aware of the importance of events. React makes it seamless while adding its own syntactical twist.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Events in React</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Every HTML attribute in React is written in <strong>camelCase</strong>. The same applies to event handlers. Instead of <code className="bg-gray-200 px-1 py-0.5 rounded font-mono">onclick</code>, you'd use <code className="bg-gray-200 px-1 py-0.5 rounded font-mono">onClick</code>.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Just like JavaScript expressions, event handler functions are written inside <strong>{`{}`}</strong> curly braces.
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-700 text-sm sm:text-base md:text-lg overflow-x-auto shadow-md">
            {codeSnippets[0]}
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[0], 0)}
            className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 0 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Passing Arguments</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          You can't directly pass arguments to event handlers. You'll get a syntax error. Use an arrow function instead:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-700 text-sm sm:text-base md:text-lg overflow-x-auto shadow-md">
            {codeSnippets[1]}
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[1], 1)}
            className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 1 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Accessing the Event Object</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          You can pass the event object along with custom arguments like this:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-700 text-sm sm:text-base md:text-lg overflow-x-auto shadow-md">
            {codeSnippets[2]}
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[2], 2)}
            className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedIndex === 2 ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-between text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-700 dark:text-gray-200">
        <span>Previous: <span className="text-blue-600">React Props</span></span>
        <span>Next: <span className="text-blue-600">React Conditional</span></span>
      </div>
    </div>
  );
};

export default ReactEvents;
