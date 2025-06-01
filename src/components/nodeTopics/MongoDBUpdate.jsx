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

const MongoDBUpdate = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p>
        You can update a record (or document) in MongoDB using the <code>updateOne()</code> or <code>updateMany()</code> methods.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Update a Single Document</h2>
        <p>
          The <code>updateOne()</code> method takes a query to locate the document and an update object with new values.
        </p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Update Specific Fields Only</h2>
        <p>
          Using the <code>$set</code> operator updates only specified fields without affecting others.
        </p>
        <CodeBlock
          code={`var myquery = { address: "Valley 345" };
var newvalues = { $set: { address: "Canyon 123" } };
dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log("1 document updated");
});`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Update Multiple Documents</h2>
        <p>
          Use <code>updateMany()</code> to update all documents matching a query.
        </p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Get Number of Updated Documents</h2>
        <p>
          You can access <code>res.result.nModified</code> to find out how many documents were updated.
        </p>
        <CodeBlock code={`console.log(res.result.nModified);`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          MongoDB's updateOne and updateMany methods provide efficient ways to modify your documents.
          Using operators like <code>$set</code> lets you update only the necessary fields while keeping the others intact.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Limit
      </p>
    </div>
  );
};

export default MongoDBUpdate;
