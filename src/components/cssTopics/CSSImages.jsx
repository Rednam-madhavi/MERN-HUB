import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import image1 from '../../assets/css/image1.png';
import image2 from '../../assets/css/image2.png';
import image3 from '../../assets/css/image3.png';
import image4 from '../../assets/css/image4.png';
import image5 from '../../assets/css/image5.png';
import image6 from '../../assets/css/image6.png';
import image7 from '../../assets/css/image7.png';
import image8 from '../../assets/css/image8.png';
import image9 from '../../assets/css/image9.png';
import image10 from '../../assets/css/image10.png';
import image11 from '../../assets/css/image11.png';
import image12 from '../../assets/css/image12.png';

const imageExamples = [
  {
    title: 'Basic Image Syntax',
    code: '<img src="image.jpg" alt="Description">',
    image: image1,
  },
  {
    title: 'Set Width and Height (HTML)',
    code: '<img src="image.jpg" width="400" height="300" alt="Description">',
    image: image2,
  },
  {
    title: 'Set Width and Height (CSS)',
    code: 'img {\n  width: 400px;\n  height: 300px;\n}',
    image: image3,
  },
  {
    title: 'Border Radius',
    code: 'img {\n  border-radius: 15px;\n}',
    image: image4,
  },
  {
    title: 'Responsive Image',
    code: 'img {\n  max-width: 100%;\n  height: auto;\n}',
    image: image5,
  },
  {
    title: 'Opacity',
    code: 'img {\n  opacity: 0.5;\n}',
    image: image6,
  },
  {
    title: 'Grayscale Filter',
    code: 'img {\n  filter: grayscale(100%);\n}',
    image: image7,
  },
  {
    title: 'Blur Filter',
    code: 'img {\n  filter: blur(4px);\n}',
    image: image8,
  },
  {
    title: 'Brightness Filter',
    code: 'img {\n  filter: brightness(150%);\n}',
    image: image9,
  },
  {
    title: 'Hover Zoom Effect',
    code: 'img:hover {\n  transform: scale(1.1);\n  transition: transform 0.3s ease;\n}',
    image: image10,
  },
  {
    title: 'Box Shadow on Image',
    code: 'img {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}',
    image: image11,
  },
  {
    title: 'Rounded Full Circle Image',
    code: 'img {\n  border-radius: 50%;\n}',
    image: image12,
  },
];

const CSSImages = () => {
  const [copiedId, setCopiedId] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Images are a vital part of modern web design. Below are examples of how you can use CSS to style images effectively.
      </p>

      {imageExamples.map((item, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
          <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
            <pre>{item.code}</pre>
            <button
              onClick={() => handleCopy(item.code, index)}
              className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
            >
              {copiedId === index ? (
                <CheckIcon className="w-5 h-5 text-green-500" />
              ) : (
                <ClipboardIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
          />
        </div>
      ))}
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Video Embedding
      </p>
    </div>
  );
};

export default CSSImages;
