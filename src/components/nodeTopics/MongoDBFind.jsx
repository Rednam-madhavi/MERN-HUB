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

const MongoDBFind = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          In MongoDB, the <code>find()</code> and <code>findOne()</code> methods are used to retrieve data from a collection. These methods are analogous to the <code>SELECT</code> statement in SQL databases.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">findOne() Method</h3>
        <p className="text-base leading-relaxed">
          The <code>findOne()</code> method returns the first document that matches the query criteria. If no criteria are specified, it returns the first document in the collection.
        </p>
        <CodeBlock code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});`} />
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">find() Method</h3>
        <p className="text-base leading-relaxed">
          The <code>find()</code> method returns all documents that match the query criteria. If no criteria are specified, it returns all documents in the collection.
        </p>
        <CodeBlock code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`} />
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Using Projections</h3>
        <p className="text-base leading-relaxed">
          Projections allow you to specify which fields to include or exclude in the result set. This is useful for limiting the amount of data returned by a query.
        </p>
        <CodeBlock code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`} />
        <p className="text-base leading-relaxed">
          In the projection object, setting a field to <code>1</code> includes it, while setting it to <code>0</code> excludes it. Note that you cannot mix inclusion and exclusion in the same projection object, except for the <code>_id</code> field.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Excluding Fields</h3>
        <p className="text-base leading-relaxed">
          To exclude specific fields from the result set, set them to <code>0</code> in the projection object.
        </p>
        <CodeBlock code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`} />
        <p className="text-base leading-relaxed">
          To exclude the <code>_id</code> field, set its value to <code>0</code> in the projection object.
        </p>
        <CodeBlock code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});`} />
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Accessing Specific Fields</h3>
        <p className="text-base leading-relaxed">
          After retrieving the result set as an array, you can access specific fields of individual documents using array indexing.
        </p>
        <CodeBlock code={`console.log(result[2].address);`} />
        <p className="text-base leading-relaxed">
          This example logs the <code>address</code> field of the third document in the result array.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Important Notes</h3>
        <ul className="list-disc list-inside text-base leading-relaxed">
          <li>Ensure that the MongoDB server is running and accessible at the specified URL.</li>
          <li>Always handle errors appropriately in production applications.</li>
          <li>Use projections to optimize query performance by limiting the amount of data returned.</li>
        </ul>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Query
      </p>
    </div>
  );
};

export default MongoDBFind;
