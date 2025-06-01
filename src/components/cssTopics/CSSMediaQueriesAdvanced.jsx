import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import mediaqueries from '../../assets/css/mediaqueriesadv1.webp';
import styling from '../../assets/css/mediaqueriesadv2.webp';
import output from '../../assets/css/mediaqueriesadv3.gif';

const CSSMediaQueriesAdvanced = () => {
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
        Media queries allow websites to adapt styling based on a user's device characteristics like screen width, height, or resolution. This is especially useful for making responsive layouts.
      </p>

      {/* Syntax */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Media Query Syntax</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`@media media-type and (media-feature) {\n  /* CSS rules */\n}`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `@media media-type and (media-feature) {\n  /* CSS rules */\n}`,
                1
              )
            }
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 1 ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="text-sm sm:text-base md:text-lg">
          <code>@media</code> defines the start of a query, <code>media-type</code> refers to device types (e.g. screen), and <code>media-feature</code> targets specific conditions like screen width.
        </p>
      </div>

      {/* HTML Example */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">HTML Structure</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`<div class="container">\n  <span class="box">Box 1</span>\n  <span class="box">Box 2</span>\n  <span class="box">Box 3</span>\n  <span class="box">Box 4</span>\n</div>`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `<div class="container">\n  <span class="box">Box 1</span>\n  <span class="box">Box 2</span>\n  <span class="box">Box 3</span>\n  <span class="box">Box 4</span>\n</div>`,
                2
              )
            }
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 2 ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <img
          src={mediaqueries}
          alt="HTML Structure"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* CSS Example */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Media Query CSS</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`.container {\n  display: flex;\n  flex-direction: row;\n}\n\n@media screen and (max-width: 600px) {\n  .container {\n    flex-direction: column;\n    text-align: center;\n  }\n}`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `.container {\n  display: flex;\n  flex-direction: row;\n}\n\n@media screen and (max-width: 600px) {\n  .container {\n    flex-direction: column;\n    text-align: center;\n  }\n}`,
                3
              )
            }
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 3 ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <img
          src={styling}
          alt="CSS Styling Example"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* Output */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Responsive Output</h2>
        <img
          src={output}
          alt="Responsive Output Example"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* Summary */}
      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Key Points</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li>Media queries help build responsive designs.</li>
          <li>They apply CSS rules based on device features like screen width.</li>
          <li>They can be used to switch layout, font size, alignment, etc.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Flexbox Advanced
      </p>
    </div>
  );
};

export default CSSMediaQueriesAdvanced;
