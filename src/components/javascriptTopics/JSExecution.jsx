import React from 'react';

const JSExecution = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Do We Need to Install JavaScript?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The answer is <strong>NO</strong>. JavaScript is already present in all modern web browsers and devices, including your phone.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">How to Execute JavaScript?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>
            JavaScript can be executed directly inside your browser using the browser’s developer console.
          </li>
          <li>
            You can also use a JavaScript runtime like <strong>Node.js</strong> to run JS files outside the browser.
          </li>
          <li>
            Another common way is to include JavaScript in a webpage using the <code>{`<script>`}</code> tag.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What is JavaScript?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          JavaScript is a powerful programming language used primarily in web development. As a <strong>client-side</strong> language, it runs in the browser, allowing interactive and dynamic web experiences.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          It works alongside HTML and CSS to enhance user interfaces with features like dropdowns, sliders, modals, and real-time feedback.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Getting Started</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          To begin writing JavaScript:
        </p>
        <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>Use any text editor like Visual Studio Code, Sublime Text, or Atom.</li>
          <li>Create a file with a <code>.js</code> extension (e.g., <code>script.js</code>).</li>
          <li>Write your code and either run it in the browser or via Node.js.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Node.js Installation
      </p>
    </div>
  );
};

export default JSExecution;
