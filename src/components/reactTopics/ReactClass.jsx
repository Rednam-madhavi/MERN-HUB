import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactClass = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`class Cat extends React.Component {
  constructor() {
    super();
    this.state = { color: "orange" };
  }

  render() {
    return <h1>Meow's color is {this.state.color}</h1>;
  }
}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Before making a class-based component, we need to inherit functionality from <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono dark:bg-gray-500">React.Component</code>. This is done using the <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono dark:bg-gray-500">extends</code> keyword.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Basic Class Component</h2>
      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
{`class Cat extends React.Component {
  render() {
    return <h1>Meow</h1>;
  }
}`}
        </pre>
      </div>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        It also requires a <strong>render()</strong> method, which returns the JSX (HTML). <br />
        <span className="font-semibold text-blue-600">Note:</span> Component names must start with an uppercase letter.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Component Constructor</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The constructor is called when the component is created. This is where we initialize the component’s properties using state.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Also, don’t forget to call <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono dark:bg-gray-500">super()</code>, which lets the component access React.Component's features.
      </p>

      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
{`class Cat extends React.Component {
  constructor() {
    super();
    this.state = { color: "orange" };
  }

  render() {
    return <h1>Meow's color is {this.state.color}</h1>;
  }
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

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Up Next: Functional Components in React
      </p>
    </div>
  );
};

export default ReactClass;
