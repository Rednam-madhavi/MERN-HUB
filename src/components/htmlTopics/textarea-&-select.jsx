import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const TextareaAndSelect = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (code, id) => {
        clipboard.copy(code);
        setCopied({ ...copied, [id]: true });
        setTimeout(() => {
            setCopied({ ...copied, [id]: false });
        }, 2000);
    };

    const textareaCode = `<textarea name="comment" rows="4" cols="50">
  Enter your comment here...
</textarea>`;

    const selectCode = `<select name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</select>`;

    const formCode = `<form action="/submit">
  <textarea name="comment" rows="4" cols="50">Enter your comment here...</textarea>
  <select name="fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cherry</option>
  </select>
  <input type="submit" value="Submit">
</form>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                In addition to the basic input types, HTML forms offer other controls like <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;textarea&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;select&gt;</code> for richer user interaction. These elements allow for more complex data collection and provide a better user experience.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">The Textarea Element</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;textarea&gt;</code> element is used when you need multiline text input from the user. This is useful for comments, reviews, or any input where the text length is unpredictable.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">{textareaCode}</code>
                <button
                    onClick={() => handleCopy(textareaCode, 'textarea')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy Textarea Code"
                >
                    {copied.textarea ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">The Select Element</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;select&gt;</code> element creates a dropdown menu for the user. It’s useful when you have a predefined list of options for the user to choose from.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base">
                <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">{selectCode}</code>
                <button
                    onClick={() => handleCopy(selectCode, 'select')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy Select Code"
                >
                    {copied.select ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Combining Textarea and Select</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                You can combine <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;textarea&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;select&gt;</code> in the same form to collect varied types of user input effectively.
            </p>
            <pre className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded text-sm sm:text-base overflow-auto">
                <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">{formCode}</code>
                <button
                    onClick={() => handleCopy(formCode, 'form')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy Form Code"
                >
                    {copied.form ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                </button>
            </pre>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;textarea&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;select&gt;</code> elements add another layer of interactivity to HTML forms, allowing for more versatile and user-friendly data collection. Learning to use them effectively enhances the usability of your web applications.
            </p>
        </div>
    );
};

export default TextareaAndSelect;
