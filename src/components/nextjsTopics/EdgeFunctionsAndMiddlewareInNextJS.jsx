import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import ProjectStructure from '../../assets/nextjs/edgefun1.png';
import Output1 from '../../assets/nextjs/edgefun2-1.png';
import Output2 from '../../assets/nextjs/edgefun2-2.png';
import Output3 from '../../assets/nextjs/edgefun2-3.png';
import Output4 from '../../assets/nextjs/edgefun2-4.png';

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

const EdgeFunctionsAndMiddlewareInNextJS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p>
        Next JS is a React-based full-stack framework developed by Vercel that enables functionalities like pre-rendering of web pages. Unlike traditional React apps where the entire app is loaded on the client, Next.js allows the web page to be rendered on the server, which is great for performance and SEO.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What are Edge Functions?</h2>
        <p>
          Vercel introduced Edge functions to achieve CDN's speed and server-side's flexibility. Edge functions enable developers to run their code at servers distributed globally, providing lower latency and faster response times.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Difference from Serverless Functions</h2>
        <ul className="list-disc list-inside">
          <li>Low Latency: Code is executed near the user's location.</li>
          <li>No Cold Boots: Faster startup compared to traditional serverless functions.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Working with Edge Functions & Middleware</h2>
        <p>
          Middleware is a function that executes before every request made to Next.js. Middleware introduced by Vercel is powered by edge functions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Steps to Create the React Application</h2>
        <CodeBlock code={`npx create-next-app@latest myproject`} />
        <p>The updated dependencies in package.json:</p>
        <CodeBlock
          code={`"dependencies": {
  "next": "^7.0.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img src={ProjectStructure} alt="Project Structure" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example Middleware Protected Route</h2>
        <CodeBlock
          code={`import React from 'react';

const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Run the Application</h2>
        <CodeBlock code={`npm run dev`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Output</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={Output1} alt="Output Screenshot 1" className="rounded-md shadow-md" />
          <img src={Output2} alt="Output Screenshot 2" className="rounded-md shadow-md" />
          <img src={Output3} alt="Output Screenshot 3" className="rounded-md shadow-md" />
          <img src={Output4} alt="Output Screenshot 4" className="rounded-md shadow-md" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>
          Edge functions and middleware in Next.js provide a powerful way to build fast and dynamic applications that run closer to your users. They're great for tasks like authentication, redirects, and other request-level logic.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: How to Reset Next.js Development Cache?
      </p>
    </div>
  );
};

export default EdgeFunctionsAndMiddlewareInNextJS;
