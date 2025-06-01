import React, { useState } from 'react'
import { ClipboardCopy, Check } from 'lucide-react'
import position1 from '../../assets/css/position1.png'
import position2 from '../../assets/css/position2.png'
import position3 from '../../assets/css/position3.png'
import position4 from '../../assets/css/position4.png'
import position5 from '../../assets/css/position5.png'

const positions = [
  {
    title: 'Static (Default)',
    code: `<style>
  img {
    position: static;
  }
</style>
<body>
  <p id="p1">Lorem ipsum dolor sit amet.</p>
  <p id="p2">Lorem ipsum dolor sit amet.</p>
  <img src="./logo.png" alt="logo">
  <p id="p3">Lorem ipsum dolor sit amet.</p>
  <p id="p4">Lorem ipsum dolor sit amet.</p>
</body>`,
    image: position1,
    description: 'Elements follow normal document flow by default.'
  },
  {
    title: 'Relative',
    code: `<style>
  img {
    position: relative;
    left: 100px;
    top: 50px;
  }
</style>
<body>
  <p id="p1">Lorem ipsum dolor sit amet.</p>
  <p id="p2">Lorem ipsum dolor sit amet.</p>
  <img src="./logo.png" alt="logo">
  <p id="p3">Lorem ipsum dolor sit amet.</p>
  <p id="p4">Lorem ipsum dolor sit amet.</p>
</body>`,
    image: position2,
    description: 'Element is offset from its normal position without affecting layout of other elements.'
  },
  {
    title: 'Absolute',
    code: `<style>
  #about {
    position: relative;
  }
  .logo {
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>
<body>
  <h1>CodeWithHarry</h1>
  <div id="about">
    <p>Developer</p>
    <p>Founder of CodeWithHarry</p>
    <img class="logo" src="./logo.png" alt="logo">
  </div>
</body>`,
    image: position3,
    description: 'Positioned relative to the nearest ancestor with non-static positioning.'
  },
  {
    title: 'Fixed',
    code: `<style>
  h1 {
    position: fixed;
    top: 10px;
    right: 20px;
  }
</style>
<body>
  <h1>CodeWithHarry</h1>
</body>`,
    image: position4,
    description: 'Element stays in place relative to the viewport during scrolling.'
  },
  {
    title: 'Sticky',
    code: `<style>
  h1 {
    position: sticky;
    top: 10px;
  }
</style>
<body>
  <h1>CodeWithHarry</h1>
</body>`,
    image: position5,
    description: 'Behaves like relative until a threshold is met, then sticks like fixed.'
  }
]

const CSSPositioning = () => {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = async (code, index) => {
    await navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <p className="mb-4">
        CSS <code>position</code> allows precise control of element layout and interaction with other elements. It determines how elements are placed and layered on a web page.
      </p>

      {positions.map((item, index) => (
        <div key={index} className="mb-10 border rounded-lg p-4 shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-gray-600 mb-2">{item.title}</h2>
          <p className="mb-2">{item.description}</p>

          <div className="relative bg-gray-100 rounded p-3 text-sm whitespace-pre-wrap font-mono mb-3 border">
            <button
              onClick={() => handleCopy(item.code, index)}
              className="absolute top-2 right-2 flex items-center space-x-1 text-xs bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
            >
              {copiedIndex === index ? <Check size={16} /> : <ClipboardCopy size={16} />}
              <span>{copiedIndex === index ? 'Copied' : 'Copy'}</span>
            </button>
            {item.code}
          </div>

          <img src={item.image} alt={`${item.title} Example`} className="rounded-lg shadow-md" />
        </div>
      ))}

       <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 border-t pt-6">
        Next Chapter: CSS Z-index
      </p>
    </div>
  )
}

export default CSSPositioning
