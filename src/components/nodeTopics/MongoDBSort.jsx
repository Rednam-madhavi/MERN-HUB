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

const MongoDBSort = () => {
  const ascendingCode = `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`;

  const descendingCode = `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: -1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-base leading-relaxed">
        MongoDB's <code>sort()</code> method allows you to order query results in ascending or descending order based on specified fields.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Ascending Order</h2>
        <p>
          To sort results alphabetically by the <code>name</code> field in ascending order, use <code>{'{ name: 1 }'}</code>:
        </p>
        <CodeBlock code={ascendingCode} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Descending Order</h2>
        <p>
          To sort results in reverse alphabetical order by the <code>name</code> field, use <code>{'{ name: -1 }'}</code>:
        </p>
        <CodeBlock code={descendingCode} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Output Example</h2>
        <p>
          Running the above scripts will display the sorted list of customers in the console.
        </p>
        <p>
          For more details, refer to the official MongoDB documentation on sorting:
        </p>
        <a
          href="https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/sort/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          MongoDB Node.js Driver - Sort
        </a>
      </section>
      
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Delete
      </p>
    </div>
  );
};

export default MongoDBSort;
