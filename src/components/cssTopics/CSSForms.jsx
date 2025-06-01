import React from 'react'
import forms1 from '../../assets/css/forms1.webp'
import forms2 from '../../assets/css/forms2.webp'

const CSSForms = () => {
  return (
    <div className="px-4 py-6 md:px-10 max-w-5xl mx-auto space-y-6 text-gray-800">

      <p>
        Using CSS, you can transform a basic HTML form into a visually appealing interface.
        Here’s a comparison between a plain form and one styled using CSS.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Form Without CSS</h2>
        <img src={forms1} alt="Unstyled HTML Form" className="rounded-lg border shadow-md" />
      </div>

      <div className="bg-gray-100 p-4 rounded-lg border space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">HTML Code:</h3>
        <pre className="whitespace-pre-wrap text-sm overflow-x-auto bg-white p-4 rounded-md border">
          {`<div>
  <h1>Contact Form</h1>
  <p id="Subheading">Please fill all the text in the fields.</p>
</div>
<form action="">
  <p>Your Name:<br /><input type="text" placeholder="Your Full Name" /></p>
  <p>Your Email:<br /><input type="email" placeholder="Enter your Email" /></p>
  <p>Your mobile number:<br /><input type="text" placeholder="Enter your mobile number" /></p>
  <p>Your message to us:<br /><textarea cols="50" rows="5" placeholder="Enter your query here"></textarea></p>
  <p>Select how you want updates:<br />
    <select>
      <option>--Please choose one option--</option>
      <option>Message</option>
      <option>Call</option>
      <option>Email</option>
    </select>
  </p>
  <input type="submit" value="Submit" />
  <input type="reset" value="Reset" />
</form>`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg border space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">CSS Code:</h3>
        <pre className="whitespace-pre-wrap text-sm overflow-x-auto bg-white p-4 rounded-md border">
          {`body {
  padding: 0 300px;
  font-family: 'Lucida Sans', sans-serif;
  font-weight: 900;
}

div {
  background-color: rgb(164, 206, 147);
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid black;
}

form {
  background-color: rgb(238, 239, 235);
  border-radius: 5px;
  padding: 0 80px 5px;
  border: 1px solid black;
  font-size: large;
}

input[type="text"],
input[type="email"],
textarea {
  width: 75%;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
}

input[type="submit"],
input[type="reset"] {
  font-size: larger;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 75%;
}

input[type="submit"] {
  background-color: rgb(164, 206, 147);
}

input[type="reset"] {
  background-color: red;
}

input[type="submit"]:hover {
  background-color: rgb(0, 176, 76);
}

input[type="reset"]:hover {
  background-color: rgb(191, 0, 0);
}`}
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Form With CSS</h2>
        <img src={forms2} alt="Styled HTML Form with CSS" className="rounded-lg border shadow-md" />
      </div>

      <p>
        Try customizing this form further using other CSS properties like box-shadow,
        transitions, or custom fonts to improve usability and aesthetics.
      </p>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 border-t pt-6">
        Next Chapter: CSS Navigation Bar
      </p>
    </div>
  )
}

export default CSSForms
