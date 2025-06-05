import React from 'react'
import nav1 from '../../assets/css/nav1.jpg'
import nav2 from '../../assets/css/nav2.jpg'
import nav3 from '../../assets/css/nav3.jpg'
import nav4 from '../../assets/css/nav4.webp'
import nav5 from '../../assets/css/nav5.jpg'

const CSSNavigationBar = () => {
  return (
    <div className="px-4 py-6 md:px-10 max-w-5xl mx-auto space-y-6 text-gray-800">

      <p>
        Understanding how to build and style a navigation bar is essential for creating user-friendly websites.
        In this section, we’ll recreate the navbar of this very website step-by-step using HTML and CSS.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Navbar Layout Reference</h2>
        <img src={nav1} alt="Navbar Design Reference" className="rounded-lg border shadow-md" />
      </div>

      <div className="bg-gray-100 p-4 rounded-lg border space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">HTML for Navbar</h3>
        <pre className="whitespace-pre-wrap text-sm overflow-x-auto bg-white p-4 rounded-md border">
          {`<nav>
  <a class="Icon" href="#">CSS Mastery</a>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`}
        </pre>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">Output (HTML only)</h3>
        <img src={nav2} alt="HTML-only Navbar Output" className="rounded-lg border shadow" />
      </div>

      <div className="bg-gray-100 p-4 rounded-lg border space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">CSS for Navbar</h3>
        <pre className="whitespace-pre-wrap text-sm overflow-x-auto bg-white p-4 rounded-md border">
          {`nav {
  background-color: #333;
  overflow: hidden;
  padding: 0.5rem;
}

nav a {
  float: left;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 17px;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}

nav a.Icon {
  font-weight: bold;
  font-size: 20px;
  background-color: #04AA6D;
  color: white;
}`}
        </pre>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">Final Output (Styled Navbar)</h3>
        <img src={nav3} alt="CSS Styled Navbar Output" className="rounded-lg border shadow" />
      </div>

      <p className="text-sm text-gray-600">
        Note: The <code>.Icon</code> class is specifically used to style the branding/logo portion of the navbar differently than the other links.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Alternate Styles</h3>
        <p>Here are other ways you can style your navbar using different colors and layouts.</p>
        <img src={nav4} alt="Alternate Navbar Style 1" className="rounded-lg border shadow" />
        <img src={nav5} alt="Alternate Navbar Style 2" className="rounded-lg border shadow" />
      </div>
      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 border-t pt-6">
        Next Chapter: CSS Display
      </p>
    </div>
  )
}

export default CSSNavigationBar
