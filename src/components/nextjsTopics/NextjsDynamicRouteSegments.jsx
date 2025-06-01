import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import folderstructure from '../../assets/nextjs/dynamic1.png';
import internationalizationGif from '../../assets/nextjs/dynamic2.gif';

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

const NextjsDynamicRouteSegments = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        Next.js allows you to configure routing and rendering for multiple languages, supporting both translated content and internationalized routes. This setup ensures your site adapts to different locales, providing a seamless and localized experience.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="list-disc list-inside">
          <li>NPM & NodeJS</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>JavaScript</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Steps to Create a Next.js Application</h2>
        <CodeBlock code={`npx create-next-app my-i18n-app`} />
        <p>Choose the following options when prompted:</p>
        <ul className="list-disc list-inside">
          <li>TypeScript: No</li>
          <li>ESLint: Yes</li>
          <li>Tailwind CSS: No</li>
          <li>src/ directory: Yes</li>
          <li>App Router: Yes</li>
          <li>Customize import alias: Yes</li>
        </ul>
        <CodeBlock code={`cd my-i18n-app`} />
        <CodeBlock code={`npm install next-i18next`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img src={folderstructure} alt="Project Structure" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example Dictionary File</h2>
        <CodeBlock
          code={`// Filename - dictionaries/de.json
{
  "navigation": {
    "home": "होम पेज",
    "about": "हमारे बारे में"
  },
  "page": {
    "home": {
      "title": "NextJs i18n में आपका स्वागत है",
      "description": "NextJs 13 ऐप राउटर में अंतर्राष्ट्रीयकरण"
    },
    "about": {
      "title": "हमारे बारे में",
      "description": "यह इसके बारे में पृष्ठ है"
    }
  }
}`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Output</h2>
        <img src={internationalizationGif} alt="Internationalization Output" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Using internationalization in Next.js, you can easily build multilingual applications. Define your dictionaries, update the config, and structure your project as recommended to ensure smooth language switching and content adaptation.
        </p>
      </section>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Middlewares in Next.js
      </p>
    </div>
  );
};

export default NextjsDynamicRouteSegments;