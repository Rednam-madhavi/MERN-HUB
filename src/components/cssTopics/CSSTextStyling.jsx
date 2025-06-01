import React from 'react';
import textstyling1 from '../../assets/css/textstyling1.png';
import textstyling2 from '../../assets/css/textstyling2.png';
import textstyling3 from '../../assets/css/textstyling3.png';
import textstyling4 from '../../assets/css/textstyling4.png';
import textstyling5 from '../../assets/css/textstyling5.png';
import textstyling6 from '../../assets/css/textstyling6.png';

const CSSTextStyling = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <section>
        <h2 className="text-lg font-semibold">1. Text Decoration</h2>
        <p>
          The <code>text-decoration</code> property adds visual decoration to text such as underline, overline, or line-through.
        </p>
        <img src={textstyling1} alt="text-decoration examples" className="rounded shadow" />
      </section>

      <section>
        <h2 className="text-lg font-semibold">2. Text Alignment</h2>
        <p>
          The <code>text-align</code> property aligns the text horizontally within its container. Values include: left, center, right, and justify.
        </p>
        <img src={textstyling2} alt="text alignment examples" className="rounded shadow" />
      </section>

      <section>
        <h2 className="text-lg font-semibold">3. Text Transformation</h2>
        <p>
          The <code>text-transform</code> property changes the case of text. It can be uppercase, lowercase, capitalize, or none.
        </p>
        <img src={textstyling3} alt="text transformation examples" className="rounded shadow" />
      </section>

      <section>
        <h2 className="text-lg font-semibold">4. Letter Spacing</h2>
        <p>
          The <code>letter-spacing</code> property adjusts the spacing between individual characters.
        </p>
        <img src={textstyling4} alt="letter spacing example" className="rounded shadow" />
      </section>

      <section>
        <h2 className="text-lg font-semibold">5. Line Height</h2>
        <p>
          The <code>line-height</code> property defines the vertical space between lines of text.
        </p>
        <img src={textstyling5} alt="line height example" className="rounded shadow" />
      </section>

      <section>
        <h2 className="text-lg font-semibold">6. Text Shadow</h2>
        <p>
          The <code>text-shadow</code> property applies shadow effects to text, enhancing its visual impact.
        </p>
        <img src={textstyling6} alt="text shadow example" className="rounded shadow" />
      </section>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS Box Model
      </p>
    </div>
  );
};

export default CSSTextStyling;
