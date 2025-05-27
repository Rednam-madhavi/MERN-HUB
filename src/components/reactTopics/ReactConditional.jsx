import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactConditional = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    {
      label: 'Using && Operator',
      code: `function App() {
  const loading = true;

  return (
    <div className="App">
      {loading && <LoadingGif />}
      {!loading && <Content />}
    </div>
  );
}`,
      explanation: `Here we're saying: if loading is true, show <LoadingGif />. 
If it's false, it won't render anything. The second condition (!loading) also returns false, so <Content /> is not rendered.`
    },
    {
      label: 'Using Ternary Operator',
      code: `function App() {
  const loading = true;

  return (
    <div className="App">
      {loading ? <LoadingGif /> : <Content />}
    </div>
  );
}`,
      explanation: `This is a classic if/else approach using the ternary operator. 
If loading is true, it shows <LoadingGif />, otherwise it shows <Content />.`
    }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        One of the best features of React is the ability to conditionally render components and elements!
        Let's look at two common ways: the <strong>&& operator</strong> and the <strong>ternary operator</strong>.
      </p>

      {codeSnippets.map((snippet, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">{snippet.label}</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
            {snippet.explanation}
          </p>

          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(snippet.code, index)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      ))}

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Previous Chapter: React Lists
      </p>
    </div>
  );
};

export default ReactConditional;
