import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import text1 from '../../assets/express/text1.png';
import text2 from '../../assets/express/text2.png';
import text3 from '../../assets/express/text3.png';

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

const ExpressTextFunction = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      {/* Introduction */}
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          The <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">express.text()</code> function is a built-in middleware in Express.js that parses incoming HTTP request bodies with a <code>text/plain</code> content type. It allows you to handle raw text data sent in the body of a request, making it suitable for handling non-JSON, non-URL-encoded, or non-multipart data.
        </p>
        <p className="text-base leading-relaxed">
          The middleware parses the request body and makes it available in <code>req.body</code>, allowing you to access and work with the text data easily.
        </p>
      </section>

      {/* Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Syntax</h2>
        <CodeBlock code={`express.text([options])`} />
        <p className="text-base leading-relaxed">
          <strong>Parameters:</strong> The <code>options</code> parameter contains various properties:
        </p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>defaultCharset:</strong> Specifies the default character encoding (default: utf-8)</li>
          <li><strong>inflate:</strong> Allows handling of compressed request bodies</li>
          <li><strong>limit:</strong> Defines the maximum size of the text payload</li>
          <li><strong>verify:</strong> Custom function to validate request body before parsing</li>
        </ul>
        <p className="text-base leading-relaxed">
          <strong>Return Value:</strong> Returns an object containing the parsed text data.
        </p>
      </section>

      {/* Steps to Use express.text() Middleware */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Steps to Use express.text() Middleware</h2>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 1: Set Up a Node.js Project</h3>
          <CodeBlock code={`mkdir express-text-demo\ncd express-text-demo\nnpm init -y`} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 2: Install Express</h3>
          <CodeBlock code={`npm install express`} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Step 3: Create index.js and Add the Middleware</h3>
          <CodeBlock code={`// Filename - index.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse text/plain content
app.use(express.text());

app.post("/", (req, res) => {
    console.log("Received Text Data:", req.body);
    res.send(\`Server received: \${req.body}\`);
});

app.listen(PORT, () => {
    console.log(\`Server listening on PORT \${PORT}\`);
});`} />
        </div>
      </section>

      {/* Testing the API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Testing the API</h2>
        <p className="text-base leading-relaxed">
          1. Send a POST request with the header <code>Content-Type: text/plain</code> and the body.
        </p>
        <p className="text-base leading-relaxed">
          You can use POSTMAN or ThunderClient. Set the header as <code>Content-Type: text/plain</code>, then click on the body option, select "text", and add some text to it.
        </p>
        <img
          src={text1}
          alt="API Headers"
          className="max-w-full max-h-[90vh] rounded-md shadow-lg"
        />
        <p className="text-base leading-relaxed">
          2. Fill up the body and make the POST request.
        </p>
        <p className="text-base leading-relaxed">
          Write the text you want to send over the network in the body section. Select POST request and click on the send button.
        </p>
        <img
          src={text2}
          alt="Express Test Function"
          className="max-w-full max-h-[90vh] rounded-md shadow-lg"
        />
        <p className="text-base leading-relaxed">
          As soon as you send the text to the server, it will respond with the same text message after parsing it.
        </p>
      </section>

      {/* How Does express.text() Work? */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does express.text() Work?</h2>
        <p className="text-base leading-relaxed">
          When you set up <code>express.text()</code> as middleware in your Express app, it processes requests where the <code>Content-Type</code> header is set to <code>text/plain</code>. The middleware reads the body of the request and transforms it into a plain text string, which can then be accessed via <code>req.body</code>.
        </p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>The client sends an HTTP request with a <code>Content-Type</code> of <code>text/plain</code>.</li>
          <li>The request body is passed to the <code>express.text()</code> middleware.</li>
          <li>The middleware processes the body and adds the text content to <code>req.body</code>.</li>
          <li>You can access the plain text data directly from <code>req.body</code> in your route handler.</li>
        </ul>
      </section>

      {/* Size Limit Parameter */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Size Limit Parameter</h2>
        <p className="text-base leading-relaxed">
          To prevent large requests from overloading the server, you can set a size limit for text payloads using the <code>limit</code> option:
        </p>
        <CodeBlock code={`app.use(express.text({ limit: "100b" }));`} />
        <p className="text-base leading-relaxed">
          This ensures that incoming text data does not exceed 100 bytes, preventing large payloads. If the text payload exceeds 100 bytes, the server returns a 413 Payload Too Large error.
        </p>
      </section>

      {/* What Happens Without express.text()? */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What Happens Without express.text()?</h2>
        <p className="text-base leading-relaxed">
          If the <code>express.text()</code> middleware is not used, <code>req.body</code> will be undefined, making it impossible to read text-based payloads.
        </p>
        <CodeBlock code={`const express = require("express");
const app = express();
const PORT = 3000;

app.post("/", (req, res) => {
    console.log("Received Text Data:", req.body); // req.body will be undefined
    res.end();
});

app.listen(PORT, () => {
    console.log(\`Server running on PORT \${PORT}\`);
});`} />
        <img
          src={text3}
          alt="Output without express.text() middleware"
          className="max-w-full max-h-[90vh] rounded-md shadow-lg"
        />
        <p className="text-base leading-relaxed">
          When a POST request is made to <code>/</code>, the server tries to log the received text data (<code>req.body</code>). Since no middleware (like <code>express.text()</code> or <code>express.json()</code>) is used to parse the request body, <code>req.body</code> will be undefined.
        </p>
      </section>

      {/* Common Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Use Cases of express.text() Middleware</h2>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>Webhook endpoints:</strong> Many services send plain text payloads to webhooks.</li>
          <li><strong>Text file uploads:</strong> When clients upload or send plain text data directly.</li>
          <li><strong>IoT devices:</strong> Devices may send telemetry or logs in plain text format.</li>
          <li><strong>SMS gateways:</strong> Receiving SMS content via HTTP in plain text format.</li>
          <li><strong>Minimalist APIs:</strong> When a lightweight or constrained environment benefits from plain text over JSON or XML.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          The <code>express.text()</code> middleware is a powerful built-in tool for handling plain text request bodies in Express.js applications. It simplifies the process of parsing and working with raw text, making it suitable for scenarios like webhooks, IoT messages, and lightweight client communication.
        </p>
        <p className="text-base leading-relaxed">
          Always remember to configure it when expecting text/plain content types to avoid undefined <code>req.body</code> issues.
        </p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Express express.urlencoded() Function
      </p>
    </div>
  );
};

export default ExpressTextFunction;
