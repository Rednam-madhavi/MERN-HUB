import React from 'react';
import download from '../../assets/html/download-vscode.mp4';
import liveServer from '../../assets/html/live-server-installation.mp4';

const Installation = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        Installation & Setup
      </h1>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Before we start writing code, we need a few tools. In this tutorial, we’ll set up VS Code and some helpful extensions to make HTML development easier and more productive.
      </p>

      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Prerequisites for Learning HTML
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          There are no strict prerequisites. HTML is the starting point for most web developers and doesn’t require any prior coding experience.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          It’s used to define the structure of web pages and is often learned alongside CSS and JavaScript.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Tools You'll Need
        </h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>
            <strong>Text Editor:</strong> We’ll use <span className="text-blue-600 font-medium">Visual Studio Code (VS Code)</span> because it’s fast, free, and packed with features.
          </li>
          <li>
            <strong>Browser:</strong> Any modern browser works, but we’ll use <span className="text-blue-600 font-medium">Google Chrome</span> in this tutorial.
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Installing Visual Studio Code
        </h2>
        <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>Go to the official VS Code website and download the installer.</li>
          <li>Choose your OS version and follow the installation steps.</li>
          <li>Launch VS Code once installed.</li>
        </ul>

        <div className="my-4">
          <video
            src={download}
            controls
            className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Installing the Live Server Extension
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <strong>Live Server</strong> extension allows you to see your HTML page updates in real time. It's a must-have for efficient development.
        </p>

        <div className="my-4">
          <video
            src={liveServer}
            controls
            className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: HTML Execution
      </p>
    </div>
  );
};

export default Installation;
