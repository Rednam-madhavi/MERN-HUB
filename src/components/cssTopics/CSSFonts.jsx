import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

// Importing images for visual examples
import fontColorImg from '../../assets/css/font1.png';
import fontSizeImg from '../../assets/css/font2.png';
import fontStyleImg from '../../assets/css/font3.png';
import fontVariantImg from '../../assets/css/font4.png';
import fontWeightImg from '../../assets/css/font5.png';
import fontFamilyImg from '../../assets/css/font6.mp4';

const CSSFonts = () => {
  const [copied, setCopied] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const CodeBlock = ({ code, id }) => (
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
  );

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Fonts play a crucial role in making your page visually appealing. They determine how text appears on the screen, and different kinds of fonts are used depending on the website's design.
      </p>

      {[
        {
          title: 'Font Color',
          description: 'The color property defines the color of the text.',
          code: 'selector {\n  color: red;\n}',
          image: fontColorImg
        },
        {
          title: 'Font Size',
          description: 'The font-size property sets the size of the fonts. Common units include px, em, rem, and %.',
          code: 'p {\n  font-size: 16px;\n}',
          image: fontSizeImg
        },
        {
          title: 'Font Style',
          description: 'The font-style property sets the style of the font. Values include normal, italic, and oblique.',
          code: 'p {\n  font-style: italic;\n}',
          image: fontStyleImg
        },
        {
          title: 'Font Variant',
          description: 'The font-variant property allows you to display text in small-caps.',
          code: 'p {\n  font-variant: small-caps;\n}',
          image: fontVariantImg
        },
        {
          title: 'Font Weight',
          description: 'The font-weight property controls the thickness or boldness of the text.',
          code: 'p {\n  font-weight: bold;\n}',
          image: fontWeightImg
        },
        {
          title: 'Font Family',
          description: 'The font-family property specifies the font for an element. You can list multiple fonts as a fallback system.',
          code: "p {\n  font-family: 'Courier New', Courier, monospace;\n}",
          image: fontFamilyImg
        }
      ].map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">{section.title}</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">{section.description}</p>
          <CodeBlock code={section.code} id={index + 1} />
          <img
            src={section.image}
            alt={`${section.title} Example`}
            className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
          />
        </div>
      ))}
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Text Styling
      </p>
    </div>
  );
};

export default CSSFonts;
