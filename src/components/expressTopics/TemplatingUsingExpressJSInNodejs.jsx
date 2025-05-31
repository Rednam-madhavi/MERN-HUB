import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Helloworld from '../../assets/express/helloworld.png';

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

const TemplatingUsingExpressJSInNodejs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          A <strong>template engine</strong> lets you create dynamic HTML pages using static template files and minimal code. At runtime, variables in the templates are replaced with actual values.
        </p>
        <p className="text-base">Popular template engines include:</p>
        <ul className="list-disc list-inside text-base space-y-1">
          <li><strong>EJS</strong> (Embedded JavaScript)</li>
          <li>Pug</li>
          <li>Mustache</li>
        </ul>
        <p>In this example, we'll use <strong>EJS</strong>.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setting up the Project</h2>
        <CodeBlock code={`npm init -y`} />
        <CodeBlock code={`npm install ejs express --save`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Express Server</h2>
        <CodeBlock code={`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});`} />
        <img
          src={Helloworld}
          alt="Hello World Output"
          className="rounded-md shadow-lg max-w-full max-h-[90vh]"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Adding EJS as Template Engine</h2>
        <CodeBlock code={`const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});`} />

        <p className="text-base">
          Create a file named <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">views/index.ejs</code>:
        </p>

        <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EJS Example</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Rendering EJS Template with Dynamic Data</h2>
        <CodeBlock code={`const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/:name', (req, res) => {
  res.render("index", {
    data: req.params.name
  });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});`} />

        <p className="text-base">Update <strong>index.ejs</strong> to include dynamic data:</p>

        <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EJS Dynamic</title>
  <script type="text/javascript">
    var name = "<%= data %>";
    setTimeout(() => {
      document.getElementById('hello').innerHTML = name;
    }, 1000);
  </script>
</head>
<body>
  <h1 id="hello"></h1>
</body>
</html>`} />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Serving Static Files in ExpressJS
      </p>
    </div>
  );
};

export default TemplatingUsingExpressJSInNodejs;
