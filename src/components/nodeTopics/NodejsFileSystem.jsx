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

const NodejsFileSystem = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p>The Node.js <code>fs</code> module allows you to interact with the file system on your computer.</p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Include the File System Module</h2>
        <CodeBlock code={`var fs = require('fs');`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Read Files</h2>
        <CodeBlock
          code={`var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Create Files</h2>
        <p><strong>appendFile()</strong></p>
        <CodeBlock code={`fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});`} />

        <p><strong>open()</strong></p>
        <CodeBlock code={`fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});`} />

        <p><strong>writeFile()</strong></p>
        <CodeBlock code={`fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Update Files</h2>
        <p><strong>appendFile()</strong></p>
        <CodeBlock code={`fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});`} />

        <p><strong>writeFile()</strong></p>
        <CodeBlock code={`fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Delete Files</h2>
        <CodeBlock code={`fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rename Files</h2>
        <CodeBlock code={`fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>Node.js provides powerful methods in the <code>fs</code> module to read, write, update, delete, and rename files on your system. These APIs are essential when building file-driven servers and tools.</p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js URL Module
      </p>
    </div>
  );
};

export default NodejsFileSystem;
