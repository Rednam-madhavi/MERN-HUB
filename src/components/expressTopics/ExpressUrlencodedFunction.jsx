import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import urlencodedVideo from '../../assets/express/urlencoded.mp4';

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

const ExpressUrlencodedFunction = () => {
  const exampleCode = `const express = require('express')
const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: true }))
app.get('/login', (req, res) => {
    res.send('<form method=POST action=/login><input type=text name=username><input type=number name=age><input type=submit></form>')
})
app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('data has been recieved by the server')
})
app.listen(PORT, () => {
    console.log('Server is running on localhost://3000')
})`;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          The <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">express.urlencoded()</code> middleware is used to parse URL-encoded form data sent using <code>application/x-www-form-urlencoded</code>. It transforms the form data into a JavaScript object accessible via <code>req.body</code>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Syntax</h2>
        <CodeBlock
          code={`app.use(
  express.urlencoded({
    extended: true,
    inflate: true,
    limit: "1mb",
    parameterLimit: 5000,
    type: "application/x-www-form-urlencoded",
  })
);`}
        />
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>extended: true</strong> — Allows parsing of nested objects via the <code>qs</code> library.</li>
          <li><strong>inflate: true</strong> — Decompresses gzip/deflate request bodies.</li>
          <li><strong>limit: "1mb"</strong> — Limits request body size for security.</li>
          <li><strong>parameterLimit: 5000</strong> — Limits the number of parameters to prevent abuse.</li>
          <li><strong>type: "application/x-www-form-urlencoded"</strong> — Filters content types to only parse valid URL-encoded forms.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <p className="text-base leading-relaxed">
          This middleware processes URL-encoded data (typically from HTML forms), parses it into an object, and attaches it to <code>req.body</code>. With <code>extended: true</code>, it even supports nested objects and arrays.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example Implementation</h2>
        <CodeBlock code={exampleCode} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Live Demo (Video)</h2>
        <video
          src={urlencodedVideo}
          controls
          className="w-full max-h-[80vh] rounded shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Use Cases</h2>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>User login and registration forms</li>
          <li>Contact or feedback forms</li>
          <li>E-commerce checkout/order forms</li>
          <li>Survey or questionnaire submissions</li>
          <li>Profile update forms</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          The <code>express.urlencoded()</code> middleware simplifies form handling in Express apps by converting submitted form data into JavaScript objects. It's essential for handling data submitted with <code>application/x-www-form-urlencoded</code> encoding, making it a staple in any Express developer's toolkit.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        End of Express.js Tutorial
      </p>
    </div>
  );
};

export default ExpressUrlencodedFunction;
