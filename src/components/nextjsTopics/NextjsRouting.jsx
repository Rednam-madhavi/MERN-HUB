import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import folderStructure from '../../assets/nextjs/routing1.png';

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

const NextjsRouting = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          Next.js is a powerful framework built on top of React that simplifies server-side rendering, static site generation, and routing. In this guide, we'll explore the fundamentals of Next.js routing, including dynamic and nested routes, custom routes, and API routes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Next.js Routing?</h2>
        <p className="text-base leading-relaxed">
          Next.js offers a simple and intuitive way to manage routing using a file-based system. Each file in the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">pages</code> directory automatically becomes a route, eliminating the need for complex routing configurations.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Types of Routes in Next.js</h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Static Routes</h3>
          <p className="text-base leading-relaxed">
            All files in the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">pages</code> directory with extensions like <code>.js</code>, <code>.jsx</code>, <code>.ts</code>, and <code>.tsx</code> are automatically routed. For example, creating a file named <code>index.js</code> will be accessible at <code>http://localhost:3000/</code>.
          </p>
          <CodeBlock code={`// pages/index.js\nconst Home = () => { \n  return (\n    <div>\n      Home Page\n    </div>\n  );\n};\nexport default Home;`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Nested Routes</h3>
          <p className="text-base leading-relaxed">
            Creating a nested folder structure results in similarly structured routes. For example, a file at <code>pages/users/about.js</code> will be accessible at <code>http://localhost:3000/users/about</code>.
          </p>
          <CodeBlock code={`// pages/users/about.js\nconst About = () => { \n  return (\n    <div>\n      About Page\n    </div>\n  );\n};\nexport default About;`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Dynamic Routes</h3>
          <p className="text-base leading-relaxed">
            Dynamic routes accept URL parameters using the bracket syntax. For example, a file named <code>[id].js</code> can be accessed via <code>http://localhost:3000/users/1</code>, where <code>1</code> is the dynamic segment.
          </p>
          <CodeBlock code={`// pages/users/[id].js\nimport { useRouter } from 'next/router';\n\nconst User = () => {\n  const router = useRouter();\n  const { id } = router.query;\n\n  return <p>User: {id}</p>;\n};\n\nexport default User;`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">API Routes</h3>
          <p className="text-base leading-relaxed">
            Next.js allows creating API routes by adding files under the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">pages/api</code> directory. Each file maps to an API endpoint.
          </p>
          <CodeBlock code={`// pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ message: 'Hello, world!' });\n}`} />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Routing</h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Catch-All Routes</h3>
          <p className="text-base leading-relaxed">
            Catch-all routes capture all paths using the <code>[...slug].js</code> syntax.
          </p>
          <CodeBlock code={`// pages/[...slug].js\nimport { useRouter } from 'next/router';\n\nconst CatchAll = () => {\n  const router = useRouter();\n  const { slug } = router.query;\n\n  return <p>Slug: {slug}</p>;\n};\n\nexport default CatchAll;`} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Optional Catch-All Routes</h3>
          <p className="text-base leading-relaxed">
            Optional catch-all routes handle routes with a variable number of segments, including none, using the <code>[[...slug]].js</code> syntax.
          </p>
          <CodeBlock code={`// pages/[[...slug]].js\nimport { useRouter } from 'next/router';\n\nconst OptionalCatchAll = () => {\n  const router = useRouter();\n  const { slug } = router.query;\n\n  return <p>Slug: {slug}</p>;\n};\n\nexport default OptionalCatchAll;`} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Linking Between Pages</h2>
        <p className="text-base leading-relaxed">
          Navigate between pages using the <code>Link</code> component from <code>next/link</code>. It enables client-side navigation with prefetching capabilities.
        </p>
        <CodeBlock code={`import Link from 'next/link';\n\nconst Navigation = () => (\n  <nav>\n    <Link href=\"/users\">\n      <a>Users</a>\n    </Link>\n    <Link href=\"/users/about\">\n      <a>About Users</a>\n    </Link>\n    <Link href=\"/users/1\">\n      <a>User with id 1</a>\n    </Link>\n  </nav>\n);\n\nexport default Navigation;`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">useRouter Hook</h2>
        <p className="text-base leading-relaxed">
          The <code>useRouter</code> hook provides access to the Next.js router object, allowing you to access route information and perform navigation.
        </p>
        <CodeBlock code={`import { useRouter } from 'next/router';\n\nconst MyComponent = () => {\n  const router = useRouter();\n\n  console.log(router.pathname); // Current route\n  console.log(router.query);    // Query parameters\n\n  return (\n    <div>\n      {/* Your component JSX */}\n    </div>\n  );\n};\n\nexport default MyComponent;`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <p className="text-base leading-relaxed">
          When initializing a Next.js app, the default project structure includes a <code>pages</code> directory. Here's an example:
        </p>
        <img
          src={folderStructure}
          alt="Next.js Folder Structure"
          className="rounded-lg border border-gray-300 dark:border-gray-700"
        />
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Nested Routing
      </p>
    </div>
  );
};

export default NextjsRouting;