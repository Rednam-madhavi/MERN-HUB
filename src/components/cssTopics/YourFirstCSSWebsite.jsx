import React from 'react';
import firstcss1 from '../../assets/css/firstcss1.mp4';
import firstcss2 from '../../assets/css/firstcss2.mp4';
import firstcss3 from '../../assets/css/firstcss3.png';
import firstcss4 from '../../assets/css/firstcss4.mp4';

const YourFirstCSSWebsite = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        We’ll divide this tutorial into four major parts:
      </p>
      <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
        <li>Setting up the environment</li>
        <li>Creating an HTML page</li>
        <li>Adding CSS to HTML</li>
        <li>Live reloading with Live Server</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold">1. Setting Up the Environment</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        We’ll use Visual Studio Code (VS Code) as our code editor.
        Follow these steps to install it:
      </p>
      <ul className="list-decimal pl-6 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
        <li>Open your browser and go to Google.</li>
        <li>Search for “Visual Studio Code download”.</li>
        <li>Download and install it based on your OS.</li>
      </ul>

      <div className="space-y-2">
        <p className="font-medium">Watch this quick video for help:</p>
        <video controls className="rounded-lg shadow-md w-full max-w-xl">
          <source src={firstcss1} type="video/mp4" />
        </video>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold">2. Installing Live Server Extension</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Live Server is a VS Code extension that auto-refreshes your page as you save changes.
      </p>
      <ul className="list-decimal pl-6 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
        <li>Open the Extensions panel in VS Code (or press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>).</li>
        <li>Search for “Live Server”.</li>
        <li>Click Install.</li>
      </ul>

      <div className="space-y-2">
        <p className="font-medium">Here’s a video showing how to do it:</p>
        <video controls className="rounded-lg shadow-md w-full max-w-xl">
          <source src={firstcss2} type="video/mp4" />
        </video>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold">3. Creating an HTML Page</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Open VS Code and create a new file named <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">index.html</code>.
        Type <code>!</code> and press <kbd>Enter</kbd> to generate the boilerplate.
      </p>

      <div className="space-y-2">
        <img src={firstcss3} alt="VS Code HTML File" className="rounded-md border shadow-sm w-full max-w-xl" />
        <p className="text-sm italic">HTML file generated in VS Code</p>
      </div>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">Here’s an example:</p>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md font-mono text-sm overflow-x-auto">
        &lt;!DOCTYPE html&gt;<br />
        &lt;html lang="en"&gt;<br />
        &nbsp;&nbsp;&lt;head&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;First CSS Website&lt;/title&gt;<br />
        &nbsp;&nbsp;&lt;/head&gt;<br />
        &nbsp;&nbsp;&lt;body&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;I'm learning CSS with my favorite CodeWithHarry.<br />
        &nbsp;&nbsp;&lt;/body&gt;<br />
        &lt;/html&gt;
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold">4. Adding CSS to HTML</h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Inside the <code>&lt;head&gt;</code> tag, add this style block:
      </p>

      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md font-mono text-sm overflow-x-auto">
        &lt;style&gt;<br />
        &nbsp;&nbsp;body &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;text-align: center;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;color: white;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;background-color: purple;<br />
        &nbsp;&nbsp;&#125;<br />
        &lt;/style&gt;
      </div>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        This will center your text and give the page a purple background with white text.
      </p>

      <div className="space-y-2">
        <p className="font-medium">Here’s how it looks when you view it in Live Server:</p>
        <video controls className="rounded-lg shadow-md w-full max-w-xl">
          <source src={firstcss4} type="video/mp4" />
        </video>
      </div>

      <p className="text-base font-semibold mt-8"> You’ve successfully created your first styled website using CSS!</p>
      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: How CSS works
      </p>
    </div>
  );
};

export default YourFirstCSSWebsite;
