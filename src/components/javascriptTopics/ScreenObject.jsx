import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ScreenObject = () => {
  const clipboard = useClipboard();
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  const handleCopy = (code) => {
    clipboard.copy(code);
    setCopiedSnippet(code);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const codeSnippets = [
    {
      code: 'console.log(`The screen resolution is ${screen.width}x${screen.height} pixels`);',
      label: 'Log Screen Resolution',
    },
    {
      code: 'console.log(`The screen color depth is ${screen.colorDepth} bits`);',
      label: 'Log Color Depth',
    },
    {
      code: 'console.log(`The available screen width is ${screen.availWidth} pixels and the available screen height is ${screen.availHeight} pixels`);',
      label: 'Log Available Screen Area',
    },
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The JavaScript <code className="font-mono text-blue-600">screen</code> object is a part of the <code className="font-mono text-blue-600">window</code> object and provides information about the device's screen properties. It is useful for gathering information such as screen resolution, color depth, and available display area.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">1. Getting Screen Resolution</h2>
        <p className="text-sm sm:text-base md:text-lg">
          You can access the screen's width and height using:
        </p>
        {renderCodeBlock(codeSnippets[0], copiedSnippet, handleCopy)}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">2. Checking Screen Color Depth</h2>
        <p className="text-sm sm:text-base md:text-lg">
          This property tells how many bits are used per pixel:
        </p>
        {renderCodeBlock(codeSnippets[1], copiedSnippet, handleCopy)}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">3. Available Screen Area</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Get the width and height of the usable screen area (excluding taskbars, etc.):
        </p>
        {renderCodeBlock(codeSnippets[2], copiedSnippet, handleCopy)}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <code className="font-mono text-blue-600">screen</code> object provides a powerful way to gather information about a user's screen. It can be especially useful for responsive design decisions. However, always check browser compatibility and understand its limitations—these properties reflect the physical screen size, not the browser window size.
        </p>
      </div>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Document Object
      </p>
    </div>
  );
};

// Helper to render copyable code blocks
const renderCodeBlock = (snippet, copiedSnippet, handleCopy) => (
  <div className="relative">
    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
      {snippet.code}
    </pre>
    <button
      onClick={() => handleCopy(snippet.code)}
      className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {copiedSnippet === snippet.code ? (
        <CheckIcon className="h-6 w-6 text-green-500" />
      ) : (
        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  </div>
);

export default ScreenObject;
