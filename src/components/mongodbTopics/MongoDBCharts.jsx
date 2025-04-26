import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import charts from '../../assets/mongodb/charts.jpg';

const MongoDBCharts = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (code, key) => {
        clipboard.copy(code);
        setCopied(prev => ({ ...prev, [key]: true }));
        setTimeout(() => {
            setCopied(prev => ({ ...prev, [key]: false }));
        }, 2000);
    };

    const exampleCode = `// Select the Movies collection from sample_mflix
// Drag 'year' to Y Axis and set Bin Size to 1
// Drag '_id' to X Axis and choose COUNT
// Result: bar chart of movies released each year`;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-base md:text-lg leading-relaxed">
                MongoDB Charts lets you visualize your data in a simple, intuitive way. It’s a great tool for generating insights from your collections directly in MongoDB Atlas.
            </p>

            <h2 className="text-xl font-semibold">MongoDB Charts Setup</h2>
            <ul className="list-disc ml-6 text-base space-y-1">
                <li>From the MongoDB Atlas dashboard, go to the <strong>Charts</strong> tab.</li>
                <li>If it’s your first time, click <strong>Activate Now</strong>. It takes about a minute.</li>
                <li>Once activated, you’ll see a dashboard. Click its name to open it.</li>
            </ul>

            <h2 className="text-xl font-semibold">Creating a Chart</h2>
            <ul className="list-disc ml-6 text-base space-y-1">
                <li>Click the <strong>Add Chart</strong> button to begin.</li>
                <li>Select the data source – in this example, use the <code>sample_mflix</code> database.</li>
                <li>Choose the <strong>Movies</strong> collection under that database.</li>
                <li>Drag <code>year</code> to the Y Axis and set Bin Size to <code>1</code>.</li>
                <li>Drag <code>_id</code> to the X Axis and select <code>COUNT</code> as the aggregation.</li>
                <li>You’ll now see a bar chart of movies released each year.</li>
            </ul>

            <h2 className="text-xl font-semibold">Example Chart Config</h2>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded p-4 text-sm sm:text-base">
                <code className="whitespace-pre-wrap">{exampleCode}</code>
                <button
                    onClick={() => handleCopy(exampleCode, 'chartExample')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied.chartExample ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </pre>

            <img
                src={charts}
                alt="VS Code Open"
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
            />

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p className="text-base md:text-lg leading-relaxed">
                MongoDB Charts makes it incredibly easy to visualize your data without writing a single line of code. With the built-in aggregations and drag-and-drop interface, it’s perfect for quickly gaining insights from your collections.
            </p>
        </div>
    );
};

export default MongoDBCharts;
