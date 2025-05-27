import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const ReactForms = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    clipboard.copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    {
      title: 'Handling Forms',
      description: 'In React, all the data is handled by the component and stored in the component state. We can change state with event handlers in the onChange attribute.',
      code: `import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');

  return (
    <form>
      <label>
        Enter your email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
    </form>
  );
}

export default Form;`
    },
    {
      title: 'Submitting Form',
      description: 'We can submit the form with the onSubmit attribute for the <form>.',
      code: `import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Your email is: \${email}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Form;`
    },
    {
      title: 'Multiple Inputs',
      description: 'We don’t need multiple states for multiple inputs; we can save all values in one object using the spread operator.',
      code: `import { useState } from 'react';

function Form() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Your email is: \${data.email} and your name is: \${data.name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email: <input type="email" name="email" value={data.email || ''} onChange={handleChange} />
      </label>
      <label>
        Enter your name: <input type="text" name="name" value={data.name || ''} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Form;`
    }
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        React Forms work similarly to HTML forms but rely on component <strong>state</strong> to handle inputs and submission.
      </p>

      {codeSnippets.map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">{section.title}</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">{section.description}</p>
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base md:text-lg p-4 rounded overflow-x-auto border border-gray-300 dark:border-gray-700 shadow-md">
              {section.code}
            </pre>
            <button
              onClick={() => handleCopy(section.code, index)}
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

      <p className="text-sm sm:text-base md:text-lg mt-8">
        In the last example, <code className="bg-gray-200 px-1 py-0.5 rounded font-mono text-sm">handleChange</code> uses the spread operator to preserve the previous input values while updating the new one. This allows us to store all form data inside a single state object.
      </p>
    </div>
  );
};

export default ReactForms;
