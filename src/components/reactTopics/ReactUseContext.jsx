import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import usecontext from '../../assets/react/usecontext.png';

const ReactUseContext = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleCopy = () => {
    clipboard.copy(`import { useState, createContext, useContext } from "react";

const StateContext = createContext();

function App() {
  const [state, setState] = useState('true');

  return (
    <StateContext.Provider value={state}>
      <h1>{\`Hi! My state is \${state}!\`}</h1>
      <Home />
    </StateContext.Provider>
  );
}

function Home() {
  const state = useContext(StateContext);

  return (
    <>
      <h2>{\`Hii! My state is \${state}!\`}</h2>
    </>
  );
}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <code className="bg-gray-200 px-1 rounded font-mono">useContext</code> helps you manage state globally across components—no more prop drilling!
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Problem</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Suppose there’s a button in <code className="font-mono">&lt;Navbar /&gt;</code> that affects content in <code className="font-mono">&lt;Home /&gt;</code>.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          You can't keep the state in either component. You’d lift it to <code className="font-mono">App.js</code> and pass it down as props through several layers.
        </p>
        <p className="text-sm sm:text-base md:text-lg">This is shown in the component hierarchy below:</p>

        <img
          src={usecontext}
          alt="React useContext example"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
          onClick={() => openModal(usecontext)}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Solution — Create Context</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Start by creating a context:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {`import { createContext } from "react";

const StateContext = createContext();`}
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Context Provider</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Wrap the components that need access to the context inside the provider:
        </p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
            {`function App() {
  const [state, setState] = useState('true');

  return (
    <StateContext.Provider value={state}>
      <h1>{\`Hi! My state is \${state}!\`}</h1>
      <Home />
    </StateContext.Provider>
  );
}`}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {copied ? (
              <CheckIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Accessing the Context via <code className="font-mono">useContext</code></h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Import and consume the context like this:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
          {`function Home() {
  const state = useContext(StateContext);

  return (
    <>
      <h2>{\`Hii! My state is \${state}!\`}</h2>
    </>
  );
}`}
        </pre>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 p-1 rounded"
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt="Modal Preview"
              className="max-w-full max-h-[90vh] rounded-md shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactUseContext;
