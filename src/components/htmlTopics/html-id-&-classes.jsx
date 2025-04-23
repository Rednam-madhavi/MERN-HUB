import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const HtmlIdAndClasses = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, label) => {
    clipboard.copy(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const examples = {
    id: `<div id="myUniqueID">This is a div with an ID.</div>`,
    class: `<div class="myClass">This is a div with a class.</div>\n<p class="myClass">This is a paragraph with the same class.</p>`,
    styleTag: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* CSS rules go here */\n    p {\n      color: blue;\n      font-size: 18px;\n    }\n    .highlight {\n      background-color: yellow;\n    }\n  </style>\n</head>\n<body>\n  <p>This is a blue paragraph.</p>\n  <p class="highlight">This paragraph has a yellow background.</p>\n</body>\n</html>`,
    css: `/* CSS for ID */\n#myUniqueID {\n  background-color: yellow;\n}\n\n/* CSS for Class */\n.myClass {\n  font-size: 18px;\n}`
  };

  const renderCodeBlock = (label, code) => (
    <div className="relative bg-gray-100 dark:bg-gray-700 p-3 rounded-md shadow-md mt-4">
                      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded font-mono overflow-x-auto whitespace-pre-wrap">

        {code}
      </pre>
      <button
        onClick={() => handleCopy(code, label)}
        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
      >
        {copied === label ? (
          <CheckIcon className="h-5 w-5 text-green-500" />
        ) : (
          <ClipboardIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        HTML offers multiple ways to select and style elements. Two of the most commonly used selectors are IDs and Classes. This blog explores what they are, how to use them, and their differences.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">What is an ID?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        An ID is a unique identifier assigned to only one HTML element within a page. It is often used for unique styling and JavaScript manipulations.
      </p>
      {renderCodeBlock("id", examples.id)}

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">What are Classes?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The class attribute lets you give the same name to multiple HTML elements. That way, you can easily change their look or behavior all at once.
      </p>
      {renderCodeBlock("class", examples.class)}

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">The Style Tag</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The style tag in HTML is used to include embedded CSS. It's usually in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;head&gt;</code> but can also appear in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code>.
      </p>
      {renderCodeBlock("styleTag", examples.styleTag)}

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Using IDs and Classes in CSS</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In CSS, elements with IDs use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">#</code> and classes use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.</code>.
      </p>
      {renderCodeBlock("css", examples.css)}

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Differences Between IDs and Classes</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
        <li><strong>Uniqueness</strong>: IDs are unique, and classes can be reused.</li>
        <li><strong>JavaScript</strong>: IDs are often used for JavaScript operations.</li>
        <li><strong>Styling</strong>: Both can be used for styling, but IDs have higher specificity.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Understanding the difference between IDs and Classes is crucial for effective web development.
      </p>
    </div>
  );
};

export default HtmlIdAndClasses;
