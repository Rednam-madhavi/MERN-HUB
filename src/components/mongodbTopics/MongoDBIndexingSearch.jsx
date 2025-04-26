import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBIndexingSearch = () => {
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
    const createIndexExample = `db.movies.createIndex({
  title: "text"
})`;

    const searchQueryExample = `db.movies.aggregate([
  {
    $search: {
      index: "default", // optional unless you named your index
                           something other than "default"
      text: {
        query: "star wars",
        path: "title"
      }
    }
  },
  {
    $project: {
      title: 1,
      year: 1
    }
  }
])`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                MongoDB Atlas comes with a full-text search engine that can be used to search for documents in a collection. Atlas Search is powered by Apache Lucene.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Creating an Index</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                We'll use the Atlas dashboard to create an index on the "sample_mflix" database from the sample data that we loaded in the Intro to Aggregations section.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base md:text-lg">
                <li>From the Atlas dashboard, click on your Cluster name then the Search tab.</li>
                <li>Click on the Create Search Index button.</li>
                <li>Use the Visual Editor and click Next.</li>
                <li>Name your index, choose the Database and Collection you want to index and click Next.</li>
                <li>If you name your index "default" you will not have to specify the index name in the $search pipeline stage.</li>
                <li>Choose the sample_mflix database and the movies collection.</li>
                <li>Click Create Search Index and wait for the index to complete.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Running a Query</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                To use our search index, we will use the <code>$search</code> operator in our aggregation pipeline.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{searchQueryExample}</code>
                <button
                    onClick={() => handleCopy(searchQueryExample, 'searchQuery')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Search Query Syntax"
                >
                    {copied.searchQuery ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                The first stage of this aggregation pipeline will return all documents in the movies collection that contain the word "star" or "wars" in the title field.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The second stage will project the title and year fields from each document.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Creating a Simple Index Example</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Here’s an example of creating a text index on the "title" field of the "movies" collection:
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{createIndexExample}</code>
                <button
                    onClick={() => handleCopy(createIndexExample, 'createIndex')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Create Index Syntax"
                >
                    {copied.createIndex ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                MongoDB Atlas provides a powerful, full-text search feature that integrates easily with your aggregation pipeline. By creating appropriate indexes and using the $search operator, you can efficiently search and query your collections.
            </p>
        </div>
    );
};

export default MongoDBIndexingSearch;
