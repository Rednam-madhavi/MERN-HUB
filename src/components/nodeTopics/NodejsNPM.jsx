import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

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

const NodejsNPM = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What is NPM?</h2>
        <p>
          NPM is a package manager for Node.js packages or modules. It gets installed automatically when you install Node.js and is ready to use right away.
        </p>
        <p>
          You can explore thousands of packages hosted on <a href="https://www.npmjs.com" className="text-blue-600 underline">www.npmjs.com</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What is a Package?</h2>
        <p>
          A package in Node.js contains all the files needed for a module. These modules are JavaScript libraries you can include in your project.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Download a Package</h2>
        <p>To download a package, use the following command in your terminal:</p>
        <CodeBlock code={`npm install upper-case`} />
        <p>This will create a node_modules folder and place the package there:</p>
        <CodeBlock code={`C:\\Users\\My Name\\node_modules\\upper-case`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Using a Package</h2>
        <p>
          Once installed, you can include the package in your project using <code>require()</code>. Here's an example using the upper-case package with a simple HTTP server:
        </p>
        <CodeBlock
          code={`var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);`}
        />
        <p>Save the above code in a file named <code>demo_uppercase.js</code> and run it:</p>
        <CodeBlock code={`node demo_uppercase.js`} />
        <p>Visit http://localhost:8080 to see "HELLO WORLD!" in your browser.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>
          NPM makes managing packages in Node.js simple. With just a few commands, you can download, include, and run powerful modules in your applications.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js Events
      </p>
    </div>
  );
};

export default NodejsNPM;
