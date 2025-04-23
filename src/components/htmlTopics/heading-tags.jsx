import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Working from '../../assets/html/headingtags.mp4';

const HeadingTags = () => {
    const clipboard = useClipboard();
    const [copiedTag, setCopiedTag] = useState(null);

    const handleCopy = (text, tag) => {
        clipboard.copy(text);
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 2000);
    };

    const renderTagSection = (title, tag, description) => (
        <div className="relative space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm overflow-x-auto font-mono text-gray-800 dark:text-gray-200">
                    {`<${tag}>
  <!-- Heading content -->
</${tag}>`}
                </pre>
                <button
                    onClick={() => handleCopy(`<${tag}>\n  <!-- Heading content -->\n</${tag}>`, tag)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedTag === tag ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                In HTML, heading tags ranging from <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h6&gt;</code> are used to define the structure and layout of text on a web page.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                These tags help create a hierarchical organization of content, making it easier for both users and search engines to understand the page's content.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> tag is generally used for the main title and is the largest and most prominent, while <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h2&gt;</code> to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h6&gt;</code> tags are used for subheadings, further subheadings and so on.
            </p>

            {renderTagSection("<h1> Tag: First-Level Heading", "h1", "The <h1> tag defines the first-level heading and is typically the largest and boldest among all the heading tags. It is often used for the main title of the page.")}
            {renderTagSection("<h2> Tag: Second-Level Heading", "h2", "The <h2> tag is used for second-level headings and is slightly smaller than the <h1> tag. This is commonly used for section titles.")}
            {renderTagSection("<h3> Tag: Third-Level Heading", "h3", "The <h3> tag is used for third-level headings. These are smaller than <h2> tags and are often used for sub-sections within an <h2> section.")}
            {renderTagSection("<h4> Tag: Fourth-Level Heading", "h4", "The <h4> tag defines a fourth-level heading, which is smaller than the <h3> tag. It's often used for sub-sections within an <h3> section.")}
            {renderTagSection("<h5> Tag: Fifth-Level Heading", "h5", "The <h5> tag is used for fifth-level headings and is smaller than <h4> tags. These are rarely used but can be helpful for deeply nested sections.")}
            {renderTagSection("<h6> Tag: Sixth-Level Heading", "h6", "The <h6> tag defines the sixth-level heading and is the smallest among all the heading tags. It's rarely used but can serve specific formatting needs.")}

            <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold mt-6 text-gray-900 dark:text-white">Summary</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li><strong>&lt;h1&gt; Tag</strong>: Used for the main title of the page; largest and most prominent heading.</li>
                    <li><strong>&lt;h2&gt; Tag</strong>: Used for major section headings; smaller than &lt;h1&gt; but still quite prominent.</li>
                    <li><strong>&lt;h3&gt; Tag</strong>: Used for sub-sections within an &lt;h2&gt; section; smaller than &lt;h2&gt; but larger than &lt;h4&gt;.</li>
                    <li><strong>&lt;h4&gt; Tag</strong>: Often used for headings within an &lt;h3&gt; section; useful for further breaking down content.</li>
                    <li><strong>&lt;h5&gt; Tag</strong>: Rarely used; suitable for deeply nested sections or less important headings.</li>
                    <li><strong>&lt;h6&gt; Tag</strong>: The smallest heading tag; used for very specific or minor headings, rarely seen in general usage.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">Here is how you can create all these headings:</p>
                <video
                    src={Working}
                    controls
                    className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Paragraph Tag
            </p>
        </div>
    );
};

export default HeadingTags;
