import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import boxmodelImage from '../../assets/css/boxmodel.png';
import boxmodelVideo from '../../assets/css/boxmodel.mp4';

const CSSBoxModel = () => {
  const [copied, setCopied] = useState(false);
  const clipboard = useClipboard();

  const codeSnippet = `<head>
  <style>
    p {
      width: 200px;
      height: 300px;
      padding: 15px;
      border: 10px solid red;
      margin: 5px;
    }
  </style>
</head>
<body>
  <p>CodeWithHarry</p>
</body>`;

  const handleCopy = () => {
    clipboard.copy(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-base leading-relaxed">
        The CSS Box model defines how elements are rendered and how their dimensions are calculated. It describes the structure of an element as a rectangular box that has <strong>content</strong>, <strong>padding</strong>, a <strong>border</strong>, and a <strong>margin</strong>.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">1. Content</h2>
        <p>This is the actual content of the element, such as text, images, or videos. It’s defined by width and height.</p>

        <h2 className="text-xl font-semibold">2. Padding</h2>
        <p>The space between the content and the border, controlled using the <code>padding</code> property.</p>

        <h2 className="text-xl font-semibold">3. Border</h2>
        <p>Surrounds the padding and content. Controlled using the <code>border</code> property.</p>

        <h2 className="text-xl font-semibold">4. Margin</h2>
        <p>The space outside the element that separates it from others. Controlled using the <code>margin</code> property.</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Box Model Diagram:</h2>
        <img
          src={boxmodelImage}
          alt="CSS Box Model"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md mx-auto"
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Total Dimensions Calculation</h2>
        <p>
          Total Width = Width + Left/Right Padding + Left/Right Border + Left/Right Margin
        </p>
        <p>
          Total Height = Height + Top/Bottom Padding + Top/Bottom Border + Top/Bottom Margin
        </p>
        <p>
          Example: Total Width = <code>200 + 15 + 15 + 10 + 10 + 5 + 5 = 260px</code>, Total Height = <code>300 + 15 + 15 + 10 + 10 + 5 + 5 = 360px</code>
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Example Code</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{codeSnippet}</pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Playaround Video Tutorial</h2>
        <p>
          To inspect any element and view its box model:
          <ol className="list-decimal list-inside ml-4">
            <li>Right-click and choose <strong>Inspect</strong>.</li>
            <li>Click the arrow icon to select the element.</li>
            <li>Open the Computed Styles tab to view box dimensions.</li>
          </ol>
        </p>
        <video
          src={boxmodelVideo}
          controls
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md mx-auto"
        />
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Padding
      </p>
    </div>
  );
};

export default CSSBoxModel;
