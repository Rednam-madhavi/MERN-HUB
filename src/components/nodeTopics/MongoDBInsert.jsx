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

const MongoDBInsert = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Inserting a Single Document: insertOne()</h2>
        <p className="text-base leading-relaxed">
          The <code>insertOne()</code> method adds a single document to a collection. If the <code>_id</code> field is not specified, MongoDB automatically generates a unique <code>ObjectId</code> for it.
        </p>
        <CodeBlock
          code={`const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('customers');

    const doc = { name: 'Company Inc', address: 'Highway 37' };
    const result = await collection.insertOne(doc);
    console.log(\`1 document inserted with _id: \${result.insertedId}\`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Inserting Multiple Documents: insertMany()</h2>
        <p className="text-base leading-relaxed">
          The <code>insertMany()</code> method allows you to insert multiple documents into a collection in a single operation. This is more efficient than inserting documents one by one.
        </p>
        <CodeBlock
          code={`const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('customers');

    const docs = [
      { name: 'John', address: 'Highway 71' },
      { name: 'Peter', address: 'Lowstreet 4' },
      { name: 'Amy', address: 'Apple st 652' },
      { name: 'Hannah', address: 'Mountain 21' },
      { name: 'Michael', address: 'Valley 345' },
      { name: 'Sandy', address: 'Ocean blvd 2' },
      { name: 'Betty', address: 'Green Grass 1' },
      { name: 'Richard', address: 'Sky st 331' },
      { name: 'Susan', address: 'One way 98' },
      { name: 'Vicky', address: 'Yellow Garden 2' },
      { name: 'Ben', address: 'Park Lane 38' },
      { name: 'William', address: 'Central st 954' },
      { name: 'Chuck', address: 'Main Road 989' },
      { name: 'Viola', address: 'Sideway 1633' }
    ];

    const result = await collection.insertMany(docs);
    console.log(\`Number of documents inserted: \${result.insertedCount}\`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Specifying Custom _id Fields</h2>
        <p className="text-base leading-relaxed">
          You can specify custom <code>_id</code> fields when inserting documents. Ensure that each <code>_id</code> is unique to avoid duplicate key errors.
        </p>
        <CodeBlock
          code={`const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('products');

    const docs = [
      { _id: 154, name: 'Chocolate Heaven' },
      { _id: 155, name: 'Tasty Lemon' },
      { _id: 156, name: 'Vanilla Dream' }
    ];

    const result = await collection.insertMany(docs);
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Handling Duplicate _id Errors</h2>
        <p className="text-base leading-relaxed">
          Attempting to insert documents with duplicate <code>_id</code> values will result in a duplicate key error. To handle such scenarios, you can use the <code>ordered: false</code> option with <code>insertMany()</code>, which allows MongoDB to continue inserting the remaining documents even if some insertions fail.
        </p>
        <CodeBlock
          code={`const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('products');

    const docs = [
      { _id: 157, name: 'Strawberry Delight' },
      { _id: 158, name: 'Mango Tango' },
      { _id: 157, name: 'Berry Blast' } // Duplicate _id
    ];

    const options = { ordered: false };

    const result = await collection.insertMany(docs, options);
    console.log(result);
  } catch (error) {
    console.error('Error inserting documents:', error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          MongoDB provides flexible methods for inserting documents into collections. Use <code>insertOne()</code> for single document insertions and <code>insertMany()</code> for multiple documents. Always handle potential errors, especially when dealing with custom <code>_id</code> fields, to ensure data integrity.
        </p>
      </section>
       <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Find
      </p>
    </div>
  );
};

export default MongoDBInsert;
