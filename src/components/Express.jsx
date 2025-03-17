import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";

const topics = [
    { heading: "Express Basics", subtopics: ["Introduction to Express", "Steps to Create an Express.js Application", "Print hello world using Express JS", "Build Your First Router in Node.js with Express", "Middleware in Express"] },
    { heading: "Basic Express Guide", subtopics: ["Routing Path for ExpressJS", "Explain the use of req and res objects in Express JS", "Error Handling in Express", "How to do Templating using ExpressJS in Node.js ?", "How To Serve Static Files in ExpressJS?", "How to enable debugging in Express App ?"] },
    { heading: "Express.js express() Methods", subtopics: ["ExpressJS express.json() Function", "Express.js express.raw() Function", "Express express.Router() Function", "Express express.static() Function", "Express.js express.text() Function", "Express express.urlencoded() Function", "Express.js express() function Complete Reference"] },
    { heading: "Express Application Methods", subtopics: ["Express app.delete() Function", "Express.js | app.disable() Function", "Express.js | app.disabled() Function", "Express.js | app.enable() Function", "Express.js | app.enabled() Function", "Express.js app.mountpath Property", "Express.js Mount Event", "Express.js | app.all() Function", "Express.js Application Complete Reference"] },
];

const ExpressJs = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("Introduction to Express");

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, "-");
    const findTopicBySlug = (slug) => {
        for (const topic of topics) {
            for (const subtopic of topic.subtopics) {
                if (generateSlug(subtopic) === slug) return subtopic;
            }
        }
        return "Introduction to Express";
    };

    useEffect(() => {
        if (slug) setSelectedTopic(findTopicBySlug(slug));
    }, [slug]);

    return (
        <div className="flex h-screen relative">
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
                                                className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black'}`}
                                                onClick={() => {
                                                    navigate(`/express/${generateSlug(subtopic)}`);
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

            <div className={`hidden md:block bg-white dark:bg-gray-900 text-black dark:text-white p-4 overflow-y-auto md:w-1/4`} style={{ height: '100vh' }}>
                <ul className="space-y-2">
                    {topics.map(({ heading, subtopics }) => (
                        <div key={heading}>
                            <h3 className="font-semibold text-lg md:text-xl mb-2 uppercase">{heading}</h3>
                            <ul>
                                {subtopics.map((subtopic) => (
                                    <li
                                        key={subtopic}
                                        className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black'}`}
                                        onClick={() => navigate(`/express/${generateSlug(subtopic)}`)}
                                    >
                                        {subtopic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="flex-1 p-4 md:p-6 h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
                <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize">{selectedTopic}</h1>
                <p>Content related to {selectedTopic} will be displayed here.</p>
            </div>
        </div>
    );
};

export default ExpressJs;
