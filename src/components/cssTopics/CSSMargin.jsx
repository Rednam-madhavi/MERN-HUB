import React from 'react';
import margin1 from '../../assets/css/margin1.png';
import margin2 from '../../assets/css/margin2.png';
import margin3 from '../../assets/css/margin3.png';
import margin4 from '../../assets/css/margin4.png';

const CSSMargin = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p>
        <strong>Margin</strong> is the space outside the HTML element. It provides external spacing and helps visually separate elements on a web page.
      </p>

      <p>Observe the image below:</p>
      <img src={margin1} alt="Margin visualization" className="rounded shadow" />
      <p>In this image, the space outside the border is the margin.</p>

      <h2 className="text-xl font-semibold">Method 1: Equal Margin on All Sides</h2>
      <p>
        You can apply the same margin to top, right, bottom, and left using a single value.
      </p>
      <img src={margin2} alt="CSS margin single value" className="rounded shadow" />

      <h2 className="text-xl font-semibold">Method 2: Vertical and Horizontal Margins</h2>
      <p>
        This method uses two values: the first for top & bottom, and the second for left & right.
      </p>
      <img src={margin3} alt="CSS margin two values" className="rounded shadow" />

      <h2 className="text-xl font-semibold">Method 3: Individual Sides</h2>
      <p>
        Four values can be provided to apply margin to each side individually in this order:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Top: value1</li>
        <li>Right: value2</li>
        <li>Bottom: value3</li>
        <li>Left: value4</li>
      </ul>
      <img src={margin4} alt="CSS margin four values" className="rounded shadow" />

      <p className="text-sm text-gray-500 italic">
        Tip: You can also use the browser's DevTools to visually inspect and experiment with margins in real-time.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Hover
      </p>
    </div>
  );
};

export default CSSMargin;
