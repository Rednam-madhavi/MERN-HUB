import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const HtmlElements = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    '<h1>This is our first heading</h1>',
    '<h1><b>This is our first heading</b></h1>',
    '<br />',
    '<p>This is a paragraph.</p>',
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Beginners often get confused between HTML elements, nested elements, and tags. Let's clarify the difference by understanding each one step-by-step.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">What is an HTML Element?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        An HTML element is a complete set that consists of a start tag (or opening tag), content, and an end tag (or closing tag).
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed font-semibold">HTML Element = Start Tag + Content + End Tag</p>

      <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded relative text-sm sm:text-base">
        <code>{codeSnippets[0]}</code>
        <button
          onClick={() => handleCopy(codeSnippets[0], 0)}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copiedIndex === 0 ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">What is a Nested HTML Element?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        A nested HTML element is an HTML structure where one element is placed inside another element.
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed font-semibold">Nested HTML Element = One HTML Element Inside Another HTML Element</p>

      <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded relative text-sm sm:text-base">
        <code>{codeSnippets[1]}</code>
        <button
          onClick={() => handleCopy(codeSnippets[1], 1)}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copiedIndex === 1 ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">What is an Empty HTML Element?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        An empty HTML element is one that does not have a closing tag or content. These elements are also known as "void elements" or "self-closing elements."
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed font-semibold">Empty HTML Element = Tags with No Content</p>

      <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded relative text-sm sm:text-base">
        <code>{codeSnippets[2]}</code>
        <button
          onClick={() => handleCopy(codeSnippets[2], 2)}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copiedIndex === 2 ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">HTML Tags vs. Elements</h2>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">HTML Tags</h3>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        HTML tags are the markers that define the start and end of an element. They are wrapped in angle brackets, like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{'<p>'}</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{'</p>'}</code>.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">HTML Elements</h3>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        An HTML element includes an opening tag, content, and a closing tag. For example:
      </p>
      <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded relative text-sm sm:text-base">
        <code>{codeSnippets[3]}</code>
        <button
          onClick={() => handleCopy(codeSnippets[3], 3)}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copiedIndex === 3 ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Key Takeaways</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg">
        <li>Tags set boundaries; elements include tags plus content.</li>
        <li>Tags come in pairs (most of the time), whereas elements may include nested elements.</li>
        <li>Void elements like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{'<br />'}</code> are still considered elements.</li>
        <li>Elements can be "parent" or "child" when nested, but tags cannot.</li>
      </ul>

      <p className="text-center font-semibold text-lg mt-8">
        Up next, we’ll explore the difference between block and inline elements.
      </p>
    </div>
  );
};

export default HtmlElements;
