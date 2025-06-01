import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

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

const GettingStartedWithNextJS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Next.js is an open-source React framework for building full-stack web applications, created and maintained by Vercel. It offers features like server-side rendering, static site generation, and a powerful routing system.
      </p>

      {/* Create Your First Next.js App */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Create Your First Next.js App</h2>
        <p className="text-base">To create a new Next.js application, run the following command:</p>
        <CodeBlock code={`npx create-next-app my-next-app`} />
        <p className="text-base">Follow the prompts to set up your project. Then, navigate into your app directory and start the development server:</p>
        <CodeBlock code={`cd my-next-app\nnpm run dev`} />
        <p className="text-base">Open your browser and visit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">http://localhost:3000</code> to see your Next.js app running.</p>
      </section>

      {/* Next.js Scripts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next.js Scripts</h2>
        <p className="text-base">Next.js provides several scripts to manage your application:</p>
        <CodeBlock
          code={`"scripts": {\n  "dev": "next dev",\n  "build": "next build",\n  "start": "next start",\n  "export": "next export",\n  "lint": "next lint"\n}`}
        />
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>dev:</strong> Starts the development server.</li>
          <li><strong>build:</strong> Builds the production-ready application.</li>
          <li><strong>start:</strong> Starts the production server after building.</li>
          <li><strong>export:</strong> Exports the application as a static site.</li>
          <li><strong>lint:</strong> Runs linting checks on your project files using ESLint.</li>
        </ul>
      </section>

      {/* Add TypeScript to Next.js */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Add TypeScript to Next.js</h2>
        <p className="text-base">To add TypeScript to your Next.js app:</p>
        <CodeBlock code={`npm install --save-dev typescript @types/react @types/node`} />
        <p className="text-base">Rename your <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.js</code> files to <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.tsx</code> or <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.ts</code>. Next.js will automatically detect TypeScript and provide type-checking support.</p>
      </section>

      {/* Creating a Simple Page */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating a Simple Page</h2>
        <p className="text-base">This example creates a basic page that displays "Hello, World!".</p>
        <CodeBlock
          code={`// pages/index.js\nimport React from "react";\n\nexport default function Home() {\n  return (\n    <div>\n      <h1>Hello, World!</h1>\n    </div>\n  );\n}`}
        />
      </section>

      {/* Pages and Routes in Next.js */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Pages and Routes in Next.js</h2>
        <p className="text-base">Next.js uses a file-based routing system:</p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">pages/index.js</code> corresponds to the homepage (<code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/</code>).</li>
          <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">pages/about.js</code> corresponds to the about page (<code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/about</code>).</li>
        </ul>
        <p className="text-base">Use nested folders to define routes and a <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">page.js</code> file to make it publicly accessible.</p>
      </section>

      {/* Links and Navigation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Links and Navigation</h2>
        <p className="text-base">Next.js provides two primary methods for linking and navigating between routes:</p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>Using the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;Link&gt;</code> component:</strong> Provides prefetching and client-side navigation.</li>
          <li><strong>Using the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">useRouter</code> hook:</strong> Allows programmatic route changes in client components.</li>
        </ul>
        <CodeBlock
          code={`// pages/index.js\nimport Link from "next/link";\n\nconst HomePage = () => (\n  <div>\n    <Link href="/about">\n      <a>About Page</a>\n    </Link>\n  </div>\n);\n\nexport default HomePage;`}
        />
      </section>

      {/* Data Fetching with getStaticProps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Data Fetching with getStaticProps</h2>
        <p className="text-base">This example fetches a list of posts from an API and displays them on the page:</p>
        <CodeBlock
          code={`// pages/posts.js\nimport React from "react";\n\nexport async function getStaticProps() {\n  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");\n  const data = await response.json();\n\n  return {\n    props: {\n      posts: data,\n    },\n  };\n}\n\nexport default function Posts({ posts }) {\n  return (\n    <div>\n      <h1>List of Posts</h1>\n      <ul>\n        {posts.map((post) => (\n          <li key={post.id}>{post.title}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}`}
        />
      </section>

      {/* Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p className="text-base">Next.js offers a robust framework for building React applications with features like server-side rendering, static site generation, and a powerful routing system. Explore the official Next.js documentation for more advanced topics and updates.</p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Installation
      </p>
    </div>
  );
};

export default GettingStartedWithNextJS;
