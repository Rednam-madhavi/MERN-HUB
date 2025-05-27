import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactRouter = () => {
  const clipboard = useClipboard();
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  const handleCopy = (snippet) => {
    clipboard.copy(snippet);
    setCopiedSnippet(snippet);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const codeSnippets = {
    install: `npm i -D react-router-dom`,
    indexJs: `import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();`,
    homeJs: `import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Home;`,
    blogs: `const Blogs = () => {
  return <h1>Blogs</h1>;
};

export default Blogs;`,
    contact: `const Contact = () => {
  return <h1>Contact</h1>;
};

export default Contact;`,
    nopage: `const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;`
  };

  const renderCodeBlock = (title, code) => (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md whitespace-pre-wrap">
          {code}
        </pre>
        <button
          onClick={() => handleCopy(code)}
          className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copiedSnippet === code ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        React Router is used to handle routing in React applications. Unlike traditional web apps, React apps don't reload pages — instead, they use components to display different views. Let’s add routing to a React app!
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Installing React Router</h2>
        <p>Use the following command to install React Router:</p>
        {renderCodeBlock("Install Command", codeSnippets.install)}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Creating Pages</h2>
        <p>Inside <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">src/pages/</code>, create these files:</p>
        <ul className="list-disc list-inside pl-4 text-sm sm:text-base md:text-lg space-y-1">
          <li>Home.js</li>
          <li>Blogs.js</li>
          <li>Contact.js</li>
          <li>NoPage.js</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Setting Up Routes</h2>
        <p>In <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">src/index.js</code>, set up the routes like this:</p>
        {renderCodeBlock("index.js", codeSnippets.indexJs)}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Creating the Home Component</h2>
        <p>Use the <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">&lt;Link&gt;</code> component from React Router to create navigation:</p>
        {renderCodeBlock("Home.js", codeSnippets.homeJs)}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Other Pages</h2>
        {renderCodeBlock("Blogs.js", codeSnippets.blogs)}
        {renderCodeBlock("Contact.js", codeSnippets.contact)}
        {renderCodeBlock("NoPage.js (404 Handler)", codeSnippets.nopage)}
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Previous: React Forms
      </p>
    </div>
  );
};

export default ReactRouter;
