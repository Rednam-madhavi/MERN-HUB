import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import borderimage1 from '../../assets/css/borderimages1.webp';
import borderimage2 from '../../assets/css/borderimages2.webp';
import borderimage3 from '../../assets/css/borderimages3.webp';
import borderimage4 from '../../assets/css/borderimages4.webp';

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

const CSSBorderImages = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section>
        <p className="text-base leading-relaxed">
          While CSS offers traditional border styling options, it also supports using images as borders. This enables developers to use decorative graphics to enhance the look of UI elements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <p>
          Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-image</code> property to set an image as the border of an element. Here's an example:
        </p>
        <CodeBlock code={`border-image: url('border.webp') 50%;`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example Output</h2>
        <img src={borderimage1} alt="Border Image Example 1" className="max-w-full rounded-md shadow-md mb-4" />
        <p className="text-base leading-relaxed">
          You can control how the image is sliced and displayed around the border by modifying the percentage or pixel values in the shorthand.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">CSS Example</h2>
        <CodeBlock
          code={`div {
  border: 10px solid transparent;
  border-image: url('border.webp') 30 round;
}`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">More Examples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src={borderimage2} alt="Border Example 2" className="rounded shadow-md" />
          <img src={borderimage3} alt="Border Example 3" className="rounded shadow-md" />
          <img src={borderimage4} alt="Border Example 4" className="rounded shadow-md" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          CSS border images provide a creative way to style your components with custom graphical borders. They are especially useful in themed designs and visually rich UIs.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Gradients
      </p>
    </div>
  );
};

export default CSSBorderImages;
