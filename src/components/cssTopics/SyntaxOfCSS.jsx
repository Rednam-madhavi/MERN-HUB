import React from 'react';
import syntax from '../../assets/css/syntax.png';

const SyntaxOfCSS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">


      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        CSS follows a rule-based syntax. Each rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>. The selector targets HTML elements, and the declaration block contains one or more <strong>property-value pairs</strong>.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Basic Syntax</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm sm:text-base">
        <code>
          {`selector {
  property: value;
}`}
        </code>
      </pre>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <strong>Note:</strong> Every property-value pair ends with a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">;</code> semicolon. This is important, especially when writing multiple declarations.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Example</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm sm:text-base">
        <code>
          {`h2 {
  color: blue;
}`}
        </code>
      </pre>

      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
        <li><strong>h2</strong>: This is the <em>selector</em>.</li>
        <li><strong>color</strong>: This is the <em>property</em>.</li>
        <li><strong>blue</strong>: This is the <em>value</em> assigned to the property.</li>
      </ul>

      <div className="flex justify-center">
        <img src={syntax} alt="CSS Syntax Chart" className="w-full max-w-md rounded-lg shadow-md" />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold">Multiple Declarations</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        You can include multiple property-value pairs in a single rule:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm sm:text-base">
        <code>
          {`button {
  color: white;
  background-color: black;
  border: transparent;
  border-radius: 5px;
}`}
        </code>
      </pre>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Here, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">button</code> is the selector and all the lines inside are CSS declarations separated by semicolons.
      </p>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Ways to add CSS
      </p>

    </div>
  );
};

export default SyntaxOfCSS;
