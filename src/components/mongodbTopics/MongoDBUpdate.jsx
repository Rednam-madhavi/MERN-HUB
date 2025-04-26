import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBUpdate = () => {
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
    const updateOneExample = `db.posts.updateOne(
  { title: "Post Title 1" },
  { $set: { likes: 2 } }
)`;

    const upsertExample = `db.posts.updateOne(
  { title: "Post Title 5" },
  {
    $set: {
      title: "Post Title 5",
      body: "Body of post.",
      category: "Event",
      likes: 5,
      tags: ["news", "events"],
      date: Date()
    }
  },
  { upsert: true }
)`;

    const updateManyExample = `db.posts.updateMany({}, { $inc: { likes: 1 } })`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                In MongoDB, you can update an existing document using the <code>updateOne()</code> or <code>updateMany()</code> methods. The first parameter is a query object to define which document(s) should be updated, and the second parameter is an object defining the updated data.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">updateOne()</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>updateOne()</code> method will update the first document found that matches the provided query.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`db.posts.updateOne(
  { title: "Post Title 1" },
  { $set: { likes: 2 } }
)`}</code>
                <button
                    onClick={() => handleCopy(updateOneExample, 'updateOne')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy updateOne() Syntax"
                >
                    {copied.updateOne ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Insert if not found (Upsert)</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                If you want to insert the document if it is not found, you can use the <code>upsert</code> option in the <code>updateOne()</code> method.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`db.posts.updateOne(
  { title: "Post Title 5" },
  {
    $set: {
      title: "Post Title 5",
      body: "Body of post.",
      category: "Event",
      likes: 5,
      tags: ["news", "events"],
      date: Date()
    }
  },
  { upsert: true }
)`}</code>
                <button
                    onClick={() => handleCopy(upsertExample, 'upsert')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Upsert Syntax"
                >
                    {copied.upsert ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">updateMany()</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>updateMany()</code> method will update all documents that match the provided query.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`db.posts.updateMany({}, { $inc: { likes: 1 } })`}</code>
                <button
                    onClick={() => handleCopy(updateManyExample, 'updateMany')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy updateMany() Syntax"
                >
                    {copied.updateMany ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                By using the <code>updateOne()</code> and <code>updateMany()</code> methods, you can easily modify documents in MongoDB. The <code>upsert</code> option can be helpful for ensuring a document is inserted if it doesn’t already exist. These operations provide great flexibility when managing your MongoDB collections.
            </p>
        </div>
    );
};

export default MongoDBUpdate;
