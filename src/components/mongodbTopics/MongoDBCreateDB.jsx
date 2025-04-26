import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBCreateDB = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (code, type) => {
        clipboard.copy(code);
        setCopied((prev) => ({ ...prev, [type]: true }));
        setTimeout(() => {
            setCopied((prev) => ({ ...prev, [type]: false }));
        }, 2000);
    };

    const showDBs = `show dbs`;
    const useDB = `use blog`;
    const checkCurrentDB = `db`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-base md:text-lg leading-relaxed">
                After connecting to your database using <code>mongosh</code>, you can check which database you are currently using by typing:
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-4 rounded text-sm sm:text-base">
                <code>{checkCurrentDB}</code>
                <button
                    onClick={() => handleCopy(checkCurrentDB, 'checkDB')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copied.checkDB ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
                If you've used the connection string provided from MongoDB Atlas, you should be connected to the <code>myFirstDatabase</code> database.
            </p>

            <h3 className="text-xl font-semibold mt-6">Show All Databases</h3>
            <p className="text-base md:text-lg leading-relaxed">
                To list all available databases, type:
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-4 rounded text-sm sm:text-base">
                <code>{showDBs}</code>
                <button
                    onClick={() => handleCopy(showDBs, 'showDBs')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copied.showDBs ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
                If a database has no content, like <code>myFirstDatabase</code>, it won’t show up in the list. In MongoDB, databases only exist once they contain data.
            </p>

            <h3 className="text-xl font-semibold mt-6">Create or Switch Database</h3>
            <p className="text-base md:text-lg leading-relaxed">
                You can switch to or create a new database using the <code>use</code> command. Here's how you would create a new database called <code>blog</code>:
            </p>

            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-4 rounded text-sm sm:text-base">
                <code>{useDB}</code>
                <button
                    onClick={() => handleCopy(useDB, 'useBlog')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copied.useBlog ? <CheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
                Now you're using the <code>blog</code> database. But remember: the database isn't truly created until you add content to it.
            </p>
        </div>
    );
};

export default MongoDBCreateDB;
