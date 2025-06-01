import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';
import float1 from '../../assets/css/float1.webp';
import float2 from '../../assets/css/float2.webp';
import float3 from '../../assets/css/float3.webp';

const CSSFloat = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `img {\n  /* No float */\n}`,
    `img {\n  float: right;\n  margin-left: 15px;\n}`
  ];

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <p className="mb-4">
        Just like the “wrap text” feature in MS Word, the <code className="bg-gray-100 px-1 rounded">float</code> property allows text to flow beside images or other elements. This is especially helpful for layout designs where text and visuals need to sit side-by-side.
      </p>

      {/* Without float */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">1. Without Float Property</h2>
        <p className="mb-2">This is how the image behaves by default without any float applied:</p>

        <div className="relative mb-4">
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

        <img
          src={float1}
          alt="Image without float"
          className="rounded shadow mb-2"
        />
        <p className="text-sm text-gray-600">Output: No float applied</p>
      </section>

      {/* With float */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">2. With Float Property</h2>
        <p className="mb-2">Adding <code>float: right;</code> makes the image align to the right and allows text to wrap around it:</p>

        <div className="relative mb-4">
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

        <img
          src={float2}
          alt="Image floated right"
          className="rounded shadow mb-2"
        />
        <p className="text-sm text-gray-600">Output: Float right</p>
      </section>

      {/* Bonus visual comparison */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">3. Comparison View</h2>
        <p className="mb-2">Here’s a side-by-side visual showing the effect of float:</p>
        <img
          src={float3}
          alt="Float comparison output"
          className="rounded shadow"
        />
      </section>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS !important
      </p>
    </div>
  );
};

export default CSSFloat;
