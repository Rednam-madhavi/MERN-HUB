import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactSetup = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`npx create-react-app my-react-app`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        Setting Up Your First React Application
      </h1>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Install Node.js</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Before we start, make sure Node.js is installed. You can download it from:{" "}
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://nodejs.org/en/
          </a>
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Creating Your First React App</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Open your terminal in the directory where you want your React application. Use the following command:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`npx create-react-app my-react-app`}
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

        <p className="text-sm sm:text-base md:text-lg">
          Or if you want to create the app in the current directory:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {`npx create-react-app .`}
        </pre>

        <p className="text-sm sm:text-base md:text-lg">
          In this case, all files will be placed in the current directory.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          <strong>Note:</strong> Make sure your folder name has no spaces or capital letters due to npm restrictions.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Starting the Application</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          If you specified a folder, navigate into it using:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {`cd my-react-app`}
        </pre>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Then start your application with:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {`npm start`}
        </pre>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          This will launch the React development server and open your app in the browser. You're all set!
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Understanding React Components
      </p>
    </div>
  );
};

export default ReactSetup;
