import React from 'react';
import selectors1 from '../../assets/css/selectors1.png';
import selectors2 from '../../assets/css/selectors2.png';
import selectors3 from '../../assets/css/selectors3.png';
import selectors4 from '../../assets/css/selectors4.png';
import selectors5 from '../../assets/css/selectors5.png';

const CSSSelectors = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      
      <p className="text-base leading-relaxed">
        CSS selectors allow you to target specific HTML elements and apply styles to them. There are several types of CSS selectors, each designed for different use cases.
      </p>

      <h2 className="text-xl font-semibold">1. Universal Selector (<code>*</code>)</h2>
      <p>
        The universal selector targets all elements on the page.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto">
        <code>{`* {
  property: value;
}`}</code>
      </pre>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto">
        <code>{`<style>
  * {
    color: purple;
    text-align: center;
  }
</style>`}</code>
      </pre>
      <div className="flex justify-center">
        <img src={selectors1} alt="Universal Selector Output" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>

      <h2 className="text-xl font-semibold">2. Element Selector</h2>
      <p>
        Selects HTML elements based on tag name.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto">
        <code>{`p {
  text-decoration: underline;
}`}</code>
      </pre>
      <div className="flex justify-center">
        <img src={selectors2} alt="Element Selector Output" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>

      <h2 className="text-xl font-semibold">3. ID Selector</h2>
      <p>
        Targets a specific element by its ID using <code>#</code>.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto">
        <code>{`#title {
  text-align: center;
  color: red;
}`}</code>
      </pre>
      <div className="flex justify-center">
        <img src={selectors3} alt="ID Selector Output" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>

      <h2 className="text-xl font-semibold">4. Class Selector</h2>
      <p>
        Targets elements by class name using <code>.</code>.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto">
        <code>{`.red {
  color: red;
}`}</code>
      </pre>
      <div className="flex justify-center">
        <img src={selectors4} alt="Class Selector Output" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>

      <h2 className="text-xl font-semibold">5. Group Selector</h2>
      <p>
        Groups multiple selectors to apply the same style.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto">
        <code>{`h1 {
  color: red;
}
p, a {
  color: purple;
}`}</code>
      </pre>
      <div className="flex justify-center">
        <img src={selectors5} alt="Group Selector Output" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>

      <h2 className="text-xl font-semibold">Summary</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Universal Selector (*):</strong> Targets all elements on the page.</li>
        <li><strong>Element Selector:</strong> Targets elements by tag name.</li>
        <li><strong>ID Selector (#):</strong> Targets an element with a specific ID.</li>
        <li><strong>Class Selector (.):</strong> Targets elements sharing the same class.</li>
        <li><strong>Group Selector:</strong> Groups multiple selectors to reduce repetition.</li>
      </ul>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Comments
      </p>
    </div>
  );
};

export default CSSSelectors;
