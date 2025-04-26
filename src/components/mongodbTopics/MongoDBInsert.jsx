import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBInsert = () => {
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
    const insertOneExample = `db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})`;

    const insertManyExample = `db.posts.insertMany([
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                There are 2 methods to insert documents into a MongoDB database.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">insertOne()</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                To insert a single document, use the <code>insertOne()</code> method. This method inserts a single object into the database.
                <br />
                Note: When typing in the shell, after opening an object with curly braces <code>{"{"}</code> you can press enter to start a new line in the editor without executing the command. The command will execute when you press enter after closing the braces.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{insertOneExample}</code>
                <button
                    onClick={() => handleCopy(insertOneExample, 'insertOne')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy insertOne Example"
                >
                    {copied.insertOne ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">insertMany()</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                To insert multiple documents at once, use the <code>insertMany()</code> method. This method inserts an array of objects into the database.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{insertManyExample}</code>
                <button
                    onClick={() => handleCopy(insertManyExample, 'insertMany')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy insertMany Example"
                >
                    {copied.insertMany ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6">
                Note: If you try to insert documents into a collection that does not exist, MongoDB will create the collection automatically.
            </p>
        </div>
    );
};

export default MongoDBInsert;
