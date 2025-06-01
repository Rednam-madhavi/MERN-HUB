import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import projectStructure from '../../assets/nextjs/fetchdata1.png';
import output1 from '../../assets/nextjs/fetchdata2.jpg';
import output2 from '../../assets/nextjs/fetchdata3.jpg';

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

const HowToFetchDataFasterInNextjs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Next.js offers various data fetching strategies to optimize performance and user experience. Let's explore different approaches to fetch data efficiently in Next.js applications.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Table of Contents</h2>
        <ul className="list-disc list-inside">
          <li>Static Generation using getStaticProps</li>
          <li>Server-side Rendering using getServerSideProps</li>
          <li>Client-side Data Fetching with useSWR and fetch</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Steps to Create the Next.js App</h2>
        <CodeBlock code={`npx create-next-app fetchdata`} />
        <CodeBlock code={`cd fetchdata`} />
        <p>Project Structure:</p>
        <img src={projectStructure} alt="Project Structure" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Setup for Data Fetching</h2>
        <p>Create a file named <code>server.js</code> for API setup:</p>
        <CodeBlock
          code={`// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  // ... other posts
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(post => post.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Static Generation using getStaticProps</h2>
        <p>
          Static Generation pre-renders pages at build time. It's suitable for pages with data that doesn't change frequently.
        </p>
        <CodeBlock
          code={`// pages/index.js
export default function Home({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}`}
        />
        <p>Output:</p>
        <img src={output1} alt="Static Generation Output" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Server-side Rendering using getServerSideProps</h2>
        <p>
          Server-side Rendering fetches data on each request. It's ideal for pages that require up-to-date data.
        </p>
        <CodeBlock
          code={`// pages/posts/[id].js
export default function Post({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}`}
        />
        <p>Output:</p>
        <img src={output2} alt="Server-side Rendering Output" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Client-side Data Fetching with useSWR</h2>
        <p>
          Client-side data fetching is useful for data that changes frequently or is user-specific. SWR is a React Hooks library for data fetching.
        </p>
        <CodeBlock
          code={`// components/Profile.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Next.js provides multiple data fetching strategies to cater to different needs. Choose the appropriate method based on your application's requirements to optimize performance and user experience.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Server Components in Next.js
      </p>
    </div>
  );
};

export default HowToFetchDataFasterInNextjs;
