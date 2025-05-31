import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import routing1 from '../../assets/express/routing1.png';
import routing2 from '../../assets/express/routing2.png';
import routing3 from '../../assets/express/routing3.png';
import routing4 from '../../assets/express/routing4.png';
import routing5 from '../../assets/express/routing5.png';

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

const RoutingPathForExpressJS = () => {
  const method1Code = `const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("This is a get request!!\\n");
});
app.post("/", function(req, res) {
  res.send("This is a post request!!\\n");
});

app.put("/", function(req, res) {
  res.send("This is a put request!!\\n");
});

app.get("/hey", function(req, res) {
  res.send("This is a get request to '/hey'!!\\n");
});

app.listen(3000);`;

  const method2Code = `const express = require('express');
const Router = express.Router();

Router.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end('When a GET request is made, then this is the response sent to the client!');
})
.post((req, res, next) => {
  res.end('When a POST request is made, then this is the response sent to the client!');
})
.put((req, res, next) => {
  res.end('When a PUT request is made, then this is the response sent to the client!');
})
.delete((req, res, next) => {
  res.end('When a DELETE request is made, then this is the response sent to the client!');
});

module.exports = Router;`;

  const indexJsCode = `const express = require('express');
const app = express();

const test = require('./test.js');

app.use('/test', test);

app.listen(3000);`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Routing in <strong>ExpressJS</strong> helps break down an application into small, manageable parts by mapping HTTP methods and endpoints to handler functions.
      </p>

      {/* Method 1 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Method 1: Without using Router</h2>
        <p className="text-base">
          Directly define routes using <code>app.method(path, handler)</code> on the main app instance.
        </p>
        <CodeBlock code={method1Code} />
        <div className="space-y-4">
          <img src={routing1} alt="Method 1 output" className="rounded-md shadow-lg max-w-full max-h-[90vh]" />
          <img src={routing2} alt="Method 1 output" className="rounded-md shadow-lg max-w-full max-h-[90vh]" />
        </div>
      </section>

      {/* Method 2 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Method 2: Using Router</h2>
        <p className="text-base">
          Use <code>express.Router()</code> to modularize and separate your routing logic into its own file.
        </p>
        <CodeBlock code={method2Code} />
      </section>

      {/* Index.js Integration */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Using the Router in index.js</h2>
        <p className="text-base">
          After creating a router in a separate file (e.g., <code>test.js</code>), mount it using <code>app.use()</code>.
        </p>
        <CodeBlock code={indexJsCode} />
        <div className="space-y-4">
          <img src={routing3} alt="index.js router output" className="rounded-md shadow-lg max-w-full max-h-[90vh]" />
          <img src={routing4} alt="index.js router output" className="rounded-md shadow-lg max-w-full max-h-[90vh]" />
          <img src={routing5} alt="index.js router output" className="rounded-md shadow-lg max-w-full max-h-[90vh]" />
        </div>
      </section>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Use of <code>req</code> and <code>res</code> objects in Express JS
      </p>
    </div>
  );
};

export default RoutingPathForExpressJS;
