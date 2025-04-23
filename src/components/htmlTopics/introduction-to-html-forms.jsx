import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const HtmlForms = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (codeSnippet, type) => {
        try {
            clipboard.copy(codeSnippet);
            setCopied((prevState) => ({
                ...prevState,
                [type]: true,
            }));

            setTimeout(() => {
                setCopied((prevState) => ({
                    ...prevState,
                    [type]: false,
                }));
            }, 2000);
        } catch (error) {
            console.error("Failed to copy to clipboard:", error);
        }
    };

    // Code snippets for copying
    const formStructureExample = `<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  <br><br>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  <br><br>

  <label>Gender:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
  <br><br>

  <input type="submit" value="Submit">
</form>`;

    const inputTagExample = `<input type="text" name="username" value="">`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                HTML forms are essential for collecting user input on web pages. Whether it's a search bar, a login screen, or a multi-field registration form, HTML forms play a key role in web interactions. They enable users to submit data, which can be processed, stored, or returned by a server.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Why Do We Use Forms?</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Forms serve as the gateway between the user and the server, allowing for dynamic, interactive web experiences. They are crucial for tasks such as user authentication, data submission, feedback collection, and more. Simply put, forms make websites more engaging and functional.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">HTML Forms Structure</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The fundamental structure of an HTML form is encapsulated within the <code>&lt;form&gt;</code> tags. Inside these tags, you'll place various form controls like text fields, checkboxes, radio buttons, and buttons for submitting the form.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{formStructureExample}</code>
                <button
                    onClick={() => handleCopy(formStructureExample, 'formStructure')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Form Structure Syntax"
                >
                    {copied.formStructure ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">How to Use Form Controls?</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>&lt;input&gt;</code> tag is commonly used to create form controls. The attributes of this tag define the control's behavior.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{inputTagExample}</code>
                <button
                    onClick={() => handleCopy(inputTagExample, 'inputTag')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Input Tag Syntax"
                >
                    {copied.inputTag ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Form Controls Attributes</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code>type</code> attribute specifies the type of input control (e.g., text, password, checkbox). The <code>name</code> attribute is used for identifying the control, especially when the data is sent to the server. The <code>value</code> attribute sets a default value for the control, which the user can overwrite.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Sample HTML Form</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Here’s a sample HTML form with basic form controls like text input, password input, radio buttons, and a submit button:
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{formStructureExample}</code>
                <button
                    onClick={() => handleCopy(formStructureExample, 'formStructure')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Sample Form Syntax"
                >
                    {copied.formStructure ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                HTML forms are the backbone of user input on the web. By using form controls effectively, you can create interactive and dynamic web pages that engage users. Stay tuned for more insights into web development!
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Input Types
            </p>
        </div>
    );
};

export default HtmlForms;
