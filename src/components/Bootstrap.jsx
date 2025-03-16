import React from 'react';
import { SiBootstrap } from 'react-icons/si';

const bootstrapVersions = [
    {
        version: "Bootstrap 3",
        link: "https://getbootstrap.com/docs/3.4/",
        description: "Bootstrap 3 is the most stable version of Bootstrap, and it is still supported by the team for critical bug fixes and documentation changes."
    },
    {
        version: "Bootstrap 4",
        link: "https://getbootstrap.com/docs/4.6/",
        description: "Bootstrap 4 is a newer version of Bootstrap with new components, a faster stylesheet, and more responsiveness. However, Internet Explorer 9 and below is not supported."
    },
    {
        version: "Bootstrap 5",
        link: "https://getbootstrap.com/docs/5.3/",
        description: "Bootstrap 5 is the newest version with a smooth overhaul. However, Internet Explorer 11 and below is not supported, and jQuery has been replaced with vanilla JavaScript."
    }
];

const Bootstrap = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[83.2vh] bg-white text-gray-800 dark:bg-gray-900 dark:text-white p-8">

            {/* Title and Description */}
            <h2 className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">Bootstrap Versions</h2>
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
                Bootstrap is the world's most famous free CSS framework. You can choose between the following versions:
            </p>

            {/* Grid Layout for Versions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

                {bootstrapVersions.map(({ version, link, description }) => (
                    <div
                        key={version}
                        className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center flex flex-col items-center no-underline"
                        >
                            {/* Bootstrap Icon */}
                            <div className="flex justify-center w-full mb-4">
                                <SiBootstrap className="text-purple-600 dark:text-purple-400" size={120} />
                            </div>

                            {/* Version Button */}
                            <button className="w-full max-w-[200px] bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                {version}
                            </button>

                            {/* Description */}
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
                                {description}
                            </p>
                        </a>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Bootstrap;