import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import Unordered from '../../assets/css/Lists1.png';
import Ordered from '../../assets/css/Lists2.png';
import ListStyle from '../../assets/css/Lists3.png';
import CustomList from '../../assets/css/Lists4.png';

const CodeBlock = ({ code }) => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        clipboard.copy(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto border border-gray-300 dark:border-gray-600">
            <pre>{code}</pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
            >
                {copied ? (
                    <CheckIcon className="w-5 h-5 text-green-500" />
                ) : (
                    <ClipboardIcon className="w-5 h-5" />
                )}
            </button>
        </div>
    );
};

const CSSListStyles = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">
            <p className="text-base md:text-lg leading-relaxed">
                Lists are a common element in web design used to organize content. CSS allows you to style lists to improve aesthetics and readability.
            </p>

            {/* Unordered List Styling */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Unordered List Styling</h2>
                <p>You can change the bullet style using <code>list-style-type</code> property.</p>
                <CodeBlock
                    code={`ul {\n  list-style-type: disc; /* circle | square | none */\n}`}
                />
                <h2 className="text-lg sm:text-xl font-semibold">Example HTML:</h2>
                <CodeBlock
                    code={`<ul class="ul1">\n  <li>Hello world</li>\n  <li>This is ul1</li>\n</ul>`}
                />
                <p className="text-sm italic">* Replace the class to try other types like <code>ul2</code> for circle, <code>ul3</code> for square, etc.</p>
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img src={Unordered} alt="Unordered list output" className="rounded-md border border-gray-300 dark:border-gray-600" />
            </section>

            {/* Ordered List Styling */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Ordered List Styling</h2>
                <p>Customize the numbering style of ordered lists using <code>list-style-type</code>.</p>
                <CodeBlock
                    code={`ol {\n  list-style-type: decimal;\n  /* Options: decimal-leading-zero, lower-roman, upper-roman,\n     lower-alpha, upper-alpha */\n}`}
                />
                <CodeBlock
                    code={`<ol class="ol3">\n  <li>MERN-HUB</li>\n  <li>This is lower-roman</li>\n</ol>`}
                />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img src={Ordered} alt="Ordered list output" className="rounded-md border border-gray-300 dark:border-gray-600" />
            </section>

            {/* List Style Position */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">List Style Position</h2>
                <p>This controls where the bullet or number appears relative to content.</p>
                <CodeBlock
                    code={`ul {\n  list-style-position: inside; /* or outside */\n}`}
                />
                <CodeBlock
                    code={`<ul class="ul2">\n  <li>MERN-HUB</li>\n  <li>list style position : outside</li>\n</ul>`}
                />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img src={ListStyle} alt="List style position output" className="rounded-md border border-gray-300 dark:border-gray-600" />
            </section>

            {/* Removing Default List Style */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Removing Default List Style</h2>
                <p>Use <code>list-style: none;</code> to remove markers completely.</p>
                <CodeBlock
                    code={`ul {\n  list-style: none;\n}`}
                />
                <CodeBlock
                    code={`<ul>\n  <li>MERN-HUB</li>\n  <li>list style : none</li>\n</ul>`}
                />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img src={ListStyle} alt="List style none output" className="rounded-md border border-gray-300 dark:border-gray-600" />
            </section>

            {/* Custom List Style */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Custom List Style</h2>
                <p>Use a Unicode or emoji character to create custom list markers.</p>
                <CodeBlock
                    code={`ul {\n  list-style-type: "😍";\n}`}
                />
                <CodeBlock
                    code={`<ul class="ul1">\n  <li>MERN-HUB</li>\n  <li>Web documentation</li>\n</ul>`}
                />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img src={CustomList} alt="Custom list style output" className="rounded-md border border-gray-300 dark:border-gray-600" />
            </section>
        </div>
    );
};

export default CSSListStyles;


//not done