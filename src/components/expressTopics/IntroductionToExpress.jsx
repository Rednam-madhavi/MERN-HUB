import React, { useState } from 'react';

const IntroductionToExpress = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    What is Express?
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Express is a minimal and flexible Node.js web application framework that provides a robust set of features
                    for web and mobile applications. It simplifies Node.js’s APIs and adds helpful features like middleware support,
                    routing, and rendering dynamic HTTP responses.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    It is a crucial part of the <strong>MERN Stack</strong> and <strong>MEAN Stack</strong>:
                </p>

                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
                    <li><strong>MongoDB</strong> — Database</li>
                    <li><strong>ExpressJS</strong> — Web Framework</li>
                    <li><strong>ReactJS</strong> — Front-end Framework</li>
                    <li><strong>AngularJS</strong> — Front-end Framework</li>
                    <li><strong>NodeJS</strong> — Application Server</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Installing Express on Windows
                </h2>

                <p className="text-sm sm:text-base md:text-lg">
                    Follow these steps to install Express.js on a Windows 10 system:
                </p>

                <ol className="list-decimal list-inside space-y-3 text-sm sm:text-base md:text-lg">

                    <li>
                        <strong>Initializing npm:</strong> <br />
                        This will create a <code>package.json</code> file for your project:
                        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded my-2 text-sm overflow-x-auto">
                            {` npm init`}
                        </pre>
                        Keep pressing <em>Enter</em> and answer "yes/no" prompts as needed.
                    </li>

                    <li>
                        <strong>Installing Express:</strong> <br />
                        In the project directory, install Express:
                        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded my-2 text-sm overflow-x-auto">
                            {` npm install express --save`}
                        </pre>
                    </li>

                    <li>
                        <strong>Verifying Express installation:</strong> <br />
                        To check if Express is installed successfully, run:
                        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded my-2 text-sm overflow-x-auto">
                            {`npm list express`}
                        </pre>
                        This will display the installed version of Express.
                    </li>
                </ol>

                <p className="text-xs sm:text-sm italic mt-4">
                    <strong>Note:</strong> Any "WARN" messages during <code>npm init</code> just indicate missing optional fields.
                </p>
            </div>

            <div className="py-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Summary
                </h2>

                <ul className="list-disc list-inside space-y-3 text-sm sm:text-base md:text-lg">
                    <li>Express simplifies building web servers using Node.js.</li>
                    <li>It is lightweight, fast, and adds powerful middleware and routing support.</li>
                    <li>Part of the popular MEAN/MERN stacks used in full-stack JavaScript development.</li>
                </ul>
            </div>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: Steps to Create an Express.js Application
            </p>
        </div>
    );
};

export default IntroductionToExpress;
