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

const NodejsModules = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p>
          Modules in Node.js are like JavaScript libraries — reusable pieces of code encapsulated for better structure and reusability.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Built-in Modules</h2>
        <p>
          Node.js includes many built-in modules such as <code>http</code>, <code>fs</code>, <code>url</code>, etc. You can use them without installing anything.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Include a Built-in Module</h2>
        <CodeBlock code={`var http = require('http');`} />
        <p>Example: Create an HTTP server using the built-in <code>http</code> module:</p>
        <CodeBlock
          code={`http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Create Your Own Module</h2>
        <p>
          You can define your own module by exporting functions using <code>exports</code>.
        </p>
        <p>Example: Create a module that returns the current date and time:</p>
        <CodeBlock
          code={`// myfirstmodule.js
exports.myDateTime = function () {
  return Date();
};`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Include Your Own Module</h2>
        <p>To use your custom module, import it with a relative path:</p>
        <CodeBlock
          code={`var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);`}
        />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Run Your Code</h2>
        <p>Save the above in a file named <code>demo_module.js</code> and run it using Node:</p>
        <CodeBlock code={`node demo_module.js`} />
        <p>Visit <a href="http://localhost:8080" className="text-blue-600 underline">http://localhost:8080</a> to see the result.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Modules are fundamental to Node.js application structure. You can use built-in ones or create your own for better code organization.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js HTTP Module
      </p>
    </div>
  );
};

export default NodejsModules;
