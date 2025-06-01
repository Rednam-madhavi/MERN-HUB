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

const NodejsGetStarted = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section>
        <h2 className="text-2xl font-semibold">Download Node.js</h2>
        <p className="text-base mt-2">
          Visit the official Node.js website to download and install Node.js:
          <a
            href="https://nodejs.org"
            className="text-blue-600 dark:text-blue-400 ml-1 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://nodejs.org
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hello World Example</h2>
        <p>Create a file named <strong>myfirst.js</strong> and paste the following code:</p>
        <CodeBlock
          code={`var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World!');
}).listen(8080);`}
        />
        <p>
          Save the file, for example: <code className="bg-gray-200 px-2 py-1 rounded">C:\Users\Your Name\myfirst.js</code>
        </p>
        <p>
          This code creates a basic web server that responds with “Hello World!” when accessed via port 8080.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Run Your File with Node.js</h2>
        <p>
          Open your Command Line Interface (CLI). On Windows, you can search for <code>cmd</code> or “Command Prompt”.
        </p>
        <p>Navigate to the folder where you saved <code>myfirst.js</code>:</p>
        <CodeBlock code={`cd C:\\Users\\Your Name`} />
        <p>Then run the following command:</p>
        <CodeBlock code={`node myfirst.js`} />
        <p>
          Your computer is now running a server! Visit{' '}
          <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
            http://localhost:8080
          </a>{' '}
          in your browser and you’ll see the message: <strong>Hello World!</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base">
          You’ve successfully set up your first Node.js web server. In upcoming sections, we’ll explore how this works and build more powerful applications.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js Modules
      </p>
    </div>
  );
};

export default NodejsGetStarted;
