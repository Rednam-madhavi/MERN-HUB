import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import createNextApp from '../../assets/nextjs/loading1.png';
import folderStructure from '../../assets/nextjs/loading2.png';

const CodeBlock = ({ code }) => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 flex items-center gap-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-2 py-1 rounded text-xs"
      >
        {copied ? (
          <>
            <CheckIcon className="h-4 w-4" /> Copied
          </>
        ) : (
          <>
            <ClipboardIcon className="h-4 w-4" /> Copy
          </>
        )}
      </button>
    </div>
  );
};

const LoadingjsInNextJS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          Next.js is a powerful React framework. One of its built-in features is <code className="bg-gray-100 px-2 py-1 rounded">loading.js</code>, which enables you to show a loading UI while your pages or routes are being fetched.
        </p>
        <p className="text-base leading-relaxed">
          <strong>Why use it?</strong> Without a loading UI, users might think your app is unresponsive. Adding loading indicators significantly improves user experience.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>JavaScript/TypeScript</li>
          <li>ReactJS Basics</li>
          <li>Next.js Fundamentals</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating a Next.js App</h2>
        <p>Run the following command to create a new Next.js project:</p>
        <CodeBlock code={`npx create-next-app@latest`} />
        <img src={createNextApp} alt="Create Next App CLI" className="rounded-md shadow-md max-w-full max-h-[80vh]" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Start Development Server</h2>
        <CodeBlock code={`npm run dev`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <p>Typical file structure of a Next.js app:</p>
        <img src={folderStructure} alt="Folder Structure" className="rounded-md shadow-md max-w-full max-h-[80vh]" />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Basic Syntax</h2>
        <p>Create a file named <code className="bg-gray-100 px-2 py-1 rounded">loading.js</code> inside any route folder.</p>
        <CodeBlock code={`// app/loading.js
export default function Loader() {
  return <>Your code</>;
}`} />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example 1: Static Loading Text</h2>
        <CodeBlock code={`// src/app/loading.js
export default function Loader() {
  return <p className="p-5 text-sm">Loading the page...</p>;
}`} />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example 2: Fetch with Dynamic Loading</h2>
        <CodeBlock code={`// src/app/loading.js
export default function Loader() {
  return (
    <div className="p-5">
      <h1 className="text-green-500 text-3xl font-bold">GeeksforGeeks</h1>
      <h4 className="font-bold">loading.js in Next.js</h4>
      <p className="animate-pulse">Loading the user...</p>
    </div>
  );
}`} />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Linking between pages in Next.js
      </p>
    </div>
  );
};

export default LoadingjsInNextJS;
