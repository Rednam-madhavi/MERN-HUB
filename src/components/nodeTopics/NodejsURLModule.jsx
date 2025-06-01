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
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto whitespace-pre-wrap">
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

const NodejsURLModule = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        The <code className="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">url</code> module in Node.js allows you to split a web address into readable parts. You can include it using the <code className="font-mono">require()</code> function.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Parsing a Web Address</h2>
        <p>Use the <code className="font-mono">url.parse()</code> method to extract different components of a URL.</p>
        <CodeBlock
          code={`var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);      // 'localhost:8080'
console.log(q.pathname);  // '/default.htm'
console.log(q.search);    // '?year=2017&month=february'

var qdata = q.query; 
console.log(qdata.month); // 'february'`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Creating a Simple File Server</h2>
        <p>You can combine the URL module with the file system and HTTP modules to build a simple file server:</p>
        <CodeBlock
          code={`var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);`}
        />
        <p>Save this as <code className="font-mono">demo_fileserver.js</code>, then run it:</p>
        <CodeBlock code={`node demo_fileserver.js`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example HTML Files</h2>
        <p>Place these files in the same folder:</p>
        <CodeBlock
          code={`<!-- summer.html -->
<!DOCTYPE html>
<html>
  <body>
    <h1>Summer</h1>
    <p>I love the sun!</p>
  </body>
</html>`}
        />
        <CodeBlock
          code={`<!-- winter.html -->
<!DOCTYPE html>
<html>
  <body>
    <h1>Winter</h1>
    <p>I love the snow!</p>
  </body>
</html>`}
        />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Accessing the Files</h2>
        <p>
          Open your browser and visit:
        </p>
        <ul className="list-disc list-inside">
          <li><a href="http://localhost:8080/summer.html" className="text-blue-600 underline">http://localhost:8080/summer.html</a></li>
          <li><a href="http://localhost:8080/winter.html" className="text-blue-600 underline">http://localhost:8080/winter.html</a></li>
        </ul>
        <p>Each route serves the respective HTML content.</p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js NPM
      </p>
    </div>
  );
};

export default NodejsURLModule;
