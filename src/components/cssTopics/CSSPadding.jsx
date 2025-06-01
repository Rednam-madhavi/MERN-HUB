import React from 'react';
import padding1 from '../../assets/css/padding1.png';
import padding2 from '../../assets/css/padding2.png';
import padding3 from '../../assets/css/padding3.png';
import padding4 from '../../assets/css/padding4.png';
import padding from '../../assets/css/padding.mp4';

const CSSPadding = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p>
        <strong>Padding</strong> is the space between the HTML content and the border. It gives internal spacing and helps enhance the layout of a website.
      </p>

      <p>Consider the image below:</p>
      <img src={padding1} alt="Padding example around content" className="rounded shadow" />

      <p>Here, the space between the content “CodeWithHarry” and the border is the padding.</p>

      <h2 className="text-xl font-semibold">Method 1: Equal Padding on All Sides</h2>
      <p>
        Applies the same padding to top, right, bottom, and left using one value:
      </p>
      <img src={padding2} alt="CSS padding single value" className="rounded shadow" />

      <h2 className="text-xl font-semibold">Method 2: Vertical and Horizontal Padding</h2>
      <p>
        Uses two values: the first is for top & bottom (vertical), and the second for left & right (horizontal):
      </p>
      <img src={padding3} alt="CSS padding two values" className="rounded shadow" />

      <h2 className="text-xl font-semibold">Method 3: Padding on All Four Sides Individually</h2>
      <p>
        Applies padding in the order: top, right, bottom, left.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Top: value1</li>
        <li>Right: value2</li>
        <li>Bottom: value3</li>
        <li>Left: value4</li>
      </ul>
      <img src={padding4} alt="CSS padding four values" className="rounded shadow" />

      <h2 className="text-xl font-semibold">Playground: Inspect Tool</h2>
      <p>You can explore padding in real time using browser DevTools:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Right-click an element and choose "Inspect"</li>
        <li>Open the "Computed" tab</li>
        <li>Interact with the box model to view padding values</li>
      </ul>

      <div className="mt-6">
        <video
          src={padding}
          controls
          className="rounded shadow w-full max-w-2xl mx-auto"
        >
          Your browser does not support the video tag.
        </video>
        <p className="text-center mt-2 text-sm text-gray-500">Video: Inspecting Padding with DevTools</p>
      </div>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Margin
      </p>
    </div>
  );
};

export default CSSPadding;
