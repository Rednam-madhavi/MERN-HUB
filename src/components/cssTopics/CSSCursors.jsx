import React from 'react';
import cursors from '../../assets/css/cursors.png';

const CSSCursors = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto text-gray-800">

      <p className="mb-4">
        The <code className="bg-gray-100 px-1 rounded">cursor</code> property is often used with the <code className="bg-gray-100 px-1 rounded">:hover</code> pseudo-class to change the appearance of the mouse pointer when hovering over elements.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Example:</h2>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto mb-4">
        <code>{`<div style="cursor:pointer">Pointer</div>
<div style="cursor:alias">alias Value</div>
<div style="cursor:auto">auto Value</div>
<div style="cursor:all-scroll">all-scroll value</div>
<div style="cursor:col-resize">col-resize value</div>
<div style="cursor:crosshair">Crosshair</div>
<div style="cursor:default">Default value</div>
<div style="cursor:copy">copy value</div>
<div style="cursor:move">Move</div>
<div style="cursor:e-resize">e-resize</div>
<div style="cursor:ew-resize">ew-resize</div>
<div style="cursor:ne-resize">ne-resize</div>
<div style="cursor:nw-resize">nw-resize</div>
<div style="cursor:n-resize">n-resize</div>
<div style="cursor:se-resize">se-resize</div>
<div style="cursor:sw-resize">sw-resize</div>
<div style="cursor:w-resize">w-resize</div>
<div style="cursor:s-resize">s-resize</div>
<div style="cursor:wait">wait</div>
<div style="cursor:text">text</div>
<div style="cursor:help">help</div>
<div style="cursor:progress">Progress</div>
<div style="cursor:no-drop">no-drop</div>
<div style="cursor:not-allowed">not-allowed</div>
<div style="cursor:vertical-text">vertical-text</div>
<div style="cursor:zoom-in">Zoom-in</div>
<div style="cursor:zoom-out">Zoom-out</div>`}</code>
      </pre>

      <p className="mb-6">You can try this example in your editor to see how the cursor changes on hover. Each value is descriptive and visualizes a different cursor style.</p>

      <img src={cursors} alt="Cursor Styles Example" className="rounded-lg shadow-md mb-6" />

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">Custom Cursor</h2>
      <p className="mb-4">
        You can also set a custom image as your cursor using the <code className="bg-gray-100 px-1 rounded">url()</code> function. If the image is not available, it will fall back to the default cursor.
      </p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto mb-4">
        <code>{`.selector {
  cursor: url('custom-cursor.png'), auto;
}`}</code>
      </pre>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium">
        Next Chapter: CSS List Styles
      </p>
    </div>
  );
};

export default CSSCursors;
