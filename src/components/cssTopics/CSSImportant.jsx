import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';

const CSSImportant = () => {
  const [copied, setCopied] = useState(false);
  const cssCode = `property: value !important;`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">

      <p className="mb-4">
        In CSS, styles are applied in a certain order based on the cascade and specificity rules.
        Inline styles typically override external or internal stylesheets. But when you want to
        force a particular CSS rule to override all others, even inline ones, you can use the
        <code className="bg-gray-100 mx-1 px-1 rounded text-sm">!important</code> declaration.
      </p>

      <h2 className="text-xl font-semibold mb-2">Syntax</h2>
      <div className="relative mb-6">
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          <code>{cssCode}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <ClipboardCopy size={18} />}
        </button>
      </div>

      <p className="mb-8">
        Use <code className="bg-gray-100 px-1 rounded text-sm">!important</code> sparingly. It's useful for quick overrides, but excessive use can make your code difficult to maintain.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg font-medium text-gray-800 border-t pt-6">
        Next Chapter: <span className="underline">CSS Math Functions</span>
      </p>
    </div>
  );
};

export default CSSImportant;
