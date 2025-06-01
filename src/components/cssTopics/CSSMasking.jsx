import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import masking from '../../assets/css/masking1.webp';
import output from '../../assets/css/masking2.webp';

const CSSMasking = () => {
  const [copied, setCopied] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const codeExample = `div {
  -webkit-mask-image: url('mask.png');
  mask-image: url('mask.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
}`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Masking in CSS is used to control the visibility of an element using another image or gradient as a mask. It allows you to partially or fully reveal portions of an element based on the mask’s shape and transparency.
      </p>

      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Masking Example</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{codeExample}</pre>
          <button
            onClick={() => handleCopy(codeExample, 1)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 1 ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <h3 className="text-md font-medium">Example:</h3>
        <img
          src={masking}
          alt="CSS Masking Example"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />

        <h3 className="text-md font-medium">Output:</h3>
        <img
          src={output}
          alt="CSS Masking Output"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Common Masking Properties</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li><strong>mask-image</strong> – Defines the image to be used as the mask.</li>
          <li><strong>mask-repeat</strong> – Specifies whether the mask image should be repeated.</li>
          <li><strong>mask-size</strong> – Specifies the size of the mask image.</li>
          <li><strong>mask-position</strong> – Specifies the position of the mask image.</li>
          <li><strong>-webkit-</strong> prefixes are required for better cross-browser support.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Pagination
      </p>
    </div>
  );
};

export default CSSMasking;
