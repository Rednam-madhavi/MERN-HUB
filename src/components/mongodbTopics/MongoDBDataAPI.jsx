import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBDataAPI = () => {
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

  // Example code snippets for copying
  const curlExample = `curl --location --request POST 'https://data.mongodb-api.com/app/<DATA API APP ID>/endpoint/data/v1/action/findOne' \\
--header 'Content-Type: application/json' \\
--header 'Access-Control-Request-Headers: *' \\
--header 'api-key: <DATA API KEY>' \\
--data-raw '{
  "dataSource":"<CLUSTER NAME>",
  "database":"sample_mflix",
  "collection":"movies",
  "projection": {"title": 1}
}'`;

  const findOneExample = `{
  "dataSource": "<data source name>",
  "database": "<database name>",
  "collection": "<collection name>",
  "filter": <query filter>,
  "projection": <projection>
}`;

  const insertOneExample = `{
  "dataSource": "<data source name>",
  "database": "<database name>",
  "collection": "<collection name>",
  "document": <document>
}`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The MongoDB Data API can be used to query and update data in a MongoDB database without the need for language-specific drivers. While it's ideal to use language drivers, the Data API comes in handy when they are unavailable or too complex for the application.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Read & Write with MongoDB Data API</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The MongoDB Data API provides pre-configured HTTPS endpoints to read and write data in a MongoDB Atlas database. You can create, read, update, delete, or aggregate documents in your MongoDB database using the API.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Cluster Configuration</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        To use the Data API, first enable it from the MongoDB Atlas UI. Navigate to <strong>Data API</strong> in the left menu, select the data source(s) to enable, and click <strong>Enable the Data API</strong>.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Access Level</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        By default, no access is granted. You can set the access level for the API to one of the following:
        <ul className="list-disc pl-6 mt-2">
          <li>No Access</li>
          <li>Read Only</li>
          <li>Read and Write</li>
          <li>Custom Access</li>
        </ul>
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Creating a Data API Key</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        To authenticate with the Data API, you need to create a Data API key. Click <strong>Create API Key</strong>, enter a name, and then click <strong>Generate API Key</strong>. Be sure to save this key, as it is not retrievable later.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Sending a Data API Request</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Below is an example of using curl to send a request to the Data API and retrieve the first document from the <code>movies</code> collection in the <code>sample_mflix</code> database.
      </p>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{curlExample}</code>
        <button
          onClick={() => handleCopy(curlExample, 'curl')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy Curl Syntax"
        >
          {copied.curl ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Data API Endpoints</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The following are the main endpoints available in the MongoDB Data API:
      </p>
      
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
          <h3 className="font-semibold">Find One Document</h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Use this endpoint to find a single document in a collection.
          </p>
          <pre className="relative">
            <code>{findOneExample}</code>
            <button
              onClick={() => handleCopy(findOneExample, 'findOne')}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Copy FindOne Syntax"
            >
              {copied.findOne ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
            </button>
          </pre>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
          <h3 className="font-semibold">Insert One Document</h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Use this endpoint to insert a single document into a collection.
          </p>
          <pre className="relative">
            <code>{insertOneExample}</code>
            <button
              onClick={() => handleCopy(insertOneExample, 'insertOne')}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Copy InsertOne Syntax"
            >
              {copied.insertOne ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
            </button>
          </pre>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Additional Endpoints</h2>
      <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg leading-relaxed">
        <li>Find Multiple Documents: POST Base_URL/find</li>
        <li>Insert Multiple Documents: POST Base_URL/insertMany</li>
        <li>Update One Document: POST Base_URL/updateOne</li>
        <li>Delete One Document: POST Base_URL/deleteOne</li>
        <li>Aggregate Documents: POST Base_URL/aggregate</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        MongoDB's Data API provides a simple and powerful way to interact with your data using HTTPS endpoints. It is useful when language-specific drivers are not available or when you need a lightweight solution for interacting with your MongoDB Atlas database.
      </p>
    </div>
  );
};

export default MongoDBDataAPI;
