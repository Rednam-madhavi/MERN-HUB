import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MongoDBAggregations = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (code, id) => {
        clipboard.copy(code);
        setCopied((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => {
            setCopied((prev) => ({ ...prev, [id]: false }));
        }, 2000);
    };

    const basicAggregation = `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } }
]);`;

    const stagesExample = `[
  { $match: { /* filter documents */ } },
  { $group: { /* group documents */ } },
  { $sort: { /* sort documents */ } }
]`;

    const pipelineExample = `db.sales.aggregate([
  { $match: { date: { $gte: ISODate("2024-01-01") } } },
  { $group: { _id: "$region", totalSales: { $sum: "$amount" } } },
  { $sort: { totalSales: -1 } }
]);`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                MongoDB Aggregations process data records and return computed results. Aggregation operations group values from multiple documents together and perform operations like sum, average, min, max, etc.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Basic Aggregation Example</h2>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
                <code className="block whitespace-pre">{basicAggregation}</code>
                <button
                    onClick={() => handleCopy(basicAggregation, 'basic')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied.basic ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Aggregation Stages</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                An aggregation pipeline consists of multiple stages where each stage transforms the documents as they pass through the pipeline.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
                <code className="block whitespace-pre">{stagesExample}</code>
                <button
                    onClick={() => handleCopy(stagesExample, 'stages')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied.stages ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Aggregation Pipeline Example</h2>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
                <code className="block whitespace-pre">{pipelineExample}</code>
                <button
                    onClick={() => handleCopy(pipelineExample, 'pipeline')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copied.pipeline ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                MongoDB's aggregation framework is powerful for data transformation and analysis. Learning it well can make your database queries much more efficient and expressive.
            </p>
        </div>
    );
};

export default MongoDBAggregations;
