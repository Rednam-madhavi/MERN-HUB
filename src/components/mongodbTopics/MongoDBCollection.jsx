import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBCollection = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (codeSnippet, type) => {
        clipboard.copy(codeSnippet);
        setCopied((prev) => ({ ...prev, [type]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
    };

    const createMethod1 = `db.createCollection("posts")`;
    const createMethod2 = `db.posts.insertOne(object)`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-base leading-relaxed">
                In MongoDB, you can create a collection using <strong>mongosh</strong> in two main ways:
            </p>

            <h3 className="text-xl font-semibold mt-6">Method 1: Using <code>createCollection()</code></h3>
            <p className="text-base leading-relaxed">
                You can explicitly create a collection with the <code>createCollection()</code> method:
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{createMethod1}</code>
                <button
                    onClick={() => handleCopy(createMethod1, 'method1')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy createCollection command"
                >
                    {copied.method1 ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-xl font-semibold mt-6">Method 2: Implicitly During Insert</h3>
            <p className="text-base leading-relaxed">
                MongoDB automatically creates a collection if it doesn't exist when you insert data into it:
            </p>
            <p className="text-base leading-relaxed">
                Assuming <code>object</code> is a valid JavaScript object containing post data:
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{createMethod2}</code>
                <button
                    onClick={() => handleCopy(createMethod2, 'method2')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy insertOne command"
                >
                    {copied.method2 ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <div className="text-base leading-relaxed mt-6">
                <strong>Note:</strong> In MongoDB, a collection is not actually created until it gets content!
            </div>
        </div>
    );
};

export default MongoDBCollection;
