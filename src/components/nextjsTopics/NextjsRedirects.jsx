import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import redirects from '../../assets/nextjs/redirects.png';

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

const NextjsRedirects = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p>
        Next.js Redirects let you reroute an incoming request path to a different destination. It's useful when an app is under maintenance, or you want to move users to a new page temporarily or permanently.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Setting up Project</h2>
        <CodeBlock code={`mkdir foldername
cd foldername
npx create-next-app project`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img src={redirects} alt="Project Structure" className="rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Run the Project</h2>
        <CodeBlock code={`npm run dev`} />
        <p>Server runs by default at port 3000.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Redirects Syntax</h2>
        <CodeBlock
          code={`module.exports = {
  redirects: async () => [
    {
      source: '/',
      destination: '/',
      permanent: true,
    },
  ],
}`} />
        <p><strong>Parameters:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>source:</strong> Path to match and redirect from.</li>
          <li><strong>destination:</strong> Path to redirect to.</li>
          <li><strong>permanent:</strong> Boolean to determine cache behavior.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example 1: Redirect /home to /contact</h2>
        <CodeBlock
          code={`// pages/contact.js
export default function Contact() {
  return (
    <div>
      <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
      <h3>Contact Details</h3>
      <p>A-143, 9th Floor, Sovereign Corporate Tower,\nSector-136, Noida, UP (201305)\n+91-7838223507</p>
    </div>
  );
}`} />
        <CodeBlock
          code={`module.exports = {
  redirects: async () => [
    {
      source: '/home',
      destination: '/contact',
      permanent: true,
    },
  ],
}`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example 2: Conditional Redirect using has object</h2>
        <CodeBlock
          code={`module.exports = {
  redirects: async () => [
    {
      source: '/home',
      has: [
        {
          type: 'host',
          key: 'localhost',
          value: '',
        },
      ],
      destination: '/contact',
      permanent: false,
    },
  ],
}`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example 3: Redirect from 404 Page</h2>
        <CodeBlock
          code={`// pages/404.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Error() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/contact');
  }, []);

  return null;
}`} />
        <p>If a user reaches a 404 page, they will be redirected to the /contact page automatically.</p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Dynamic Route Segments
      </p>
    </div>
  );
};

export default NextjsRedirects;
