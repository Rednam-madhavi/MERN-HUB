import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBUpdateOperators = () => {
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
    const currentDateExample = `db.collection.updateOne(
  { _id: 1 },
  { $currentDate: { lastModified: true } }
);`;

    const incExample = `db.collection.updateOne(
  { _id: 1 },
  { $inc: { quantity: 1 } }
);`;

    const renameExample = `db.collection.updateOne(
  { _id: 1 },
  { $rename: { "oldFieldName": "newFieldName" } }
);`;

    const setExample = `db.collection.updateOne(
  { _id: 1 },
  { $set: { fieldName: "newValue" } }
);`;

    const unsetExample = `db.collection.updateOne(
  { _id: 1 },
  { $unset: { fieldName: "" } }
);`;

    const addToSetExample = `db.collection.updateOne(
  { _id: 1 },
  { $addToSet: { arrayField: "newElement" } }
);`;

    const popExample = `db.collection.updateOne(
  { _id: 1 },
  { $pop: { arrayField: 1 } }
);`;

    const pullExample = `db.collection.updateOne(
  { _id: 1 },
  { $pull: { arrayField: { item: "value" } } }
);`;

    const pushExample = `db.collection.updateOne(
  { _id: 1 },
  { $push: { arrayField: "newElement" } }
);`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                MongoDB provides several update operators that can be used to modify documents in a collection. These operators allow you to update fields, arrays, and more during document updates.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Fields</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The following operators can be used to update fields in a document:
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">1. $currentDate</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Sets the field value to the current date.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{currentDateExample}</code>
                <button
                    onClick={() => handleCopy(currentDateExample, 'currentDate')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $currentDate Syntax"
                >
                    {copied.currentDate ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">2. $inc</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Increments the field value.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{incExample}</code>
                <button
                    onClick={() => handleCopy(incExample, 'inc')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $inc Syntax"
                >
                    {copied.inc ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">3. $rename</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Renames the field.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{renameExample}</code>
                <button
                    onClick={() => handleCopy(renameExample, 'rename')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $rename Syntax"
                >
                    {copied.rename ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">4. $set</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Sets the value of a field.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{setExample}</code>
                <button
                    onClick={() => handleCopy(setExample, 'set')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $set Syntax"
                >
                    {copied.set ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">5. $unset</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Removes a field from the document.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{unsetExample}</code>
                <button
                    onClick={() => handleCopy(unsetExample, 'unset')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $unset Syntax"
                >
                    {copied.unset ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Array Update Operators</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The following operators assist with updating arrays in documents:
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">6. $addToSet</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Adds distinct elements to an array.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{addToSetExample}</code>
                <button
                    onClick={() => handleCopy(addToSetExample, 'addToSet')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $addToSet Syntax"
                >
                    {copied.addToSet ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">7. $pop</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Removes the first or last element from an array.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{popExample}</code>
                <button
                    onClick={() => handleCopy(popExample, 'pop')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $pop Syntax"
                >
                    {copied.pop ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">8. $pull</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Removes all elements from an array that match a query.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{pullExample}</code>
                <button
                    onClick={() => handleCopy(pullExample, 'pull')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $pull Syntax"
                >
                    {copied.pull ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-4">9. $push</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Adds an element to an array.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{pushExample}</code>
                <button
                    onClick={() => handleCopy(pushExample, 'push')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy $push Syntax"
                >
                    {copied.push ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>
        </div>
    );
};

export default MongoDBUpdateOperators;
