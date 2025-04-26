import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBValidation = () => {
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

  const jsonSchemaExample = `db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "title", "body" ],
      properties: {
        title: {
          bsonType: "string",
          description: "Title of post - Required."
        },
        body: {
          bsonType: "string",
          description: "Body of post - Required."
        },
        category: {
          bsonType: "string",
          description: "Category of post - Optional."
        },
        likes: {
          bsonType: "int",
          description: "Post like count. Must be an integer - Optional."
        },
        tags: {
          bsonType: ["string"],
          description: "Must be an array of strings - Optional."
        },
        date: {
          bsonType: "date",
          description: "Must be a date - Optional."
        }
      }
    }
  }
})`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        By default, MongoDB has a flexible schema, meaning there is no strict schema validation set up initially. However, MongoDB supports JSON Schema validation, which allows you to define rules for document structure in a collection.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6">Schema Validation</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        MongoDB supports JSON Schema validation through the <code>$jsonSchema</code> operator. You can use this to define your document structure and set validation rules for each field in a collection.
      </p>

      <h3 className="text-lg sm:text-xl font-medium mt-6">Example</h3>
      <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{jsonSchemaExample}</code>
        <button
          onClick={() => handleCopy(jsonSchemaExample, 'jsonSchemaExample')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy JSON Schema Example"
        >
          {copied.jsonSchemaExample ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
      </pre>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6">
        The above code creates a <code>posts</code> collection with schema validation rules. In this example:
      </p>
      <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg leading-relaxed">
        <li><strong>Title</strong> and <strong>Body</strong> are required fields of type <code>string</code>.</li>
        <li><strong>Category</strong> is an optional field of type <code>string</code>.</li>
        <li><strong>Likes</strong> is an optional field of type <code>int</code> (integer).</li>
        <li><strong>Tags</strong> is an optional field, which must be an array of <code>string</code>.</li>
        <li><strong>Date</strong> is an optional field of type <code>date</code>.</li>
      </ul>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6">
        By using schema validation, you ensure that all documents in the collection conform to the defined structure, which improves consistency and data integrity.
      </p>
    </div>
  );
};

export default MongoDBValidation;
