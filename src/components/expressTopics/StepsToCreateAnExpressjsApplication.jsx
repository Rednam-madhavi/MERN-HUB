import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const StepsToCreateAnExpressjsApplication = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (code, id) => {
        clipboard.copy(code);
        setCopied((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => {
            setCopied((prev) => ({ ...prev, [id]: false }));
        }, 2000);
    };

    const codeSnippets = {
        init: `npm init`,
        installExpress: `npm install express`,
        entryFile: `const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
  if(!error)
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  else 
    console.log("Error occurred, server can't start", error);
});`,
        getRoute: `app.get('/', (req, res) => {
  res.status(200).send("Welcome to root URL of Server");
});`,
        htmlRoute: `app.get('/hello', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello GFG Learner!</h1>");
});`,
        postRoute: `app.use(express.json());

app.post('/', (req, res) => {
  const { name } = req.body;
  res.send(\`Welcome \${name}\`);
});`,
        staticFiles: `const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'Static Files')));`,
        singleFile: `const path = require('path');

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'image.jpg'));
});`,
    };

    const renderCodeBlock = (code, id) => (
        <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
            <code className="block whitespace-pre text-sm">{code}</code>
            <button
                onClick={() => handleCopy(code, id)}
                className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
                {copied[id] ? (
                    <CheckIcon className="h-6 w-6 text-green-500" />
                ) : (
                    <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
            </button>
        </div>
    );

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Express.js is a minimal and flexible Node.js web application framework that provides
                a robust set of features for building web and mobile applications.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Step 1: Initialize Project</h2>
            <p>Run this command to initialize your Node.js project:</p>
            {renderCodeBlock(codeSnippets.init, 'init')}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Step 2: Install Express</h2>
            <p>Use the following command to install Express.js:</p>
            {renderCodeBlock(codeSnippets.installExpress, 'installExpress')}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Step 3: Create Entry File</h2>
            <p>Create a file like <code>app.js</code> with this starter code:</p>
            {renderCodeBlock(codeSnippets.entryFile, 'entryFile')}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Step 4: Create Routes</h2>
            <p>Basic GET route:</p>
            {renderCodeBlock(codeSnippets.getRoute, 'getRoute')}
            <p>HTML response route:</p>
            {renderCodeBlock(codeSnippets.htmlRoute, 'htmlRoute')}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Step 5: Handle POST Request</h2>
            {renderCodeBlock(codeSnippets.postRoute, 'postRoute')}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Step 6: Serve Static Files</h2>
            {renderCodeBlock(codeSnippets.staticFiles, 'staticFiles')}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Step 7: Send File as Response</h2>
            {renderCodeBlock(codeSnippets.singleFile, 'singleFile')}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                With these steps, you've set up a functional Express.js server. You can now expand it with
                routes, middleware, database connections, and other backend services.
            </p>
            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Print Hello World using Express JS
            </p>
        </div>
    );
};

export default StepsToCreateAnExpressjsApplication;
