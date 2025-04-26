import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBNodeJsDriver = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState({});

  const handleCopy = (codeSnippet, type) => {
    try {
      clipboard.copy(codeSnippet);
      setCopied((prevState) => ({
        ...prevState,
        [type]: true,
      }));

      setTimeout(() => {
        setCopied((prevState) => ({
          ...prevState,
          [type]: false,
        }));
      }, 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  // Code snippets for copying
  const installMongoDbExample = `npm install mongodb`;

  const connectionStringExample = `mongodb+srv://<username>:<password>@<cluster.string>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const mongoConnectionExample = `const { MongoClient } = require('mongodb');
  
const uri = "<Your Connection String>";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    const collection = db.collection('movies');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

run().catch(console.error);`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        For this, we will use a MongoDB Atlas database. If you don't already have a MongoDB Atlas account, you can create one for free at MongoDB Atlas.
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        We will also use the "sample_mflix" database loaded from our sample data in the Intro to Aggregations section.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">MongoDB Node.js Driver Installation</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        To use MongoDB with Node.js, you will need to install the <code>mongodb</code> package in your Node.js project.
      </p>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{`npm install mongodb`}</code>
        <button
          onClick={() => handleCopy(installMongoDbExample, 'installMongoDb')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Install Command"
        >
          {copied.installMongoDb ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Connection String</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        In order to connect to our MongoDB Atlas database, we'll need to get our connection string from the Atlas dashboard.
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Go to Database then click the CONNECT button on your Cluster. Choose <strong>Connect your application</strong> then copy your connection string.
      </p>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{`mongodb+srv://<username>:<password>@<cluster.string>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`}</code>
        <button
          onClick={() => handleCopy(connectionStringExample, 'connectionString')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Connection String"
        >
          {copied.connectionString ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Connecting to MongoDB</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Let's add to our <code>index.js</code> file to connect to MongoDB and perform some basic operations.
      </p>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{`const { MongoClient } = require('mongodb');

const uri = "<Your Connection String>";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    const collection = db.collection('movies');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

run().catch(console.error);`}</code>
        <button
          onClick={() => handleCopy(mongoConnectionExample, 'mongoConnection')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Mongo Connection Code"
        >
          {copied.mongoConnection ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">CRUD & Document Aggregation</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Just as we did using mongosh, we can use the MongoDB Node.js language driver to create, read, update, delete, and aggregate documents in the database.
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Expanding on the previous example, we can replace the <code>collection.findOne()</code> with <code>find()</code>, <code>insertOne()</code>, <code>insertMany()</code>, <code>updateOne()</code>, <code>updateMany()</code>, <code>deleteOne()</code>, <code>deleteMany()</code>, or <code>aggregate()</code>.
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Give some of those a try!
      </p>
    </div>
  );
};

export default MongoDBNodeJsDriver;
