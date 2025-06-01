import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import projectStructure from '../../assets/nextjs/pages1.png';
import output from '../../assets/nextjs/pages2.gif';

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

const NextjsPages = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base md:text-lg">
        The <span className="font-semibold">Next.js Pages</span> are the components used to define routes in the Next application. Next.js uses a file-based routing system that automatically maps files in the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/pages</code> directory to application routes, supporting static, dynamic, and nested routes for seamless web development.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Steps to Create NextJS Application</h2>
        <CodeBlock code={`npx create-next-app gfg\ncd gfg`} />
        <p>Your project folder will look like this:</p>
        <img src={projectStructure} alt="Next.js Project Structure" className="max-w-full rounded-md shadow-lg" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating a Static Page</h2>
        <p>
          To create a static page in Next.js, add a file in the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">pages</code> directory, export a React component, and optionally use <code>getStaticProps</code> for pre-fetching data.
        </p>
        <CodeBlock code={`// pages/gfg.js\n\nexport default function GfgPage() {\n  return <div>Welcome to the GFG Page!</div>;\n}`} />
        <CodeBlock code={`npm run dev`} />
        <img src={output} alt="Static Page Output" className="max-w-full rounded-md shadow-lg" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating Dynamic Pages</h2>
        <p>Next.js supports dynamic routes using bracket notation in filenames.</p>

        <h3 className="text-xl font-semibold">Using useRouter</h3>
        <CodeBlock code={`// pages/route/[gfg].js\nimport React from 'react';\nimport { useRouter } from 'next/router';\n\nexport default function getRoute() {\n  const router = useRouter();\n  return (\n    <div>\n      <h1>GeeksforGeeks</h1>\n      <h2>pathname:- {router.asPath}</h2>\n    </div>\n  );\n}`} />

        <h3 className="text-xl font-semibold">Using usePathname</h3>
        <CodeBlock code={`// pages/route/[gfg].js\nimport { usePathname } from 'next/navigation';\n\nexport default function DynamicPage() {\n  const pathname = usePathname();\n  return <div>Current route: {pathname}</div>;\n}`} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>
          Next.js pages provide a powerful way to define routes and structure for your application. By using static and dynamic routes, as well as API routes, you can build robust and scalable web apps efficiently.
        </p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next JS Layout Component
      </p>
    </div>
  );
};

export default NextjsPages;
