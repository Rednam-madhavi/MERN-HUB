import React from 'react';
import intro from '../../assets/javascript/introduction.mp4';

const JSIntroduction = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        This JavaScript tutorial is designed to provide you with a resource that helps you learn JavaScript step by step. You can also use it later as a reference to look up concepts and code snippets.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Why Learn JavaScript?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Imagine a website as a house. <span className="font-semibold text-blue-600">HTML</span> is like the bricks and walls that give it structure. <span className="font-semibold text-green-600">CSS</span> is like the paint and decorations. But without <span className="font-semibold text-yellow-600">JavaScript</span>, the house has no electricity—nothing would work or move.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          JavaScript is what makes a website interactive. It's like adding <strong>electricity</strong> to the house. It lets you click buttons to open doors, turn on lights, or even play music.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          The video below shows a <strong>modal</strong> which is created using JavaScript.
        </p>
        <div className="rounded-md">
          <p className="text-center text-gray-500 dark:text-gray-300">
            <video
              src={intro}
              controls
              className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 h-auto rounded-md shadow-md"
            >
              Your browser does not support the video tag.
            </video>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Frontend and Backend with JavaScript</h2>
        <p className="text-sm sm:text-base md:text-lg">
          JavaScript is widely used in <strong>frontend programming</strong>, but it's also powerful on the <strong>backend</strong> using <span className="font-semibold text-purple-600">Node.js</span>.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          Let’s take a step back and explore the basics first.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What is Programming?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Programming is the act of constructing a program — a set of precise instructions that tell a computer what to do.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          It’s like speaking a language, but for computers. Unlike English or Hindi, programming languages are designed to be unambiguous and logical.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          Programming involves <strong>designing, writing, testing, debugging</strong>, and maintaining the source code of applications using different languages and tools.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What is ECMAScript?</h2>
        <p className="text-sm sm:text-base md:text-lg">
          ECMAScript is the <strong>standard</strong> on which JavaScript is based. It ensures consistency across different versions and browsers.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          ECMAScript 1 (ES1) was released in 1997. The major breakthrough came with ECMAScript 2015, also known as <span className="font-semibold text-blue-500">ES6</span>.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          The latest version in 2022 is ECMAScript 2022 (ES13), bringing new features and improvements.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What is JavaScript?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>JavaScript is a <strong>lightweight, object-oriented</strong> programming language.</li>
          <li>It is primarily used for <strong>web development</strong>.</li>
          <li>It adds <strong>interactivity and dynamic behavior</strong> to web pages.</li>
          <li>Files have the extension <code>.js</code>.</li>
          <li>JavaScript is now also used for <strong>server-side</strong> programming.</li>
          <li>Popular frontend frameworks: <span className="text-blue-600 font-semibold">React</span>, <span className="text-red-600 font-semibold">Angular</span>, <span className="text-green-600 font-semibold">Vue</span>.</li>
          <li>Popular backend frameworks: <span className="text-purple-600 font-semibold">Node.js</span>, <span className="text-yellow-600 font-semibold">Express</span>.</li>
        </ul>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: JavaScript Execution
      </p>
    </div>
  );
};

export default JSIntroduction;
