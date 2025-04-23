import React from 'react';
import working from '../../assets/html/working.png';

const Working = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 space-y-10 text-gray-800 dark:text-gray-100">

            <section className="space-y-5">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    You must have heard of <strong>frontend</strong> and <strong>backend</strong>. Frontend refers to the visible part of a website or app that users interact with, like tables, images, and buttons. It's built using languages like HTML, CSS, and JavaScript.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    The <strong>backend</strong> handles behind-the-scenes operations like storing and processing data when users interact with the frontend. It uses languages like Python, Ruby, and Java. In essence, frontend is what users see, while backend manages the functionality.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-2xl font-bold text-grey-700 dark:text-grey-300">How Do Websites Work?</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    When we want to access information on the internet, we use a web browser. The browser retrieves content from web servers, stored in the form of HTML documents.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    An HTML document is created using specific tags in a code editor and saved with a
                    <code className="bg-gray-100 dark:bg-gray-700 mx-1 px-2 py-1 rounded text-sm">.html</code>
                    extension. The browser then reads and renders the document into a web page.
                </p>

                <div className="">
                    <img
                        src={working}
                        alt="Working of HTML"
                        className="w-full sm:w-3/4 lg:w-1/2 rounded-md "
                    />
                </div>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    The text editor contains the HTML code. This code is rendered into a beautiful website using a browser.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-2xl font-bold text-grey-700 dark:text-grey-300">What is a Web Browser?</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    A <strong>web browser</strong> is a program that understands HTML tags and renders them in a human-readable format. Developers use HTML to instruct browsers on what to display.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    In the next section, we'll explore how to set up VS Code for writing and testing your HTML code.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-2xl font-bold text-grey-700 dark:text-grey-300">What is an HTML Document?</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    An HTML document is saved with a
                    <code className="bg-gray-100 dark:bg-gray-700 mx-1 px-2 py-1 rounded text-sm">.html</code>
                    or
                    <code className="bg-gray-100 dark:bg-gray-700 mx-1 px-2 py-1 rounded text-sm">.htm</code>
                    extension. It includes text and tags enclosed in
                    <code className="text-sm">&lt;&gt;</code>
                    symbols, which instruct the browser on how to build the web page.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-2xl font-bold text-grey-700 dark:text-grey-300">What is a Rendered Page?</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    A rendered page is the output screen of the HTML document—the final view that the browser displays to the user.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-2xl font-bold text-grey-700 dark:text-grey-300">How Does a Basic Website Work?</h2>
                <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-2">
                    <li>The web browser (client) sends a request to a server like <a
                        href="https://www.google.com/"
                        className="text-grey-600 dark:text-grey-400 hover:text-grey-800 dark:hover:text-grey-300 transition-colors underline"
                        target="_blank" rel="noopener noreferrer"
                    >
                        www.google.com
                    </a> from the web server.</li>
                    <li>The server responds with HTML, CSS, and JavaScript files.</li>
                    <li>The browser parses and renders these files to display the website.</li>
                </ul>
            </section>

            <section className="space-y-5">
                <h2 className="text-2xl font-bold text-grey-700 dark:text-grey-300">How Does a Browser Work?</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    A browser is a complex application responsible for reading and rendering HTML. Here’s a simplified overview:
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-2">
                    <li>Browsers request HTML documents from servers.</li>
                    <li>Servers fulfill these requests by sending the appropriate content.</li>
                    <li>Browsers parse this content and build a DOM (Document Object Model).</li>
                    <li>Parsed elements are rendered visually on the screen.</li>
                </ul>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                </p>
            </section>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Installation
            </p>
        </div>
    );
};

export default Working;
