import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import debug1 from '../../assets/express/debug1.png';
import debug2 from '../../assets/express/debug2.png';

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

const EnableDebuggingInExpressApp = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-base leading-relaxed">
        Express has a built-in module called <strong>DEBUG</strong> that provides useful logging information during development. It helps track middleware behavior, application mode, request/response details, and more.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Enable Debugging</h2>
        <p>To enable debugging, set the <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">DEBUG</code> environment variable:</p>
        <CodeBlock code={`DEBUG=express:* node index.js`} />
        <p>This command enables logging for all parts of the Express app.</p>
        <img src={debug1} alt="Debug Output Example 1" className="rounded shadow-md max-w-full" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Filter Logs by Namespace</h2>
        <p>If you only want to see specific logs, like those from the router:</p>
        <CodeBlock code={`DEBUG=express:router node index.js`} />
        <p>For application-specific logs:</p>
        <CodeBlock code={`DEBUG=express:application node index.js`} />
        <p>To combine multiple namespaces:</p>
        <CodeBlock code={`DEBUG=express:application,express:router node index.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Enable Debugging on Windows</h2>
        <p>On Windows, modify the <code>package.json</code> script as follows:</p>
        <CodeBlock
          code={`"scripts": {
  "start": "set DEBUG=express:* & node index.js"
}`}
        />
        <p>Then run:</p>
        <CodeBlock code={`npm start`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Using Multiple Debug Namespaces</h2>
        <p>You can debug multiple modules by separating them with commas:</p>
        <CodeBlock code={`DEBUG=mail,express:* node index.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Environment Variable Options</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>DEBUG:</strong> Set the namespaces to enable logs.</li>
          <li><strong>DEBUG_COLORS:</strong> Set <code>1</code> to enable colors, <code>0</code> for plain text.</li>
          <li><strong>DEBUG_HIDE_DATE:</strong> Hides the timestamp from logs.</li>
          <li><strong>DEBUG_SHOW_HIDDEN:</strong> Shows hidden properties of inspected objects.</li>
        </ul>
        <p>Example to disable colored output:</p>
        <CodeBlock code={`DEBUG=express:* DEBUG_COLORS=0 node index.js`} />
        <img src={debug2} alt="Debug Output Example 2" className="rounded shadow-md max-w-full" />
      </section>

      <p className="text-sm text-gray-500 mt-6">
        Reference: <a href="https://expressjs.com/en/guide/debugging.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Express Debugging Guide</a>
      </p>

       <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Express express.json() Function
      </p>
    </div>
  );
};

export default EnableDebuggingInExpressApp;
