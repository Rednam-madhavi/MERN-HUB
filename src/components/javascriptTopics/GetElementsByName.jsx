import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

// --- CopyableCodeBlock inserted here ---
const CopyableCodeBlock = ({ code }) => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded border border-gray-300 dark:border-gray-600 overflow-x-auto shadow">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {copied ? (
          <CheckIcon className="h-6 w-6 text-green-500" />
        ) : (
          <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
};
// --- End of CopyableCodeBlock ---

const GetElementsByName = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The <code>getElementsByName()</code> method is part of the JavaScript <code>document</code> object. It allows developers to access multiple elements on a web page using their <code>name</code> attribute. This method returns a live <code>HTMLCollection</code> of all matching elements, or an empty collection if none are found.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Example HTML</h2>
        <CopyableCodeBlock
          code={`<input type="text" name="myName" value="">
<input type="text" name="myName" value="">
<input type="text" name="myName" value="">`}
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Example JavaScript</h2>
        <CopyableCodeBlock
          code={`let elements = document.getElementsByName("myName");
for (let i = 0; i < elements.length; i++) {
    elements[i].value = "This is my new value";
}`}
        />
      </div>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The method is particularly helpful when grouping form elements like radio buttons or checkboxes. Since the returned collection is live, it updates automatically as the DOM changes. Also, this method is case-sensitive—<code>"myName"</code> and <code>"myname"</code> are different.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Understanding <code>getElementsByName()</code> is essential for dynamic DOM manipulation, especially in form-heavy web applications.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: GetElementsByTagName
      </p>
    </div>
  );
};

export default GetElementsByName;
