import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import ProjectStructure from '../../assets/nextjs/server-action-structure.png';

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

const ServerActionsInNextjs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Server actions in Next.js refer to the functionalities and processes that occur on the server side of a Next.js application. They handle data fetching, form processing, and database interaction securely and efficiently.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What Are Server Actions in Next.js?</h2>
        <p>
          Server Actions are asynchronous functions that run on the server. They can be used in both client and server components to handle tasks like form submissions, mutations, authentication, and background jobs such as sending emails.
        </p>
        <p>
          You define them with a <code>"use server"</code> directive at the top of the file or function.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Syntax</h2>
        <p>If using in a client component, define server action in a separate file:</p>
        <CodeBlock
          code={`'use server';

export async function formSubmit() {
  // your server logic
}`}
        />
        <p>In a server component, you can declare it inline:</p>
        <CodeBlock
          code={`export default function Page() {
  async function formSubmit() {
    'use server';
    // Server logic
  }

  return (
    // JSX
  );
}`}
        />
        <p>You can also pass server actions as props to client components:</p>
        <CodeBlock code={`<SomeClientComponent action={serverAction} />`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Steps to Create a NextJS App</h2>
        <CodeBlock code={`npx create-next-app@latest app_name`} />
        <ul className="list-disc list-inside mt-2">
          <li>TypeScript: No</li>
          <li>ESLint: Yes</li>
          <li>Tailwind CSS: No</li>
          <li>src/ directory: Yes</li>
          <li>App Router: Yes</li>
          <li>Customize import alias: No</li>
        </ul>
        <CodeBlock code={`cd app_name`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img
          src={ProjectStructure}
          alt="Server Actions Project Structure"
          className="max-w-full rounded-md shadow-md"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Action Example</h2>
        <p>
          This example submits a form and saves the data to a <code>data.json</code> file. Server actions are used inside the <code>action</code> attribute of the form.
        </p>
        <CodeBlock
          code={`'use client';
import formSubmit from './formSubmitServerAction.js';
import formData from '../../data.json';

export default function Page() {
  return (
    <div style={{ display: 'flex', gap: "3%", margin: "10px" }}>
      <form action={(e) => formSubmit(e)}>
        <label>Name</label>
        <input name="name" required />
        <label>Age</label>
        <input name="age" required />
        <label>City</label>
        <input name="city" required />
        <button type="submit">Submit</button>
      </form>

      <table border={2} cellPadding={10}>
        <thead>
          <tr><td>Name</td><td>Age</td><td>City</td></tr>
        </thead>
        <tbody>
          {formData.map((item, key) => (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Run Your App</h2>
        <CodeBlock code={`npm run dev`} />
        <p>Visit http://localhost:3000 in your browser.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Server actions in Next.js simplify secure operations such as form handling and data management. With directives like <code>"use server"</code>, developers can cleanly separate client and server logic, improving app structure, security, and performance.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: How to Fetch Data Faster in Next.js?
      </p>
    </div>
  );
};

export default ServerActionsInNextjs;
