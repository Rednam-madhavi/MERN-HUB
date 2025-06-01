import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import ProjectStructure from '../../assets/nextjs/linking1.png';

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

const LinkingBetweenPagesInNextjs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        To create a new Next.js App, run the following command:
      </p>
      <CodeBlock code={`npx create-next-app GFG`} />

      <p className="text-base leading-relaxed">Navigate to the project folder:</p>
      <CodeBlock code={`cd GFG`} />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <p>Your folder structure will look like this:</p>
        <img
          src={ProjectStructure}
          alt="Next.js Project Structure"
          className="max-w-full max-h-[90vh] rounded-md shadow-lg"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating Pages</h2>
        <p>Create two files named <code>first.js</code> and <code>second.js</code> inside the <code>pages</code> folder.</p>

        <h3 className="text-xl font-semibold">first.js</h3>
        <CodeBlock code={`export default function first() {
  return (
    <div>
      This is the first page.
    </div>
  );
}`} />

        <h3 className="text-xl font-semibold">second.js</h3>
        <CodeBlock code={`export default function second() {
  return (
    <div>
      This is the second page.
    </div>
  );
}`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Linking the Pages</h2>
        <p>Use the <code>Link</code> component from <code>next/link</code> to navigate between pages.</p>

        <h3 className="text-xl font-semibold">index.js</h3>
        <CodeBlock code={`import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>This is Homepage</h1>
      <Link href="/first">
        <a><button>Go to First Page</button></a>
      </Link>
      <br />
      <Link href="/second">
        <a><button>Go to Second Page</button></a>
      </Link>
    </div>
  );
}`} />

        <h3 className="text-xl font-semibold">first.js with Links</h3>
        <CodeBlock code={`import Link from 'next/link';

export default function first() {
  return (
    <div>
      This is the first page.
      <br />
      <Link href="/first">
        <a><button>Go to First Page</button></a>
      </Link>
      <br />
      <Link href="/second">
        <a><button>Go to Second Page</button></a>
      </Link>
    </div>
  );
}`} />

        <h3 className="text-xl font-semibold">second.js with Links</h3>
        <CodeBlock code={`import Link from 'next/link';

export default function second() {
  return (
    <div>
      This is the second page.
      <br />
      <Link href="/first">
        <a><button>Go to First Page</button></a>
      </Link>
      <br />
      <Link href="/second">
        <a><button>Go to Second Page</button></a>
      </Link>
    </div>
  );
}`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Run the Application</h2>
        <p>Start your development server:</p>
        <CodeBlock code={`npm start`} />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Redirects
      </p>
    </div>
  );
};

export default LinkingBetweenPagesInNextjs;
