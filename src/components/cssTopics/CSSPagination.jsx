import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import pagination from '../../assets/css/pagination1.webp';
import styling from '../../assets/css/pagination2.webp';
import output from '../../assets/css/pagination3.webp';

const CSSPagination = () => {
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
        CSS Pagination isn't an inbuilt property, but you can use various CSS properties to implement a clean foot-pager interface on your website. Below is an example of how to create and style pagination links.
      </p>

      {/* Pagination Example */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Pagination Markup Example</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`<div class="pagination">\n  <a href="#">1</a>\n  <a href="#" class="active">2</a>\n  <a href="#">3</a>\n</div>`}</pre>
          <button
            onClick={() => handleCopy(`<div class="pagination">\n  <a href="#">1</a>\n  <a href="#" class="active">2</a>\n  <a href="#">3</a>\n</div>`, 1)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 1 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
        <h3 className="text-md font-medium">Visual Layout:</h3>
        <img
          src={pagination}
          alt="Pagination HTML Structure"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* Styling Example */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Pagination Styling</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{`.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  margin: 4px;\n  border: 1px solid #ddd;\n}\n\n.pagination a.active {\n  background-color: purple;\n  color: white;\n  border: 1px solid purple;\n}\n\n.pagination a:hover:not(.active) {\n  background-color: black;\n  color: white;\n}`}</pre>
          <button
            onClick={() =>
              handleCopy(
                `.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  margin: 4px;\n  border: 1px solid #ddd;\n}\n\n.pagination a.active {\n  background-color: purple;\n  color: white;\n  border: 1px solid purple;\n}\n\n.pagination a:hover:not(.active) {\n  background-color: black;\n  color: white;\n}`,
                2
              )
            }
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 2 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
        <h3 className="text-md font-medium">Styling Preview:</h3>
        <img
          src={styling}
          alt="Pagination CSS Styling"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* Output */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Pagination Output</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The purple box indicates the <code>active</code> page, while the black color appears when hovering over the links. This provides clear feedback to the user while navigating.
        </p>
        <img
          src={output}
          alt="Pagination Output"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      {/* Summary */}
      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Key Notes</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li>Use <code>:not(.active)</code> to apply hover styles only to inactive links.</li>
          <li>CSS transitions help enhance the visual feel during interaction.</li>
          <li>Ensure sufficient contrast for accessibility when choosing colors.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Media Queries Advanced
      </p>
    </div>
  );
};

export default CSSPagination;
