import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import br from '../../assets/html/br.jpg';

const LineBreakTag = () => {
    const clipboard = useClipboard();
    const [copiedTag, setCopiedTag] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCopy = (text, tag) => {
        clipboard.copy(text);
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 2000);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const codeSnippet = '<br>';

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-gray-800 dark:text-gray-100">
            
            <p className="text-lg sm:text-xl leading-relaxed">
                To insert a line break in your HTML document, you can utilize the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> tag.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">How to use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> tag?</h3>
            <p className="text-base sm:text-lg">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> tag is used to insert line breaks in text or paragraphs. It doesn't require a closing tag since it's a self-closing tag.
            </p>

            {/* Copyable Code Snippet for <br> */}
            <div className="relative space-y-2">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-lg overflow-x-auto font-mono text-gray-800 dark:text-gray-200">
                    {codeSnippet}
                </pre>
                <button
                    onClick={() => handleCopy(codeSnippet, 'br')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedTag === 'br' ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <p className="text-base sm:text-lg mt-4">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> tag is particularly useful in formatting textual content where line breaks are essential for readability or visual layout. For example, it can be used in addresses, poems, or song lyrics to preserve the original line structure.
            </p>

            <p className="text-base sm:text-lg">
                Watch this demo image to see how the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> tag works in practice:
            </p>

            {/* Image Tag */}
            <div className="rounded-md">
                <p className="text-center text-gray-500 dark:text-gray-300">
                    <img
                        src={br}
                        alt="Line break demo"
                        className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md cursor-pointer"
                        onClick={openModal}
                    />
                </p>
            </div>

            {/* Modal to View Image in Fullscreen */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <img
                        src={br}
                        alt="Line break demo"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}

            <p className="text-center font-semibold text-lg mt-8">
                Next, we'll look at how to use Anchor Tag.
            </p>
        </div>
    );
};

export default LineBreakTag;
    