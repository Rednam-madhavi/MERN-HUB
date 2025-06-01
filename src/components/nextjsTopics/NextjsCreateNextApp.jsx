import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import folderstructure from '../../assets/nextjs/create1.png';
import Output from '../../assets/nextjs/create2.png';

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

const NextjsCreateNextApp = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          In <strong>Next.js</strong>, the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">create-next-app</code> command is used to automatically initialize a new NextJS project with the default configuration. It provides a streamlined way to build applications efficiently and quickly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">System Requirements</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>Node.js 12.22.0 or later</li>
          <li>NPM 6.14.4 or later OR Yarn 1.22.10 or later</li>
          <li>macOS, Windows, and Linux are supported</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 1: Check Installation</h2>
        <p className="text-base">Verify Node.js and npm installation:</p>
        <CodeBlock code={`node -v\nnpm -v`} />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 2: Create a New App</h2>
        <p className="text-base">Use the following command to create a Next.js app:</p>
        <CodeBlock code={`npx create-next-app@latest`} />
        <p className="text-base">Using Yarn:</p>
        <CodeBlock code={`yarn create next-app`} />
        <p className="text-base">Using npm:</p>
        <CodeBlock code={`npm create next-app`} />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 3: Create a TypeScript Project</h2>
        <p className="text-base">Add <code>--ts</code> flag to scaffold with TypeScript:</p>
        <CodeBlock
          code={`npx create-next-app@latest --ts\n# or\nyarn create next-app --typescript\n# or\npnpm create next-app --ts`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Step 4: Configure Project</h2>
        <p className="text-base">During setup, you'll be prompted with configuration options:</p>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>Project name</li>
          <li>Use ESLint? (Yes/No)</li>
          <li>Use Tailwind CSS? (Yes/No)</li>
          <li>Use `src/` directory? (Yes/No)</li>
          <li>Use App Router? (Yes/No)</li>
          <li>Customize default import alias (@/*)? (Yes/No)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <img
          src={folderstructure}
          alt="Next.js Project Folder Structure"
          className="max-w-full rounded-md shadow-lg"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Dependencies</h2>
        <CodeBlock
          code={`"dependencies": {
  "react": "^18",
  "react-dom": "^18",
  "next": "14.2.5"
},
"devDependencies": {
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18"
}`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example File</h2>
        <CodeBlock
          code={`// pages/index.tsx
import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome! You are ready to build a Next Js app.</h1>
      </div>
    );
  }
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Running the App</h2>
        <p className="text-base">Start the development server:</p>
        <CodeBlock code={`npm run dev\n# OR\nyarn dev`} />
        <img
          src={Output}
          alt="Next.js App Output"
          className="max-w-full rounded-md shadow-lg"
        />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Deploying your Next.js App
      </p>
    </div>
  );
};

export default NextjsCreateNextApp;
