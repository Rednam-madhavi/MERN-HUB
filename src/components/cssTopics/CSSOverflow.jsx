import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';
import overflow1 from '../../assets/css/overflow1.webp';
import overflow2 from '../../assets/css/overflow2.webp';
import overflow3 from '../../assets/css/overflow3.webp';
import overflow4 from '../../assets/css/overflow4.webp';

const CSSOverflow = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const snippets = [
    `/* Overflow: visible */\ndiv {\n  overflow: visible;\n}`,
    `div {\n  background-color: rebeccapurple;\n  width: 200px;\n  height: 60px;\n  border: 2px solid;\n  overflow: hidden;\n}`,
    `div {\n  background-color: rebeccapurple;\n  width: 200px;\n  height: 60px;\n  border: 2px solid;\n  overflow: scroll;\n}`,
    `div {\n  background-color: rebeccapurple;\n  width: 200px;\n  height: 60px;\n  border: 2px solid;\n  overflow: auto;\n}`
  ];

  const titles = [
    'Overflow: visible',
    'Overflow: hidden',
    'Overflow: scroll',
    'Overflow: auto'
  ];

  const descriptions = [
    'This makes the entire content visible, even if it overflows outside the container.',
    'This hides any overflow content that exceeds the container boundaries.',
    'This adds scrollbars to the container so that overflowing content can be scrolled into view.',
    'This behaves like scroll, but only adds scrollbars when needed — if the content exceeds the container size.'
  ];

  const images = [overflow1, overflow2, overflow3, overflow4];

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <p className="mb-6">
        When content exceeds the boundaries of its container, the <code className="bg-gray-100 px-1 rounded">overflow</code> property helps manage visibility and scroll behavior.
      </p>

      {titles.map((title, index) => (
        <section className="mb-10" key={index}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="mb-2">{descriptions[index]}</p>

          <div className="relative mb-4">
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              <code>{snippets[index]}</code>
            </pre>
            <button
              onClick={() => handleCopy(snippets[index], index)}
              className="absolute top-2 right-2 text-gray-600 hover:text-indigo-600"
              aria-label="Copy code"
            >
              {copiedIndex === index ? <Check size={18} /> : <ClipboardCopy size={18} />}
            </button>
          </div>

          <img
            src={images[index]}
            alt={`${title} example`}
            className="rounded shadow-md"
          />
        </section>
      ))}

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Float
      </p>
    </div>
  );
};

export default CSSOverflow;
