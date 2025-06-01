import React from 'react'
import ways1 from '../../assets/css/ways1.png'
import ways2 from '../../assets/css/ways2.png'
import ways3 from '../../assets/css/ways3.mp4'
import ways4 from '../../assets/css/ways4.png'

const WaysToAddCSS = () => {
  return (
    <div className="p-4 space-y-6 text-gray-800">

      <p>There are three different ways to add CSS to an HTML page:</p>

      <ul className="list-disc list-inside pl-4">
        <li>Inline CSS</li>
        <li>Internal CSS</li>
        <li>External CSS</li>
      </ul>

      {/* Inline CSS */}
      <div>
        <h2 className="text-xl font-semibold text-gray-600 mt-4">1. Inline CSS</h2>
        <p>Inline CSS is used to add styles directly to an element using the <code>style</code> attribute.</p>

        <pre className="bg-gray-100 p-2 rounded">
          {`<h1 style="color: gray;">I'm harry</h1>
<h2>I'm CodeWithHarry</h2>`}
        </pre>

        <img src={ways1} alt="Inline CSS example" className="rounded shadow" />
        <p className="text-sm text-gray-600">Only the <code>h1</code> tag will appear gray.</p>

        <p className="mt-2 text-red-600 font-medium">
          Note: Inline CSS can be hard to manage in large projects.
        </p>
      </div>

      {/* Internal CSS */}
      <div>
        <h2 className="text-xl font-semibold text-gray-600 mt-4">2. Internal CSS</h2>
        <p>Internal CSS is defined in a <code>&lt;style&gt;</code> block inside the <code>&lt;head&gt;</code> tag.</p>

        <pre className="bg-gray-100 p-2 rounded">
          {`<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>

<body>
  <h1>CodeWithHarry</h1>
  <p>I'm harry, from CodeWithHarry</p>
  <p>I'm a Developer and founder of CodeWithHarry.com</p>
</body>`}
        </pre>

        <img src={ways2} alt="Internal CSS example" className="rounded shadow" />
        <p className="mt-2 text-red-600 font-medium">
          Note: The <code>&lt;style&gt;</code> block must be inside the <code>&lt;head&gt;</code> section.
        </p>
      </div>

      {/* External CSS */}
      <div>
        <h2 className="text-xl font-semibold text-gray-600 mt-4">3. External CSS</h2>
        <p>External CSS keeps all styles in a separate file with a <code>.css</code> extension and links it using a <code>&lt;link&gt;</code> tag.</p>

        <video src={ways3} controls className="rounded shadow w-full max-w-xl my-4" />

        <pre className="bg-gray-100 p-2 rounded">
          {`<head>
  <link rel="stylesheet" href="style.css">
</head>`}
        </pre>

        <p>style.css content:</p>

        <pre className="bg-gray-100 p-2 rounded">
          {`p {
  color: red;
}`}
        </pre>

        <img src={ways4} alt="External CSS output" className="rounded shadow" />
        <p className="mt-2 text-green-600 font-medium">
          Advantage: External CSS promotes reusability and consistency across pages.
        </p>
      </div>

      {/* Precedence Note */}
      <div className="mt-6">
        <h3 className="font-bold text-lg text-gray-700">CSS Precedence</h3>
        <p>
          If the same property is defined in all three ways, this order determines which one takes effect:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Inline CSS</strong> (Highest priority)</li>
          <li><strong>Internal CSS</strong></li>
          <li><strong>External CSS</strong> (Lowest priority)</li>
        </ul>
      </div>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Selectors
      </p>
    </div>
  )
}

export default WaysToAddCSS
