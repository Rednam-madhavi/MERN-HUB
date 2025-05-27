import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactUseRef = () => {
    const clipboard = useClipboard();
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (code, index) => {
        clipboard.copy(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const codeSnippets = [
        {
            title: "Doesn't Cause Re-render",
            code: `import { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [stateValue, setStateValue] = useState("");
  const refValue = useRef("");

  return (
    <>
      <h1>Will cause a re-render:</h1>
      <button onClick={() => { setStateValue(Math.random()) }}>state</button> : {stateValue}
      
      <h1>Will change but won't cause a re-render:</h1>
      <button onClick={() => { refValue.current = Math.random() }}>ref</button> : {refValue.current}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`
        },
        {
            title: "Accessing DOM Elements with ref",
            code: `import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`
        }
    ];

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">useRef</code> hook in React is used to persist values between renders without triggering a re-render.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                It’s useful in two major cases:
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Storing mutable values that don’t trigger a re-render</li>
                    <li>Accessing DOM elements directly</li>
                </ul>
            </p>

            {/* Code Snippet Sections */}
            {codeSnippets.map((snippet, index) => (
                <div key={index} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold">{snippet.title}</h2>
                    <div className="relative">
                        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
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

                    {index === 0 && (
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            In this example, clicking the <strong>state</strong> button will update state and cause a re-render, while clicking the <strong>ref</strong> button updates the value without causing a re-render.
                        </p>
                    )}

                    {index === 1 && (
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Here, we use <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">ref</code> to store a reference to an input field. This lets us call <code className="font-mono">focus()</code> directly on it using the button click.
                        </p>
                    )}
                </div>
            ))}

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Topic: React useReducer
            </p>
        </div>
    );
};

export default ReactUseRef;
