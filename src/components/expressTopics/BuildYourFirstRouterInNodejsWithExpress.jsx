import React from 'react';
import folderstructure from '../../assets/express/folderstructure.jpg';

const BuildYourFirstRouterInNodejsWithExpress = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <span className="font-semibold">Express.js</span> is a powerful framework for Node.js. One of its main strengths is the ability to define different routes or middleware to handle various client requests. In this guide, we'll learn how to create and use a router in an Express.js server.
      </p>

      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          What is express.Router()?
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&nbsp;express.Router()&nbsp;</code> function is used to create a new router object. This object helps in handling multiple routes easily within an Express app.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li><span className="font-semibold">Case-sensitive:</span> Enables case sensitivity.</li>
          <li><span className="font-semibold">mergeParams:</span> Preserves <code>req.params</code> values from the parent router.</li>
          <li><span className="font-semibold">Strict:</span> Enables strict routing behavior.</li>
        </ul>

        <p className="text-sm sm:text-base md:text-lg">
          <strong>Return Value:</strong> A new Router Object.
        </p>
      </div>

      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Installing Express
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Install the Express module via npm:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
          <code>npm install express</code>
        </pre>
      </div>

      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Project Structure
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Your project folder will look like this:
        </p>

        <img
          src={folderstructure}
          alt="Folder Structure"
          className="max-w-full max-h-[90vh] rounded-md shadow-lg"
        />
      </div>

      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Creating Routes
        </h2>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">
          Step 1: Home Route
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
          <code>
            {`// routes/Home.js
const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("This is the homepage request");
});

module.exports = router;
`}
          </code>
        </pre>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">
          Step 2: Login Route
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
          <code>
            {`// routes/login.js
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("This is the login request");
});

module.exports = router;
`}
          </code>
        </pre>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">
          Step 3: Main Server Setup
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
          <code>
            {`// index.js
const express = require("express");
const homeroute = require("./routes/Home");
const loginroute = require("./routes/login");

const app = express();

app.use("/", homeroute);
app.use("/", loginroute);

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
`}
          </code>
        </pre>
      </div>

      <div className="py-4 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Running the Application
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Open your terminal and run:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
          <code>node index.js</code>
        </pre>

        <p className="text-sm sm:text-base md:text-lg">
          Now, open your browser and visit: <br />
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">http://localhost:3000/home</code> and <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">http://localhost:3000/login</code> to test your routes.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: Middleware in Express
      </p>

    </div>
  );
};

export default BuildYourFirstRouterInNodejsWithExpress;
