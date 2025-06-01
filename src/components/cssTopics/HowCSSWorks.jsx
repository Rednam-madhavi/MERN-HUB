import React from 'react';
import works1 from '../../assets/css/works1.png';
import works2 from '../../assets/css/works2.png';

const HowCSSWorks = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">


      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        We’ve written our first CSS style, but how does it actually apply to a webpage? Let’s look at how CSS works with the DOM model.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Step-by-Step Process</h2>
      <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
        <li>The user enters a URL and presses Enter.</li>
        <li>The browser sends a request to the server.</li>
        <li>The HTML file is fetched from the server.</li>
        <li>The HTML is converted into a DOM (Document Object Model) — each tag becomes a node.</li>
        <li>The browser fetches all related assets (CSS files, images, fonts, etc.).</li>
        <li>The CSS is parsed and grouped by selectors (e.g., element, class, ID).</li>
        <li>CSS is attached to the respective DOM nodes — this forms the render tree.</li>
        <li>The browser uses the render tree to paint the styled web page on the screen.</li>
      </ol>

      <h2 className="text-xl sm:text-2xl font-semibold">Visual Representation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure className="text-center">
          <figcaption className="font-medium mb-2">DOM Example</figcaption>
          <img src={works1} alt="DOM structure example" className="w-full h-48 object-contain rounded-lg shadow" />
        </figure>
        <figure className="text-center">
          <figcaption className="font-medium mb-2">Website Painting</figcaption>
          <img src={works2} alt="Rendered website after painting" className="w-full h-48 object-contain rounded-lg shadow" />
        </figure>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold">What is the DOM?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The DOM (Document Object Model) is a tree-like structure representing every tag and element on a web page. Each tag becomes a node, forming parent-child relationships. It acts as a grayprint for the browser to understand and render the web page content.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The DOM is essentially an API that allows JavaScript and other technologies to interact with HTML and modify content dynamically.
      </p>


      <h2 className="text-xl sm:text-2xl font-semibold">Helpful References</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-gray-500 underline" target="_blank" rel="noreferrer">
            How HTML Works (MDN)
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" className="text-gray-500 underline" target="_blank" rel="noreferrer">
            MDN: Document Object Model (DOM)
          </a>
        </li>
      </ul>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Syntax of CSS
      </p>
    </div>
  );
};

export default HowCSSWorks;
