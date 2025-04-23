import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Table from '../../assets/html/tables.png';

const HtmlTables = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState({});

  const handleCopy = (codeSnippet, type) => {
    try {
      clipboard.copy(codeSnippet);
      setCopied((prevState) => ({
        ...prevState,
        [type]: true,
      }));

      setTimeout(() => {
        setCopied((prevState) => ({
          ...prevState,
          [type]: false,
        }));
      }, 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  // Table example code snippets
  const basicTableExample = `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Harry</td>
    <td>100</td>
  </tr>
</table>`;

  const colspanExample = `<table border="1">
  <tr>
    <td colspan="2">Merged Columns</td>
  </tr>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
  </tr>
</table>`;

  const rowspanExample = `<table border="1">
  <tr>
    <td>Row 1, Column 1</td>
    <td rowspan="2">Merged Rows</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
  </tr>
</table>`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        HTML tables allow you to arrange data like text, images, and links in rows and columns. You use the <code>&lt;table&gt;</code> tag to start and end a table.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Syntax of HTML Table</h2>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{`<table>
  // table content
</table>`}</code>
        <button
          onClick={() => handleCopy(basicTableExample, 'basicTable')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Table Syntax"
        >
          {copied.basicTable ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Key Elements of HTML Table</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><code>&lt;table&gt;</code>: Defines the table itself.</li>
        <li><code>&lt;tr&gt;</code>: Used for table rows.</li>
        <li><code>&lt;th&gt;</code>: Used for table headings.</li>
        <li><code>&lt;td&gt;</code>: Used for table cells (data).</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Basic Table Structure</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Here’s a basic table structure with headers and data:
      </p>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Harry</td>
    <td>100</td>
  </tr>
</table>`}</code>
        <button
          onClick={() => handleCopy(basicTableExample, 'basicTable')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Basic Table Example"
        >
          {copied.basicTable ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Rowspan and Colspan Attributes</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <strong>Rowspan:</strong> If you want a table cell to span multiple rows, you can use the <code>rowspan</code> attribute.
        <br />
        <strong>Colspan:</strong> If you want a table cell to span multiple columns, you can use the <code>colspan</code> attribute.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Visual representation of HTML Table structure</h2>
      <img
        src={Table}
        alt="Visual representation of HTML table structure"
        className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
      />

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Example for Colspan</h2>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{`<table border="1">
  <tr>
    <td colspan="2">Merged Columns</td>
  </tr>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
  </tr>
</table>`}</code>
        <button
          onClick={() => handleCopy(colspanExample, 'colspan')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Colspan Example"
        >
          {copied.colspan ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Example for Rowspan</h2>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{`<table border="1">
  <tr>
    <td>Row 1, Column 1</td>
    <td rowspan="2">Merged Rows</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
  </tr>
</table>`}</code>
        <button
          onClick={() => handleCopy(rowspanExample, 'rowspan')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Rowspan Example"
        >
          {copied.rowspan ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: More about Tables
      </p>
    </div>
  );
};

export default HtmlTables;
