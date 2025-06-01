import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import colorNameExample from '../../assets/css/color1.png';
import hexColorExample from '../../assets/css/color2.png';
import rgbColorExample from '../../assets/css/color3.png';
import rgbaColorExample from '../../assets/css/color4.png';
import hslColorExample from '../../assets/css/color5.png';
import hslaColorExample from '../../assets/css/color6.png';

const CSSColors = () => {
  const [copied, setCopied] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>color</code> property in CSS is used to set the color of text content. It accepts various formats, including color names, hexadecimal values, RGB, RGBA, HSL, and HSLA.
      </p>

      {[{
        id: 1,
        title: 'Color Names',
        code: 'p {\n  color: purple;\n}',
        image: colorNameExample,
        alt: 'Color Names Example'
      }, {
        id: 2,
        title: 'Hexadecimal Colors',
        code: 'h1 {\n  color: #FF0000;\n}\nh2 {\n  color: #00FF00;\n}\nh3 {\n  color: #0000FF;\n}',
        image: hexColorExample,
        alt: 'Hexadecimal Colors Example'
      }, {
        id: 3,
        title: 'RGB Colors',
        code: 'h1 {\n  color: rgb(255, 0, 0);\n}\nh2 {\n  color: rgb(0, 255, 0);\n}\nh3 {\n  color: rgb(0, 0, 255);\n}',
        image: rgbColorExample,
        alt: 'RGB Colors Example'
      }, {
        id: 4,
        title: 'RGBA Colors',
        code: 'h1 {\n  color: rgba(255, 0, 0, 0.5);\n}\nh2 {\n  color: rgba(0, 255, 0, 0.5);\n}\nh3 {\n  color: rgba(0, 0, 255, 0.5);\n}',
        image: rgbaColorExample,
        alt: 'RGBA Colors Example'
      }, {
        id: 5,
        title: 'HSL Colors',
        code: 'h1 {\n  color: hsl(0, 100%, 50%);\n}\nh2 {\n  color: hsl(120, 100%, 50%);\n}\nh3 {\n  color: hsl(240, 100%, 50%);\n}',
        image: hslColorExample,
        alt: 'HSL Colors Example'
      }, {
        id: 6,
        title: 'HSLA Colors',
        code: 'h1 {\n  color: hsla(0, 100%, 50%, 0.5);\n}\nh2 {\n  color: hsla(120, 100%, 50%, 0.5);\n}\nh3 {\n  color: hsla(240, 100%, 50%, 0.5);\n}',
        image: hslaColorExample,
        alt: 'HSLA Colors Example'
      }].map(({ id, title, code, image, alt }) => (
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
            alt={alt}
            className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
          />
        </div>
      ))}
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Backgrounds
      </p>
    </div>
  );
};

export default CSSColors;
