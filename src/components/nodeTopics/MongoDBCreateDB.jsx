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

const MongoDBCreateDB = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        To create a database in MongoDB using Node.js, you first instantiate a MongoClient object, provide the connection URL (including the desired database name), and then attempt to connect. If the specified database does not exist, MongoDB will create it upon the first document insertion.
      </p>

      <section>
        <h2 className="text-xl font-semibold">Example</h2>
        <p className="text-base mb-2">Create a database named <code>mydb</code> using Node.js and the MongoDB driver:</p>
        <CodeBlock
          code={`var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">How to Run</h2>
        <p className="text-base">Save the code above to a file named <code>demo_create_mongo_db.js</code> and run the following command:</p>
        <CodeBlock code={`node demo_create_mongo_db.js`} />
        <p className="text-base mt-2">Expected output:</p>
        <CodeBlock code={`Database created!`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Important Note</h2>
        <p className="text-base leading-relaxed">
          MongoDB does not persist the database on disk until you insert at least one document into a collection.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Collection
      </p>
    </div>
  );
};

export default MongoDBCreateDB;
