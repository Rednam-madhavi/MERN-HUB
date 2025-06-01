import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import structure1 from '../../assets/nextjs/stylesheet1.png';
import structure2 from '../../assets/nextjs/stylesheet2.png';
import structure3 from '../../assets/nextjs/stylesheet3.png';
import structure4 from '../../assets/nextjs/stylesheet4.png';

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

const HowToAddStylesheetInNextjs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        In Next.js, adding a stylesheet enhances your app's styling capabilities. Import CSS files directly in your components or pages using ES6 import syntax. Next.js optimizes and includes these styles in the build process, ensuring efficient and modular CSS management.
      </p>

      <p>
        In this post, we are going to learn about adding stylesheets in Next.js. Stylesheets are used to design the webpage to make it attractive and are essential for simplifying the process of making web pages presentable.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Approaches to Add Stylesheets in Next.js:</h2>
        <ul className="list-disc list-inside">
          <li>Adding global stylesheets</li>
          <li>Adding component-level CSS</li>
          <li>Importing styles from node_modules</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Creating a Next.js Application</h2>
        <CodeBlock code={`npx create-next-app my-next-app`} />
        <CodeBlock code={`cd my-next-app`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img src={structure1} alt="Directory structure of our Next.js app" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Initial Look of Our App</h2>
        <img src={structure2} alt="Initial look of our Next Js app" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Adding Global Stylesheets</h2>
        <p>To apply CSS globally in your app, import the stylesheet into <code>pages/_app.js</code>.</p>
        <CodeBlock
          code={`// styles/style.css
body {
  background-color: rgb(26, 25, 25);
  color: rgb(223, 213, 213);
  font-family: sans-serif;
}`}
        />
        <CodeBlock
          code={`// pages/_app.js
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;`}
        />
        <img src={structure3} alt="Output of adding the stylesheet to our app" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Component-Level CSS with CSS Modules</h2>
        <CodeBlock
          code={`/* styles/navbar.module.css */
.current {
  color: indianred;
  text-decoration: none;
}`}
        />
        <CodeBlock
          code={`// components/Navbar.js
import styles from '../styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar({ current }) {
  return (
    <ul>
      <li>
        <Link href="/">Home page</Link>{' '}
        {current === 'home' && (
          <span className={styles.current}>current page</span>
        )}
      </li>
      <li>
        <Link href="/user">Products page</Link>{' '}
        {current === 'user' && (
          <span className={styles.current}>current page</span>
        )}
      </li>
    </ul>
  );
}`}
        />
        <img src={structure4} alt="Output of above component-level CSS code" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Importing Styles from node_modules</h2>
        <CodeBlock code={`// Example in _app.js or component
import '@reach/dialog/styles.css'`} />
      </section>

      <p className="text-base mt-10 font-medium">
        Reference: <a href="https://nextjs.org/docs/basic-features/built-in-css-support" target="_blank" className="text-blue-600 hover:underline">Next.js CSS Support</a>
      </p>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Controlling the specificity of CSS Modules in a Next.js App
      </p>
    </div>
  );
};

export default HowToAddStylesheetInNextjs;