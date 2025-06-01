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

const NodejsUploadFiles = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-8 text-gray-800 dark:text-gray-100">

      <section>
        <h2 className="text-xl font-semibold">Install Formidable</h2>
        <p className="mb-2">Install the Formidable module via NPM:</p>
        <CodeBlock code={`npm install formidable`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step 1: Create an Upload Form</h2>
        <p className="mb-2">This Node.js server renders a basic HTML form with a file input field:</p>
        <CodeBlock
          code={`var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step 2: Parse the Uploaded File</h2>
        <p className="mb-2">
          Use Formidable to parse the uploaded file. The uploaded file will be placed in a temporary folder:
        </p>
        <CodeBlock
          code={`var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step 3: Save the File</h2>
        <p className="mb-2">
          Use the fs module to move the file from the temporary folder to a specific location:
        </p>
        <CodeBlock
          code={`var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          By combining Node.js, the Formidable module, and the fs module, you can easily handle file uploads and move them to a desired location on the server.
        </p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js Email
      </p>
    </div>
  );
};

export default NodejsUploadFiles;
