import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import Pre from '../../assets/html/pretag.mp4';

const PreTag = () => {
    const clipboard = useClipboard();

    const [copiedIndex, setCopiedIndex] = useState(null);

    const codeBlocks = [
        {
            label: 'Syntax Example',
            content: `<pre>
    <!-- code snippet in any programming language -->
</pre>`,
        },
        {
            label: 'Python Program',
            content: `<pre>
    # A simple Python program to print "Hello, World!"
    def main():
        print("Hello, World!")
    
    if __name__ == "__main__":
        main()
</pre>`,
        },
        {
            label: 'Program Output',
            content: `# A simple Python program to print "Hello, World!"
def main():
    print("Hello, World!")
 
if __name__ == "__main__":
    main()`,
        },
    ];

    const handleCopy = (text, index) => {
        clipboard.copy(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-lg sm:text-xl">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;pre&gt;</code> tag serves as an indispensable tool in HTML for displaying preformatted text, such as code snippets in various programming languages.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">What Does the &lt;pre&gt; Tag Do?</h3>
            <p className="text-base sm:text-lg">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;pre&gt;</code> tag preserves the original formatting of text, making it an excellent choice for displaying code where spacing and indentation are key.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">Syntax for Using the &lt;pre&gt; Tag</h3>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base font-mono text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-pre-wrap">
                    {codeBlocks[0].content}
                </pre>
                <button
                    onClick={() => handleCopy(codeBlocks[0].content, 0)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedIndex === 0 ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                <li>Maintains both spaces and line breaks.</li>
                <li>Has both an opening tag <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;pre&gt;</code> and a closing tag <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/pre&gt;</code>.</li>
                <li>Additional attributes can also be added for further customization.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">When to Use the &lt;pre&gt; Tag?</h3>
            <p className="text-base sm:text-lg">
                The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;pre&gt;</code> tag is most effective when you want the text to display on your HTML page exactly as it was typed, without any formatting changes. It is especially useful for displaying code snippets or preformatted text from data files.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">Displaying a Simple Python Program and Its Output</h3>
            <p className="text-base sm:text-lg">
                In this section, we will use HTML to display a simple Python program that prints 'Hello, World!' to the console.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold">Python Program</h4>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                    {codeBlocks[1].content}
                </pre>
                <button
                    onClick={() => handleCopy(codeBlocks[1].content, 1)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedIndex === 1 ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold">Program Output</h4>
            <p className="text-base sm:text-lg">This HTML code will display the program exactly as it is, preserving spaces and new lines. We'll use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;pre&gt;</code> tag to achieve this 'preformatted' display, as shown below.</p>
            <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm sm:text-base font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                    {codeBlocks[2].content}
                </pre>
                <button
                    onClick={() => handleCopy(codeBlocks[2].content, 2)}
                    className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {copiedIndex === 2 ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                        <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <p className="text-base sm:text-lg">
                For a more comprehensive understanding, you can watch the following video tutorial:
            </p>

            <div className="my-4">
                <video
                    src={Pre}
                    controls
                    className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md shadow-md"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h3>
            <p className="text-base sm:text-lg">
                In summary, the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;pre&gt;</code> tag is a versatile tool for preserving the original formatting of text in HTML. Whether you are displaying code snippets or preformatted text, this tag ensures that your content appears exactly as intended.
            </p>
            <p className="text-center font-semibold text-lg mt-8">
                Next, we'll look about Html Inline Elements.
            </p>
        </div>
    );
};

export default PreTag;
