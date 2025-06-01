import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

// Image imports
import flex1 from '../../assets/css/flex1.webp';
import flex2 from '../../assets/css/flex2.webp';
import flex3 from '../../assets/css/flex3.webp';
import flex4 from '../../assets/css/flex4.webp';
import flex5 from '../../assets/css/flex5.webp';
import flex6 from '../../assets/css/flex6.webp';
import flex7 from '../../assets/css/flex7.webp';
import flex8 from '../../assets/css/flex8.webp';

const CSSFlexBox = () => {
  const [copied, setCopied] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const sections = [
    {
      id: 1,
      title: 'Flex Direction',
      code: `.flex-container {\n  display: flex;\n  flex-direction: row;\n}`,
      image: flex1,
      output: flex2,
    },
    {
      id: 2,
      title: 'Flex Wrap',
      code: `.flex-container {\n  display: flex;\n  flex-direction: row;\n  background-color: yellowgreen;\n  flex-wrap: wrap;\n}`,
      image: flex3,
    },
    {
      id: 3,
      title: 'Justify Content',
      code: `.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}`,
      image: flex4,
    },
    {
      id: 4,
      title: 'Align Items',
      code: `.flex-container {\n  display: flex;\n  height: 200px;\n  align-items: center;\n}`,
      image: flex5,
    },
    {
      id: 5,
      title: 'Align Content',
      code: `.flex-container {\n  display: flex;\n  height: 200px;\n  align-content: center;\n}`,
      image: flex6,
    },
    {
      id: 6,
      title: 'Order',
      code: `<div style="order: 4;">1</div>\n<div style="order: 3;">2</div>\n<div style="order: 1;">3</div>\n<div style="order: 5;">4</div>\n<div style="order: 2;">5</div>`,
      image: flex7,
    },
    {
      id: 7,
      title: 'Flex Grow & Shrink',
      code: `<div>1</div>\n<div>2</div>\n<div style="flex-grow: 3;">3</div>\n<div>4</div>\n<div>5</div>`,
      image: flex8,
    },
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 py-6 space-y-12 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Flexbox (Flexible Box Layout) is a layout model that allows responsive alignment and distribution of elements inside a container. To begin using Flexbox, you set the container’s display to <code className="bg-gray-200 px-1 rounded">flex</code>.
      </p>

      {sections.map(({ id, title, code, image, output }) => (
        <div key={id} className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
          <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
            <pre>{code}</pre>
            <button
              onClick={() => handleCopy(code, id)}
              className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
            >
              {copied === id ? (
                <CheckIcon className="w-5 h-5 text-green-500" />
              ) : (
                <ClipboardIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          <h3 className="text-md font-medium">Example:</h3>
          <img
            src={image}
            alt={`${title} Example`}
            className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
          />
          {output && (
            <>
              <h3 className="text-md font-medium">Output:</h3>
              <img
                src={output}
                alt={`${title} Output`}
                className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
              />
            </>
          )}
        </div>
      ))}

      <div className="pt-6 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">More Flex Properties</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li><strong>flex-flow</strong>: Shorthand for flex-direction and flex-wrap.</li>
          <li><strong>justify-content</strong>: Aligns items along the main axis.</li>
          <li><strong>align-items</strong>: Aligns items along the cross axis.</li>
          <li><strong>align-content</strong>: Aligns multi-line content along the cross axis.</li>
          <li><strong>align-self</strong>: Overrides alignment for individual items.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Grid
      </p>
    </div>
  );
};

export default CSSFlexBox;
