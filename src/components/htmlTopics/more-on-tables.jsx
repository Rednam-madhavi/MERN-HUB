import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MoreOnTables = () => {
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

    // Code snippets for copying
    const captionExample = `<table>
  <caption>Student Details</caption>
  <!-- Rest of the table here -->
</table>`;

    const tableStructureExample = `<table>
  <thead>
    <!-- header content -->
  </thead>
  <tfoot>
    <!-- footer content -->
  </tfoot>
  <tbody>
    <!-- body content -->
  </tbody>
</table>`;

    const colgroupExample = `<table>
  <colgroup>
    <col style="background-color:yellow">
  </colgroup>
  <!-- rest of the table -->
</table>`;

    const scopeExample = `<th scope="col">Name</th>
<th scope="col">Age</th>`;

    const sampleTableExample = `<table border="1">
  <caption>Employee Information</caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Position</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>Developer</td>
      <td>$80,000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>Designer</td>
      <td>$70,000</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Carol</td>
      <td>Manager</td>
      <td>$90,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Employees</td>
      <td>3</td>
    </tr>
  </tfoot>
</table>`;

    return (
        <dark:bg-gray-700 className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Let's take a closer look at HTML tables and delve into some more aspects of using tables in HTML.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Adding a Caption</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                To add a title to your table, you can use the <code>&lt;caption&gt;</code> element. This element helps both in terms of SEO and accessibility.
            </p>
           <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<table>
  <caption>Student Details</caption>
  <!-- Rest of the table here -->
</table>`}</code>
                <button
                    onClick={() => handleCopy(captionExample, 'caption')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Caption Syntax"
                >
                    {copied.caption ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Table Headers and Footers</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Besides <code>&lt;th&gt;</code> for indark:bg-gray-700idual header cells, HTML tables allow you to group header or footer content using <code>&lt;thead&gt;</code> and <code>&lt;tfoot&gt;</code>.
            </p>
           <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<table>
  <thead>
    <!-- header content -->
  </thead>
  <tfoot>
    <!-- footer content -->
  </tfoot>
  <tbody>
    <!-- body content -->
  </tbody>
</table>`}</code>
                <button
                    onClick={() => handleCopy(tableStructureExample, 'tableStructure')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Table Structure Syntax"
                >
                    {copied.tableStructure ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Column Groups</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                You can use the <code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code> elements to apply styles to an entire column in an HTML table.
            </p>
           <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<table>
  <colgroup>
    <col style="background-color:yellow">
  </colgroup>
  <!-- rest of the table -->
</table>`}</code>
                <button
                    onClick={() => handleCopy(colgroupExample, 'colgroup')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Column Group Syntax"
                >
                    {copied.colgroup ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Accessibility in Tables</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                To make your tables more accessible, you can use the <code>scope</code> attribute in <code>&lt;th&gt;</code> elements to specify if they are headers for columns, rows, or groups of columns or rows.
            </p>
           <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`<th scope="col">Name</th>
<th scope="col">Age</th>`}</code>
                <button
                    onClick={() => handleCopy(scopeExample, 'scope')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Scope Syntax"
                >
                    {copied.scope ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Sample HTML Table</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Here’s a sample HTML table with all the important elements:
            </p>
           <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{sampleTableExample}</code>
                <button
                    onClick={() => handleCopy(sampleTableExample, 'sampleTable')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Sample Table Syntax"
                >
                    {copied.sampleTable ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                We've covered some advanced topics related to HTML tables in this blog. By using these features, you can create tables that are not only visually appealing but also highly functional and accessible. Stay tuned for more insights into HTML and web development!
            </p>
            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Forms
            </p>
        </dark:bg-gray-700>
        
    );
};

export default MoreOnTables;
