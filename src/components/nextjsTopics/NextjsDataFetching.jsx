import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Output1 from '../../assets/nextjs/fetch1.gif';
import Output2 from '../../assets/nextjs/fetch2.gif';

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

const NextjsDataFetching = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Next.js Data Fetching refers to the process of getting data from a server or an API and displaying it on a webpage. Next.js offers multiple data-fetching methods to handle server-side rendering, static generation, and client-side rendering.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Table of Contents</h2>
        <ul className="list-disc list-inside">
          <li>Data Fetching Methods in Next.js</li>
          <li>Fetching Data with getStaticProps</li>
          <li>Fetching Data with getServerSideProps</li>
          <li>Fetching Data with getStaticPaths</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data Fetching Methods in Next.js</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Static Site Generation (getStaticProps):</strong> Pre-generates HTML at build time.</li>
          <li><strong>Server-Side Rendering (getServerSideProps):</strong> Generates HTML on the server per request.</li>
          <li><strong>Dynamic Routing (getStaticPaths):</strong> Pre-renders pages for dynamic paths at build time.</li>
          <li><strong>Client-Side Rendering:</strong> Uses fetch or Axios to render data client-side.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Steps to Create Next.js App</h2>
        <CodeBlock code={`npx create-next-app data-fetching`} />
        <CodeBlock code={`cd data-fetching`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Fetching Data with getStaticProps</h2>
        <CodeBlock
          code={`// Filename - pages/index.js:

import Link from "next/link";

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={\`/post/\${post.id}\`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;`}
        />
        <CodeBlock code={`npm run dev`} />
        <img src={Output1} alt="Output1" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Fetching Data with getServerSideProps</h2>
        <CodeBlock
          code={`// Filename - pages/posts/[id].js:

import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">Go back to homepage</Link>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default Post;`}
        />
        <img src={Output2} alt="Output2" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Fetching Data with getStaticPaths</h2>
        <CodeBlock
          code={`// Filename - pages/user/[id].js:

import React from "react";

const User = ({ posts }) => {
  return (
    <div>
      <h1>User Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map(user => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${params.id}\`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default User;`}
        />
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Server Actions in Next.js
      </p>
    </div>
  );
};

export default NextjsDataFetching;
