import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactJSX = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    {
      label: 'Old Method using createElement:',
      code: `const elem = React.createElement('h1', {}, 'Hello World!');`,
    },
    {
      label: 'New Method using JSX:',
      code: `const elem = <h1>Hello World!</h1>;`,
    },
    {
      label: 'Mathematical Operations:',
      code: `const elem = <h1>React was released in {2010 + 3}</h1>;`,
    },
    {
      label: 'Variables/States:',
      code: `const name = "CWH";\nconst elem = <h1>My name is {name}</h1>;`,
    },
    {
      label: 'Ternary Operators:',
      code: `const elem = <h1>Hello {name ? name : 'World'}</h1>;`,
    },
  ];

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-gray-800 dark:text-gray-200">
        Introduction to JSX in React
      </h1>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What is JSX?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          JSX stands for <strong>JavaScript XML</strong>. It looks similar to HTML and makes it easy to write HTML-like code in React components.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Coding in JSX</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Previously, we used methods like <code>createElement()</code> and <code>appendChild()</code> to create and insert elements:
        </p>

        {codeSnippets.slice(0, 2).map((snippet, index) => (
          <div key={index} className="relative">
            <p className="font-medium text-sm sm:text-base mb-1">{snippet.label}</p>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-700 shadow-md overflow-x-auto text-sm sm:text-base">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(snippet.code, index)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index ? (
                <CheckIcon className="h-5 w-5 text-green-500" />
              ) : (
                <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Expressions in JSX</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          You can include JavaScript expressions in JSX by wrapping them with <code>{'{ }'}</code>. Here are a few examples:
        </p>

        {codeSnippets.slice(2).map((snippet, index) => {
          const actualIndex = index + 2;
          return (
            <div key={index} className="relative">
              <p className="font-medium text-sm sm:text-base mb-1">{snippet.label}</p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-700 shadow-md overflow-x-auto text-sm sm:text-base">
                {snippet.code}
              </pre>
              <button
                onClick={() => handleCopy(snippet.code, actualIndex)}
                className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {copiedIndex === actualIndex ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          );
        })}
      </section>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Components in React
      </p>
    </div>
  );
};

export default ReactJSX;
