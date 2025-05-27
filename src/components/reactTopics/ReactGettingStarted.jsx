import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import reactHelloImage from '../../assets/react/gettingstarted.png';

const ReactGettingStarted = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-gray-900 dark:text-white">
        Getting Started with React
      </h1>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Run and Check</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Run the React application using the following command in your terminal:
        </p>
        <div className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded shadow-md border border-gray-300 dark:border-gray-600 w-fit">
          npm start
        </div>
        <p className="text-sm sm:text-base md:text-lg">
          A browser window will automatically open. If not, navigate to{' '}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            http://localhost:3000/
          </a>.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          You should see the default React starter page.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Hello World</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Open <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">src/App.js</code>. You'll find a default component like this:
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-md border border-gray-300 dark:border-gray-600 text-sm sm:text-base overflow-x-auto">
          <pre>{`import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;`}</pre>
        </div>

        <p className="text-sm sm:text-base md:text-lg">
          You can now modify it to display your first message!
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Edit for "Hello World"</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Replace the return statement like this:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}`}
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
          Remember: always wrap your return content in a single HTML element.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Output</h2>
        <p className="text-sm sm:text-base md:text-lg">
          After saving the changes, your React app should now display <strong>Hello World</strong>.
        </p>
        <img
          src={reactHelloImage}
          alt="React Hello World"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
        />
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: React Components
      </p>
    </div>
  );
};

export default ReactGettingStarted;
