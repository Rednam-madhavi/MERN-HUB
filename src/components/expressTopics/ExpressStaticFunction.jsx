import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import staticfun1 from '../../assets/express/staticfun1.png';
import staticfun2 from '../../assets/express/staticfun2.png';

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

const ExpressStaticFunction = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base md:text-lg leading-relaxed">
        In <strong>Express.js</strong>, serving static files like images, CSS, and JavaScript was once done through custom routes. Now, with <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">express.static()</code>, you can serve them directly from a folder, making development simpler and faster.
      </p>

      {/* What is express.static() */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is express.static()?</h2>
        <p className="text-base leading-relaxed">
          It’s a built-in middleware in Express.js that serves static files such as images, HTML, CSS, and JavaScript directly to the client. You don’t need custom routes for every file.
        </p>
        <CodeBlock code={`app.use(express.static('public'));`} />
      </section>

      {/* Folder Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 1: Create a public Folder</h2>
        <p className="text-base">Create a folder named <code>public</code> and place your static files like HTML or images inside it.</p>
        <img src={staticfun1} alt="public folder" className="rounded-md shadow max-w-full max-h-[80vh]" />
      </section>

      {/* Server Code */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 2: Create server.js</h2>
        <p className="text-base">Use the code below to serve your static files using Express:</p>
        <CodeBlock
          code={`const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my static website!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});`}
        />
      </section>

      {/* Explanation */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">How express.static() Works</h2>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Serves files directly from the specified directory.</li>
          <li>Handles caching and content type detection automatically.</li>
          <li>Returns 404 error if the file is not found.</li>
        </ul>
      </section>

      {/* Running the App */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 3: Run the Server</h2>
        <p>Execute this command in your terminal:</p>
        <CodeBlock code={`node server.js`} />
      </section>

      {/* Viewing Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 4: Open Your Browser</h2>
        <p>Visit the following URL to view your static website:</p>
        <CodeBlock code={`http://localhost:3000`} />
        <img src={staticfun2} alt="Rendered image on browser" className="rounded-md shadow max-w-full max-h-[80vh]" />
      </section>

      {/* Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Use express.static()?</h2>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>Efficient File Serving:</strong> Automatically serves static files.</li>
          <li><strong>Improved Performance:</strong> Handles caching for better load times.</li>
          <li><strong>Simplified Routing:</strong> No need for manual route definitions for each static file.</li>
          <li><strong>Content-Type Handling:</strong> Sends files with appropriate headers.</li>
          <li><strong>Organized Asset Management:</strong> Keeps static files in one place.</li>
        </ul>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Express express.text() Function
      </p>
    </div>
  );
};

export default ExpressStaticFunction;
