import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import list1 from '../../assets/react/list1.png';
import list2 from '../../assets/react/list2.png';


const ReactLists = () => {
  const clipboard = useClipboard();
  const [copiedBlock, setCopiedBlock] = useState(null);

  const handleCopy = (text, blockId) => {
    clipboard.copy(text);
    setCopiedBlock(blockId);
    setTimeout(() => setCopiedBlock(null), 2000);
  };

  const mapExample = `function App() {
  const languages = ['JS', 'Python', 'Java', 'C', 'C++', 'C#'];
 
  return (
    <div className="App">
      {languages.map((language) => {
        return <div>I love {language}</div>
      })}
    </div>
  );
}`;

  const keyExample = `function App() {
  const languagesDict = [
    { id: 1, language: 'JS' },
    { id: 2, language: 'Python' },
    { id: 3, language: 'Java' },
    { id: 4, language: 'C' },
    { id: 5, language: 'C++' },
    { id: 6, language: 'C#' }
  ];
 
  return (
    <div className="App">
      {languagesDict.map((language) => {
        return <div key={language.id}>
          {language.id}. {language.language}
        </div>
      })}
    </div>
  );
}`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In React, lists are rendered using loops — most commonly with the <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">map()</code> function.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Using <code className="font-mono">map()</code></h2>
        <p className="text-sm sm:text-base md:text-lg">
          Here’s a basic example:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {mapExample}
          </pre>
          <button
            onClick={() => handleCopy(mapExample, 'map')}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedBlock === 'map' ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        <div className="space-y-4">

          <p className="text-sm sm:text-base md:text-lg font-medium">Output:
            <img
              src={list1}
              alt="List Example"
              className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Using Keys in Lists</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Keys help React identify which items have changed, are added, or are removed. This improves performance by avoiding re-rendering the entire list.
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {keyExample}
          </pre>
          <button
            onClick={() => handleCopy(keyExample, 'key')}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copiedBlock === 'key' ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-sm sm:text-base md:text-lg font-medium">Output:
            <img
              src={list2}
              alt="List Example"
              className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />
          </p>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Conditional Rendering in React
      </p>
    </div>
  );
};

export default ReactLists;
