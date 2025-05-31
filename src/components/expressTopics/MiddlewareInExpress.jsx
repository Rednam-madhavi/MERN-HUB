import React from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const CodeBlock = ({ code }) => {
  const clipboard = useClipboard();
  return (
    <div className="relative bg-gray-100 rounded-lg p-4 mb-4 border border-gray-300">
      <pre className="whitespace-pre-wrap text-sm text-gray-800">{code}</pre>
      <button
        onClick={() => clipboard.copy(code)}
        className="absolute top-2 right-2 bg-gray-500 hover:bg-gray-800 text-white p-1 rounded"
      >
        <ClipboardIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

const MiddlewareInExpress = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">

      <p className="mb-4 text-gray-700">
        Middleware in Express refers to functions that process requests before reaching route handlers.
        They can modify request/response objects, end the request-response cycle, or call the next middleware.
        Middleware is executed in the order defined and is commonly used for tasks like authentication,
        logging, and error handling.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Middleware Working Syntax</h2>
      <CodeBlock
        code={`app.use((req, res, next) => {\n  console.log('Middleware executed');\n  next();\n});`}
      />

      <p className="mb-4 text-gray-700">
        <code>(req, res, next) =&gt; &#123;&#125;</code> is the middleware function. It can:
        <ul className="list-disc pl-6 mt-2">
          <li>Modify request or response objects</li>
          <li>End the cycle or call <code>next()</code></li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">What Middleware Does</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Execute arbitrary code on requests</li>
        <li>Modify <code>req</code> and <code>res</code></li>
        <li>End the response cycle</li>
        <li>Pass to the next middleware using <code>next()</code></li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Types of Middleware</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-500">1. Application-level Middleware</h3>
        <CodeBlock
          code={`app.use(express.json());\napp.use((req, res, next) => {\n  console.log('Request received:', req.method, req.url);\n  next();\n});`}
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-500">2. Router-level Middleware</h3>
        <CodeBlock
          code={`const router = express.Router();\n\nrouter.use((req, res, next) => {\n  console.log('Router-specific middleware');\n  next();\n});\n\nrouter.get('/dashboard', (req, res) => {\n  res.send('Dashboard Page');\n});\n\napp.use('/user', router);`}
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-500">3. Error-handling Middleware</h3>
        <CodeBlock
          code={`app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something went wrong!');\n});`}
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-500">4. Built-in Middleware</h3>
        <CodeBlock
          code={`app.use(express.static('public'));\napp.use(express.json());`}
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-500">5. Third-party Middleware</h3>
        <CodeBlock
          code={`const morgan = require('morgan');\napp.use(morgan('dev'));\n\nconst bodyParser = require('body-parser');\napp.use(bodyParser.urlencoded({ extended: true }));`}
        />
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Steps to Implement Middleware</h2>
      <CodeBlock code={`npm init -y\nnpm install express`} />
      <CodeBlock
        code={`const express = require('express');\nconst app = express();\nconst port = process.env.PORT || 3000;\n\napp.get('/', (req, res) => {\n  res.send('<div><h2>Welcome to GeeksforGeeks</h2><h5>Tutorial on Middleware</h5></div>');\n});\n\napp.listen(port, () => {\n  console.log(\`Listening on port \${port}\`);\n});`}
      />
      <CodeBlock code={`node index.js`} />

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Middleware Chaining</h2>
      <CodeBlock
        code={`const express = require('express');\nconst app = express();\n\n// Middleware 1\napp.use((req, res, next) => {\n  console.log(\`\${req.method} request to \${req.url}\`);\n  next();\n});\n\n// Middleware 2\napp.use((req, res, next) => {\n  res.setHeader('X-Custom-Header', 'Middleware Chaining Example');\n  next();\n});\n\n// Route handler\napp.get('/', (req, res) => {\n  res.send('Hello, World!');\n});\n\napp.listen(3000, () => {\n  console.log('Server is running on port 3000');\n});`}
      />

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Advantages of Using Middleware</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Modularity</li>
        <li>Reusability</li>
        <li>Maintainability</li>
        <li>Error Handling</li>
        <li>Performance Optimization</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Best Practices</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Always call <code>next()</code> unless ending the response</li>
        <li>Use specific middleware per task (auth, logging, etc.)</li>
        <li>Place error handlers last</li>
        <li>Avoid synchronous blocking code</li>
      </ul>
    </div>
  );
};

export default MiddlewareInExpress;
