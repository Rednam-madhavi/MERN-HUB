import React, { useState } from 'react'
import { ClipboardCopy, Check } from 'lucide-react'

const CSSSize = () => {
  const [copied, setCopied] = useState(false)

  const copyText = async () => {
    const units = `
Absolute Units:
cm - centimetres (1 cm = 37.8 px)
mm - millimetres
in - inches (1 in = 96 px = 2.54cm)
pt - points (1pt = 1/72th of 1 in)
pc - picas (1pc = 1/6th of 1 in)
px - pixel (1px = 1/96th of 1 in)

Relative Units:
em  - Relative to the font size of the parent element
ex  - Relative to X-height of the font
ch  - Relative to the width of "0"
rem - Relative to root element's font size
vw  - 1% of viewport width
vh  - 1% of viewport height
%   - Relative to parent element size

Others:
opacity: 0–1
RGB/RGBA: 0–255
HSL/HSLA: 0–360`
    await navigator.clipboard.writeText(units)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">

      <p className="mb-4">
        We've seen various units in CSS used for sizing and layout. Understanding these units helps in building consistent and responsive UIs.
      </p>

      {/* Absolute Units */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Absolute Units</h2>
        <ul className="list-disc ml-6 text-sm sm:text-base">
          <li><strong>cm</strong> – centimeters (1 cm = 37.8 px)</li>
          <li><strong>mm</strong> – millimeters</li>
          <li><strong>in</strong> – inches (1 in = 96 px = 2.54 cm)</li>
          <li><strong>pt</strong> – points (1 pt = 1/72 in)</li>
          <li><strong>pc</strong> – picas (1 pc = 1/6 in)</li>
          <li><strong>px</strong> – pixels (1 px = 1/96 in)</li>
        </ul>
        <p className="text-sm text-gray-600 mt-2">Typically, only <code>px</code> is widely used for precise control.</p>
      </section>

      {/* Relative Units */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Relative Units</h2>
        <ul className="list-disc ml-6 text-sm sm:text-base">
          <li><strong>em</strong> – Relative to the parent’s font size</li>
          <li><strong>ex</strong> – Relative to the font’s x-height</li>
          <li><strong>ch</strong> – Relative to the width of “0”</li>
          <li><strong>rem</strong> – Relative to the root element’s font size</li>
          <li><strong>vw</strong> – 1% of the viewport width</li>
          <li><strong>vh</strong> – 1% of the viewport height</li>
          <li><strong>%</strong> – Relative to the parent element’s size</li>
        </ul>
      </section>

      {/* Other Properties */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Other Size-Related Metrics</h2>
        <ul className="list-disc ml-6 text-sm sm:text-base">
          <li><strong>opacity</strong> – Ranges from 0 (transparent) to 1 (opaque)</li>
          <li><strong>RGB / RGBA</strong> – Each color channel ranges from 0 to 255</li>
          <li><strong>HSL / HSLA</strong> – Hue: 0–360°, Saturation & Lightness: 0%–100%</li>
        </ul>
      </section>

      <div className="flex items-center space-x-3">
        <button
          onClick={copyText}
          className="text-white text-sm px-4 py-2 rounded hover:text-gray-800 flex items-center space-x-2"
        >
          {copied ? <Check size={18} /> : <ClipboardCopy size={18} />}
          <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
        </button>
        <span className="text-sm text-gray-500">Useful for quick referencing all units</span>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 border-t pt-6">
        Next Chapter: CSS Positioning
      </p>
    </div>
  )
}

export default CSSSize
