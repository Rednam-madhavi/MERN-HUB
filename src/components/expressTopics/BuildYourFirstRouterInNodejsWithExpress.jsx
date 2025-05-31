import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import folderstructure from '../../assets/express/folderstructure.jpg';

const CodeBlock = ({ code }) => {
  const clipboard = useClipboard();
  const [copied, setCopied] = React.useState(false);

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

const BuildYourFirstRouterInNodejsWithExpress = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <span className="font-semibold">Express.js</span> is a powerful framework for Node.js. One of its main strengths is the ability to define different routes or middleware to handle various client requests. In this guide, we'll learn how to create and use a router in an Express.js server.
      </p>

      {/* What is express.Router() */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is express.Router()?</h2>
        <p className="text-base leading-relaxed">
          The <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&nbsp;express.Router()&nbsp;</code> function is used to create a new router object. This object helps in handling multiple routes easily within an Express app.
        </p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>Case-sensitive:</strong> Enables case sensitivity.</li>
          <li><strong>mergeParams:</strong> Preserves <code>req.params</code> values from the parent router.</li>
          <li><strong>Strict:</strong> Enables strict routing behavior.</li>
        </ul>
        <p><strong>Return Value:</strong> A new Router Object.</p>
      </section>

      {/* Installing Express */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installing Express</h2>
        <p className="text-base">Install the Express module via npm:</p>
        <CodeBlock code={`npm install express`} />
      </section>

      {/* Project Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <p className="text-base">Your project folder will look like this:</p>
        <img
          src={folderstructure}
          alt="Folder Structure"
          className="max-w-full max-h-[90vh] rounded-md shadow-lg"
        />
      </section>

      {/* Creating Routes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Creating Routes</h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 1: Home Route</h3>
          <CodeBlock code={`// routes/Home.js
const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("This is the homepage request");
});

module.exports = router;`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 2: Login Route</h3>
          <CodeBlock code={`// routes/login.js
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("This is the login request");
});

module.exports = router;`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 3: Main Server Setup</h3>
          <CodeBlock code={`// index.js
const express = require("express");
const homeroute = require("./routes/Home");
const loginroute = require("./routes/login");

const app = express();

app.use("/", homeroute);
app.use("/", loginroute);

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});`} />
        </div>
      </section>

      {/* Running the App */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Running the Application</h2>
        <p className="text-base">Open your terminal and run:</p>
        <CodeBlock code={`node index.js`} />
        <p className="text-base">
          Now, open your browser and visit: <br />
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">http://localhost:3000/home</code> and{' '}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">http://localhost:3000/login</code> to test your routes.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Middleware in Express
      </p>
    </div>
  );
};

export default BuildYourFirstRouterInNodejsWithExpress;
