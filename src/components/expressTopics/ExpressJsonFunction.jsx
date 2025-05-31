import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import json1 from '../../assets/express/json1.png';
import json2 from '../../assets/express/json2.png';

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

const ExpressJsonFunction = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          The <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">express.json()</code> function is a built-in middleware in Express that is used for parsing incoming requests with JSON payloads. It makes the data available in the <code>req.body</code> for use in your routes.
        </p>
        <p className="text-base">Without this middleware, Express won't automatically parse the JSON data in the request body.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Syntax</h2>
        <CodeBlock code={`express.json([options])`} />
        <ul className="list-disc list-inside space-y-1 text-base">
          <li><strong>Parameters:</strong> Options like <code>inflate</code>, <code>limit</code>, and <code>type</code> can be passed.</li>
          <li><strong>Return Value:</strong> Returns a middleware function.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="text-base">
          It parses requests with a <code>Content-Type</code> of <code>application/json</code> and makes the resulting object available as <code>req.body</code>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Steps to Use express.json()</h2>
        <CodeBlock code={`mkdir nodejs\ncd nodejs\nnpm init -y`} />
        <CodeBlock code={`npm install express`} />
        <CodeBlock code={`node index.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example with express.json()</h2>
        <CodeBlock code={`// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', function (req, res) {
    console.log(req.body.name);
    res.end();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});`} />
        <img src={json1} alt="Output with express.json" className="max-w-full rounded shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Without express.json()</h2>
        <CodeBlock code={`// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// app.use(express.json());

app.post('/', function (req, res) {
    console.log(req.body.name);
    res.end();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});`} />
        <img src={json2} alt="Output without express.json" className="max-w-full rounded shadow-md" />
        <p className="text-base">
          Without the middleware, <code>req.body</code> is <code>undefined</code>, and accessing <code>req.body.name</code> throws a TypeError.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why is express.json() Important?</h2>
        <p className="text-base">
          It converts raw JSON in the request body into JavaScript objects so you can use them in your application.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li><strong>APIs:</strong> For sending and receiving JSON in RESTful APIs.</li>
          <li><strong>POST Requests:</strong> Useful for parsing JSON data sent from forms.</li>
          <li><strong>Handling Complex Data:</strong> Allows managing nested or structured data easily.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li><strong>Validate Data:</strong> Ensure the incoming JSON matches your schema.</li>
          <li><strong>Handle Errors:</strong> Use try-catch blocks or error-handling middleware.</li>
          <li><strong>Limit Payload Size:</strong> Prevent denial-of-service attacks with size limits.</li>
        </ul>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Express express.raw() Function
      </p>
    </div>
  );
};

export default ExpressJsonFunction;
