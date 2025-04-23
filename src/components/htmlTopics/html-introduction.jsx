import React, { useState } from 'react';
import pageSourceVideo from '../../assets/html/pagesource.mp4';
import structure from '../../assets/html/structure.png';

const Introduction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        What is HTML?
      </h1>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating web pages.
        It's a markup language used to structure content on the web, defining elements like headings, paragraphs, links, and images.
        HTML forms the backbone of web content.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
        In layman's terms, HTML is like the <span className="font-semibold text-blue-600">skeleton of a website</span>.
        It's a set of instructions that tells a web browser how to display text, images, videos, and other elements on a webpage.
      </p>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          In a nutshell:
        </h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>HTML is the language of the web, used to create websites.</li>
          <li>Defines the structure/layout of web pages.</li>
          <li>Files typically have .html or .htm extensions.</li>
          <li>Latest version is HTML5.</li>
        </ul>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Features of HTML
        </h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>Platform-independent across OS like Mac, Linux, and Windows.</li>
          <li>Supports multimedia content (images, videos, audio).</li>
          <li>HTML is a markup language, not a programming language.</li>
          <li>Integrates with CSS, JavaScript to build dynamic pages.</li>
        </ul>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Why the Term HyperText & Markup Language?
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
          The term is made of two parts:
        </p>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li><span className="font-semibold">Hypertext:</span> linking of text with other documents</li>
          <li><span className="font-semibold">Markup Language:</span> uses tags to display content</li>
        </ul>
        <p className="mt-4 text-xs md:text-sm">
          Example of a tag: <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-xs md:text-sm">&lt;p&gt;</code>
        </p>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Quick Exercise
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4">
          Open a webpage of your choice, right-click on the browser, and select <strong>'View Page Source'</strong>,
          or press <strong>Ctrl + U</strong> (Windows) / <strong>Cmd + Option + U</strong> (Mac).
        </p>

        <div className="my-4">
          <video
            src={pageSourceVideo}
            controls
            className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-sm sm:text-base md:text-lg">You'll see the HTML code that structures that webpage.</p>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          HTML, CSS, JavaScript Analogy
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4">
          Think of building a webpage like making a car:
        </p>
        <img
          src={structure}
          alt="HTML CSS JS Analogy"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
          onClick={() => setIsOpen(true)}
        />

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 p-1 rounded"
              >
                ✕
              </button>
              <img
                src={structure}
                alt="HTML CSS JS Full View"
                className="max-w-full max-h-[90vh] rounded-md shadow-lg"
              />
            </div>
          </div>
        )}

        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li><strong>HTML:</strong> Car's skeleton or frame (structure)</li>
          <li><strong>CSS:</strong> Car's paint and design (style)</li>
          <li><strong>JavaScript:</strong> Car's engine and movement (interactivity)</li>
        </ul>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          History of HTML
        </h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>1989: Tim Berners-Lee created the World Wide Web</li>
          <li>1991: First version of HTML</li>
          <li>1995–1997: Continued development</li>
          <li>1999: HTML 4.0 standardized</li>
          <li>Current version: HTML5</li>
        </ul>
        <p className="mt-4 italic text-xs md:text-sm">
          Read more on the{' '}
          <a
            href="https://en.wikipedia.org/wiki/HTML"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            target="_blank" rel="noopener noreferrer"
          >
            HTML Wikipedia page
          </a>.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: HTML Working
      </p>
    </div>
  );
};

export default Introduction;
