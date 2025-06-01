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

const MongoDBQuery = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section>
        <p className="text-base leading-relaxed">
          When finding documents in a MongoDB collection, you can use a query object to filter the results. The first argument of the <code>find()</code> method specifies this query object.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example: Find by Address</h2>
        <p>Find documents with the address "Park Lane 38":</p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`}
        />
        <p>
          Save the code above in a file called <code>demo_mongodb_query.js</code> and run it:
        </p>
        <CodeBlock code={`node demo_mongodb_query.js`} />
        <p>Example output:</p>
        <CodeBlock
          code={`[
  { _id: 58fdbf5c0ef8a50b4cdd9a8e, name: 'Ben', address: 'Park Lane 38' }
]`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Filter With Regular Expressions</h2>
        <p>You can use regular expressions to match string fields. For example, to find documents where the address starts with "S":</p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: /^S/ };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`}
        />
        <p>Save it as <code>demo_mongodb_query_s.js</code> and run:</p>
        <CodeBlock code={`node demo_mongodb_query_s.js`} />
        <p>Example output:</p>
        <CodeBlock
          code={`[
  { _id: 58fdbf5c0ef8a50b4cdd9a8b, name: 'Richard', address: 'Sky st 331' },
  { _id: 58fdbf5c0ef8a50b4cdd9a91, name: 'Viola', address: 'Sideway 1633' }
]`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          MongoDB’s query objects and regex support give you powerful ways to filter documents based on exact values or patterns. This helps build flexible and efficient data access layers in your applications.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Sort
      </p>
    </div>
  );
};

export default MongoDBQuery;
