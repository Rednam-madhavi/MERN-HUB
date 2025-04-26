import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBFind = () => {
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
    const findExample = `db.posts.find()`;
    const findOneExample = `db.posts.findOne()`;
    const queryExample = `db.posts.find({category: "News"})`;
    const projectionExample = `db.posts.find({}, {title: 1, date: 1})`;
    const excludeIdExample = `db.posts.find({}, {_id: 0, title: 1, date: 1})`;
    const excludeCategoryExample = `db.posts.find({}, {category: 0})`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                There are 2 methods to find and select data from a MongoDB collection, <code>find()</code> and <code>findOne()</code>.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6">find()</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>find()</code> method is used to select data from a collection. If no query is provided, it will return all documents.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{findExample}</code>
                <button
                    onClick={() => handleCopy(findExample, 'find')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy find() Example"
                >
                    {copied.find ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-6">findOne()</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>findOne()</code> method selects only one document. If no query is provided, it will return the first document it finds.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{findOneExample}</code>
                <button
                    onClick={() => handleCopy(findOneExample, 'findOne')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy findOne() Example"
                >
                    {copied.findOne ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-6">Querying Data</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                To filter data, we can include a query object in the <code>find()</code> or <code>findOne()</code> methods.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{queryExample}</code>
                <button
                    onClick={() => handleCopy(queryExample, 'query')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Query Example"
                >
                    {copied.query ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-6">Projection</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Both <code>find()</code> and <code>findOne()</code> accept a second parameter for projections, which allows us to select specific fields to include or exclude in the result.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{projectionExample}</code>
                <button
                    onClick={() => handleCopy(projectionExample, 'projection')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Projection Example"
                >
                    {copied.projection ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-6">Excluding the _id Field</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                By default, the <code>_id</code> field is always included in the results. You can exclude it by specifying <code>{'_id: 0'}</code> in the projection.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{excludeIdExample}</code>
                <button
                    onClick={() => handleCopy(excludeIdExample, 'excludeId')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Exclude _id Example"
                >
                    {copied.excludeId ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-6">Excluding Specific Fields</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                You can also exclude other fields from the results. For example, if you want to exclude the <code>category</code> field, you can specify <code>{'category: 0'}</code>.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{excludeCategoryExample}</code>
                <button
                    onClick={() => handleCopy(excludeCategoryExample, 'excludeCategory')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Exclude Category Example"
                >
                    {copied.excludeCategory ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                With these methods, you can efficiently query and project specific data from MongoDB collections, helping you tailor your queries to your needs.
            </p>
        </div>
    );
};

export default MongoDBFind;
