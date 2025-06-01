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

const HowToResetNextjsDevelopmentCache = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold">How to Reset Next.js Development Cache</h1>
      <p className="text-base leading-relaxed">
        Next.js offers powerful development features like server-side rendering and static generation, but cached data during development can sometimes cause issues. Resetting the cache ensures that your app reflects the latest changes and avoids unexpected behavior.
      </p>

      <section>
        <h2 className="text-xl font-semibold">Why Reset the Cache?</h2>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Outdated Data:</strong> Changes may not reflect due to cached data.</li>
          <li><strong>Build Errors:</strong> Cache corruption can trigger unexpected errors.</li>
          <li><strong>Debugging:</strong> Ensures you're working with a clean state.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Methods to Reset the Cache</h2>

        <div>
          <h3 className="text-lg font-semibold">1. Delete the <code>.next</code> Folder</h3>
          <p>Force a rebuild by deleting the build output and cache folder.</p>
          <CodeBlock code={`rm -rf .next`} />
          <p>Then restart the development server:</p>
          <CodeBlock code={`npm run dev\n# or\nyarn dev`} />
        </div>

        <div>
          <h3 className="text-lg font-semibold">2. Clear Node Modules Cache</h3>
          <p>Remove dependencies and lock files to eliminate module resolution issues.</p>
          <CodeBlock code={`rm -rf node_modules package-lock.json`} />
          <p>Or if using Yarn:</p>
          <CodeBlock code={`rm -rf node_modules yarn.lock`} />
          <p>Reinstall your dependencies:</p>
          <CodeBlock code={`npm install\n# or\nyarn install`} />
        </div>

        <div>
          <h3 className="text-lg font-semibold">3. Use <code>next build --no-cache</code></h3>
          <p>Prevent cache usage during production builds.</p>
          <CodeBlock code={`next build --no-cache`} />
        </div>

        <div>
          <h3 className="text-lg font-semibold">4. Clear Browser Cache</h3>
          <p>Sometimes stale data persists in the browser cache. To clear it:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Open Dev Tools (<code>Ctrl + Shift + I</code>)</li>
            <li>Go to the Network tab</li>
            <li>Check “Disable cache”</li>
            <li>Refresh the page</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">5. Use Environment Variables</h3>
          <p>If environment variables change, restart the dev server:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Update your <code>.env</code> files</li>
            <li>Restart the server to apply changes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">6. Programmatic Cache Clearing</h3>
          <p>Create a script to remove the <code>.next</code> folder:</p>
          <CodeBlock
            code={`// clear-cache.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '.next');
fs.rmSync(dir, { recursive: true, force: true });
console.log('.next folder deleted');`}
          />
          <p>Add it to your <code>package.json</code>:</p>
          <CodeBlock
            code={`{
  "scripts": {
    "clear-cache": "node clear-cache.js"
  }
}`}
          />
          <p>Run it with:</p>
          <CodeBlock code={`npm run clear-cache`} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Clearing the cache in Next.js helps you avoid stale data, debugging pitfalls, and build issues. These methods are easy to implement and help maintain a smooth development workflow.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: How to Add Stylesheet in Next.js?
      </p>
    </div>
  );
};

export default HowToResetNextjsDevelopmentCache;
