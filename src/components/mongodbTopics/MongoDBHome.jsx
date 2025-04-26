import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBHome = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState({});

  const handleCopy = (snippet, key) => {
    clipboard.copy(snippet);
    setCopied((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000);
  };

  const documentExample = `{
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
}`;

  const findExample = `db.posts.find({ category: "News" })`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-base md:text-lg leading-relaxed">
        MongoDB is a <strong>document database</strong>. It stores data in a type of JSON format called <code>BSON</code>.
      </p>

      <p className="text-base md:text-lg leading-relaxed">
        If you're unfamiliar with JSON, you should check out about JSON first. A record in MongoDB is called a <strong>document</strong>, which is a structure composed of key-value pairs—similar to JSON objects.
      </p>

      <h2 className="text-xl font-semibold mt-6">A MongoDB Document</h2>
      <p className="text-base md:text-lg leading-relaxed">
        Documents can hold numbers, strings, booleans, arrays, or even nested documents.
      </p>
      
      <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base whitespace-pre-wrap">
        <code>{documentExample}</code>
        <button
          onClick={() => handleCopy(documentExample, 'doc')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Copy document example"
        >
          {copied.doc ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-6">Learning by Examples</h2>
      <p className="text-base md:text-lg leading-relaxed">
        Our "Show MongoDB" tool helps you see both the code and the result side by side.
      </p>

      <h3 className="text-lg font-semibold mt-4">Example: Find documents with category "News"</h3>
      <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
        <code>{findExample}</code>
        <button
          onClick={() => handleCopy(findExample, 'find')}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Copy find query"
        >
          {copied.find ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MongoDBHome;
