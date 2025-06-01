import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import folderstructure from '../../assets/nextjs/navigate1.png';
import navigateGif from '../../assets/nextjs/navigate2.gif';

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

const NavigateBetweenPagesInNextJS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Navigating between pages in Next.js is smooth and optimized for performance, thanks to its built-in routing capabilities. It uses client-side navigation and dynamic routing to deliver fast transitions and a seamless user experience.
      </p>

      {/* Prerequisites */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Node.js and NPM</li>
          <li>ReactJS</li>
          <li>Next.js</li>
        </ul>
      </section>

      {/* Explanation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Navigation Works in Next.js</h2>
        <p>
          Next.js uses the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;Link&gt;</code> component from <code>next/link</code> to enable client-side navigation. This avoids full page reloads. For programmatic navigation, the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">useRouter</code> hook from <code>next/router</code> is used.
        </p>
      </section>

      {/* Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Steps to Create Next.js Application</h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 1: Create a Next.js App</h3>
          <CodeBlock code={`npx create-next-app my-app`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 2: Navigate to Project Directory</h3>
          <CodeBlock code={`cd my-app`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 3: Project Folder Structure</h3>
          <img
            src={folderstructure}
            alt="Folder Structure"
            className="max-w-full max-h-[80vh] rounded-md shadow-md"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 4: Add Dependencies</h3>
          <CodeBlock
            code={`"dependencies": {
  "bootstrap": "^5.3.3",
  "next": "14.1.3",
  "react": "^18"
}`}
          />
        </div>
      </section>

      {/* Navbar Component */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Navbar Component</h2>
        <p className="text-base">Create a Navbar with links to different pages:</p>
        <CodeBlock
          code={`// components/Navbar.js

import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success bg-opacity-75 text-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/" className="nav-item nav-link text-light" style={{ fontSize: "30px" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-item nav-link text-light" style={{ fontSize: "30px" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-item nav-link text-light" style={{ fontSize: "30px" }}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-item nav-link text-light" style={{ fontSize: "30px" }}>
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`}
        />
      </section>

      {/* Output Preview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Output Preview</h2>
        <img
          src={navigateGif}
          alt="Navigation Preview"
          className="max-w-full rounded-md shadow-md"
        />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: loading.js in Next JS
      </p>
    </div>
  );
};

export default NavigateBetweenPagesInNextJS;
