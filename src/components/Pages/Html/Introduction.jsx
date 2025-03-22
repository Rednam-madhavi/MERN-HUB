import React from "react";

const Introduction = () => {
  return (
    <div className="p-6 md:p-10 lg:p-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* What is HTML? */}
      <h2 className="text-2xl font-semibold mt-8 text-blue-600 dark:text-blue-400">
        What is HTML?
      </h2>
      <p className="mt-2">
        HTML (<strong>HyperText Markup Language</strong>) was created by{" "}
        <span className="font-semibold">Tim Berners-Lee</span> in 1991 to structure 
        content on the web. It defines elements like headings, paragraphs, links, 
        and images, forming the backbone of web pages.
      </p>
      <div className="bg-blue-100 dark:bg-blue-900 p-4 mt-4 rounded-lg">
        <ul className="list-disc ml-6">
          <li>🖥️ HTML is the <strong>language of the web</strong>.</li>
          <li>🛠️ It defines the <strong>structure</strong> of web pages.</li>
          <li>📂 Files have <strong>.html</strong> or <strong>.htm</strong> extensions.</li>
          <li>🔥 The latest version is <strong>HTML5</strong>.</li>
        </ul>
      </div>

      {/* Features of HTML */}
      <h2 className="text-2xl font-semibold mt-8 text-blue-600 dark:text-blue-400">
        Features of HTML
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>✅ <strong>Platform-independent</strong> (works on all OS).</li>
        <li>✅ Supports <strong>images, videos, and audio</strong>.</li>
        <li>✅ Works with <strong>CSS & JavaScript</strong> for dynamic content.</li>
        <li>✅ Uses a <strong>tag-based structure</strong> (e.g., {"<p>"}, {"<h1>"}).</li>
      </ul>

      {/* Why the term HyperText & Markup? */}
      <h2 className="text-2xl font-semibold mt-8 text-blue-600 dark:text-blue-400">
        Why "HyperText Markup Language"?
      </h2>
      <p className="mt-2">
        <strong>Hypertext</strong> links text with other documents, while{" "}
        <strong>Markup Language</strong> means using special tags to structure content.
      </p>

      {/* Quick Exercise */}
      <div className="bg-gray-200 dark:bg-gray-700 p-4 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Quick Exercise: 🏆
        </h3>
        <p>
          Open any webpage, right-click, and select <strong>'View Page Source'</strong>. 
          You'll see the raw HTML code that creates the page!
        </p>
      </div>

      {/* HTML, CSS & JavaScript Analogy */}
      <h2 className="text-2xl font-semibold mt-8 text-blue-600 dark:text-blue-400">
        HTML, CSS & JavaScript Analogy 🚗
      </h2>
      <p className="mt-2">
        Think of a website like a car:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>🛠️ <strong>HTML</strong> = Skeleton (Structure)</li>
        <li>🎨 <strong>CSS</strong> = Paint & Design (Styling)</li>
        <li>⚙️ <strong>JavaScript</strong> = Engine (Functionality)</li>
      </ul>

      {/* History of HTML */}
      <h2 className="text-2xl font-semibold mt-8 text-blue-600 dark:text-blue-400">
        History of HTML 📜
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>🕰️ 1989: Tim Berners-Lee created the <strong>World Wide Web (WWW)</strong>.</li>
        <li>🛠️ 1991: First version of <strong>HTML</strong> was developed.</li>
        <li>🚀 1999: <strong>HTML 4.0</strong> became a standard.</li>
        <li>🔥 Today: <strong>HTML5</strong> is the latest version.</li>
      </ul>

      {/* Next Steps */}
      <div className="bg-green-100 dark:bg-green-900 p-4 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
          What's Next? 🚀
        </h3>
        <p>
          In the next tutorial, we'll explore <strong>how websites work</strong> and 
          dive deeper into HTML fundamentals!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
