import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Helloworld from '../../assets/express/helloworld.png';

const PrintHelloWorldUsingExpressJS = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    {
      title: 'Approach 1: Using Basic Routes',
      description:
        'It is simple to print Hello World by defining a root URL ("/"). When a GET request is made to the root URL, the server responds with "Hello, World!".',
      code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1> Hello, World! </h1>');
});

app.listen(8000, () => {
  console.log(\`Server is listening at http://localhost:8000\`);
});`,
    },
    {
      title: 'Approach 2: Using Arrow Function',
      description:
        'A basic route, employs an arrow function for a more succinct syntax. It establishes a route for the root URL and delivers the "Hello, World!" response in just one line.',
      code: `const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('<h1>Hello, World!</h1>'));

app.listen(8000, () => console.log('Server listening on port 8000'));`,
    },
    {
      title: 'Approach 3: Using Middleware',
      description:
        'Express middleware functions are used to handle all incoming requests and respond with a simple "Hello, World!" greeting.',
      code: `const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.listen(8000, () => console.log('Server listening on port 8000'));`,
    },
  ];

  const handleCopy = (index, code) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        "Hello, World!" in Express JS serves as an excellent entry point to familiarize yourself with the framework and embark on the exploration of its functionalities. Moreover, it provides a gratifying experience, allowing you to immerse yourself in the excitement of coding and initiate your path as an Express.js developer.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg pl-4 space-y-1">
          <li>Using Basic Routes</li>
          <li>Using Arrow Function</li>
          <li>Using Middleware</li>
        </ul>
      </div>

      {codeSnippets.map((snippet, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">{snippet.title}</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            {snippet.description}
          </p>
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(index, snippet.code)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-medium">
            <span>Output:</span>
            <img
              src={Helloworld}
              alt="Hello World Output"
              className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />
          </p>
        </div>
      ))}

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Build Your First Router in Node.js with Express
      </p>
    </div>
  );
};

export default PrintHelloWorldUsingExpressJS;
