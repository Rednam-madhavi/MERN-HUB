import React from 'react';

const CSSPseudoClasses = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">

      <p className="mb-4">
        A <span className="font-semibold">pseudo-class</span> defines a special state of an HTML element. It allows you to style elements dynamically based on user interaction or their current status.
      </p>

      <p className="mb-4">
        Common pseudo-classes include: <code className="bg-gray-100 px-1 py-0.5 rounded">:hover</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">:visited</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">:active</code>, and <code className="bg-gray-100 px-1 py-0.5 rounded">:link</code>.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-gray-800">Syntax:</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6 text-sm overflow-auto">
        <code>{`selector:pseudo-class {
  property: value;
}`}</code>
      </pre>

      <h2 className="text-xl font-semibold mb-2 text-gray-800">Learn More:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="/css/hover" className="text-gray-800 underline hover:text-gray-800">CSS :hover</a>
        </li>
        <li>
          <a href="/css/links" className="text-gray-800 underline hover:text-gray-800">CSS Link States</a>
        </li>
      </ul>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Up Next: CSS Pseudo-elements
      </p>
    </div>
  );
};

export default CSSPseudoClasses;
