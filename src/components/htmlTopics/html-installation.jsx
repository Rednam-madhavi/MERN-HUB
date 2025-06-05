import React, { useState } from 'react';
import download from '../../assets/html/download-vscode.mp4';
import liveServer from '../../assets/html/live-server-installation.mp4';

const Installation = () => {

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Before we start writing code, we need a few tools. In this tutorial, we’ll set up VS Code and some helpful extensions to make HTML development easier and more productive.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">Prerequisites</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          HTML is a beginner-friendly language and requires no prior programming knowledge. It forms the structural foundation of any webpage and is usually learned alongside CSS and JavaScript.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">Tools You'll Need</h2>
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
          <li>
            <strong>Text Editor:</strong> We’ll use <span className="text-blue-600 font-medium">Visual Studio Code (VS Code)</span>, a free and powerful code editor.
          </li>
          <li>
            <strong>Browser:</strong> Any modern browser will work. We’ll use <span className="text-blue-600 font-medium">Google Chrome</span> for this tutorial.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">Installing Visual Studio Code</h2>
        <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg pl-4">
          <li>Visit the official Visual Studio Code website.</li>
          <li>Choose your OS (Windows, macOS, Linux) and download the installer.</li>
          <li>Run the installer and follow the setup instructions.</li>
          <li>Launch VS Code when installation is complete.</li>
        </ul>

        <video
          src={download}
          controls
          className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">Installing Live Server Extension</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <strong>Live Server</strong> extension enables real-time HTML updates. Once installed, you can preview your changes instantly in the browser without refreshing manually.
        </p>

        <video
          src={liveServer}
          controls
          className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: HTML Execution
      </p>
    </div>
  );
};

export default Installation;
