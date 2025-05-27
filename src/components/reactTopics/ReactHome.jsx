import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactHome = () => {
  const clipboard = useClipboard();
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (text, tag) => {
    clipboard.copy(text);
    setCopiedCode(tag);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id }) => (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
        {code}
      </pre>
      <button
        onClick={() => handleCopy(code, id)}
        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {copiedCode === id ? (
          <CheckIcon className="h-5 w-5 text-green-500" />
        ) : (
          <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      < h2 className="text-3xl font-semibold text-gray-900 dark:text-white" > What is ReactJS ?</h2 >
      <p className="text-base leading-relaxed">
        ReactJS is a JavaScript library used to build User Interfaces (UI). It significantly reduces code complexity with its reusable components, state management (hooks), and efficient rendering.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Creating a React App</h3>
      <p className="text-base leading-relaxed">
        Open your terminal in the desired directory and run the following command to create a new React application named <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">my-react-app</code>:
      </p>
      <CodeBlock code={`npx create-react-app my-react-app`} id="create-named" />

      <p className="text-base leading-relaxed">
        To create a React app in the current directory:
      </p>
      <CodeBlock code={`npx create-react-app .`} id="create-dot" />

      <p className="text-base leading-relaxed">
        <strong>Note:</strong> Avoid spaces or capital letters in folder names due to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npm</code> naming restrictions.
      </p>

      <p className="text-base leading-relaxed">
        Navigate into your project folder:
      </p>
      <CodeBlock code={`cd directory-name`} id="cd-command" />

      <p className="text-base leading-relaxed">Start the development server with:</p>
      <CodeBlock code={`npm start`} id="npm-start" />

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Hello World</h3>
      <p className="text-base leading-relaxed">
        Here's a simple example to render a message inside the root element:
      </p>
      <CodeBlock
        code={`const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<h1>Hello, world!</h1>);`}
        id="hello-world"
      />

      <p className="text-base leading-relaxed">
        In this code, we are rendering an <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> tag inside the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">div</code> with the id <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">root</code>. This root div is where your entire React app will be mounted.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: React Components
      </p>
    </div >
  );
};

export default ReactHome;
