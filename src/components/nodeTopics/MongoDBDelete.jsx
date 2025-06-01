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

const MongoDBDelete = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Delete One Document</h2>
        <p>
          To delete a single document in MongoDB, use the <code>deleteOne()</code> method. It removes the first matching document based on the query.
        </p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});`}
        />
        <p className="text-sm italic text-gray-600">Save as <strong>demo_delete.js</strong> and run with:</p>
        <CodeBlock code={`node demo_delete.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Delete Many Documents</h2>
        <p>
          Use <code>deleteMany()</code> to remove all documents matching a condition.
        </p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});`}
        />
        <p className="text-sm italic text-gray-600">Save as <strong>demo_delete_many.js</strong> and run with:</p>
        <CodeBlock code={`node demo_delete_many.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The Result Object</h2>
        <p>
          The result from <code>deleteMany()</code> includes useful information:
        </p>
        <CodeBlock code={`{ n: 2, ok: 1 }`} />
        <p>To access the number of documents deleted:</p>
        <CodeBlock code={`console.log(obj.result.n);`} />
        <p>Example output:</p>
        <CodeBlock code={`2`} />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Drop Collection
      </p>
    </div>
  );
};

export default MongoDBDelete;
