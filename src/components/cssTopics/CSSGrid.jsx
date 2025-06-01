import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import gridBasic from '../../assets/css/grid1.webp';
import gridOutput from '../../assets/css/grid2.webp';
import gridRowColumn from '../../assets/css/grid3.webp';

const CSSGrid = () => {
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
        Just like FlexBox, CSS Grid makes it easier to design complex layouts using rows and columns. CSS Grid provides two display modes: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">grid</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">inline-grid</code>. Elements inside a grid container are known as grid items.
      </p>

      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Basic CSS Grid Example</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`<div class="grid-container">\n  <div class="grid-item">1</div>\n  <div class="grid-item">2</div>\n  <div class="grid-item">3</div>\n</div>`}</pre>
          <button
            onClick={() => handleCopy(`<div class="grid-container">\n  <div class="grid-item">1</div>\n  <div class="grid-item">2</div>\n  <div class="grid-item">3</div>\n</div>`, 1)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 1 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>

        <h3 className="text-md font-medium">Example:</h3>
        <img src={gridBasic} alt="Grid Layout Example" className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md" />
        <h3 className="text-md font-medium">Output:</h3>
        <img src={gridOutput} alt="Grid Output" className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md" />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Grid Row & Column Properties</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Similar to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex-grow</code> in Flexbox, Grid allows you to control how many rows or columns an item spans.
        </p>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`<div class="grid-item" style="grid-row: 1 / 5;">2</div>`}</pre>
          <button
            onClick={() => handleCopy(`<div class="grid-item" style="grid-row: 1 / 5;">2</div>`, 2)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 2 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>

        <h3 className="text-md font-medium">Output:</h3>
        <img src={gridRowColumn} alt="Grid Row Span Output" className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md" />
      </div>

      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Summary</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li><strong>grid-row</strong> – Defines how many rows an item spans.</li>
          <li><strong>grid-column</strong> – Defines how many columns an item spans.</li>
          <li><strong>display: grid</strong> – Enables grid layout on a container.</li>
          <li><strong>grid-template-columns</strong> – Defines the structure of columns.</li>
          <li><strong>grid-template-rows</strong> – Defines the structure of rows.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Media Queries
      </p>
    </div>
  );
};

export default CSSGrid;
