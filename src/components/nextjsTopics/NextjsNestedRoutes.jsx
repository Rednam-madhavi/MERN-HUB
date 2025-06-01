import React from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/outline";
import { useClipboard } from "use-clipboard-copy";
import nestedrouting1 from "../../assets/nextjs/nestedrouting1.png";
import nestedrouting2 from "../../assets/nextjs/nestedrouting2.png";
import nestedrouting3 from "../../assets/nextjs/nestedrouting3.png";
import nestedrouting4 from "../../assets/nextjs/nestedrouting4.png";
import nestedrouting5 from "../../assets/nextjs/nestedrouting5.png";

const CodeBlock = ({ code }) => {
  const clipboard = useClipboard();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 text-white rounded-lg p-4 my-4 overflow-x-auto">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-sm bg-gray-700 px-2 py-1 rounded flex items-center space-x-1 hover:bg-gray-600"
      >
        {copied ? (
          <>
            <CheckIcon className="h-4 w-4" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <ClipboardIcon className="h-4 w-4" />
            <span>Copy</span>
          </>
        )}
      </button>
      <pre>
        <code className="whitespace-pre">{code}</code>
      </pre>
    </div>
  );
};

const NextjsNestedRouting = () => {
  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">

      {/* Introduction */}
      <section className="mb-8 space-y-4">
        <p>
          In Next.js, routing is file-based and automatically handled by the framework.
          Nested routes are created using folders and subfolders inside the <code>pages</code> directory.
        </p>

        {/* Folder Structure */}
        <h2 className="text-2xl font-semibold">Basic Example</h2>
        <p>Let’s start with this folder structure inside <code>pages/</code>:</p>
        <CodeBlock
          code={`pages/
  index.js
  nested/
    index.js
    nested_page.js`}
        />
        <img
          src={nestedrouting1}
          alt="Folder Structure"
          className="rounded shadow-lg my-4"
        />
        <p>
          - <code>pages/index.js</code> → <code>/</code> <br />
          - <code>pages/nested/index.js</code> → <code>/nested</code> <br />
          - <code>pages/nested/nested_page.js</code> → <code>/nested/nested_page</code>
        </p>

        {/* /nested route */}
        <h2 className="text-xl font-semibold mt-6">pages/nested/index.js</h2>
        <CodeBlock
          code={`export default function Nested() {
  return <h1>This is the nested index page</h1>;
}`}
        />
        <img
          src={nestedrouting2}
          alt="Nested Index Output"
          className="rounded shadow-lg my-4"
        />

        {/* /nested/nested_page route */}
        <h2 className="text-xl font-semibold">pages/nested/nested_page.js</h2>
        <CodeBlock
          code={`export default function NestedPage() {
  return <h1>This is a nested route page</h1>;
}`}
        />
        <img
          src={nestedrouting3}
          alt="Nested Page Output"
          className="rounded shadow-lg my-4"
        />
      </section>

      {/* Deeply Nested Example */}
      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">Deeply Nested Routes</h2>
        <p>You can nest routes even deeper. Here’s an example structure:</p>
        <CodeBlock
          code={`pages/
  articles.js
  articles/
    dsa.js
    dsa/
      post1.js`}
        />
        <img
          src={nestedrouting4}
          alt="Deeply Nested Structure"
          className="rounded shadow-lg my-4"
        />
        <p>
          - <code>/articles</code> → <code>articles.js</code><br />
          - <code>/articles/dsa</code> → <code>dsa.js</code><br />
          - <code>/articles/dsa/post1</code> → <code>post1.js</code>
        </p>

        <h3 className="text-xl font-semibold">pages/articles/dsa/post1.js</h3>
        <CodeBlock
          code={`export default function Post1() {
  return <h1>This is Post 1 in DSA articles</h1>;
}`}
        />
        <img
          src={nestedrouting5}
          alt="Post1 Output"
          className="rounded shadow-lg my-4"
        />
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p>
          In Next.js, nested routes are created by placing files in subfolders within the <code>pages/</code> directory.
        </p>
        <ul className="list-disc list-inside">
          <li><code>pages/index.js</code> → <code>/</code></li>
          <li><code>pages/nested/index.js</code> → <code>/nested</code></li>
          <li><code>pages/nested/nested_page.js</code> → <code>/nested/nested_page</code></li>
          <li><code>pages/articles.js</code> → <code>/articles</code></li>
          <li><code>pages/articles/dsa.js</code> → <code>/articles/dsa</code></li>
          <li><code>pages/articles/dsa/post1.js</code> → <code>/articles/dsa/post1</code></li>
        </ul>
        <p>
          This structure works well with the Pages Router. If you're using Next.js 13+, consider switching to the App Router for layouts, templates, and nested dynamic segments.
        </p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Pages
      </p>
    </div>
  );
};

export default NextjsNestedRouting;
