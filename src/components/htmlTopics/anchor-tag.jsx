import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const AnchorTag = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = (codeSnippet) => {
    clipboard.copy(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const exampleCode = `<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
 
  <!-- Link at the top -->
  <a href="#gardening-tips">Go to Gardening Tips</a>
 
  <!-- Some content -->
  <p>Here is some other content...</p>
 
  <!-- Gardening Tips Section -->
  <h2 id="gardening-tips">Gardening Tips</h2>
  <p>This section provides tips on how to garden...</p>
 
</body>
</html>`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Links are fundamental to navigating the web. In HTML, links are created using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{"<a>"}</code> tag, also known as the Anchor tag.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Key Characteristics of HTML Links</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
        <li>Specified by the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{"<a>"}</code> tag.</li>
        <li>Also known as hyperlinks.</li>
        <li>Used to link one document to another.</li>
        <li>Includes a closing tag <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{"</a>"}</code>.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Syntax of HTML Links</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The basic syntax for creating a link is as follows:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base relative">
        <p>{`<a href="Your specified path">`}</p>
        <p className="pl-6">{`content`}</p>
        <p>{`</a>`}</p>
        <button
          onClick={() => handleCopy('<a href="Your specified path">content</a>')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Essential Attributes of the Anchor Tag</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        HTML links primarily use two attributes:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
        <li><strong>href</strong> attribute: Defines the URL the link points to.</li>
        <li><strong>target</strong> attribute: Specifies where to open the linked document.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Target Attribute Values</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_blank</code>: Opens the linked document in a new window or tab.</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_top</code>: Opens document in the full body of the window.</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_self</code>: Opens document in the same window or tab (default behavior).</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_parent</code>: Opens the linked document in the parent frame.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Linking to Specific Page Sections</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        To link to a specific section of a webpage, you can:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
        <li>Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">name</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code> attribute of the target section.</li>
        <li>Use a hyperlink with a hash (#) followed by the target <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">name</code>.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Example</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Here's an example demonstrating how to create a link to a specific section on the same page.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base relative">
        <pre>{exampleCode}</pre>
        <button
          onClick={() => handleCopy(exampleCode)}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Link Colors</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Links typically appear in different colors based on their state:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
        <li><strong>Active</strong>: Displayed in red and underlined like this sentence.</li>
        <li><strong>Visited</strong>: Appears purple and underlined like this sentence.</li>
        <li><strong>Unvisited</strong>: Shown as blue and underlined like this sentence.</li>
      </ul>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        You can customize these colors using CSS to better match the style of your website.
      </p>

      <p className="text-center font-semibold text-lg mt-8">
        Next, we'll look at how to use Image tag.
      </p>
    </div>
  );
};

export default AnchorTag;
