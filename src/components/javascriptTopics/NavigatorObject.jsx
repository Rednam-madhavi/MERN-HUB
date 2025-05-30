import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const NavigatorObject = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    {
      label: 'Check if user is using Google Chrome',
      code: `if (navigator.userAgent.indexOf("Chrome") !== -1) {
    console.log("The user is using Google Chrome");
}`,
    },
    {
      label: 'Check if device is offline',
      code: `if (!navigator.onLine) {
    console.log("The device is currently offline");
}`,
    },
    {
      label: 'Get screen width and height',
      code: `console.log(\`The screen width is \${screen.width} pixels and the screen height is \${screen.height} pixels\`);`,
    },
    {
      label: 'Get current geolocation',
      code: `navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
});`,
    },
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">navigator</code> object is part of the browser’s <code>window</code> object and gives access to details about the user’s browser, device, and more. It is especially useful for feature detection, getting geolocation, and handling online/offline states.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">1. Detecting the Browser</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Use the <code>userAgent</code> property to detect the browser type. For example:
          </p>
          <CodeBlock snippet={codeSnippets[0]} index={0} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">2. Checking Online Status</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            The <code>onLine</code> property lets you know if the device is currently connected to the internet.
          </p>
          <CodeBlock snippet={codeSnippets[1]} index={1} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">3. Screen Size Detection</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Use the <code>screen.width</code> and <code>screen.height</code> properties to detect screen dimensions:
          </p>
          <CodeBlock snippet={codeSnippets[2]} index={2} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">4. Accessing Geolocation</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            The <code>geolocation</code> API allows you to access the user’s current location:
          </p>
          <CodeBlock snippet={codeSnippets[3]} index={3} handleCopy={handleCopy} copiedIndex={copiedIndex} />
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <strong>Note:</strong> Not all features are supported in every browser. Always perform feature detection and consider browser compatibility.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Screen Object
      </p>
    </div>
  );
};

const CodeBlock = ({ snippet, index, handleCopy, copiedIndex }) => (
  <div className="relative mt-2">
    <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded border border-gray-300 dark:border-gray-600 overflow-x-auto shadow-md">
      {snippet.code}
    </pre>
    <button
      onClick={() => handleCopy(snippet.code, index)}
      className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {copiedIndex === index ? (
        <CheckIcon className="h-6 w-6 text-green-500" />
      ) : (
        <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  </div>
);

export default NavigatorObject;
