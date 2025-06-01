import React from 'react'
import specificity1 from '../../assets/css/specificity1.png'
import specificity2 from '../../assets/css/specificity2.png'
import specificity3 from '../../assets/css/specificity3.png'
import specificity4 from '../../assets/css/specificity4.png'
import specificity5 from '../../assets/css/specificity5.png'

const CSSSpecificity = () => {
  return (
    <div className="p-6 text-base space-y-6">

      <p>
        CSS Specificity helps determine which style is applied when multiple rules target the same element. It’s a calculated weight based on the types of selectors used in a rule—the higher the specificity, the more precedence it has.
      </p>

      <h2 className="text-xl font-semibold mt-6">Understanding Specificity with an Example</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {`<html>
<head>
  <style>
    * { color: gray; }
    #title { color: red; }
    .h1 { color: blue; }
    h1 { color: pink; }
  </style>
</head>
<body>
  <h1 id="title" class="h1" style="color:purple">CodeWithHarry</h1>
</body>
</html>`}
      </pre>
      <p>In the above code, the final color will be <strong>purple</strong> due to the inline style having the highest specificity.</p>

      <h2 className="text-xl font-semibold mt-6">Cascade Algorithm</h2>
      <p>The cascade algorithm determines how style conflicts are resolved in four stages:</p>
      <ul className="list-disc list-inside">
        <li><strong>Position and Order</strong>: Later rules override earlier ones.</li>
        <li><strong>Specificity</strong>: Stronger (more specific) selectors win.</li>
        <li><strong>Origin</strong>: Inline, author, browser, or user styles.</li>
        <li><strong>Importance</strong>: Rules marked with <code>!important</code> override all others.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Specificity Hierarchy</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">1. Inline Styles</h3>
          <img src={specificity1} alt="Inline style specificity" className="w-full max-w-md mx-auto rounded" />
          <p>Inline styles (e.g., <code>style="color:purple"</code>) have the highest specificity score of <strong>1000</strong>.</p>
        </div>

        <div>
          <h3 className="font-semibold">2. ID Selectors</h3>
          <img src={specificity2} alt="ID selector specificity" className="w-full max-w-md mx-auto rounded" />
          <p>ID selectors have a score of <strong>100</strong>. They override class, attribute, and element selectors.</p>
        </div>

        <div>
          <h3 className="font-semibold">3. Class and Attribute Selectors</h3>
          <img src={specificity3} alt="Class selector specificity" className="w-full max-w-md mx-auto rounded" />
          <p>Each class, attribute, or pseudo-class (like <code>:hover</code>) contributes <strong>10</strong> points.</p>
        </div>

        <div>
          <h3 className="font-semibold">4. Element Selectors</h3>
          <img src={specificity4} alt="Element selector specificity" className="w-full max-w-md mx-auto rounded" />
          <p>Element selectors contribute <strong>1</strong> point. They are overridden by class or ID selectors.</p>
        </div>

        <div>
          <h3 className="font-semibold">5. Universal Selector</h3>
          <img src={specificity5} alt="Universal selector specificity" className="w-full max-w-md mx-auto rounded" />
          <p>The universal selector <code>*</code> has the lowest specificity score of <strong>0</strong>.</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6">Specificity Calculation</h2>
      <p>Specificity is calculated using the following weights:</p>
      <ul className="list-disc list-inside">
        <li>Inline styles: 1000</li>
        <li>ID selectors: 100</li>
        <li>Classes, attributes, pseudo-classes: 10</li>
        <li>Elements, pseudo-elements: 1</li>
        <li>Universal selector: 0</li>
      </ul>
      <p>Example: <code>&lt;h1 id="title" class="h1"&gt;</code> has a specificity of <strong>111</strong> (100 for ID, 10 for class, 1 for h1).</p>

      <h2 className="text-xl font-semibold mt-6">Importance (!important)</h2>
      <p>The <code>!important</code> flag overrides all other declarations, even those with higher specificity.</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {`p {
  color: red !important;
}

p {
  color: blue;
}`}
      </pre>
      <p>In this case, the paragraph text will be red due to <code>!important</code>.</p>

      <h2 className="text-xl font-semibold mt-6">Quick Quiz</h2>
      <p>What is the specificity value of the following selector?</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {`a.harryclass.rohan-class[href]:hover { color: red; }`}
      </pre>
      <p>
        Breakdown:
        <ul className="list-disc list-inside">
          <li><code>a</code> = 1</li>
          <li><code>.harryclass</code> & <code>.rohan-class</code> = 20</li>
          <li><code>[href]</code> = 10</li>
          <li><code>:hover</code> = 10</li>
        </ul>
        Total = <strong>41</strong>
      </p>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: CSS Colors
      </p>
    </div>
  )
}

export default CSSSpecificity
