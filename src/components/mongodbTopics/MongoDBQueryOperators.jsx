import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBQueryOperators = () => {
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

    // Code snippets for copying
    const comparisonExample = `
  { "age": { "$gte": 21 } }`;

    const logicalExample = `
  { "$and": [ { "age": { "$gte": 21 } }, { "name": "John" } ] }`;

    const evaluationExample = `
  { "$regex": "^M" }`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                There are many query operators that can be used to compare and reference document fields.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Comparison Operators</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The following operators can be used in queries to compare values:
            </p>
            <ul className="list-disc pl-5">
                <li><strong>$eq</strong>: Values are equal</li>
                <li><strong>$ne</strong>: Values are not equal</li>
                <li><strong>$gt</strong>: Value is greater than another value</li>
                <li><strong>$gte</strong>: Value is greater than or equal to another value</li>
                <li><strong>$lt</strong>: Value is less than another value</li>
                <li><strong>$lte</strong>: Value is less than or equal to another value</li>
                <li><strong>$in</strong>: Value is matched within an array</li>
            </ul>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`{ "age": { "$gte": 21 } }`}</code>
                <button
                    onClick={() => handleCopy(comparisonExample, 'comparison')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Comparison Syntax"
                >
                    {copied.comparison ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Logical Operators</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The following operators can logically compare multiple queries:
            </p>
            <ul className="list-disc pl-5">
                <li><strong>$and</strong>: Returns documents where both queries match</li>
                <li><strong>$or</strong>: Returns documents where either query matches</li>
                <li><strong>$nor</strong>: Returns documents where both queries fail to match</li>
                <li><strong>$not</strong>: Returns documents where the query does not match</li>
            </ul>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`{ "$and": [ { "age": { "$gte": 21 } }, { "name": "John" } ] }`}</code>
                <button
                    onClick={() => handleCopy(logicalExample, 'logical')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Logical Syntax"
                >
                    {copied.logical ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Evaluation Operators</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The following operators assist in evaluating documents:
            </p>
            <ul className="list-disc pl-5">
                <li><strong>$regex</strong>: Allows the use of regular expressions when evaluating field values</li>
                <li><strong>$text</strong>: Performs a text search</li>
                <li><strong>$where</strong>: Uses a JavaScript expression to match documents</li>
            </ul>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{`{ "$regex": "^M" }`}</code>
                <button
                    onClick={() => handleCopy(evaluationExample, 'evaluation')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Evaluation Syntax"
                >
                    {copied.evaluation ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>
        </div>
    );
};

export default MongoDBQueryOperators;
