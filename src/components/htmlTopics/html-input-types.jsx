import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const HtmlInputTypes = () => {
    const clipboard = useClipboard();

    // To track copied state for each button individually
    const [copied, setCopied] = useState({});

    const handleCopy = (codeSnippet, type) => {
        try {
            clipboard.copy(codeSnippet);
            setCopied((prevState) => ({
                ...prevState,
                [type]: true,
            }));

            // Reset copied state after 2 seconds
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

    const inputCode = `<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter your username">
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" placeholder="Enter your password">
  
  <label for="gender">Gender:</label>
  <input type="radio" id="male" name="gender" value="male"><label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female"><label for="female">Female</label>
  
  <label for="subscribe">Subscribe:</label>
  <input type="checkbox" id="subscribe" name="subscribe" value="yes"><label for="subscribe">Subscribe to newsletter</label>
</form>`;

    const inputTypesList = [
        { type: 'text', description: 'Allows the user to type a single line of text.' },
        { type: 'password', description: 'Allows the user to type a password (characters are hidden).' },
        { type: 'submit', description: 'Represents a button that, when pressed, submits the form.' },
        { type: 'reset', description: 'Represents a button that resets all form controls to their initial values.' },
        { type: 'radio', description: 'Represents an option in a set of options that are mutually exclusive.' },
        { type: 'checkbox', description: 'Represents an option that can be selected independently of other options.' },
        { type: 'button', description: 'Represents a clickable button.' },
        { type: 'color', description: 'Allows the user to select a color.' },
        { type: 'date', description: 'Allows the user to select a date.' },
        { type: 'datetime-local', description: 'Allows the user to select a date and time with no time zone.' },
        { type: 'email', description: 'Allows the user to enter an email address.' },
        { type: 'file', description: 'Allows the user to select one or more files from their device storage.' },
        { type: 'hidden', description: 'Represents a value that is not displayed but is submitted to the server.' },
        { type: 'image', description: 'Defines an image that acts as a submit button.' },
        { type: 'month', description: 'Allows the user to select a month and year.' },
        { type: 'number', description: 'Allows the user to enter a number.' },
        { type: 'range', description: 'Allows the user to select a number from a range.' },
        { type: 'search', description: 'Allows the user to enter a search query string.' },
        { type: 'tel', description: 'Allows the user to enter a telephone number.' },
        { type: 'time', description: 'Allows the user to select a time.' },
        { type: 'url', description: 'Allows the user to enter a URL.' },
        { type: 'week', description: 'Allows the user to select a week.' },
    ];

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Input types in HTML forms are essential for gathering data from users. Below, we'll explore some common HTML input types: text, password, radio, and checkbox.
            </p>

            {/* Text Input */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Text Input</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The text input type allows the user to type a single line of text.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{'<input type="text" name="username" placeholder="Enter your username">'}</code>
                <button
                    onClick={() => handleCopy('<input type="text" name="username" placeholder="Enter your username">', 'text')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Text Input Example"
                >
                    {copied.text ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            {/* Password Input */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Password Input</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The password input type hides the characters typed by the user for security purposes.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code>{'<input type="password" name="password" placeholder="Enter your password">'}</code>
                <button
                    onClick={() => handleCopy('<input type="password" name="password" placeholder="Enter your password">', 'password')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Password Input Example"
                >
                    {copied.password ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </div>

            {/* Radio Buttons */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Radio Buttons</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Use radio buttons to allow the user to select one option from a set of options.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-3 rounded text-sm sm:text-base">
                <code>{`<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>`}</code>
                <button
                    onClick={() => handleCopy(`
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label`, 'radio')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Radio Buttons Example"
                >
                    {copied.radio ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            {/* Checkbox */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Checkbox</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Checkboxes are used when multiple options can be selected independently.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-3 rounded text-sm sm:text-base">
                <code>{`<input type="checkbox" id="subscribe" name="subscribe" value="yes">
<label for="subscribe">Subscribe to newsletter</label>`}</code>
                <button
                    onClick={() => handleCopy('<input type="checkbox" id="subscribe" name="subscribe" value="yes">', 'checkbox')}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy Checkbox Example"
                >
                    {copied.checkbox ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                </button>
            </pre>

            {/* More Input Types */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Other Input Types</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Below is a comprehensive list of HTML input types you can use:
            </p>
            <table className="min-w-full bg-white dark:bg-gray-700 text-sm sm:text-base md:text-lg border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">Input Type</th>
                        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {inputTypesList.map((item) => (
                        <tr key={item.type}>
                            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{item.type}</td>
                            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6">
                HTML input types provide powerful tools for user interactions. Understanding how and when to use each type is crucial for creating effective and user-friendly forms.
            </p>
        </div>
    );
};

export default HtmlInputTypes;
