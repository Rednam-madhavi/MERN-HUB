import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactCSSStyling = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    {
      label: 'Inline Styling (Direct)',
      code: `const App = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "purple" }}>CodeWithHarry</h1>
    </>
  );
};`
    },
    {
      label: 'Inline Styling (Object)',
      code: `const App = () => {
  const h1Style = {
    backgroundColor: 'purple',
    color: 'white'
  };

  return (
    <>
      <h1 style={h1Style}>CodeWithHarry</h1>
    </>
  );
};`
    },
    {
      label: 'App.css',
      code: `body {
  background-color: purple;
  color: white;
}`
    },
    {
      label: 'Import in index.js',
      code: `import './App.css';`
    },
    {
      label: 'index.module.css',
      code: `.button {
  background-color: purple;
  color: white;
}`
    },
    {
      label: 'Component using CSS Module',
      code: `import styles from './index.module.css';

const Home = () => {
  return (
    <button className={styles.button}>Click me!</button>
  );
};`
    }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In React, there are three primary ways to apply styles:
        <ul className="list-disc pl-10 space-y-1 text-sm sm:text-base md:text-lg">
          <li>Inline Styling</li>
          <li>CSS Stylesheets</li>
          <li>CSS Modules</li>
        </ul>
      </p>


      {/* Inline Styling */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">1. Inline Styling</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          To use inline styles, define a JavaScript object and pass it using the <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">style</code> prop.
        </p>

        {codeSnippets.slice(0, 2).map((snippet, index) => (
          <div key={index} className="relative">
            <p className="text-sm font-medium mb-1">{snippet.label}</p>
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(snippet.code, index)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        ))}

        <p className="text-sm sm:text-base md:text-lg">
          <strong>Note:</strong> CSS properties must be written in <em>camelCase</em>. For example, use <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">backgroundColor</code> instead of <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">background-color</code>.
        </p>
      </div>

      {/* CSS Stylesheets */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">2. CSS Stylesheets</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Write CSS in a separate <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">.css</code> file and import it directly into your component.
        </p>

        {codeSnippets.slice(2, 4).map((snippet, index) => (
          <div key={index + 2} className="relative">
            <p className="text-sm font-medium mb-1">{snippet.label}</p>
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(snippet.code, index + 2)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index + 2 ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* CSS Modules */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">3. CSS Modules</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          CSS Modules allow you to scope styles to specific components, preventing name collisions.
        </p>

        {codeSnippets.slice(4).map((snippet, index) => (
          <div key={index + 4} className="relative">
            <p className="text-sm font-medium mb-1">{snippet.label}</p>
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(snippet.code, index + 4)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index + 4 ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Topic: React Hooks
      </p>
    </div>
  );
};

export default ReactCSSStyling;
