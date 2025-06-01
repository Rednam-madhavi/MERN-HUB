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

const NodejsEmail = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-8 text-gray-800 dark:text-gray-100">

      <section>
        <h2 className="text-xl font-semibold">Installing Nodemailer</h2>
        <p>Install Nodemailer using npm:</p>
        <CodeBlock code={`npm install nodemailer`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Setup</h2>
        <p>Include Nodemailer in your project:</p>
        <CodeBlock code={`const nodemailer = require('nodemailer');`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Send an Email</h2>
        <p>Use your Gmail credentials to send an email:</p>
        <CodeBlock
          code={`const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Send to Multiple Recipients</h2>
        <p>List multiple addresses separated by commas:</p>
        <CodeBlock
          code={`const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'friend1@example.com, friend2@example.com',
  subject: 'Group Email',
  text: 'Hello everyone!'
};`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Send HTML Emails</h2>
        <p>Use the <code>html</code> property for HTML-formatted emails:</p>
        <CodeBlock
          code={`const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'HTML Email',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>
          With Nodemailer and Node.js, sending text or HTML emails—even to multiple recipients—is simple and powerful. Be cautious with credentials, and use secure solutions like OAuth2 or environment variables in production.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: MongoDB Get Started
      </p>
    </div>
  );
};

export default NodejsEmail;
