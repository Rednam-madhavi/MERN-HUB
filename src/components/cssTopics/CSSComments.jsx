import React from 'react'

const CSSComments = () => {
  return (
    <div className="p-4 space-y-6 text-gray-800">

      <p>
        Comments help with documentation and are useful for future developers to understand the code easily. They are ignored by the browser and do not affect the styling or layout.
      </p>

      <p>
        In CSS, comments are written using <code className="bg-gray-100 px-1 rounded font-mono">/*</code> and <code className="bg-gray-100 px-1 rounded font-mono">*/</code>.
      </p>

      <h2 className="text-xl font-semibold text-purple-600 mt-4">Types of CSS Comments</h2>

      {/* Single-line Comment */}
      <div>
        <h3 className="text-lg font-semibold text-blue-700">1. Single-line Comment</h3>
        <p>Single-line comments are useful for short annotations and are written in a single line.</p>

        <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
          {`/* This is a single line comment */
p {
    /* color: red */
}`}
        </pre>

        <p>
          In the above example, the comment <code className="bg-gray-100 px-1 rounded font-mono">/* color: red */</code> is ignored by the browser.
        </p>
      </div>

      {/* Multi-line Comment */}
      <div>
        <h3 className="text-lg font-semibold text-blue-700">2. Multi-line Comment</h3>
        <p>
          Multi-line comments span multiple lines. They are useful for adding detailed notes or disabling blocks of code.
        </p>

        <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
          {`/* This is a
multi line
comment */
p {
    /* color: red;
    background-color: purple; */
    color: purple;
    background-color: red;
}`}
        </pre>

        <p>
          This type of comment is helpful for commenting out multiple properties temporarily or writing long explanations.
        </p>
      </div>

      {/* Tip Section */}
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded">
        <strong className="block font-semibold">Tip:</strong>
        If you're using VS Code, you can quickly comment a line using <kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl</kbd> + <kbd className="px-2 py-1 bg-gray-200 rounded">/</kbd>.
      </div>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Specificity
      </p>
    </div>
  )
}

export default CSSComments
