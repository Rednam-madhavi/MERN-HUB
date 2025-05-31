import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import raw1 from '../../assets/express/raw1.png';
import raw2 from '../../assets/express/raw2.png';

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

const ExpressRawFunction = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        The <code className="bg-gray-100 px-2 py-1 rounded">express.raw()</code> function is a built-in middleware in Express that parses incoming request payloads into a <strong>Buffer</strong>. It is based on the <code>body-parser</code> library.
      </p>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Syntax & Parameters</h3>
        <CodeBlock code={`express.raw([options])`} />
        <p className="text-base">
          The <code>options</code> object can include properties like:
        </p>
        <ul className="list-disc list-inside text-base">
          <li><strong>inflate</strong>: Controls compression handling</li>
          <li><strong>limit</strong>: Controls the max request body size</li>
          <li><strong>type</strong>: Specifies content-type to match</li>
        </ul>
        <p><strong>Returns:</strong> Middleware function that parses the request body into a Buffer.</p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Installing Express</h3>
        <CodeBlock code={`npm install express`} />
        <p className="text-base">Check version:</p>
        <CodeBlock code={`npm version express`} />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Project Setup</h3>
        <p>Create a folder and add <code>index.js</code>.</p>
        <CodeBlock code={`node index.js`} />
        <img src={raw1} alt="Folder Structure" className="rounded-lg shadow-md max-w-full" />
      </section>

      {/* Example 1 */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Example 1: With express.raw()</h3>
        <CodeBlock
          code={`const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.raw());

app.post('/', function (req, res) {
  console.log(req.body);
  res.end();
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});`}
        />
        <p className="text-base">Make a POST request with <code>content-type: application/octet-stream</code> and body:</p>
        <CodeBlock code={`{ "name": "GeeksforGeeks" }`} />
        <p className="text-base">Console Output:</p>
        <img src={raw2} alt="Console Output" className="rounded-lg shadow-md max-w-full" />
      </section>

      {/* Example 2 */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Example 2: Without express.raw()</h3>
        <CodeBlock
          code={`const express = require('express');
const app = express();
const PORT = 3000;

// app.use(express.raw()); // Not included

app.post('/', function (req, res) {
  console.log(req.body);
  res.end();
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});`}
        />
        <p className="text-base">Without the middleware, <code>req.body</code> will be <code>undefined</code>.</p>
      </section>

      <p className="text-sm text-gray-500 mt-6">
        Reference: <a href="https://expressjs.com/en/4x/api.html#express.raw" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">express.raw() - Express.js Docs</a>
      </p>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Express express.Router() Function
      </p>
    </div>
  );
};

export default ExpressRawFunction;
