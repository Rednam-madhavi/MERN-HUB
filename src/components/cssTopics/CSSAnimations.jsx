import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import keyframes from '../../assets/css/animation1.webp';
import keyframes2 from '../../assets/css/animation2.gif';
import shorthand from '../../assets/css/animation3.gif';

const CSSAnimations = () => {
    const [copied, setCopied] = useState(null);
    const clipboard = useClipboard();

    const handleCopy = (code, id) => {
        clipboard.copy(code);
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100">

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                CSS Animations help to animate elements from one frame to another. Controlling various CSS properties helps in changing the animation style and time without the need to use JavaScript for the same.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The most basic way to do so is by using “from” and “to”.
            </p>

            {/* Keyframes */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Keyframes Example</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    The animation here would start with the background color as red and will turn blue gradually. To use this animation, we simply add it to the div stylesheet rule.
                </p>
                <h3 className="text-md font-medium">Example:</h3>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`@keyframes demo {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: blue;\n  }\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`@keyframes demo {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: blue;\n  }\n}`, 1)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 1 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Animation Name */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">1. Animation Name</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    To identify the animation, we assign it with the name. In the above example, the name was <code>demo</code>. So, we will add the <code>animation-name</code> attribute in the <code>div</code> element.
                </p>
                <h3 className="text-md font-medium">Syntax:</h3>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  animation-name: demo;\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  animation-name: demo;\n}`, 2)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 2 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Key Frames */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">2. Key Frames</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Keyframes define at what % of the animation, which stylesheet rules should be used. The value of keyframes varies from 0% to 100%.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    To add keyframes, use the % operator with the value inside the keyframes. More keyframes mean smoother animation.
                </p>

                <h3 className="text-md font-medium">Example:</h3>
                <img
                    src={keyframes}
                    alt="Animation Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />

                <h3 className="text-md font-medium">Output:</h3>
                <img
                    src={keyframes2}
                    alt="Animation Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            {/* Looping Animations */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">3. Looping Animations</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    By default, the animation runs only one time on the website, but you can choose to loop the animation by using the <code>animation-iteration-count</code> property. To keep the animation running continuously, keep the value as <code>infinite</code>.
                </p>
                <h3 className="text-md font-medium">Syntax:</h3>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`{ animation-iteration-count: value; }`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  animation-iteration-count: infinite;\n}`, 4)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 4 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                    </button>
                </div>
                <h3 className="text-md font-medium">Example:</h3>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  animation-iteration-count: infinite;\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  animation-iteration-count: infinite;\n}`, 4)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 4 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Animation Durations */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">4. Animation Duration</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Animation Duration is the key property to start the animations. By default, the animation duration is 0 sec, which means the animation won’t start. So, to start the animation, we will assign the value to the <code>animation-duration</code>.
                </p>
                <h3 className="text-md font-medium">Syntax:</h3>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`{ animation-duration: value(in sec); }`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  animation-iteration-count: infinite;\n}`, 4)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 4 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                    </button>
                </div>
                <h3 className="text-md font-medium">Example:</h3>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  animation-duration: 3s;\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  animation-duration: 3s;\n}`, 5)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 5 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Other Properties */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">5. Other Properties</h2>

                {/* Animation Delay */}
                <div className="space-y-2">
                    <h3 className="text-md sm:text-lg font-semibold">Animation Delay</h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        Delays the start of the animation on the website. Adding a negative value to delay will make the animation run even before the website is loaded.
                    </p>
                    <h3 className="text-md font-medium">Example:</h3>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                        <pre>{`div {\n  animation-delay: -2s;\n}`}</pre>
                        <button
                            onClick={() => handleCopy(`div {\n  animation-delay: -2s;\n}`, 6)}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                        >
                            {copied === 6 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Animation Direction */}
                <div className="space-y-2">
                    <h3 className="text-md sm:text-lg font-semibold">Animation Direction</h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        This property defines the order of the animation. Whether it should be played forward, reverse, or alternatively.
                    </p>
                    <h3 className="text-md font-medium">Syntax:</h3>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                        <pre>{`{ animation-direction: value; }`}</pre>
                        <button
                            onClick={() => handleCopy(`div {\n  animation-iteration-count: infinite;\n}`, 4)}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                        >
                            {copied === 4 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                    <h3 className="text-md font-medium">Example:</h3>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                        <pre>{`div {\n  animation-direction: alternate;\n}`}</pre>
                        <button
                            onClick={() => handleCopy(`div {\n  animation-direction: alternate;\n}`, 7)}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                        >
                            {copied === 7 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Animation Timing Function */}
                <div className="space-y-2">
                    <h3 className="text-md sm:text-lg font-semibold">Animation Timing Function</h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        It defines the speed curve for the animation. This property adds ease to our animation and can have values like <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, and <code>ease-in-out</code>.
                    </p>
                    <h3 className="text-md font-medium">Syntax:</h3>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                        <pre>{`{ animation-timing-function: value; }`}</pre>
                        <button
                            onClick={() => handleCopy(`div {\n  animation-iteration-count: infinite;\n}`, 4)}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                        >
                            {copied === 4 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                    <h3 className="text-md font-medium">Example:</h3>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                        <pre>{`div {\n  animation-timing-function: ease-in-out;\n}`}</pre>
                        <button
                            onClick={() => handleCopy(`div {\n  animation-timing-function: ease-in-out;\n}`, 8)}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                        >
                            {copied === 8 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Animation Fill Mode */}
                <div className="space-y-2">
                    <h3 className="text-md sm:text-lg font-semibold">Animation Fill Mode</h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        This property defines the style of the element when the animation is either stopped or about to start. The value it takes are: <code>none</code>, <code>forwards</code>, <code>backwards</code>, or <code>both</code>.
                    </p>
                    <h3 className="text-md font-medium">Syntax:</h3>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                        <pre>{`{ animation-fill-mode: value; }`}</pre>
                        <button
                            onClick={() => handleCopy(`div {\n  animation-iteration-count: infinite;\n}`, 4)}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                        >
                            {copied === 4 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                    <h3 className="text-md font-medium">Example:</h3>
                    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                        <pre>{`div {\n  animation-fill-mode: forwards;\n}`}</pre>
                        <button
                            onClick={() => handleCopy(`div {\n  animation-fill-mode: forwards;\n}`, 9)}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                        >
                            {copied === 9 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Animation Shorthand */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Animation Shorthand</h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    We’ve seen shorthand properties for other CSS properties, and the same can be applied to Animation too.
                </p>
                <h3 className="text-md font-medium">Example:</h3>
                <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-auto">
                    <pre>{`div {\n  animation: demo 5s ease-in 1s infinite normal both;\n}`}</pre>
                    <button
                        onClick={() => handleCopy(`div {\n  animation: demo 5s ease-in 1s infinite normal both;\n}`, 10)}
                        className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded text-gray-800 dark:text-white"
                    >
                        {copied === 10 ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardIcon className="w-5 h-5" />}
                    </button>
                </div>

                <h3 className="text-md font-medium">Output:</h3>
                <img
                    src={shorthand}
                    alt="Animation Example"
                    className="w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                />
            </div>

            <p className="text-center text-base mt-10 font-medium">
                End of CSS Tutorial
            </p>
        </div>
    );
};

export default CSSAnimations;
