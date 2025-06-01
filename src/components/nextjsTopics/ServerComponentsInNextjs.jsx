import React, { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/solid";
import { useClipboard } from "use-clipboard-copy";
import FolderStructure from "../../assets/nextjs/server1.png";
import Output from "../../assets/nextjs/server2.gif";

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

const ServerComponentsInNextjs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Server Components in Next.js offer a way to build components that are rendered on the server rather than the client. This reduces JavaScript sent to the browser and improves performance and SEO.
      </p>

      <section>
        <h2 className="text-xl font-semibold">What are Server Components?</h2>
        <p className="text-base leading-relaxed">
          Introduced in Next.js 13, Server Components are rendered entirely on the server, optimizing performance and user experience.
        </p>
        <CodeBlock
          code={`export default function ServerComponent() {
  return (
    <div>
      Hey I am Server Component
    </div>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">How are Server Components Rendered?</h2>
        <ul className="list-disc list-inside">
          <li>React renders Server Components into an RSC (React Server Component) Payload.</li>
          <li>Next.js uses this payload with client components to generate server-side HTML.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Static Rendering</h2>
        <p className="text-base leading-relaxed">
          Pre-renders pages at build time to generate static HTML, enhancing SEO and performance.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dynamic Rendering</h2>
        <p className="text-base leading-relaxed">
          Generates content at runtime in response to user requests, fetching data dynamically from APIs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Streaming</h2>
        <p className="text-base leading-relaxed">
          Enables progressive rendering of UI in chunks, improving load performance. Enabled by default in the App Router.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of Server Rendering</h2>
        <ul className="list-disc list-inside">
          <li><strong>Data Fetching:</strong> Closer to source, faster rendering.</li>
          <li><strong>Reduced Client Load:</strong> Offloads processing to server.</li>
          <li><strong>Security:</strong> More control, fewer client-side vulnerabilities.</li>
          <li><strong>SEO:</strong> Pre-rendered HTML improves search indexing.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Steps to Create the Project</h2>
        <CodeBlock code={`mkdir folderName && cd folderName`} />
        <CodeBlock code={`npx create-next-app@latest project_name`} />
        <p>Write the server component code in the page.js file after setup.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Folder Structure</h2>
        <img src={FolderStructure} alt="Folder Structure" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example: Fetching Posts from API</h2>
        <CodeBlock
          code={`"use client";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Output</h2>
        <img src={Output} alt="Posts Output" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Server Components provide powerful tools to boost performance, enhance SEO, and streamline rendering in Next.js apps.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Edge Functions and Middleware in Next JS
      </p>
    </div>
  );
};

export default ServerComponentsInNextjs;
