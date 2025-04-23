import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const SvgInHtml = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (codeSnippet, type) => {
        clipboard.copy(codeSnippet);
        setCopied((prev) => ({ ...prev, [type]: true }));
        setTimeout(() => {
            setCopied((prev) => ({ ...prev, [type]: false }));
        }, 2000);
    };

    const inlineSvg = `<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`;

    const imgTag = `<img src="image.svg" alt="Sample SVG">`;

    const cssBackground = `.background {
  background-image: url('image.svg');
}`;

    const rectangleExample = `<svg height="30" width="30">
  <rect width="30" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
</svg>`;

    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 text-gray-800 dark:text-gray-100 space-y-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Scalable Vector Graphics (SVG) have become an indispensable part of modern web development. SVGs enable developers to create high-quality, scalable graphics that look crisp at any size or resolution.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold">What is SVG?</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                SVG stands for Scalable Vector Graphics. Unlike raster images like PNG or JPG, SVGs are vector-based and can be resized without losing quality.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold">Why Use SVG?</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base md:text-lg leading-relaxed">
                <li><strong>Scalability</strong>: Perfect for responsive web design.</li>
                <li><strong>File Size</strong>: Typically smaller than raster images for simple designs.</li>
                <li><strong>Flexibility</strong>: Can be styled and animated using CSS/JavaScript.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold">How to Embed SVG in HTML</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">You can embed SVG in three main ways:</p>

            <h3 className="text-lg font-semibold mt-4">1. Inline SVG</h3>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-4 rounded">
                <code className="text-sm whitespace-pre-wrap">{inlineSvg}</code>
                <button
                    onClick={() => handleCopy(inlineSvg, 'inlineSvg')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copied.inlineSvg ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                </button>
            </div>

            <h3 className="text-lg font-semibold mt-4">2. Using <code className="text-sm">&lt;img&gt;</code> Tag</h3>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-4 rounded">
                <code className="text-sm">{imgTag}</code>
                <button
                    onClick={() => handleCopy(imgTag, 'imgTag')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copied.imgTag ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                </button>
            </div>

            <h3 className="text-lg font-semibold mt-4">3. CSS Background</h3>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-4 rounded">
                <code className="text-sm whitespace-pre-wrap">{cssBackground}</code>
                <button
                    onClick={() => handleCopy(cssBackground, 'cssBackground')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copied.cssBackground ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold">SVG Attributes</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base md:text-lg leading-relaxed">
                <li><strong>width</strong> and <strong>height</strong>: Set dimensions.</li>
                <li><strong>viewBox</strong>: Define coordinate system.</li>
                <li><strong>fill</strong> and <strong>stroke</strong>: Control colors.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold">Practical Examples</h2>
            <h3 className="text-lg font-semibold mt-2">Simple Icon</h3>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-4 rounded">
                <code className="text-sm whitespace-pre-wrap">{rectangleExample}</code>
                <button
                    onClick={() => handleCopy(rectangleExample, 'rectangle')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {copied.rectangle ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                </button>
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                SVG can also create complex shapes like polygons, lines, and text.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                SVG is a powerful tool for adding scalable and interactive graphics to your HTML documents. Its compatibility with CSS and JavaScript makes it a top choice for modern web development.
            </p>
        </div>
    );
};

export default SvgInHtml;
