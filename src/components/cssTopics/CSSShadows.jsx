import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const CSSShadows = () => {
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
        CSS offers various properties to add visual depth and emphasis. Shadows and outlines are key tools in modern UI design for adding contrast and focus to elements.
      </p>

      {/* Box Shadows */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Box Shadows</h2>
        <p>
          The <code className="font-mono text-blue-600 dark:text-blue-400">box-shadow</code> property adds shadow effects around an element's frame.
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li><strong>h-offset & v-offset:</strong> Shadow position</li>
          <li><strong>blur:</strong> Shadow blurriness</li>
          <li><strong>spread:</strong> Shadow size</li>
          <li><strong>color:</strong> Shadow color</li>
          <li><strong>inset:</strong> Inner shadow (optional)</li>
        </ul>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`.div-element {\n  box-shadow: 5px 5px 15px 5px #888888;\n}`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `.div-element {\n  box-shadow: 5px 5px 15px 5px #888888;\n}`,
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
      </div>

      {/* Text Shadows */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Text Shadows</h2>
        <p>
          The <code className="font-mono text-blue-600 dark:text-blue-400">text-shadow</code> property applies shadows to text to improve readability or create elegant effects.
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li><strong>h-offset & v-offset:</strong> Text shadow position</li>
          <li><strong>blur:</strong> How soft or sharp the shadow appears</li>
          <li><strong>color:</strong> Color of the shadow</li>
        </ul>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`.text-element {\n  text-shadow: 2px 2px 4px #888888;\n}`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `.text-element {\n  text-shadow: 2px 2px 4px #888888;\n}`,
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
      </div>

      {/* Outlines */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Outlines</h2>
        <p>
          <code className="font-mono text-blue-600 dark:text-blue-400">outline</code> draws a line outside the border edge, often used for accessibility focus indication.
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li><strong>width:</strong> Outline thickness</li>
          <li><strong>style:</strong> Line style (solid, dotted, dashed, etc.)</li>
          <li><strong>color:</strong> Outline color</li>
        </ul>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`.button-element:focus {\n  outline: 2px solid blue;\n}`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `.button-element:focus {\n  outline: 2px solid blue;\n}`,
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

        <h3 className="text-md font-medium">Outline vs Border:</h3>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li><strong>Position:</strong> Outlines don’t affect layout, borders do.</li>
          <li><strong>Offset:</strong> Use <code>outline-offset</code> to control outline distance.</li>
          <li><strong>Radius:</strong> Borders support rounded corners; outlines generally don’t.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS ToolTip Text
      </p>
    </div>
  );
};

export default CSSShadows;
