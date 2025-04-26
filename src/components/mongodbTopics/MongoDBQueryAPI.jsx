import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBQueryAPI = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState({});

  const handleCopy = (text, key) => {
    clipboard.copy(text);
    setCopied({ [key]: true });
    setTimeout(() => setCopied({ [key]: false }), 2000);
  };

  const crudExample = `db.users.insertOne({ name: "Alice", age: 25 })`;

  const aggregationExample = `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } }
]);`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The MongoDB Query API is how you interact with your data using various tools or drivers.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4">Ways to Use the MongoDB Query API</h2>
      <ul className="list-disc list-inside ml-2 space-y-1 text-sm sm:text-base">
        <li><strong>CRUD Operations</strong> – Create, Read, Update, Delete</li>
        <li><strong>Aggregation Pipelines</strong> – Data transformation and analysis</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Example: CRUD Operation</h2>
      <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm font-mono">
        <code>{crudExample}</code>
        <button
          onClick={() => handleCopy(crudExample, 'crud')}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Copy CRUD example"
        >
          {copied.crud ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Example: Aggregation Pipeline</h2>
      <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm font-mono">
        <code>{aggregationExample}</code>
        <button
          onClick={() => handleCopy(aggregationExample, 'aggregation')}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Copy Aggregation example"
        >
          {copied.aggregation ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />}
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">MongoDB Query API Uses</h2>
      <ul className="list-disc list-inside ml-2 space-y-1 text-sm sm:text-base">
        <li>Ad-hoc queries via <code>mongosh</code>, Compass, VS Code, or MongoDB drivers</li>
        <li>Data transformations using aggregation pipelines</li>
        <li>Join documents across collections</li>
        <li>Perform graph and geospatial queries</li>
        <li>Full-text search functionality</li>
        <li>Indexing for performance improvement</li>
        <li>Time series analysis</li>
      </ul>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Mastering the MongoDB Query API allows you to fully utilize MongoDB’s powerful querying and transformation features.
      </p>
    </div>
  );
};

export default MongoDBQueryAPI;
