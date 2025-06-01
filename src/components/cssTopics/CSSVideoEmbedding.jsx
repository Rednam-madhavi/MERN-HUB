import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import videoembedding from '../../assets/css/videoembedding.png';

const CSSVideoEmbedding = () => {
  const [copied, setCopied] = useState(null);
  const clipboard = useClipboard();

  const handleCopy = (code, id) => {
    clipboard.copy(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const htmlCode = `<body>
  <video controls>
    <source src="./Sigma Web Development Course.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</body>`;

  const cssCode = `video {
  width: 500px;
  height: 200px;
}`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        CSS helps to customize the visual effects of video elements. If you're not familiar with videos, check out the HTML Video tutorial first.
      </p>

      {/* HTML Example */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">HTML Code</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{htmlCode}</pre>
          <button
            onClick={() => handleCopy(htmlCode, 1)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 1 ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* CSS Code */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">CSS Code</h2>
        <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
          <pre>{cssCode}</pre>
          <button
            onClick={() => handleCopy(cssCode, 2)}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
          >
            {copied === 2 ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Output Image */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Output</h2>
        <img
          src={videoembedding}
          alt="Video embedding preview"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Fonts
      </p>
    </div>
  );
};

export default CSSVideoEmbedding;
