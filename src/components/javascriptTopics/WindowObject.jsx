import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const WindowObject = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, index) => {
    clipboard.copy(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeSnippets = [
    {
      id: 0,
      title: 'Change Element Text',
      code: `document.getElementById("myElement").innerHTML = "This is my new text";`
    },
    {
      id: 1,
      title: 'Redirect to Another Page',
      code: `window.location.href = "https://www.example.com";`
    },
    {
      id: 2,
      title: 'Alert Dialog Box',
      code: `alert("This is an alert message");`
    }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The JavaScript <code>window</code> object represents the current browser window or tab. It is a global object that provides access to browser-related functions and properties.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        One commonly used property is <code>document</code>, which represents the current web page and allows you to manipulate HTML elements.
      </p>

      <div className="space-y-6">
        {codeSnippets.map((snippet, index) => (
          <div key={snippet.id} className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">{snippet.title}</h2>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                {snippet.code}
              </pre>
              <button
                onClick={() => handleCopy(snippet.code, index)}
                className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {copied === index ? (
                  <CheckIcon className="h-6 w-6 text-green-500" />
                ) : (
                  <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>location</code> property provides URL information and allows redirection. The <code>alert()</code>, <code>confirm()</code>, and <code>prompt()</code> methods show dialog boxes for user interaction.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Additional window object methods include <code>setTimeout()</code>, <code>setInterval()</code>, <code>open()</code>, <code>close()</code>, and <code>scrollTo()</code>.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Understanding the <code>window</code> object is essential for building dynamic, interactive web applications. It acts as the parent object of the <code>document</code> and <code>history</code> objects.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: History Object
      </p>
    </div>
  );
};

export default WindowObject;
