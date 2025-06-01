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

const NodejsHTTPModule = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section>
        <p>
          Node.js has a built-in module called <code>http</code>, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
        </p>
        <p>To include the HTTP module:</p>
        <CodeBlock code={`var http = require('http');`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Node.js as a Web Server</h2>
        <p>
          Use <code>createServer()</code> to create an HTTP server:
        </p>
        <CodeBlock
          code={`var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);`}
        />
        <p>
          Save this code as <code>demo_http.js</code> and run:
        </p>
        <CodeBlock code={`node demo_http.js`} />
        <p>Visit http://localhost:8080 in your browser to see the result.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Add an HTTP Header</h2>
        <p>
          Set the correct content type using <code>res.writeHead</code>:
        </p>
        <CodeBlock
          code={`var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Read the Query String</h2>
        <p>
          Access the URL string via <code>req.url</code>:
        </p>
        <CodeBlock
          code={`var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);`}
        />
        <p>
          Save as <code>demo_http_url.js</code> and run:
        </p>
        <CodeBlock code={`node demo_http_url.js`} />
        <p>Try accessing: http://localhost:8080/summer and http://localhost:8080/winter</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Split the Query String</h2>
        <p>
          Use the built-in <code>url</code> module to parse query parameters:
        </p>
        <CodeBlock
          code={`var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);`}
        />
        <p>
          Save as <code>demo_querystring.js</code> and access:
        </p>
        <CodeBlock code={`http://localhost:8080/?year=2017&month=July`} />
        <p>This will display: <strong>2017 July</strong></p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>
          The built-in HTTP module in Node.js makes it easy to build a basic web server. You can handle routing, set headers, and even parse query strings using built-in modules like <code>url</code>.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js File System
      </p>
    </div>
  );
};

export default NodejsHTTPModule;
