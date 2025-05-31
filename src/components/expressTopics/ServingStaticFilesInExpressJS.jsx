import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import static1 from '../../assets/express/static1.png';
import static2 from '../../assets/express/static2.png';
import static3 from '../../assets/express/static3.gif';

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

const ServingStaticFilesInExpressJS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base sm:text-lg">
        <strong>ExpressJS</strong> is a popular web framework for NodeJS that allows developers to build robust web applications. One of its core features is serving static files like images, CSS, JavaScript, and HTML.
      </p>

      {/* Syntax Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Syntax</h2>
        <CodeBlock code={`app.use(express.static(path.join(__dirname, 'public')));`} />
        <ul className="list-disc list-inside space-y-2 text-base">
          <li><strong>Serves Static Files:</strong> Makes Express serve HTML, CSS, JS, and image files from the public directory.</li>
          <li><strong>Path Compatibility:</strong> Uses <code>path.join()</code> and <code>__dirname</code> for OS-safe path resolution.</li>
        </ul>
      </section>

      {/* Steps to Serve Static Files */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Steps to Serve Static Files</h2>
        
        <h3 className="text-xl font-medium">Step 1: Create Project Directory</h3>
        <CodeBlock code={`mkdir my-express-app\ncd my-express-app`} />

        <h3 className="text-xl font-medium">Step 2: Initialize NodeJS Project</h3>
        <CodeBlock code={`npm init -y`} />

        <h3 className="text-xl font-medium">Step 3: Install Express</h3>
        <CodeBlock code={`npm install express`} />

        <h3 className="text-xl font-medium">Step 4: Setup File Structure</h3>
        <CodeBlock code={`touch app.js\nmkdir public`} />
      </section>

      {/* Folder Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <img src={static1} alt="Static File Structure" className="rounded-md shadow-lg max-w-full" />
      </section>

      {/* Example Code */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example: Serve Static Files</h2>
        <CodeBlock
          code={`const express = require('express');\nconst path = require('path');\nconst app = express();\nconst PORT = 3000;\n\n// Middleware to serve static files from 'public' directory\napp.use(express.static(path.join(__dirname, 'public')));\n\napp.get('/', (req, res) => {\n    res.send('Hello Geek');\n});\n\napp.listen(PORT, () => {\n    console.log(\`Server Established at PORT -> \${PORT}\`);\n});`}
        />
        <ul className="list-disc list-inside space-y-2 text-base">
          <li><strong>Express Setup:</strong> Initializes the Express app.</li>
          <li><strong>Static Serving:</strong> Uses middleware to serve files from <code>public</code> folder.</li>
          <li><strong>Root Route:</strong> Sends “Hello Geek” or serves index.html if present.</li>
          <li><strong>Listening:</strong> App starts on port 3000.</li>
        </ul>
      </section>

      {/* Console Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Console Output</h2>
        <img src={static2} alt="Console Output" className="rounded-md shadow max-w-full" />
      </section>

      {/* Browser Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Browser Output</h2>
        <img src={static3} alt="Browser Output" className="rounded-md shadow max-w-full" />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Enable Debugging in Express App
      </p>
    </div>
  );
};

export default ServingStaticFilesInExpressJS;
