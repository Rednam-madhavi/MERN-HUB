import React, { useState } from 'react'
import { ClipboardCopy, Check } from 'lucide-react'
import zindex from '../../assets/css/zindex.webp'

const CSSZIndex = () => {
  const [copied, setCopied] = useState(false)

  const code = `<!DOCTYPE html>
<html>
<head>
  <title>CSS Z Index</title>
  <style>
    .container {
      position: relative;
    }
    .box1-box {
      position: relative;
      z-index: 1;
      border: 2px solid black;
      height: 100px;
      margin: 40px;
      background-color: aqua;
    }
    .box2-box {
      position: absolute;
      z-index: 3;
      background-color: rosybrown;
      height: 60px;
      width: 70%;
      left: 250px;
      top: 50px;
      border: 2px solid;
    }
    .box3-box {
      position: absolute;
      color: wheat;
      z-index: 2;
      background-color: rebeccapurple;
      width: 45%;
      left: 270px;
      top: 15px;
      height: 100px;
      border: 2px solid;
    }
  </style>
</head>
<body>
  <h1>CSS z-index</h1>
  <div class="container">
    <div class="box1-box">Box 1 (z-index: 1)</div>
    <div class="box2-box">Box 2 (z-index: 3)</div>
    <div class="box3-box">Box 3 (z-index: 2)</div>
  </div>
</body>
</html>`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">

      <p className="mb-4">
        When elements overlap, the <code>z-index</code> property controls which element appears on top.
        Higher <code>z-index</code> values are rendered above lower ones.
      </p>

      <div className="bg-gray-100 rounded p-4 border text-sm whitespace-pre-wrap font-mono relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 flex items-center space-x-1 text-xs text-white bg-gray-600 hover:bg-gray-700 px-2 py-1 rounded"
        >
          {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
          <span>{copied ? 'Copied' : 'Copy Code'}</span>
        </button>
        {code}
      </div>

      <div className="my-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Output Preview</h2>
        <img src={zindex} alt="CSS z-index output example" className="rounded-lg shadow-md" />
      </div>

      <p className="mt-4">
        Without using <code>z-index</code>, overlapping elements are stacked in source order (last one appears on top).
        In this example, although Box 3 is defined last, Box 2 has the highest z-index and appears on top.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-600 border-t pt-6">
        Next Chapter: CSS Position Property
      </p>
    </div>
  )
}

export default CSSZIndex
