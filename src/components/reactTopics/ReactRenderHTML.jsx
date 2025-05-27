import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import render from '../../assets/react/render.png';

const ReactRenderHTML = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`ReactDOM.render(<p>Hello</p>, document.getElementById('root'));`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        React renders HTML to the web page by using a function called <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">ReactDOM.render()</code>.
      </p>

      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">How <code>ReactDOM.render()</code> Works</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          This function takes two arguments:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>The HTML content you want to show on the page</li>
          <li>The HTML element where you want to put that content</li>
        </ul>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          But where does it find that element? Inside <code>index.html</code> located in the <code>public</code> folder.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          There you'll notice a <code>{`<div id="root"></div>`}</code>. That is where your React app gets rendered.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg sm:text-xl font-semibold">Example:</h2>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`ReactDOM.render(
  <p>Hello</p>, 
  document.getElementById('root')
);`}
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

        <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
        <img
          src={render}
          alt="React Render Example"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
        />
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: JSX Syntax and Rules
      </p>
    </div>
  );
};

export default ReactRenderHTML;
