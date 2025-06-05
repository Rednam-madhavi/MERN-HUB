import React, { useState } from 'react';
import pageSourceVideo from '../../assets/html/pagesource.mp4';
import structure from '../../assets/html/structure.png';

const Introduction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-gray-800 dark:text-gray-200">
        What is HTML?
      </h1>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        HTML (HyperText Markup Language), created by Tim Berners-Lee in 1991, is the standard language used to build web pages. It structures content using elements such as headings, paragraphs, images, and links — forming the foundation of every website.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
        Think of HTML as the <span className="font-semibold text-blue-600">skeleton of a website</span>. It provides the basic structure that tells a browser how to display content like text, images, and videos on a webpage.
      </p>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">In a Nutshell</h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>The fundamental language of the web used to build websites</li>
          <li>Defines the structure and layout of web pages</li>
          <li>Files usually end with <code>.html</code> or <code>.htm</code></li>
          <li>The latest version is HTML5</li>
        </ul>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Features of HTML</h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>Works across platforms like macOS, Linux, and Windows</li>
          <li>Supports multimedia content (images, videos, audio)</li>
          <li>It's a markup language — not a programming language</li>
          <li>Easily integrates with CSS and JavaScript for dynamic content</li>
        </ul>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Why the Term "HyperText Markup Language"?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The name breaks down into two concepts:
        </p>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li><span className="font-semibold">Hypertext:</span> the ability to link text to other documents or pages</li>
          <li><span className="font-semibold">Markup Language:</span> the use of tags to structure and present content</li>
        </ul>
        <p className="mt-4 text-xs md:text-sm">
          Example tag: <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">&lt;p&gt;</code>
        </p>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Exercise</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Visit any webpage, right-click, and select <strong>'View Page Source'</strong>, or press
          <strong> Ctrl + U</strong> (Windows) / <strong>Cmd + Option + U</strong> (Mac).
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

        <p className="text-sm sm:text-base md:text-lg">
          You'll see the raw HTML code that structures that page.
        </p>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">HTML, CSS & JavaScript Analogy</h2>
        <p className="text-sm sm:text-base md:text-lg">
          Creating a webpage is a lot like building a car:
        </p>

        <img
          src={structure}
          alt="HTML CSS JS Analogy"
          className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
          onClick={() => setIsOpen(true)}
        />

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative max-w-3xl mx-auto">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-1 rounded-full"
              >
                ✕
              </button>
              <img src={structure} alt="Zoomed Working" className="rounded-lg shadow-lg max-h-[90vh]" />
            </div>
          </div>
        )}

        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li><strong>HTML:</strong> The car’s frame and structure</li>
          <li><strong>CSS:</strong> The paint and design (styling)</li>
          <li><strong>JavaScript:</strong> The engine and interactivity (functionality)</li>
        </ul>
      </div>

      <div className="py-4 sm:py-5 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">A Brief History of HTML</h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>1989 – Tim Berners-Lee created the World Wide Web</li>
          <li>1991 – First version of HTML was introduced</li>
          <li>1995–1997 – HTML continued to evolve with new versions</li>
          <li>1999 – HTML 4.0 was standardized</li>
          <li>Now – HTML5 is the current and most widely used version</li>
        </ul>

        <p className="mt-4 italic text-xs md:text-sm">
          Learn more on the{' '}
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
