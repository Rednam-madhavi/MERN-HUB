import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";

const topics = [
    { heading: "Next.js Basics", subtopics: ["Next.js Introduction", "Getting Started with Next JS", "Next.js Installation", "NextJS 14 Folder Structure", "Next.js Create Next App", "Deploying your Next.js App"] },
    { heading: "Next.js Routing", subtopics: ["Next.js Routing", "Next.js Nested Routes", "Next.js Pages", "Next JS Layout Component", "Navigate Between Pages in NextJS", "loading.js in Next JS", "Linking between pages in Next.js", "Next.js Redirects", "Next.js Dynamic Route Segments", "Middlewares in Next.js", "Next JS Routing: Internationalization"] },
    { heading: "Next.js Data Fetching", subtopics: ["Next.js Data Fetching", "Server Actions in Next.js", "How to Fetch data faster in Next.js?"] },
    { heading: "Next.js Rendering", subtopics: ["Server Components in Next.js", "Edge Functions and Middleware in Next JS", "How to Reset Next.js Development Cache?"] },
    { heading: "Next.js Styling", subtopics: ["How to Add Stylesheet in Next.js?", "Controlling the specificity of CSS Modules in a Next.js App", "Install & Setup Tailwind CSS with Next.js", "CSS-in-JS Next JS", "Next.js Styling: Sass"] },
];

const NextJs = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("Next.js Introduction");

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, "-");
    const findTopicBySlug = (slug) => {
        for (const topic of topics) {
            for (const subtopic of topic.subtopics) {
                if (generateSlug(subtopic) === slug) return subtopic;
            }
        }
        return "Next.js Introduction";
    };

    useEffect(() => {
        if (slug) setSelectedTopic(findTopicBySlug(slug));
    }, [slug]);

    return (
        <div className="flex h-screen relative">
            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-white dark:bg-gray-900 text-black dark:text-white p-4 z-50 flex flex-col">
                    <div className="flex justify-between items-center border-b pb-2">
                        <h2 className="text-xl font-semibold">Topics</h2>
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>
                    <div className="overflow-y-auto flex-1 p-4">
                        <ul className="space-y-2">
                            {topics.map(({ heading, subtopics }) => (
                                <div key={heading}>
                                    <h3 className="font-semibold text-lg md:text-xl mb-2 uppercase">{heading}</h3>
                                    <ul>
                                        {subtopics.map((subtopic) => (
                                            <li
                                                key={subtopic}
                                                className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic
                                                    ? "bg-gray-100 dark:bg-gray-700"
                                                    : "hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                                                    }`}
                                                onClick={() => {
                                                    navigate(`/next.js/${generateSlug(subtopic)}`);
                                                    setIsSidebarOpen(false);
                                                }}
                                            >
                                                {subtopic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Desktop Sidebar (Always Visible) */}
            <div className="hidden md:block bg-white dark:bg-gray-900 text-black dark:text-white p-4 overflow-y-auto md:w-1/4" style={{ height: '100vh' }}>
                <ul className="space-y-2">
                    {topics.map(({ heading, subtopics }) => (
                        <div key={heading}>
                            <h3 className="font-semibold text-lg md:text-xl mb-2 uppercase">{heading}</h3>
                            <ul>
                                {subtopics.map((subtopic) => (
                                    <li
                                        key={subtopic}
                                        className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic
                                            ? "bg-gray-100 dark:bg-gray-700"
                                            : "hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                                            }`}
                                        onClick={() => navigate(`/next.js/${generateSlug(subtopic)}`)}
                                    >
                                        {subtopic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 md:p-6 h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
                <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize">{selectedTopic}</h1>
                <p>Content related to {selectedTopic} will be displayed here.</p>
            </div>
        </div>
    );
};

export default NextJs;
