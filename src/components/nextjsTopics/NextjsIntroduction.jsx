import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import confiquration from '../../assets/nextjs/introduction1.png';
import folderstructure from '../../assets/nextjs/introduction2.png';
import output from '../../assets/nextjs/introduction3.png';

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

const NextjsIntroduction = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Next.js is a powerful and flexible React framework for building server-side rendered and static web applications. Created by Vercel, it simplifies modern web development with features like SSR, SSG, and API routes.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Next.js?</h2>
        <p className="text-base">
          Next.js is built on top of React to provide SSR, SSG, and API route support out of the box, streamlining configuration and performance optimization.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">History of Next.js</h2>
        <p className="text-base">
          Created by Vercel (formerly ZEIT), Next.js quickly gained traction for its SSR capabilities. The latest version is 15.2.3, released on March 19, 2025.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does Next.js Work?</h2>
        <ul className="list-disc list-inside text-base">
          <li><strong>SSR</strong>: Generates HTML on each request, ideal for SEO and dynamic content.</li>
          <li><strong>SSG</strong>: Pre-renders HTML at build time, perfect for fast-loading static pages.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features of Next.js</h2>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Server-Side Rendering (SSR)</li>
          <li>Static Site Generation (SSG)</li>
          <li>API Routes</li>
          <li>File-Based Routing</li>
          <li>Automatic Code Splitting</li>
          <li>Hot Module Replacement (HMR)</li>
          <li>Built-In CSS and Sass Support</li>
          <li>Image Optimization</li>
          <li>Streaming Metadata (v15)</li>
          <li>Turbopack Performance Enhancements (v15)</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Steps To Create a Next.js Application</h2>

        <div>
          <h3 className="text-xl font-semibold">Step 1: Install Node.js</h3>
          <p className="text-base">Download it from the official Node.js website.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Step 2: Create a Next.js App</h3>
          <CodeBlock
            code={`npx create-next-app@latest\n#OR\nyarn create next-app\n#OR\npnpm create next-app`}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold">Step 3: Configure Your App</h3>
          <p className="text-base">Set your project name and configuration.</p>
          <img src={confiquration} alt="Next.js Folder Structure" className="rounded shadow max-w-full" />

        </div>

        <div>
          <h3 className="text-xl font-semibold">Project Structure</h3>
          <img src={folderstructure} alt="Next.js Folder Structure" className="rounded shadow max-w-full" />
        </div>

        <div>
          <h3 className="text-xl font-semibold">Example Code</h3>
          <CodeBlock
            code={`// pages/index.js\nexport default function Home() {\n  return (\n    <div>\n      <h1>Hello, World!</h1>\n    </div>\n  );\n}`}
          />
          <img src={output} alt="Next.js Output Screenshot" className="rounded shadow max-w-full mt-4" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next.js Lifecycle</h2>
        <ul className="list-disc list-inside text-base">
          <li><strong>Initialization:</strong> Set up initial state and config.</li>
          <li><strong>Rendering:</strong> Use <code>getStaticProps</code>, <code>getServerSideProps</code>, etc. for data fetching.</li>
          <li><strong>Updating:</strong> Use hooks like <code>useEffect</code> and <code>getStaticPaths</code>.</li>
          <li><strong>Unmounting:</strong> Clean up side effects (e.g., listeners, timers).</li>
        </ul>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Getting Started with Next JS
      </p>
    </div>
  );
};

export default NextjsIntroduction;
