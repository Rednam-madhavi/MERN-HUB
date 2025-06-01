import React from 'react';
import hover from '../../assets/css/hover.mp4';

const CSSHover = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p>
        The <strong>:hover</strong> pseudo-class in CSS is used to apply styles to an element when the user places their mouse pointer over it. This is commonly used to create interactive effects and improve user experience.
      </p>

      <h2 className="text-lg font-semibold">How it works:</h2>
      <p>
        You can change the text color, background, borders, shadows, transform effects, and more when a user hovers over an element.
      </p>

      <img src={hover} alt="CSS hover example" className="rounded shadow" />

      <p className="text-sm text-gray-500 italic">
        Tip: Hover effects are not limited to text — try them on buttons, cards, images, and links to add interactivity.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Cursors
      </p>
    </div>
  );
};

export default CSSHover;
