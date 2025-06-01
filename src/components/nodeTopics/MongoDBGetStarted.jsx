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

const MongoDBGetStarted = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          Node.js can be used in database applications. One of the most popular NoSQL databases is MongoDB.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">MongoDB Setup</h2>
        <p>
          To experiment with MongoDB and Node.js, you’ll need access to a MongoDB database. You can:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Download MongoDB locally: <a href="https://www.mongodb.com" className="text-blue-600 underline">mongodb.com</a>
          </li>
          <li>
            Or use the cloud-based service MongoDB Atlas: <a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 underline">mongodb.com/cloud/atlas</a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Install MongoDB Driver</h2>
        <p>To access MongoDB using Node.js, install the official driver:</p>
        <CodeBlock code={`npm install mongodb`} />
        <p>This installs the MongoDB Node.js driver which allows you to connect and perform database operations.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Using the MongoDB Driver in Code</h2>
        <p>Here's a basic example of how to import the MongoDB driver in a Node.js application:</p>
        <CodeBlock code={`var mongo = require('mongodb');`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          With the MongoDB driver installed, you're now ready to connect your Node.js applications to a MongoDB database.
          In the next section, we’ll look at how to establish a connection and perform basic CRUD operations.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Create DB
      </p>
    </div>
  );
};

export default MongoDBGetStarted;
