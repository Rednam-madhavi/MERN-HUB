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
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto whitespace-pre-wrap">
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

const MongoDBJoin = () => {
  const joinCode = `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
  ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});`;

  const expectedOutput = `[
  {
    "_id": 1,
    "product_id": 154,
    "status": 1,
    "orderdetails": [
      { "_id": 154, "name": "Chocolate Heaven" }
    ]
  }
]`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <section className="space-y-4">
        <p>
          Although MongoDB is a non-relational database, you can perform a left outer join using the <code className="bg-gray-200 px-1 rounded">$lookup</code> stage in the aggregation pipeline.
        </p>
        <p>
          The <code className="bg-gray-200 px-1 rounded">$lookup</code> stage allows joining another collection by matching specified fields.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sample Data</h2>
        <p><strong>orders</strong></p>
        <CodeBlock
          code={`[
  { _id: 1, product_id: 154, status: 1 }
]`}
        />
        <p><strong>products</strong></p>
        <CodeBlock
          code={`[
  { _id: 154, name: 'Chocolate Heaven' },
  { _id: 155, name: 'Tasty Lemons' },
  { _id: 156, name: 'Vanilla Dreams' }
]`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example: Join orders with products</h2>
        <CodeBlock code={joinCode} />
        <p>Save the code above in a file named <code className="bg-gray-200 px-1 rounded">demo_mongodb_join.js</code> and run it using:</p>
        <CodeBlock code={`node demo_mongodb_join.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Expected Output</h2>
        <CodeBlock code={expectedOutput} />
        <p>
          As shown, the matching product document is embedded into the <code className="bg-gray-200 px-1 rounded">orders</code> result as an array named <code className="bg-gray-200 px-1 rounded">orderdetails</code>.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        End of Node.js Tutorial
      </p>
    </div>
  );
};

export default MongoDBJoin;
