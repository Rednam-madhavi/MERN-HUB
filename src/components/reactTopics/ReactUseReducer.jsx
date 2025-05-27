import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactUseReducer = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(`import { useReducer } from "react";
 
const initialData = {
  lowercase: '',
  uppercase: '',
  spaces: ''
}
 
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOWERCASE':
      return {...state, [action.payload.name]: action.payload.value.toLowerCase()}
    case 'UPPERCASE':
      return {...state, [action.payload.name]: action.payload.value.toUpperCase()}
    case 'SPACES':
      return {...state, [action.payload.name]: action.payload.value.replaceAll(' ', '')}
    default:
      return state;
  }
};
 
function App() {
  const [data, dispatch] = useReducer(reducer, initialData);
 
  const handleChange = (e) => {
    dispatch({ type: e.target.name.toUpperCase(), payload: {name: e.target.name, value: e.target.value} });
  };
 
  return (
    <>
      <form>
        <input type="text" placeholder="Only Lowercase" name="lowercase" onChange={handleChange} value={data.lowercase} /><br />
        <input type="text" placeholder="Only Uppercase" name="uppercase" onChange={handleChange} value={data.uppercase} /><br />
        <input type="text" placeholder="No Spaces" name="spaces" onChange={handleChange} value={data.spaces} />
      </form>
    </>
  );
}
 
export default App;`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <code className="bg-gray-200 px-1 py-0.5 rounded font-mono text-sm">useReducer</code> is similar to the <code className="bg-gray-200 px-1 py-0.5 rounded font-mono text-sm">useState</code> hook, but it's more suitable for managing complex state logic and multiple related state transitions.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">When to Use <code className="font-mono">useReducer</code>?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <code className="font-mono">useReducer</code> is preferable when:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>You have complex state logic.</li>
          <li>Multiple state values are updated in a single action.</li>
          <li>You need to optimize performance by avoiding prop drilling with callbacks.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Syntax</h2>
        <p className="text-sm sm:text-base md:text-lg">
          <code className="bg-gray-200 px-1 py-0.5 rounded font-mono text-sm">
            const [state, dispatch] = useReducer(reducer, initialState);
          </code>
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          - <strong>reducer</strong>: A function that returns the new state based on the current state and action.<br />
          - <strong>initialState</strong>: The starting state value.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Example</h2>
        <p className="text-sm sm:text-base md:text-lg">Below is an example of using <code className="font-mono">useReducer</code> to transform text input values:</p>

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
{`import { useReducer } from "react";
 
const initialData = {
  lowercase: '',
  uppercase: '',
  spaces: ''
}
 
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOWERCASE':
      return {...state, [action.payload.name]: action.payload.value.toLowerCase()}
    case 'UPPERCASE':
      return {...state, [action.payload.name]: action.payload.value.toUpperCase()}
    case 'SPACES':
      return {...state, [action.payload.name]: action.payload.value.replaceAll(' ', '')}
    default:
      return state;
  }
};
 
function App() {
  const [data, dispatch] = useReducer(reducer, initialData);
 
  const handleChange = (e) => {
    dispatch({ type: e.target.name.toUpperCase(), payload: {name: e.target.name, value: e.target.value} });
  };
 
  return (
    <>
      <form>
        <input type="text" placeholder="Only Lowercase" name="lowercase" onChange={handleChange} value={data.lowercase} /><br />
        <input type="text" placeholder="Only Uppercase" name="uppercase" onChange={handleChange} value={data.uppercase} /><br />
        <input type="text" placeholder="No Spaces" name="spaces" onChange={handleChange} value={data.spaces} />
      </form>
    </>
  );
}
 
export default App;`}
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

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: useCallback
      </p>
    </div>
  );
};

export default ReactUseReducer;
