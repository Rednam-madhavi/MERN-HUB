import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import hr from '../../assets/html/hr.mp4';

const HorizontalLineTag = () => {
  const clipboard = useClipboard();
  const [copiedTag, setCopiedTag] = useState(null);

  const handleCopy = (text, tag) => {
    clipboard.copy(text);
    setCopiedTag(tag);
    setTimeout(() => setCopiedTag(null), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> Tag
      </h2>
      <p className="text-lg sm:text-xl leading-relaxed">
        To add a horizontal line in your HTML document, the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> tag comes in handy.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">How to use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> tag?</h3>
      <p className="text-base sm:text-lg">
        The syntax of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> tag looks something like this:
      </p>

      <div className="relative space-y-2">
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-lg overflow-x-auto font-mono text-gray-800 dark:text-gray-200">
          &lt;hr&gt;
        </pre>
        <button
          onClick={() => handleCopy('<hr>', 'hr')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copiedTag === 'hr' ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <p className="text-base sm:text-lg mt-4">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> tag is an empty or self-closing tag, meaning it doesn't require a closing tag. It serves as a visual separator, dividing different sections of your document with a horizontal line.
      </p>

      <p className="text-base sm:text-lg">
        Watch this quick demo video to see the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> tag in action:
      </p>

      {/* Demo video */}
      <div className="rounded-md">
        <p className="text-center text-gray-500 dark:text-gray-300">
          <video
            src={hr}
            controls
            className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 h-auto rounded-md shadow-md"
          >
            Your browser does not support the video tag.
          </video>
        </p>
      </div>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Line Break Tag
      </p>
    </div>
  );
};

export default HorizontalLineTag;
