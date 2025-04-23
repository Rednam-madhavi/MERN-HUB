import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import paragraph from '../../assets/html/paragraph.mp4';

const ParagraphTag = () => {
    const clipboard = useClipboard();
    const [copiedTag, setCopiedTag] = useState(null);

    const handleCopy = (text, tag) => {
        clipboard.copy(text);
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 2000);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-lg sm:text-xl leading-relaxed">
                To create well-structured text in your HTML document, the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> tag is essential for defining paragraphs.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">How to use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> tag?</h3>
            <p className="text-base sm:text-lg">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> tag is used to format text into distinct paragraphs. Each paragraph element is separated by automatic empty line spaces above and below the content, providing a clear visual separation. The tag must be closed with its corresponding <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/p&gt;</code> tag.
            </p>

            <div className="relative space-y-2">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-lg overflow-x-auto font-mono text-gray-800 dark:text-gray-200">
                    &lt;p&gt;
                    &lt;-- Paragraph content --&gt;
                    &lt;/p&gt;
                </pre>
                <button
                    onClick={() => handleCopy('<p><!-- Paragraph content --></p>', 'p')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedTag === 'p' ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <p className="text-base sm:text-lg mt-4">
                While the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> tag is straightforward, you can enhance its functionality using various attributes like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">class</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code> for CSS styling. You can also include inline styles using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code> attribute.
            </p>

            <div className="relative space-y-2">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-lg overflow-x-auto font-mono text-gray-800 dark:text-gray-200">
                    &lt;p class="example" style="color: blue;"&gt;
                    This is a styled paragraph.
                    &lt;/p&gt;
                </pre>
                <button
                    onClick={() => handleCopy('<p class="example" style="color: blue;">This is a styled paragraph.</p>', 'styled-p')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedTag === 'styled-p' ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <p className="text-base sm:text-lg">
                Best practices for using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> tag: It's advisable to use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> tag for textual content and not for layout control. For layout purposes, consider using HTML5 semantic tags like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;section&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;article&gt;</code>, or CSS techniques.
            </p>

            <p className="text-lg sm:text-xl mt-4">
                Don't worry, we will look into semantic tags and other techniques later in this tutorial. Here is how you can create a paragraph in HTML:
            </p>
            <div className="my-4">
                <video
                    src={paragraph}
                    controls
                    className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <p className="text-center font-semibold text-lg mt-8">
                Next, we'll look at how to use Horizontal Line Tag.
            </p>
        </div>
    );
};

export default ParagraphTag;
