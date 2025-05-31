import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import errorhandling1 from '../../assets/express/errorhandling1.png';
import errorhandling2 from '../../assets/express/errorhandling2.png';
import errorhandling3 from '../../assets/express/errorhandling3.png';
import errorhandling4 from '../../assets/express/errorhandling4.png';
import errorhandling5 from '../../assets/express/errorhandling5.png';
import errorhandling6 from '../../assets/express/errorhandling6.png';

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

const ErrorHandlingInExpress = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          Error handling in Express refers to the process of managing errors that occur during the execution of a request. When an error occurs in a route or middleware, Express provides mechanisms to catch these errors and prevent the application from crashing. Error-handling middleware allows developers to:
        </p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Log errors for debugging.</li>
          <li>Send structured error responses to users.</li>
          <li>Maintain application stability even when issues arise.</li>
        </ul>
        <p className="text-base leading-relaxed">
          Good error handling makes an application more reliable and user-friendly, improving both developer efficiency and the user experience.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Error Handling Works</h2>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>Error Detection:</strong> Automatically detects issues, such as bad requests or server failures.</li>
          <li><strong>Error-Handling Middleware:</strong> Uses special middleware to catch and process errors in a structured way.</li>
          <li><strong>Passing Errors:</strong> Errors in routes are passed to the middleware using <code>next(err)</code>.</li>
          <li><strong>Logging:</strong> Errors are logged to help developers quickly identify and resolve issues.</li>
          <li><strong>User-Friendly Responses:</strong> Express sends clear, non-technical messages to users instead of showing stack traces.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Types of Error Handling in Express</h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">1. Default Error Handler</h3>
          <p className="text-base leading-relaxed">
            Express has a built-in error handler that catches any errors that are not handled. If you don't create your own error handler, Express will automatically send a simple "500 Internal Server Error" response.
          </p>
          <CodeBlock code={`const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Something went wrong!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />
        </div>
        <p className="text-base leading-relaxed">
          Output:
        </p>
        <img
          src={errorhandling1}
          alt="Default Error Handling"
          className="max-w-full max-h-[90vh] rounded-md shadow-md"
        />

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">2. Custom Error-Handling Middleware</h3>
          <p className="text-base leading-relaxed">
            Instead of relying on the built-in error handler, you can create a custom error middleware. This lets you log errors and send user-friendly responses.
          </p>
          <CodeBlock code={`const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Something broke!");
});

// Custom error-handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Oops! Something went wrong." });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />
        </div>
        <p className="text-base leading-relaxed">
          Output:
        </p>
        <img
          src={errorhandling2}
          alt="Custom Error-Handling Middleware"
          className="max-w-full max-h-[90vh] rounded-md shadow-md"
        />
        <img
          src={errorhandling3}
          alt="Custom Error-Handling Middleware"
          className="max-w-full max-h-[90vh] rounded-md shadow-md"
        />

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">3. Synchronous Error Handling</h3>
          <p className="text-base leading-relaxed">
            Express automatically catches errors in synchronous functions. If an error is thrown inside a route, it is sent to the error handler.
          </p>
          <CodeBlock code={`const express = require("express");
const app = express();

app.get("/sync-error", (req, res) => {
  throw new Error("Synchronous error occurred!");
});

// Custom error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />
        </div>
        <p className="text-base leading-relaxed">
          Output:
        </p>
        <img
          src={errorhandling4}
          alt="Synchronous Error Handling"
          className="max-w-full max-h-[90vh] rounded-md shadow-md"
        />

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">4. Asynchronous Error Handling</h3>
          <p className="text-base leading-relaxed">
            Unlike errors in normal functions, errors in async functions are not caught automatically by Express. You need to handle them manually using try-catch or pass them to Express using <code>next(err)</code>.
          </p>
          <CodeBlock code={`const express = require("express");
const app = express();

app.get("/async-error", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Async error occurred!"));
  } catch (err) {
    next(err);
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />
        </div>
        <p className="text-base leading-relaxed">
          Output:
        </p>
        <img
          src={errorhandling5}
          alt="Asynchronous Error Handling"
          className="max-w-full max-h-[90vh] rounded-md shadow-md"
        />

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">5. Handling Errors with <code>next(err)</code></h3>
          <p className="text-base leading-relaxed">
            Calling <code>next(err)</code> inside a route manually forwards errors to Express’s error handler.
          </p>
          <CodeBlock code={`const express = require("express");
const app = express();

app.get("/manual-error", (req, res, next) => {
  const err = new Error("Manually triggered error!");
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />
        </div>
        <p className="text-base leading-relaxed">
          Output:
        </p>
        <img
          src={errorhandling6}
          alt="Handling Errors with next(err)"
          className="max-w-full max-h-[90vh] rounded-md shadow-md"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Error handling in Express helps keep your app running smoothly. Express can catch sync errors automatically, but for async errors, you need to use <code>next(err)</code>. Adding a custom error handler makes it easier to show clear messages and prevent crashes. Good error handling makes your app more reliable and easier to use.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Templating using ExpressJS in Node.js
      </p>
    </div>
  );
};

export default ErrorHandlingInExpress;
