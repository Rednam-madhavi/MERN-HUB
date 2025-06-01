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

const MongoDBDropCollection = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <section className="space-y-4">
        <p>
          You can delete a collection (similar to a table in relational databases) in MongoDB using either the <code>drop()</code> or <code>dropCollection()</code> methods.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Method 1: Using drop()</h2>
        <p>
          The <code>drop()</code> method removes the specified collection. It returns <code>true</code> if the collection was successfully dropped.
        </p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});`}
        />
        <p>Save this code as <code>demo_drop.js</code> and run it using:</p>
        <CodeBlock code={`node demo_drop.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Method 2: Using dropCollection()</h2>
        <p>
          The <code>dropCollection()</code> method allows you to delete a collection by name.
        </p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.dropCollection("customers", function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});`}
        />
        <p>Save this as <code>demo_dropcollection.js</code> and run with:</p>
        <CodeBlock code={`node demo_dropcollection.js`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>
          You can use either <code>drop()</code> or <code>dropCollection()</code> based on your coding preference. Both methods ensure safe deletion of collections in MongoDB.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Update
      </p>
    </div>
  );
};

export default MongoDBDropCollection;
