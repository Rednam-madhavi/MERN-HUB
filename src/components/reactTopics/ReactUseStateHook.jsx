import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactUseStateHook = () => {
    const clipboard = useClipboard();
    const [copiedText, setCopiedText] = useState(null);

    const handleCopy = (code) => {
        clipboard.copy(code);
        setCopiedText(code);
        setTimeout(() => setCopiedText(null), 2000);
    };

    const CodeBlock = ({ code }) => (
        <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
                {code}
            </pre>
            <button
                onClick={() => handleCopy(code)}
                className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
                {copiedText === code ? (
                    <CheckIcon className="h-6 w-6 text-green-500" />
                ) : (
                    <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
            </button>
        </div>
    );

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                <code>useState</code> is a Hook that lets you add React state to function components.
            </p>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Importing useState</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    To use <code>useState</code>, import it from React like this:
                </p>
                <CodeBlock code={`import { useState } from "react";`} />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Initializing useState</h2>
                <CodeBlock code={`import { useState } from "react";

const App = () => {
    const [name, setName] = useState('');
};`} />
                <p className="text-sm sm:text-base md:text-lg">
                    It returns a state value and a function to update that state.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Reading a State</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Use the state variable like any normal variable:
                </p>
                <CodeBlock code={`const App = () => {
    const [name, setName] = useState('');

    return <h1>My name is {name}</h1>;
};`} />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Updating a State</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Use the setter function to update the state:
                </p>
                <CodeBlock code={`const App = () => {
    const [name, setName] = useState('');
    setName('Lovish');

    return <h1>My name is {name}</h1>;
};`} />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">What Can State Hold?</h2>
                <p className="text-sm sm:text-base md:text-lg">
                    State can hold any data type including strings, numbers, arrays, objects:
                </p>
                <CodeBlock code={`const App = () => {
    const [data, setData] = useState({
        name: 'Lovish',
        age: 21
    });

    return <h1>My name is {data.name} and my age is {data.age}</h1>;
};`} />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Updating Objects and Arrays in State</h2>
                <CodeBlock code={`const App = () => {
  const [data, setData] = useState({
    name: 'lovish',
    age: 21
  });

  return <>
    <h1>My name is {data.name} and my age is {data.age}</h1>
    <button onClick={() => setData({ ...data, name: 'CWH' })}>Click Me</button>
  </>;
};`} />
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Topic: React useEffect Hook
            </p>
        </div>
    );
};

export default ReactUseStateHook;
