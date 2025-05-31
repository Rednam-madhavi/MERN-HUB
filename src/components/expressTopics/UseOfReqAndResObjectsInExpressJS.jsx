import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import folderstructure from '../../assets/express/useofresandreq1.gif';
import output from '../../assets/express/useofresandreq2.gif';

const CodeBlock = ({ code }) => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 flex items-center gap-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-2 py-1 rounded text-xs"
      >
        {copied ? (
          <>
            <CheckIcon className="h-4 w-4" /> Copied
          </>
        ) : (
          <>
            <ClipboardIcon className="h-4 w-4" /> Copy
          </>
        )}
      </button>
    </div>
  );
};

const UseOfReqAndResObjectsInExpressJS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          In Express.js, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">req</code> (request) and{' '}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">res</code> (response) are the core objects used to handle HTTP requests and responses. These objects allow you to access request data, manipulate headers, handle routing, and send appropriate responses to the client.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Node.js installed</li>
          <li>Basic understanding of Express.js</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How are req and res Objects Useful?</h2>

        <h3 className="text-xl font-semibold">req (Request) Object:</h3>
        <ul className="list-disc list-inside text-base space-y-1">
          <li><strong>Accessing Request Data:</strong> You can extract parameters, query strings, headers, and body.</li>
          <li><strong>Middleware Interaction:</strong> Useful in authentication, logging, etc.</li>
          <li><strong>Dynamic Routing:</strong> Capture URL params and respond dynamically.</li>
        </ul>

        <h3 className="text-xl font-semibold">res (Response) Object:</h3>
        <ul className="list-disc list-inside text-base space-y-1">
          <li><strong>Send Responses:</strong> Send data, HTML, files, etc., back to the client.</li>
          <li><strong>Error Handling:</strong> Send appropriate status codes or messages.</li>
          <li><strong>Custom Headers:</strong> Set content-type, status, and more.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Steps to Use req and res</h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 1: Create a project folder</h3>
          <CodeBlock code={`mkdir http-objects\ncd http-objects`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 2: Initialize NPM</h3>
          <CodeBlock code={`npm init -y`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 3: Install Express</h3>
          <CodeBlock code={`npm i express`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 4: Project Structure</h3>
          <p className="text-base">Your project might look like this:</p>
          <img
            src={folderstructure}
            alt="Express Project Structure"
            className="max-w-full max-h-[90vh] rounded-md shadow-md"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example: app.js</h2>
        <CodeBlock
          code={`// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Running the App</h2>
        <CodeBlock code={`node app.js`} />
        <p className="text-base">Visit <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">http://localhost:3000</code> in your browser.</p>
        <img src={output} alt="Output of req and res" className="rounded-md shadow-lg max-w-full max-h-[90vh]" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Differences Between req and res</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
              <tr>
                <th className="p-2 border">Feature</th>
                <th className="p-2 border">req (Request)</th>
                <th className="p-2 border">res (Response)</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr><td className="p-2 border">Purpose</td><td className="p-2 border">Incoming request from client</td><td className="p-2 border">Outgoing response to client</td></tr>
              <tr><td className="p-2 border">Content Type</td><td className="p-2 border">URL, headers, body, params</td><td className="p-2 border">Status, headers, response body</td></tr>
              <tr><td className="p-2 border">Methods</td><td className="p-2 border">req.query, req.params, req.body, req.headers</td><td className="p-2 border">res.send(), res.json(), res.status()</td></tr>
              <tr><td className="p-2 border">Properties</td><td className="p-2 border">req.method, req.url, req.ip</td><td className="p-2 border">res.headersSent, res.locals</td></tr>
              <tr><td className="p-2 border">Usage</td><td className="p-2 border">Extract & inspect request data</td><td className="p-2 border">Set and send response</td></tr>
              <tr><td className="p-2 border">Lifecycle</td><td className="p-2 border">Starts with client request</td><td className="p-2 border">Ends with response sent</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Error Handling in Express
      </p>
    </div>
  );
};

export default UseOfReqAndResObjectsInExpressJS;
