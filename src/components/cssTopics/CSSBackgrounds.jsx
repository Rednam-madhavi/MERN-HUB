import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import bgColorImage from '../../assets/css/background1.png';
import bgImage from '../../assets/css/background2.png';
import bgRepeatImage from '../../assets/css/background3.png';
import bgSizeImage from '../../assets/css/background4.png';
import bgPositionImage from '../../assets/css/background5.png';
import bgAttachmentImage from '../../assets/css/background6.png';
import bgShorthandImage from '../../assets/css/background7.png';
import bgMultipleImage from '../../assets/css/background8.png';
import bgBlendImage from '../../assets/css/background9.png';
import bgOriginImage from '../../assets/css/background10.png';
import bgClipImage from '../../assets/css/background11.png';

const CSSBackgrounds = () => {
  const [copied, setCopied] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const examples = [
    {
      id: 1,
      title: 'Background Color',
      code: `div {\n  background-color: yellow;\n}`,
      image: bgColorImage
    },
    {
      id: 2,
      title: 'Background Image',
      code: `div {\n  background-image: url('image.png');\n}`,
      image: bgImage
    },
    {
      id: 3,
      title: 'Background Repeat',
      code: `div {\n  background-repeat: no-repeat;\n}`,
      image: bgRepeatImage
    },
    {
      id: 4,
      title: 'Background Size',
      code: `div {\n  background-size: cover;\n}`,
      image: bgSizeImage
    },
    {
      id: 5,
      title: 'Background Position',
      code: `div {\n  background-position: top right;\n}`,
      image: bgPositionImage
    },
    {
      id: 6,
      title: 'Background Attachment',
      code: `div {\n  background-attachment: fixed;\n}`,
      image: bgAttachmentImage
    },
    {
      id: 7,
      title: 'Background Shorthand',
      code: `div {\n  background: purple fixed url("image.png") no-repeat right top;\n}`,
      image: bgShorthandImage
    },
    {
      id: 8,
      title: 'Multiple Backgrounds',
      code: `div {\n  background: url(a.png), url(b.png);\n}`,
      image: bgMultipleImage
    },
    {
      id: 9,
      title: 'Background Blend Mode',
      code: `div {\n  background-blend-mode: multiply;\n}`,
      image: bgBlendImage
    },
    {
      id: 10,
      title: 'Background Origin',
      code: `div {\n  background-origin: content-box;\n}`,
      image: bgOriginImage
    },
    {
      id: 11,
      title: 'Background Clip',
      code: `div {\n  background-clip: text;\n}`,
      image: bgClipImage
    }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The CSS <code>background</code> properties control the background styling of elements, allowing for color, images, blend modes, origins, and more.
      </p>

      {examples.map(({ id, title, code, image }) => (
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
          <h3 className="text-md font-medium">Output:</h3>
          <img
            src={image}
            alt={`${title} Example`}
            className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
          />
        </div>
      ))}
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Borders
      </p>
    </div>
  );
};

export default CSSBackgrounds;
