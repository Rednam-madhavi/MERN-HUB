import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import route from '../../assets/express/route.png';

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

const ExpressRouterFunction = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-base leading-relaxed">
        The <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">express.Router()</code> function creates a new router object that can handle requests in a modular and organized way. It serves as a mini-application with middleware and routes but is limited to specific segments of your application.
      </p>

      <ul className="list-disc list-inside text-base space-y-2">
        <li><strong>Modularity:</strong> Group routes based on features or functionality.</li>
        <li><strong>Scalability:</strong> Organize routes for large applications and separate them into modules.</li>
        <li><strong>Middleware Management:</strong> Apply middleware to specific route groups.</li>
        <li><strong>Cleaner Code:</strong> Keep route definitions focused and maintainable.</li>
      </ul>

      <h3 className="text-xl font-semibold">Optional Parameters</h3>
      <ul className="list-disc list-inside text-base space-y-2">
        <li><strong>case-sensitive:</strong> Enables case sensitivity.</li>
        <li><strong>mergeParams:</strong> Preserves <code>req.params</code> from the parent router.</li>
        <li><strong>strict:</strong> Enables strict routing behavior.</li>
      </ul>

      <h3 className="text-xl font-semibold">Installing Express</h3>
      <CodeBlock code={`npm install express`} />

      <h3 className="text-xl font-semibold">Checking Express Version</h3>
      <CodeBlock code={`npm version express`} />

      <h3 className="text-xl font-semibold">Running Your Express App</h3>
      <CodeBlock code={`node index.js`} />

      <h3 className="text-xl font-semibold">Sample Project Structure</h3>
      <img src={route} alt="Route Structure" className="max-w-full rounded-md shadow-md" />

      <h3 className="text-xl font-semibold">Example 1: Single Router</h3>
      <CodeBlock
        code={`const express = require('express');
const app = express();
const PORT = 3000;

const router = express.Router();

router.get('/', function (req, res, next) {
  console.log("Router Working");
  res.end();
});

app.use(router);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});`}
      />

      <h3 className="text-xl font-semibold">Example 2: Multiple Routers</h3>
      <CodeBlock
        code={`const express = require('express');
const app = express();
const PORT = 3000;

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

router1.get('/user', function (req, res, next) {
  console.log("User Router Working");
  res.end();
});

router2.get('/admin', function (req, res, next) {
  console.log("Admin Router Working");
  res.end();
});

router3.get('/student', function (req, res, next) {
  console.log("Student Router Working");
  res.end();
});

app.use(router1);
app.use(router2);
app.use(router3);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});`}
      />

      <p className="text-base text-center mt-10 font-medium">
        Next Chapter: Express express.static() Function
      </p>
    </div>
  );
};

export default ExpressRouterFunction;
