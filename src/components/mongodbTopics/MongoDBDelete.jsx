import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBDelete = () => {
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
            console.error('Failed to copy to clipboard:', error);
        }
    };

    // Code snippets
    const deleteOneExample = `db.posts.deleteOne({ title: "Post Title 5" });`;
    const deleteManyExample = `db.posts.deleteMany({ category: "Technology" });`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                We can delete documents in MongoDB by using the methods <code>deleteOne()</code> or <code>deleteMany()</code>.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                These methods accept a query object. The matching documents will be deleted based on the query provided.
            </p>

            {/* deleteOne */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">deleteOne()</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>deleteOne()</code> method will delete the <strong>first document</strong> that matches the query provided.
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{deleteOneExample}</code>
                <button
                    onClick={() => handleCopy(deleteOneExample, 'deleteOne')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy deleteOne Example"
                >
                    {copied.deleteOne ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            {/* deleteMany */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">deleteMany()</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>deleteMany()</code> method will delete <strong>all documents</strong> that match the query provided.
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{deleteManyExample}</code>
                <button
                    onClick={() => handleCopy(deleteManyExample, 'deleteMany')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy deleteMany Example"
                >
                    {copied.deleteMany ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

        </div>
    );
};

export default MongoDBDelete;
