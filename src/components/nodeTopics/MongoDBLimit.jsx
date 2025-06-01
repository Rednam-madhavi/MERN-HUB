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

const MongoDBLimit = () => {
  const exampleCode = `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`;

  const sampleOutput = `[
  { _id: ..., name: 'John', address: 'Highway 71' },
  { _id: ..., name: 'Peter', address: 'Lowstreet 4' },
  { _id: ..., name: 'Amy', address: 'Apple st 652' },
  { _id: ..., name: 'Hannah', address: 'Mountain 21' },
  { _id: ..., name: 'Michael', address: 'Valley 345' }
]`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          To limit the number of documents returned from a query in MongoDB, you can use the <code className="bg-gray-200 px-1 rounded">limit()</code> method. This method takes a number as a parameter, defining how many documents to return.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sample Collection</h2>
        <CodeBlock
          code={`[
  { _id: ..., name: 'John', address: 'Highway 71' },
  { _id: ..., name: 'Peter', address: 'Lowstreet 4' },
  { _id: ..., name: 'Amy', address: 'Apple st 652' },
  ...
]`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example: Limit to 5 Documents</h2>
        <CodeBlock code={exampleCode} />
        <p>Save the code above in a file named <code className="bg-gray-200 px-1 rounded">demo_mongodb_limit.js</code> and run:</p>
        <CodeBlock code={`node demo_mongodb_limit.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Expected Output</h2>
        <CodeBlock code={sampleOutput} />
        <p>As shown above, the output is limited to the first 5 documents in the <code className="bg-gray-200 px-1 rounded">customers</code> collection.</p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Join
      </p>
    </div>
  );
};

export default MongoDBLimit;
