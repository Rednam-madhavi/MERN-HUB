import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';

const CSSMathsFunctions = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `width: calc(100% - 20px);`,
    `width: max(50px, 50%);`,
    `width: min(100px, 10vw);`
  ];

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <p className="mb-4">
        Math functions in CSS help calculate dimensions or positioning dynamically,
        making layouts more responsive and adaptable.
      </p>

      {/* Calc() */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">1. <code>calc()</code> Function</h2>
        <p className="mb-3">
          Calculates a property value using mathematical expressions. Great for combining
          relative and absolute units.
        </p>

        <div className="relative mb-2">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            <code>{codeSnippets[0]}</code>
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[0], 0)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            aria-label="Copy code"
          >
            {copiedIndex === 0 ? <Check size={18} /> : <ClipboardCopy size={18} />}
          </button>
        </div>

        <p className="text-sm text-gray-600">
          This will subtract 20px from the container’s full width.
        </p>
      </section>

      {/* max() */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">2. <code>max()</code> Function</h2>
        <p className="mb-3">
          Returns the larger of two values, ensuring minimum sizing thresholds are respected.
        </p>

        <div className="relative mb-2">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            <code>{codeSnippets[1]}</code>
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[1], 1)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            aria-label="Copy code"
          >
            {copiedIndex === 1 ? <Check size={18} /> : <ClipboardCopy size={18} />}
          </button>
        </div>

        <p className="text-sm text-gray-600">
          The width will be whichever is greater: 50px or 50% of the container.
        </p>
      </section>

      {/* min() */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">3. <code>min()</code> Function</h2>
        <p className="mb-3">
          Returns the smaller of two values, preventing overflow in small viewports.
        </p>

        <div className="relative mb-2">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            <code>{codeSnippets[2]}</code>
          </pre>
          <button
            onClick={() => handleCopy(codeSnippets[2], 2)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            aria-label="Copy code"
          >
            {copiedIndex === 2 ? <Check size={18} /> : <ClipboardCopy size={18} />}
          </button>
        </div>

        <p className="text-sm text-gray-600">
          The width will be whichever is smaller: 100px or 10% of the viewport width.
        </p>
      </section>

      <p className="text-center text-sm sm:text-base md:text-lg font-medium text-gray-800 border-t pt-6">
        Next Chapter: CSS Size
      </p>
    </div>
  );
};

export default CSSMathsFunctions;
