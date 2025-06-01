import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import tooltip1 from '../../assets/css/tooltip1.webp';
import tooltip2 from '../../assets/css/tooltip2.webp';
import Output from '../../assets/css/tooltip3.webp';

const CSSToolTipText = () => {
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
        A CSS Tooltip is a UI technique that reveals extra information when the user hovers over an element. It enhances accessibility and user experience by providing context or descriptions without cluttering the layout.
      </p>

      {/* HTML Markup */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">HTML Markup</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `<div class="tooltip">Hover over me\n  <span class="tooltiptext">Tooltip text</span>\n</div>`,
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
        <h3 className="text-md font-medium">HTML Structure Preview:</h3>
        <img
          src={tooltip1}
          alt="Tooltip HTML Preview"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* CSS Stylesheet */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">CSS Styles</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; 
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%; \n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}`,
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
        <h3 className="text-md font-medium">CSS Structure Preview:</h3>
        <img
          src={tooltip2}
          alt="Tooltip CSS Preview"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* Output */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Tooltip Output</h2>
        <img
          src={Output}
          alt="Tooltip Output"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
        <p className="text-sm sm:text-base md:text-lg">
          This tooltip appears when hovering over the element. You can enhance it further using <strong>CSS transitions</strong> or <strong>animations</strong> for smoother effects.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Masking
      </p>
    </div>
  );
};

export default CSSToolTipText;
