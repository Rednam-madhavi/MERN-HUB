import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

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
      <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {copied ? (
          <CheckIcon className="h-5 w-5 text-green-500" />
        ) : (
          <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
};

const ReactComponents = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold">Types of Components in React</h1>

      <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
        <li>Class Based Components</li>
        <li>Function Based Components</li>
      </ul>

      <h2 className="text-xl font-semibold">Class Based Components</h2>
      <p className="text-base leading-relaxed">
        Before creating a class-based component, you need to inherit from <code className="bg-gray-200 px-1 rounded font-mono dark:bg-gray-500">React.Component</code> using <code className="bg-gray-200 px-1 rounded font-mono dark:bg-gray-500">extends</code>.
      </p>

      <CodeBlock
        code={`class Cat extends React.Component {
  render() {
    return <h1>Meow</h1>;
  }
}`}
      />

      <p className="text-base italic text-yellow-700 dark:text-yellow-400">
        It must include a <code className="bg-gray-200 px-1 rounded font-mono dark:bg-gray-500">render()</code> method that returns HTML.
      </p>

      <h2 className="text-xl font-semibold">Function Based Components</h2>
      <p className="text-base leading-relaxed">
        Simpler syntax — just return the HTML from a function:
      </p>

      <CodeBlock
        code={`function Cat() {
  return <h1>Meow</h1>;
}`}
      />

      <p className="text-base italic text-blue-700 dark:text-blue-400">
        Component names must start with an uppercase letter.
      </p>

      <h2 className="text-xl font-semibold">Rendering a Component</h2>
      <p className="text-base leading-relaxed">
        To use a component, simply use this syntax:
      </p>

      <CodeBlock code={`<ComponentName />`} />

      <h2 className="text-xl font-semibold">Components in Files</h2>
      <p className="text-base leading-relaxed">
        Create components in separate files for reusability and cleaner structure.
      </p>

      <CodeBlock
        code={`// Cat.js
function Cat() {
  return <h1>Meow</h1>;
}

export default Cat;`}
      />

      <p className="text-base italic text-blue-700 dark:text-blue-400">
        Tip: The file name should start with an uppercase letter.
      </p>

      <h2 className="text-xl font-semibold">Props</h2>
      <p className="text-base leading-relaxed">
        Use <strong>props</strong> to pass data to components and customize their behavior.
      </p>

      <CodeBlock
        code={`function Cat(props) {
  return <h1>Meow's color is {props.color}</h1>;
}`}
      />

      <CodeBlock
        code={`<Cat color="purple" />`}
      />
    </div>
  );
};

export default ReactComponents;
