import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const MoreOnForms = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (code, key) => {
        clipboard.copy(code);
        setCopied((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000);
    };

    const examples = {
        action: `<form action="/submit.php" method="POST">\n</form>`,
        method: `<form action="/submit.php" method="POST">\n</form>`,
        name: `<input type="text" name="username">`,
        placeholder: `<input type="text" placeholder="Enter your username">`,
        required: `<input type="text" required>`,
        autofocus: `<input type="text" autofocus>`,
        pattern: `<input type="text" pattern="[a-zA-Z0-9]+">`,
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                HTML forms are the backbone of interactive websites. They allow users to submit data, which can be processed on the server. While we have covered basic input types in previous tutorials, this tutorial aims to delve deeper into form attributes, both common and new HTML5 additions. We'll also look at HTML5 validation attributes to ensure data integrity.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold">Common Attributes</h2>

            {[
                { title: 'action', description: 'Specifies the URL where the form data should be sent after submission.', key: 'action' },
                { title: 'method', description: 'Defines how data is sent. The two most common methods are GET and POST.', key: 'method' },
                { title: 'name', description: 'Specifies the name for the form element, making it easier to reference in scripts or server-side code.', key: 'name' },
            ].map(({ title, description, key }) => (
                <div key={key}>
                    <h3 className="text-lg font-medium mt-4 capitalize">{title}:</h3>
                    <p className="mb-2">{description}</p>
                    <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                        <code className="whitespace-pre-wrap">{examples[key]}</code>
                        <button
                            onClick={() => handleCopy(examples[key], key)}
                            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                            aria-label={`Copy ${key} example`}
                        >
                            {copied[key] ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            ))}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">New HTML5 Attributes</h2>

            {[
                { title: 'placeholder', description: 'Provides a hint to the user as to what can be entered in the field.', key: 'placeholder' },
                { title: 'required', description: 'Makes a field mandatory to fill out.', key: 'required' },
                { title: 'autofocus', description: 'Automatically focuses the cursor on the input when the page loads.', key: 'autofocus' },
            ].map(({ title, description, key }) => (
                <div key={key}>
                    <h3 className="text-lg font-medium mt-4 capitalize">{title}:</h3>
                    <p className="mb-2">{description}</p>
                    <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                        <code className="whitespace-pre-wrap">{examples[key]}</code>
                        <button
                            onClick={() => handleCopy(examples[key], key)}
                            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                            aria-label={`Copy ${key} example`}
                        >
                            {copied[key] ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            ))}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">HTML5 Validation Attributes</h2>

            {[
                { title: 'required', description: 'Makes a field mandatory (already explained above).', key: 'required' },
                { title: 'pattern', description: 'Specifies a regular expression that the input must match to be valid.', key: 'pattern' },
            ].map(({ title, description, key }) => (
                <div key={key}>
                    <h3 className="text-lg font-medium mt-4 capitalize">{title}:</h3>
                    <p className="mb-2">{description}</p>
                    <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                        <code className="whitespace-pre-wrap">{examples[key]}</code>
                        <button
                            onClick={() => handleCopy(examples[key], key)}
                            className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                            aria-label={`Copy ${key} example`}
                        >
                            {copied[key] ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            ))}

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Understanding the different attributes available for HTML forms is crucial for building robust and user-friendly web applications. This tutorial covered both commonly used and new HTML5-specific attributes that enhance functionality and user interaction. Employing these attributes effectively will greatly enhance your web forms.
            </p>

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Meta Tags
            </p>
        </div>
    );
};

export default MoreOnForms;
