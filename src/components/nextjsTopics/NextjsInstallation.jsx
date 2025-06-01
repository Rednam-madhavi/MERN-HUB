import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import nextjsStructure from '../../assets/nextjs/installation1.png';
import application from '../../assets/nextjs/installation2.gif';
import projectStructure from '../../assets/nextjs/installation3.png';
import output1 from '../../assets/nextjs/installation1.mp4';
import output2 from '../../assets/nextjs/installation2.mp4';

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

const NextjsInstallation = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base md:text-lg leading-relaxed">
        Next.js is a popular React framework for server-side rendering and static site generation. To get started, make sure you have Node.js and npm installed.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 1: Install Node.js</h2>
        <p>Visit the official Node.js website to download and install for Windows, Linux, or MacOS.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 2: Create a New Next.js App</h2>
        <CodeBlock code={`npx create-next-app@latest\n# OR\nyarn create next-app\n# OR\npnpm create next-app`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 3: Configure the App</h2>
        <p>Follow the CLI prompts to name the project and choose configurations like TypeScript, ESLint, Tailwind CSS, etc.</p>
        <CodeBlock
          code={`√ What is your project named? my-app\n√ Use TypeScript? No / Yes\n√ Use ESLint? No / Yes\n√ Use Tailwind CSS? No / Yes\n√ Use src/ directory? No / Yes\n√ Use App Router? (recommended) No / Yes\n√ Customize import alias (@/*)? No / Yes\n√ Import alias: @/*`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 4: Navigate to the Project Directory</h2>
        <CodeBlock code={`cd my-app`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <p>This is what a typical Next.js project structure looks like:</p>
        <img src={nextjsStructure} alt="Next.js Folder Structure" className="max-w-full max-h-[90vh] rounded-md shadow-lg" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 5: Run the Application</h2>
        <CodeBlock code={`npm run dev`} />
        <p>Open <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">http://localhost:3000</code> in your browser.</p>
        <img src={application} alt="Next.js Application Running" className="rounded-md shadow-md max-w-full h-auto" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example 1: Hello World</h2>
        <CodeBlock
          code={`// pages/index.js\n\nexport default function Home() {\n  return <div>Hello, GeeksforGeeks Learner!!</div>;\n}`} />
        <video controls className="rounded-md shadow-md max-w-full h-auto">
          <source src={output1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example 2: Routing in Next.js</h2>
        <p>Next.js supports file-based routing. Here’s an example of static and dynamic routes.</p>

        <h3 className="text-xl font-semibold">Static Route - /page1</h3>
        <CodeBlock
          code={`// pages/page1.js\n\nfunction Page1() {\n  return (\n    <div>This is page1, accessed from the route <b>/page1</b></div>\n  );\n}\n\nexport default Page1;`} />

        <img src={projectStructure} alt="Next.js Routing Example Folder Structure" className="rounded-md shadow-md max-w-full h-auto" />

        <h3 className="text-xl font-semibold">Dynamic Route - /dynamicpage/[id]</h3>
        <CodeBlock
          code={`// pages/dynamicpage/[id].js\n\nimport { useRouter } from 'next/router';\n\nfunction DynamicPage() {\n  const router = useRouter();\n  return (\n    <div>\n      This is Dynamic Page, accessed from the route <b>{router.asPath}</b>\n    </div>\n  );\n}\n\nexport default DynamicPage;`} />

        <h3 className="text-xl font-semibold">Update Home Page</h3>
        <CodeBlock
          code={`// pages/index.js\n\nexport default function Home() {\n  return (\n    <div>This is HomePage\n      <p>Click on this <a href='/page1'><u>Link</u></a> to go to <b>/page1</b></p>\n      <p>Click on this <a href='/page2'><u>Link</u></a> to go to <b>/page2</b></p>\n    </div>\n  );\n}`} />

        <video controls className="rounded-md shadow-md max-w-full h-auto">
          <source src={output2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: NextJS 14 Folder Structure
      </p>
    </div>
  );
};

export default NextjsInstallation;
