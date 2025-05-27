import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactUseEffectHook = () => {
    const clipboard = useClipboard();
    const [copiedIndex, setCopiedIndex] = useState(null);

    const codeSnippets = [
        {
            title: 'Runs on every render',
            code: `import { useState, useEffect } from "react";
 
function Home() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
 
  return <h1>I have rendered {count} times!</h1>;
}
 
export default Home;`
        },
        {
            title: 'Runs on first render',
            code: `import { useState, useEffect } from "react";
 
function Home() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
 
  return <h1>I have rendered {count} times!</h1>;
}
 
export default Home;`
        },
        {
            title: 'Runs when data changes',
            code: `import { useState, useEffect } from "react";
 
function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');
 
  const handleChange = (e) => {
    setData(e.target.value);
  }
 
  useEffect(() => {
    setCount((count) => count + 1);
  }, [data]);
 
  return (
    <>
      <input onChange={handleChange} value={data} />
      <p>{count}</p>
    </>
  );
}
 
export default Home;`
        }
    ];

    const handleCopy = (index, code) => {
        clipboard.copy(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">useEffect</code> hook allows you to perform side effects in your components.
                It accepts two arguments: the effect function and an optional dependency array.
            </p>

            {codeSnippets.map((snippet, index) => (
                <div key={index} className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-semibold">{snippet.title}</h2>
                    <div className="relative">
                        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                            {snippet.code}
                        </pre>
                        <button
                            onClick={() => handleCopy(index, snippet.code)}
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

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: React useContext
            </p>
        </div>
    );
};

export default ReactUseEffectHook;
