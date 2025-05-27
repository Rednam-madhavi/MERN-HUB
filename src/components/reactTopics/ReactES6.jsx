import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactES6 = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    {
      title: 'Arrow Functions',
      code: `const hello = () => {
  return "Hello World!";
}

// or

const hello = () => "Hello World!";`
    },
    {
      title: '.map() Usage',
      code: `const data = ['title1', 'title2', 'title3'];
let cards = data.map((item) => <card>{item}</card>);`
    },
    {
      title: 'Destructuring - Old Way',
      code: `const languages = ['JS', 'Python', 'Java'];
const js = languages[0];
const python = languages[1];
const java = languages[2];`
    },
    {
      title: 'Destructuring - New Way',
      code: `const languages = ['JS', 'Python', 'Java'];
const [js, python, java] = languages;`
    },
    {
      title: 'Ternary Operator',
      code: `let loading = false;
const data = loading ? <div>Loading...</div> : <div>Data</div>;`
    },
    {
      title: 'Spread Operator',
      code: `const languages = ['JS', 'Python', 'Java'];
const morelanguages = ['C', 'C++', 'C#'];

const allLanguages = [...languages, ...morelanguages];

// Output:
// ["JS", "Python", "Java", "C", "C++", "C#"]`
    }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        Introduction to ES6 in React
      </h1>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        ES6 stands for <strong>ECMAScript 6</strong>. It is a modern standard of JavaScript that ensures consistent behavior across different browsers.
        React uses ES6 features extensively to make coding easier and more expressive.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Why ES6?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        With ES6, you'll write cleaner code with fewer lines. Here are some of the key features React developers use:
      </p>

      {codeSnippets.map((snippet, index) => (
        <div key={index} className="space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold">{snippet.title}</h3>
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
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
        </div>
      ))}

      <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6">
        ES6 also introduces other important concepts such as <strong>classes</strong> and <strong>modules</strong> which are used extensively in large React applications.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Up Next: JSX and Component Basics
      </p>
    </div>
  );
};

export default ReactES6;
