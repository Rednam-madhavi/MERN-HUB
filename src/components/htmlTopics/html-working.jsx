import React, { useState } from 'react';
import working from '../../assets/html/working.png';

const Working = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10 text-gray-800 dark:text-gray-100">

            <section className="space-y-5">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    You must have heard of <strong>frontend</strong> and <strong>backend</strong>. Frontend refers to the visible part of a website or app that users interact with, like tables, images, and buttons. It's built using languages like HTML, CSS, and JavaScript.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The <strong>backend</strong> handles behind-the-scenes operations like storing and processing data when users interact with the frontend. It uses languages like Python, Ruby, and Java. In essence, frontend is what users see, while backend manages the functionality.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-semibold">How Do Websites Work?</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    When we want to access information on the internet, we use a web browser. The browser retrieves content from web servers, stored in the form of HTML documents.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    An HTML document is created using specific tags in a code editor and saved with a
                    <code className="bg-gray-100 dark:bg-gray-700 mx-1 px-2 py-1 rounded text-sm">.html</code>
                    extension. The browser then reads and renders the document into a web page.
                </p>

                <div>
                    <img
                        src={working}
                        alt="Working of HTML"
                        className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                        <div className="relative max-w-3xl mx-auto">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-1 rounded-full"
                            >
                                ✕
                            </button>
                            <img src={working}
                                alt="Zoomed Working"
                                className="rounded-lg shadow-lg max-h-[90vh]"
                            />
                        </div>
                    </div>
                )}

                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The text editor contains the HTML code. This code is rendered into a beautiful website using a browser.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-semibold">What is a Web Browser?</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    A <strong>web browser</strong> is a program that understands HTML tags and renders them in a human-readable format. Developers use HTML to instruct browsers on what to display.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    In the next section, we'll explore how to set up VS Code for writing and testing your HTML code.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-semibold">What is an HTML Document?</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
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
                <h2 className="text-xl sm:text-2xl font-semibold">What is a Rendered Page?</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    A rendered page is the output screen of the HTML document—the final view that the browser displays to the user.
                </p>
            </section>

            <section className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-semibold">How Does a Basic Website Work?</h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
                    <li>
                        The web browser (client) sends a request to a server like{' '}
                        <a
                            href="https://www.google.com/"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.google.com
                        </a>
                        .
                    </li>
                    <li>The server responds with HTML, CSS, and JavaScript files.</li>
                    <li>The browser parses and renders these files to display the website.</li>
                </ul>
            </section>

            <section className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-semibold">How Does a Browser Work?</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    A browser is a complex application responsible for reading and rendering HTML. Here’s a simplified overview:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
                    <li>Browsers request HTML documents from servers.</li>
                    <li>Servers fulfill these requests by sending the appropriate content.</li>
                    <li>Browsers parse this content and build a DOM (Document Object Model).</li>
                    <li>Parsed elements are rendered visually on the screen.</li>
                </ul>
            </section>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Installation
            </p>
        </div>
    );
};

export default Working;
