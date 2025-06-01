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

const NodejsIntro = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What is Node.js?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Node.js is an open-source server environment</li>
          <li>It is free to use</li>
          <li>Runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
          <li>Uses JavaScript on the server</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why Node.js?</h2>
        <p>Node.js is based on asynchronous programming, which enhances performance and responsiveness.</p>

        <h3 className="text-xl font-semibold">Traditional Server (e.g. PHP/ASP)</h3>
        <ul className="list-decimal list-inside ml-4">
          <li>Sends the task to the file system</li>
          <li>Waits while the file is read</li>
          <li>Returns the content</li>
          <li>Then handles the next request</li>
        </ul>

        <h3 className="text-xl font-semibold">Node.js Server</h3>
        <ul className="list-decimal list-inside ml-4">
          <li>Sends the task to the file system</li>
          <li>Immediately ready to handle the next request</li>
          <li>When the file is ready, it returns the content</li>
        </ul>

        <p>This non-blocking model is memory-efficient and fast.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What Can Node.js Do?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Generate dynamic page content</li>
          <li>Create, open, read, write, delete, and close files</li>
          <li>Collect form data</li>
          <li>Modify database records</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What is a Node.js File?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Contains tasks that execute on specific events (e.g. port access)</li>
          <li>Must be initiated on the server to run</li>
          <li>Have a ".js" extension</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Example Node.js File</h2>
        <CodeBlock
          code={`// server.js
const http = require('http');
http.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(8080);`}
        />
        <p className="text-sm text-gray-600 mt-2">This creates a basic HTTP server on port 8080.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Node.js revolutionizes server-side programming with its event-driven, non-blocking architecture, making it ideal for data-intensive applications that require real-time capabilities.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js Get Started
      </p>
    </div>
  );
};

export default NodejsIntro;
