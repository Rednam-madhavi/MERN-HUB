import React from 'react';
import example from '../../assets/css/buttons1.webp';
import output from '../../assets/css/buttons2.webp';

const CSSButtons = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-base">
        Buttons can be styled in CSS to match the theme and aesthetic of your website. You can modify their colors, borders, padding, hover effects, and more.
      </p>

      <div>
        <h2 className="text-lg font-semibold">Styled Button Preview</h2>
        <img
          src={example}
          alt="Styled Button Example"
          className="rounded shadow-md mx-auto"
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Hover Effect Preview</h2>
        <img
          src={output}
          alt="Styled Button Hover State"
          className="rounded shadow-md mx-auto"
        />
      </div>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Overflow
      </p>

    </div>
  );
};

export default CSSButtons;
