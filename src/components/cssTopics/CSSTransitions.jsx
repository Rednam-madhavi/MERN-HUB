import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import example from '../../assets/css/transition1.webp';
import output from '../../assets/css/transition2.gif';

const CSSTransitions = () => {
    const [copied, setCopied] = useState(false);
    const clipboard = useClipboard();

    const codeExample = `div {\n  transition: all 2s ease;\n}\n\ndiv:hover {\n  transform: scale(1.1);\n}`;

    const handleCopy = () => {
        clipboard.copy(codeExample);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                CSS transitions enable smooth animation when CSS property values change. When a user hovers or interacts with an element, transitions can visually show those changes over a specified duration.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                You can apply transitions to all properties or just specific ones like <code>width</code>, <code>background-color</code>, etc. Here’s a basic example using <code>transition: all</code>.
            </p>

            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Example:</h2>
                <img
                    src={example}
                    alt="CSS Transition Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img
                    src={output}
                    alt="CSS Transition Output"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            <div className="text-sm sm:text-base md:text-lg leading-relaxed">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    In this example, I have added the transition to all the properties in hover. But you can choose to apply the effect on a particular property too, like this:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md mt-2 font-mono">
                    transition: width 3s;
                </pre>
            </div>
        </div>
    );
};

export default CSSTransitions;
