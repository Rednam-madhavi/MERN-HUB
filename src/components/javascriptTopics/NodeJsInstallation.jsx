import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const CodeBlock = ({code}) => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-2">
      <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {copied ? (
          <CheckIcon className="h-6 w-6 text-green-500" />
        ) : (
          <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
};

const NodeJsInstallation = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100 dark:bg">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is commonly used for building server-side applications, command-line tools, and other types of scalable network programs.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">How to Install Node.js</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>
            <strong>Download the installer:</strong> Visit the official Node.js website at{' '}
            <a
              href="https://nodejs.org/"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://nodejs.org/
            </a>{' '}
            and download the latest version for your OS.
          </li>
          <li>
            <strong>Run the installer:</strong> Double-click the downloaded file and follow the installation prompts.
          </li>
          <li>
            <strong>Verify the installation:</strong> Open your terminal or command prompt and run:
            <CodeBlock code="node -v" />
          </li>
        </ol>
        <p className="text-sm sm:text-base md:text-lg">You should see the installed Node.js version as output.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Run JavaScript Using Node.js in VS Code</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>
            <strong>Install VS Code:</strong> Download and install it from{' '}
            <a
              href="https://code.visualstudio.com/"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://code.visualstudio.com/
            </a>
          </li>
          <li>
            <strong>Create a new JavaScript file:</strong> Use{' '}
            <code>File &gt; New File</code> or <code>Ctrl + N</code>, and save the file with a <code>.js</code> extension.
          </li>
          <li>
            <strong>Write your JavaScript code:</strong> Type and save your code.
          </li>
          <li>
            <strong>Open the Command Palette:</strong> Use <code>Ctrl + Shift + P</code> or go to <code>View &gt; Command Palette</code>.
          </li>
          <li>
            <strong>Run your file:</strong> Type <code>Run JavaScript</code> and select <code>Run JavaScript file in terminal</code>.
          </li>
        </ol>
        <p className="text-sm sm:text-base md:text-lg">
          Alternatively, you can use the terminal to run your file with the <code>node</code> command:
        </p>
        <CodeBlock code="node myfile.js" />
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: What are Variables?
      </p>
    </div>
  );
};

export default NodeJsInstallation;
