import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import ProjectStructure from '../../assets/nextjs/sass1.png';
import Output from '../../assets/nextjs/sass2.gif';

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

const NextjsStylingSass = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section>
        <p className="text-base leading-relaxed">
          Next.js supports various styling options, including Sass, which allows for advanced styling techniques like variables, nesting, and mixins. Integrating Sass improves maintainability and scalability of your styles.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">What is Sass?</h2>
        <p className="text-base leading-relaxed">
          Sass (Syntactically Awesome Style Sheets) is a preprocessor that extends CSS with powerful features such as variables, nested rules, mixins, and more. It helps you write cleaner and reusable styles.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock code={`npm install --save-dev sass`} />
        <p className="text-base">Create a file with a .scss extension like global.scss to start using Sass in your project.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example Sass Syntax</h2>
        <CodeBlock
          code={`// Navigation bar styles
.navigation {
  background-color: #333;
  padding: 1rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 1rem;

      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Steps to Configure Sass in Next.js</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Create the Next.js app:
            <CodeBlock code={`npx create-next-app@latest gfg`} />
          </li>
          <li>Answer prompts:
            <ul className="list-disc list-inside ml-4">
              <li>TypeScript: No</li>
              <li>ESLint: Yes</li>
              <li>Tailwind CSS: No</li>
              <li>src/ directory: Yes</li>
              <li>App Router: Yes</li>
              <li>Customize import alias: Yes</li>
            </ul>
          </li>
          <li>Navigate to project:
            <CodeBlock code={`cd gfg`} />
          </li>
          <li>Install Sass:
            <CodeBlock code={`npm install --save-dev sass`} />
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img src={ProjectStructure} alt="Sass Project Structure" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example Usage</h2>
        <CodeBlock
          code={`// src/app/page.js
'use client';
import { useRef } from "react";

export default function Home() {
  const box = useRef(null);
  const ChangeColor = (color) => {
    box.current.style.backgroundColor = color;
  };

  return (
    <>
      <h1>GeeksForGeeks | Sass in Next.js</h1>
      <div className="container">
        <div className="box" ref={box}></div>
        <div className="btnGroup">
          <button id="red" onClick={() => ChangeColor('red')}>Red</button>
          <button id="green" className="green" onClick={() => ChangeColor('green')}>Green</button>
          <button id="blue" className="blue" onClick={() => ChangeColor('blue')}>Blue</button>
        </div>
      </div>
    </>
  );
}`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Output</h2>
        <img src={Output} alt="Sass Output" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Integrating Sass in your Next.js project enhances styling flexibility with powerful features. With just a few setup steps, you can begin writing scalable, maintainable styles using SCSS.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        End of Next.js Tutorial
      </p>
    </div>
  );
};

export default NextjsStylingSass;
