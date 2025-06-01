import React from 'react';
import intro1 from '../../assets/css/intro1.png';
import intro2 from '../../assets/css/intro2.png';

const InformationAndHistory = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        CSS stands for <strong>Cascading Style Sheets</strong>. It’s a stylesheet language used to describe the appearance of an HTML document. While HTML creates the structure of the page, CSS handles how that structure looks—such as layout, colors, and fonts.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Why the word “Cascade”?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        The “cascade” in CSS refers to the hierarchy of rules and how the browser determines which styles to apply when multiple rules target the same element. This process considers specificity, inheritance, and order of declaration.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Why Use CSS?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        CSS allows developers to design visually appealing and user-friendly web pages. It separates content from design, enabling easier maintenance and greater control over layout and responsiveness.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">Visual Transformation Example:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure className="text-center">
          <figcaption className="font-medium mb-2">Without CSS</figcaption>
          <img src={intro1} alt="HTML page without CSS styling" className="w-full h-48 object-cover rounded-lg shadow" />
        </figure>
        <figure className="text-center">
          <figcaption className="font-medium mb-2">With CSS</figcaption>
          <img src={intro2} alt="HTML page with CSS styling" className="w-full h-48 object-cover rounded-lg shadow" />
        </figure>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold">Analogy to Understand CSS</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Imagine reading a book with plain, unformatted text—uninspiring and hard to read. Now imagine the same book with headings, fonts, colors, and layout. That’s the difference CSS makes on a webpage.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">How Does CSS Work?</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        CSS targets HTML elements using selectors and applies rules to them. Each rule includes a property and a value.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md font-mono text-sm mt-2 overflow-auto">
        <code>
          selector &#123;{'\n'}
          &nbsp;&nbsp;property: value;{'\n'}
          &#125;
        </code>
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold">Try This:</h2>
      <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
        <li>Right-click on any webpage and choose “Inspect” or press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd></li>
        <li>Use the element selector (arrow icon) to examine page elements</li>
        <li>Check out the applied CSS rules in the Styles tab</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold">Key Features of CSS</h2>
      <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
        <li>Handles layout and styling of web pages</li>
        <li>Works with HTML and XML documents</li>
        <li>Supports responsive design for different screens</li>
        <li>Enables effects like hover states and animations</li>
        <li>Modular and updatable without version numbers</li>
        <li>Reusable rules across multiple HTML documents</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold">A Brief History</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        CSS was proposed by Håkon Wium Lie in 1994 to improve the appearance of web documents. Early websites were mostly plain text used by researchers. As the web evolved, so did the need for better visual design—thus CSS was born.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold">References</h2>
      <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-gray-500 underline" target="_blank" rel="noreferrer">MDN HTML Tutorial</a></li>
        <li><a href="https://en.wikipedia.org/wiki/CSS" className="text-gray-500 underline" target="_blank" rel="noreferrer">CSS on Wikipedia</a></li>
        <li><a href="https://www.w3.org/Style/CSS/specs.en.html" className="text-gray-500 underline" target="_blank" rel="noreferrer">W3C CSS Specifications</a></li>
      </ul>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Your First CSS Website
      </p>
    </div>
  );
};

export default InformationAndHistory;
