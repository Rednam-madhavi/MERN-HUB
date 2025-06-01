import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import Linear from '../../assets/css/gradients1.webp';
import Radial from '../../assets/css/gradients2.webp';
import CircleRadial from '../../assets/css/gradients3.webp';
import Sizes from '../../assets/css/gradients4.webp';
import DifferentSizes from '../../assets/css/gradients5.webp';
import Conic from '../../assets/css/gradients6.webp';

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

const CSSGradients = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">
            <p className="text-base md:text-lg leading-relaxed">
                CSS provides the styling of background color with gradients. You can blend as many colors to create gradients.
            </p>

            {/* Linear Gradient */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Linear Gradient</h2>
                <p>
                    The gradient goes from top to bottom, and from left to right. To implement this gradient you need at least two color stops (could be more too).
                </p>
                <p className="font-medium">Eg:</p>
                <CodeBlock code={`background-image: linear-gradient(100deg, blue, orange, red);`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img
                    src={Linear}
                    alt="Linear Gradient"
                    className="rounded-md shadow-md w-full sm:w-3/4 lg:w-1/2"
                />
                <p>
                    The degree controls the angle of the gradient, and by using comma-separated values you can add multiple colors for the background.
                </p>
                <p>
                    <strong>Note:</strong> You can also use <code>repeating-linear-gradient</code> to keep repeating the background for the whole screen.
                </p>
            </section>

            {/* Radial Gradient */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Radial Gradient</h2>
                <p>
                    The gradient here is added from the center focal point. The color added first marks the center of the gradient and keeps expanding circularly.
                </p>
                <p className="font-medium">Eg:</p>
                <CodeBlock code={`background-image: radial-gradient(blue, orange, red);`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img
                    src={Radial}
                    alt="Radial Gradient"
                    className="rounded-md shadow-md w-full sm:w-3/4 lg:w-1/2"
                />
                <p>
                    This is the default output but you can regulate the amount of each color by adding a percentage with the colors, like <code>radial-gradient(blue 20%, orange, red);</code>
                </p>
                <p>
                    The default shape of the gradient is an ellipse, but you can set it to circle too. Just add a circle ahead of the colors, separated by a comma.
                </p>

                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img
                    src={CircleRadial}
                    alt="Circle Radial Gradient"
                    className="rounded-md shadow-md w-full sm:w-3/4 lg:w-1/2"
                />
            </section>

            {/* Radial Sizes */}
            <section className="space-y-4">
                <p>
                    To use different sizes of the gradient we use the following properties:
                </p>
                <img
                    src={Sizes}
                    alt="Radial Gradient Sizes"
                    className="rounded-md shadow-md w-full sm:w-3/4 lg:w-1/2"
                />

                <h2 className="text-lg font-semibold">Output:</h2>
                <img
                    src={DifferentSizes}
                    alt="Different Sizes Gradient"
                    className="rounded-md shadow-md w-full sm:w-3/4 lg:w-1/2"
                />
            </section>

            {/* Conic Gradient */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Conic Gradient</h2>
                <p>
                    The color gradient rotates around a specific point in the form of a cone. By default, the degree of the cone is taken as zero and starts from the center.
                </p>
                <p className="font-medium">Eg:</p>
                <CodeBlock code={`background-image: conic-gradient(blue, orange, red);`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <img
                    src={Conic}
                    alt="Conic Gradient"
                    className="rounded-md shadow-md w-full sm:w-3/4 lg:w-1/2"
                />
            </section>
            <p className="text-center text-base mt-10 font-medium">
                Next Chapter: CSS Inherit
            </p>
        </div>
    );
};

export default CSSGradients;
