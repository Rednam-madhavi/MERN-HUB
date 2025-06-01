import React from 'react';
import example from '../../assets/css/links1.webp';
import output from '../../assets/css/links2.webp';

const CSSLinks = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">

      <p className="mb-4">
        To customize the appearance of HTML links on a webpage, CSS provides various pseudo-classes such as <code>:link</code>, <code>:visited</code>, <code>:hover</code>, and <code>:active</code>.
      </p>

      <h2 className="text-xl font-semibold mb-2text-gray-800">Example:</h2>
      <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
        <code>{`a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: hotpink;
}

a:active {
  color: red;
}`}</code>
      </pre>

      <img src={example} alt="CSS links example HTML" className="rounded shadow mb-6" />

      <h2 className="text-xl font-semibold mb-2 text-gray-800">Output:</h2>
      <img src={output} alt="CSS links output screenshot" className="rounded shadow mb-6" />

      <p className="mb-6">
        In the output, you can see the link color changes to <span className="font-semibold text-pink-600">hotpink</span> when hovered over. Also, since the <code>target</code> is set to <code>_blank</code>, the link opens in a new browser tab.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Topic: CSS Pseudo-classes
      </p>
    </div>
  );
};

export default CSSLinks;
