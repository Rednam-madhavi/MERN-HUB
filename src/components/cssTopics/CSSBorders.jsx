import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

import borderStyleImg from '../../assets/css/border1.png';
import borderColorImg from '../../assets/css/border2.png';
import borderWidthImg from '../../assets/css/border3.png';
import borderRadiusImg from '../../assets/css/border4.png';
import borderCollapseImg from '../../assets/css/border5.png';
import borderSeparateImg from '../../assets/css/border6.png';
import borderSpacingImg from '../../assets/css/border7.png';
import borderShorthandImg from '../../assets/css/border8.png';

const SectionImage = ({ src, alt }) => (
    <div className="my-4">
        <img src={src} alt={alt} className="rounded-md shadow-md w-full sm:w-3/4 lg:w-1/2" />
    </div>
);


const CodeBlock = ({ code }) => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        clipboard.copy(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
}

const CSSBorders = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">
            <p className="text-base md:text-lg leading-relaxed">
                CSS borders help define the visual boundaries of HTML elements. They can be applied to elements like <code>div</code>, <code>p</code>, <code>h1</code>, and more.
            </p>

            {/* Border Style */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Border Style</h2>
                <p>
                    The <code>border-style</code> property defines the style of the border. Common styles include:
                </p>
                <ul className="list-disc list-inside">
                    <li><code>none</code></li>
                    <li><code>hidden</code></li>
                    <li><code>dotted</code></li>
                    <li><code>dashed</code></li>
                    <li><code>solid</code></li>
                    <li><code>double</code></li>
                    <li><code>groove</code></li>
                    <li><code>ridge</code></li>
                    <li><code>inset</code></li>
                    <li><code>outset</code></li>
                </ul>
                <p className="font-medium">Example:</p>
                <CodeBlock code={`<style>
  .dotted { border-style: dotted; }
  .dashed { border-style: dashed; }
  .solid { border-style: solid; }
  .double { border-style: double; }
</style>`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <SectionImage src={borderStyleImg} alt="CSS Border Styles" />
            </section>

            {/* Border Color */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Border Color</h2>
                <p>
                    The <code>border-color</code> property sets the color of the border. You can use color names, hex codes, RGB, or HSL values.
                </p>
                <p className="font-medium">Example:</p>
                <CodeBlock code={`<style>
  .solid { border-style: solid; border-color: red; }
  .dashed { border-style: dashed; border-color: #00FF00; }
</style>`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <SectionImage src={borderColorImg} alt="CSS Border Colors" />
            </section>

            {/* Border Width */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Border Width</h2>
                <p>
                    The <code>border-width</code> property specifies the width of the border. It can be set using length units or keywords like <code>thin</code>, <code>medium</code>, and <code>thick</code>.
                </p>
                <p className="font-medium">Example:</p>
                <CodeBlock code={`<style>
  .thin { border-style: solid; border-width: thin; }
  .thick { border-style: solid; border-width: thick; }
</style>`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <SectionImage src={borderWidthImg} alt="CSS Border Widths" />
            </section>

            {/* Border Radius */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Border Radius</h2>
                <p>
                    The <code>border-radius</code> property creates rounded corners for elements.
                </p>
                <p className="font-medium">Example:</p>
                <CodeBlock code={`<style>
  .rounded { border: 2px solid black; border-radius: 10px; }
</style>`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <SectionImage src={borderRadiusImg} alt="CSS Border Radius" />
            </section>

            {/* Border Collapse */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Border Collapse</h2>
                <p>
                    The <code>border-collapse</code> property is used with tables to specify whether table borders should collapse into a single border or be separated.
                </p>
                <p className="font-medium">Example:</p>
                <CodeBlock code={`<style>
  table { border-collapse: collapse; }
</style>`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <SectionImage src={borderCollapseImg} alt="CSS Border Collapse" />
            </section>

            {/* Border Spacing */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Border Spacing</h2>
                <p>
                    The <code>border-spacing</code> property sets the distance between the borders of adjacent cells in a table.
                </p>
                <p className="font-medium">Example:</p>
                <CodeBlock code={`<style>
  table { border-collapse: separate; border-spacing: 10px; }
</style>`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <SectionImage src={borderSpacingImg} alt="CSS Border Spacing" />
            </section>

            {/* Border Shorthand */}
            <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Border Shorthand</h2>
                <p>
                    The <code>border</code> shorthand property allows you to set the width, style, and color of the border in a single declaration.
                </p>
                <p className="font-medium">Example:</p>
                <CodeBlock code={`<style>
  .shorthand { border: 2px solid blue; }
</style>`} />
                <h2 className="text-lg sm:text-xl font-semibold">Output:</h2>
                <SectionImage src={borderShorthandImg} alt="CSS Border Shorthand" />
            </section>
        </div>
    );
};

export default CSSBorders;
