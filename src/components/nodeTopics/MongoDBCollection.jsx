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

const MongoDBCollection = () => {
  const createCollectionCode = `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});`;

  const runCommand = `C:\\Users\\Your Name>node demo_mongodb_createcollection.js`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          A <strong>collection</strong> in MongoDB is equivalent to a <strong>table</strong> in relational databases like MySQL.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Creating a Collection</h2>
        <p className="text-base leading-relaxed">
          Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">createCollection()</code> method to create a collection in MongoDB.
        </p>
        <p>Example: Create a collection called <strong>"customers"</strong></p>
        <CodeBlock code={createCollectionCode} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Running the File</h2>
        <p>Save the code in a file called <strong>demo_mongodb_createcollection.js</strong> and run it in your terminal:</p>
        <CodeBlock code={runCommand} />
        <p>Output:</p>
        <CodeBlock code={`Collection created!`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Important Note</h2>
        <p className="text-base leading-relaxed">
          MongoDB will not create the collection until it contains data. That means a collection is not physically created until you insert a document into it.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Insert
      </p>
    </div>
  );
};

export default MongoDBCollection;
