import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBGetStarted = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const codeSnippet = `mongosh "mongodb+srv://cluster0.ex4ht.mongodb.net/myFirstDatabase" --apiVersion 1 --username YOUR_USER_NAME`;

  const handleCopy = () => {
    try {
      clipboard.copy(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-6 space-y-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">MongoDB</h1>

      <p className="text-base leading-relaxed">
        MongoDB is a document database that can be installed locally or hosted in the cloud.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">SQL vs Document Databases</h2>
      <p className="text-base leading-relaxed">
        SQL databases are relational and store data across multiple tables. MongoDB, being a document (non-relational or non-tabular) database, stores related data in flexible, single documents. This improves performance for read operations and simplifies structure.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">Collections vs Tables</h2>
      <p className="text-base leading-relaxed">
        In MongoDB, data is grouped into <strong>collections</strong> rather than tables. Documents inside collections can have different structures, making MongoDB very flexible.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">Local vs Cloud Database</h2>
      <p className="text-base leading-relaxed">
        You can run MongoDB locally using the Community Server. However, for this guide, we’ll use <strong>MongoDB Atlas</strong>, a cloud-hosted MongoDB service that's free to start and easier to manage.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">Creating a Cluster</h2>
      <ol className="list-decimal list-inside text-base leading-relaxed space-y-1">
        <li>Sign up at <a href="https://www.mongodb.com/cloud/atlas" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a>.</li>
        <li>Create a free "Shared Cluster" and pick your cloud provider and region.</li>
        <li>Create a new database user under <strong>Database Access</strong>.</li>
        <li>Allow your IP under <strong>Network Access</strong>.</li>
      </ol>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">Install MongoDB Shell (mongosh)</h2>
      <p className="text-base leading-relaxed">
        Install <code>mongosh</code> using the official MongoDB instructions for your OS. To verify:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm font-mono">
        mongosh --version
      </div>
      <p className="text-base leading-relaxed">
        You should see the version number (e.g., v1.3.1) printed in your terminal.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">Connect to the Database</h2>
      <p className="text-base leading-relaxed">
        In the Atlas dashboard under <strong>Databases</strong>, click <strong>Connect</strong> and choose <strong>Connect with MongoDB Shell</strong>. You'll get a connection string like:
      </p>

      <div className="relative bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm font-mono">
        <code>{codeSnippet}</code>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Copy Connection String"
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      <p className="text-base leading-relaxed">
        After pasting the command into your terminal, enter your database password when prompted.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">What Next?</h2>
      <p className="text-base leading-relaxed">
        Now that you're connected, we'll move on to performing basic CRUD (Create, Read, Update, Delete) operations using <code>mongosh</code>. Later, we'll explore using MongoDB with Node.js.
      </p>
    </div>
  );
};

export default MongoDBGetStarted;
