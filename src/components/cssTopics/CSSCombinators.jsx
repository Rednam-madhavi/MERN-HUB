import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';
import combinators1 from '../../assets/css/combinators1.webp';
import combinators2 from '../../assets/css/combinators2.webp';
import combinators3 from '../../assets/css/combinators3.webp';
import combinators4 from '../../assets/css/combinators4.webp';

const CSSCombinators = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    `div p {\n  color: wheat;\n  background-color: rebeccapurple;\n}`,
    `div > p {\n  color: wheat;\n  background-color: rebeccapurple;\n}`,
    `div + p {\n  color: wheat;\n  background-color: rebeccapurple;\n}`,
    `div ~ p {\n  color: wheat;\n  background-color: rebeccapurple;\n}`,
  ];

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <p className="mb-6">
        CSS combinators define the relationship between multiple selectors. There are four main types of combinators:
        descendant, child, adjacent sibling, and general sibling.
      </p>

      {/* Sections */}
      {[
        {
          title: '1. Descendant Selector (space)',
          description: 'Selects all elements inside another specified element.',
          image: combinators1,
        },
        {
          title: '2. Child Selector (>)',
          description: 'Selects only the first-level children of a specified element.',
          image: combinators2,
        },
        {
          title: '3. Adjacent Sibling Selector (+)',
          description: 'Selects the element immediately following the specified one.',
          image: combinators3,
        },
        {
          title: '4. General Sibling Selector (~)',
          description: 'Selects all siblings after the specified element.',
          image: combinators4,
        },
      ].map((item, i) => (
        <section className="mb-10" key={i}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h2>
          <p className="mb-2">{item.description}</p>

          <div className="relative mb-4">
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              <code>{codeSnippets[i]}</code>
            </pre>
            <button
              onClick={() => handleCopy(codeSnippets[i], i)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              aria-label="Copy code"
            >
              {copiedIndex === i ? <Check size={18} /> : <ClipboardCopy size={18} />}
            </button>
          </div>

          <img src={item.image} alt={`${item.title} output`} className="rounded shadow" />
        </section>
      ))}

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Pseudo-classes
      </p>
    </div>
  );
};

export default CSSCombinators;
