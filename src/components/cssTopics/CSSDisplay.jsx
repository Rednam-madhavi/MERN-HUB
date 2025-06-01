import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import example from '../../assets/css/display1.webp';
import output from '../../assets/css/display2.webp';

const CSSDisplay = () => {
  const [copied, setCopied] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <strong>display</strong> property in CSS determines how an element is rendered on the page. It can control layout behavior like block, inline, flex, grid, or none.
      </p>

      {/* Display: inline */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Display: inline</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Renders the element as an inline element (like <code>&lt;span&gt;</code>). Width, height, and margin-top/bottom have no effect.
        </p>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`div {\n  display: inline;\n}`}</pre>
          <button
            onClick={() => handleCopy(`div {\n  display: inline;\n}`, 1)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded"
          >
            {copied === 1 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Display: block */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Display: block</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Makes the element take the full width available and starts on a new line.
        </p>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`div {\n  display: block;\n}`}</pre>
          <button
            onClick={() => handleCopy(`div {\n  display: block;\n}`, 2)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded"
          >
            {copied === 2 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Display: inline-block */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Display: inline-block</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Behaves like inline but allows width and height to be set.
        </p>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`div {\n  display: inline-block;\n}`}</pre>
          <button
            onClick={() => handleCopy(`div {\n  display: inline-block;\n}`, 3)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded"
          >
            {copied === 3 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Display: none */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Display: none</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Completely removes the element from rendering. It won’t occupy space in the layout.
        </p>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`div {\n  display: none;\n}`}</pre>
          <button
            onClick={() => handleCopy(`div {\n  display: none;\n}`, 4)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded"
          >
            {copied === 4 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Example and Output */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">CSS Display Example</h2>
        <h3 className="text-md font-medium">Example:</h3>
        <img
          src={example}
          alt="CSS Display Example"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
        <h3 className="text-md font-medium">Output:</h3>
        <img
          src={output}
          alt="CSS Display Output"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* Summary */}
      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Summary of Display Values</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li><strong>inline</strong> – no box model control.</li>
          <li><strong>block</strong> – full width + starts on a new line.</li>
          <li><strong>inline-block</strong> – inline positioning + box model control.</li>
          <li><strong>none</strong> – element is not rendered at all.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS FlexBox
      </p>
    </div>
  );
};

export default CSSDisplay;
