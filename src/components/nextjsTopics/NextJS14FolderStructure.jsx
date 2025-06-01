import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import folderstructure1 from '../../assets/nextjs/folderstructure1.png';
import folderstructure2 from '../../assets/nextjs/folderstructure2.png';

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

const NextJS14FolderStructure = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base">
          Next.js, developed by Vercel, is a robust React framework that continues to evolve with every release. Version 14 introduces enhancements in folder structure, offering a cleaner and more scalable approach to organizing projects.
        </p>
        <p className="text-base font-semibold">Prerequisites:</p>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Basic knowledge of HTML, CSS, JavaScript</li>
          <li>Familiarity with React and npm</li>
          <li>A code editor (such as VS Code)</li>
          <li>Node.js installed locally</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating the Project</h2>
        <p>Run the following commands to initialize your Next.js 14 project:</p>
        <CodeBlock code={`npx create-next-app demonext`} />
        <CodeBlock code={`cd demonext`} />
        <CodeBlock code={`npm install package_name`} />
        <p>Create an environment file to store sensitive information:</p>
        <CodeBlock code={`touch .env`} />
        <p>Ensure the following dependencies exist in <code>package.json</code>:</p>
        <CodeBlock
          code={`"dependencies": {
  "react": "^18",
  "react-dom": "^18",
  "next": "14.2.2"
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Standard Folder Structure</h2>
        <p>The basic project layout includes directories such as:</p>
        <ul className="list-disc list-inside text-base space-y-1">
          <li><code>public</code> – static files like images or icons</li>
          <li><code>src</code> – application source code</li>
          <li><code>styles</code> – global CSS or SCSS files</li>
          <li><code>components</code>, <code>layouts</code>, <code>context</code>, <code>services</code> for app structure</li>
        </ul>
        <img src={folderstructure1} alt="Basic Folder Structure" className="max-w-full rounded-md shadow" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Enhanced Folder Structure</h2>
        <p>For better scalability and maintainability, consider structuring your project as follows:</p>
        <ul className="list-disc list-inside text-base space-y-1">
          <li><strong>components</strong> – reusable UI components</li>
          <li><strong>layouts</strong> – shared layouts like headers/footers</li>
          <li><strong>lib</strong> – helper functions or global utilities</li>
          <li><strong>services</strong> – API or backend communication logic</li>
          <li><strong>utils</strong> – general-purpose utility functions</li>
          <li><strong>assets</strong> – images, fonts, icons</li>
          <li><strong>hooks</strong> – custom React hooks</li>
        </ul>
        <img src={folderstructure2} alt="Enhanced Folder Structure" className="max-w-full rounded-md shadow" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Project Structure Matters</h2>
        <p>
          A well-organized project structure simplifies collaboration, improves code readability, and supports long-term scalability. Clear conventions reduce confusion and promote consistent coding practices.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Group files by functionality, not type</li>
          <li>Use consistent naming conventions</li>
          <li>Keep reusable code modular and isolated</li>
          <li>Document folders and important components where necessary</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>
          Structuring your Next.js application properly sets the foundation for efficient development. It enhances maintainability, supports team collaboration, and ensures that your project can grow without chaos.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Create Next App
      </p>
    </div>
  );
};

export default NextJS14FolderStructure;
