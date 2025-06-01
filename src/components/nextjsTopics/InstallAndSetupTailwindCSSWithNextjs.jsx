import React, { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/solid";
import { useClipboard } from "use-clipboard-copy";
import ProjectStructure from "../../assets/nextjs/tailwind1.png";
import tailwind1 from "../../assets/nextjs/tailwind2.png";

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

const InstallAndSetupTailwindCSSWithNextjs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          Tailwind is a popular utility-first CSS framework for rapidly building
          custom user interfaces. It provides low-level classes that combine to
          create styles for various components.
        </p>
        <p className="text-base leading-relaxed">
          Next.js is a React-based full-stack framework developed by Vercel. It
          enables functionalities like server-side rendering, which improves
          performance and SEO.
        </p>
        <p className="text-base leading-relaxed">
          In this article, we'll learn how to set up Tailwind CSS with Next.js.
          Ensure you have Node.js and npm installed.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Step 1: Create a New Next.js Project</h2>
        <CodeBlock code={`npx create-next-app new-project-name`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Step 2: Install Tailwind CSS</h2>
        <CodeBlock code={`npm install -D tailwindcss postcss autoprefixer`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Step 3: Create Tailwind Config File</h2>
        <CodeBlock code={`npx tailwindcss init -p`} />
        <p>This will generate two config files:</p>
        <CodeBlock
          code={`// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
          
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step 4: Configure Template Paths</h2>
        <CodeBlock
          code={`module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step 5: Add Tailwind Directives</h2>
        <CodeBlock
          code={`/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step 6: Test Tailwind CSS</h2>
        <p>Update pages/index.js with the following content:</p>
        <CodeBlock
          code={`import React from 'react';

const HomePage = () => {
  return (
    <div className='text-3xl text-green-600 p-2'>
      Hello Geeks!
    </div>
  );
};

export default HomePage;`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step 7: Run Your Application</h2>
        <CodeBlock code={`npm run dev`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img
          src={ProjectStructure}
          alt="Tailwind Project Structure"
          className="rounded-lg shadow-md max-w-full"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          You’ve now set up Tailwind CSS with Next.js! You can start building
          responsive, utility-first UIs with ease. Make sure to explore more
          Tailwind classes and extend your theme configuration as needed.
        </p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS-in-JS Next JS
      </p>
    </div>
  );
};

export default InstallAndSetupTailwindCSSWithNextjs;
