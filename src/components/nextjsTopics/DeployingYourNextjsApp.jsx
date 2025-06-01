import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import configuration from '../../assets/nextjs/deploy1.png';
import NextjsAppStructure from '../../assets/nextjs/deploy2.png';
import runningNextjsApplication from '../../assets/nextjs/deploy3.png';
import vercelDashboard from '../../assets/nextjs/deploy4.png';
import SelectGitRepo from '../../assets/nextjs/deploy5.png';
import configuringApplication from '../../assets/nextjs/deploy6.png';
import ApplicationDeployed from '../../assets/nextjs/deploy7.png';

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

const DeployingYourNextjsApp = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <section className="space-y-4">
        <p>
          Deploying a Next.js app means moving your application from your development machine to a production-ready environment on the internet. In this guide, we’ll walk through deploying your app using <strong>Vercel</strong>, the platform built by the creators of Next.js.
        </p>
      </section>

      {/* Prerequisites */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc list-inside">
          <li>Basic knowledge of JavaScript/TypeScript</li>
          <li>Familiarity with Next.js</li>
          <li>GitHub and Vercel accounts</li>
        </ul>
      </section>

      {/* What is Vercel */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Vercel?</h2>
        <p>
          Vercel is a cloud platform optimized for static sites and serverless functions. It offers seamless integration with Next.js, providing features like:
        </p>
        <ul className="list-disc list-inside">
          <li>Automatic deployments from GitHub</li>
          <li>Support for serverless functions</li>
          <li>Built-in image optimization and SSR</li>
          <li>Performance analytics</li>
        </ul>
      </section>

      {/* Step 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 1: Create a New Next.js App</h2>
        <CodeBlock code={`npx create-next-app`} />
        <img src={configuration} alt="Next.js configuration" className="rounded-md shadow-md max-w-full" />
      </section>

      {/* Step 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 2: Navigate to Your App</h2>
        <CodeBlock code={`cd my-app`} />
        <p>This is your project structure:</p>
        <img src={NextjsAppStructure} alt="Next.js App Structure" className="rounded-md shadow-md max-w-full" />
      </section>

      {/* Step 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 3: Run Your App Locally</h2>
        <CodeBlock code={`npm run dev`} />
        <p>Access your app locally at:</p>
        <CodeBlock code={`http://localhost:3000/`} />
        <img src={runningNextjsApplication} alt="Running Next.js App" className="rounded-md shadow-md max-w-full" />
      </section>

      {/* Step 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 4: Push to GitHub</h2>
        <CodeBlock
          code={`git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main`}
        />
      </section>

      {/* Step 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 5: Deploy on Vercel</h2>
        <p>Go to <a className="text-blue-500 underline" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a> and sign in with GitHub.</p>
        <p>Click on <strong>“Add New Project”</strong> and select your repository.</p>
        <img src={vercelDashboard} alt="Vercel Dashboard" className="rounded-md shadow-md max-w-full" />
        <img src={SelectGitRepo} alt="Select Git Repo" className="rounded-md shadow-md max-w-full" />
        <img src={configuringApplication} alt="Configuring Application" className="rounded-md shadow-md max-w-full" />
        <p>Vercel will build and deploy your app. Once done, your app is live!</p>
        <img src={ApplicationDeployed} alt="Application Deployed" className="rounded-md shadow-md max-w-full" />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Routing
      </p>
    </div>
  );
};

export default DeployingYourNextjsApp;
