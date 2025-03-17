import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from "lucide-react";

const topics = [
    { heading: "CSS Introduction", subtopics: ["Information & History", "Your first CSS website", "How CSS works?", "Syntax of CSS", "Ways to add CSS", "CSS Selectors", "CSS Comments", "CSS Specificity"] },
    { heading: "CSS Properties", subtopics: ["CSS Colors", "CSS Backgrounds", "CSS Borders", "CSS Images", "CSS Video Embedding", "CSS Fonts", "CSS Text Styling", "CSS Box Model", "CSS Padding", "CSS Margin", "CSS Hover", "CSS Cursors", "CSS List Styles", "CSS Links", "CSS Combinators", "CSS Pseudo-classes", "CSS Buttons", "CSS Overflow", "CSS Float", "CSS !important", "CSS Maths Functions", "CSS Size", "CSS Positioning", "CSS Z-index", "CSS Forms", "CSS Navigation Bar"] },
    { heading: "CSS Designing", subtopics: ["CSS Display", "CSS FlexBox", "CSS Grid", "CSS Media Queries"] },
    { heading: "CSS Advanced Topics", subtopics: ["CSS 2D Transform", "CSS Transitions", "CSS Border Images", "CSS Gradients", "CSS Inherit", "CSS Shadows", "CSS ToolTip Text", "CSS Masking", "CSS Pagination", "CSS Media Queries Advanced", "CSS Animations"] },
];

const Css = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("CSS Introduction");

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, '-');
    const findTopicBySlug = (slug) => {
        for (const topic of topics) {
            for (const subtopic of topic.subtopics) {
                if (generateSlug(subtopic) === slug) return subtopic;
            }
        }
        return "CSS Introduction";
    };

    useEffect(() => {
        if (slug) setSelectedTopic(findTopicBySlug(slug));
    }, [slug]);

    return (
        <>
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
                                                    className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic
                                                        ? 'bg-gray-100 dark:bg-gray-700'
                                                        : 'hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black'
                                                        }`}
                                                    onClick={() => {
                                                        navigate(`/css/${generateSlug(subtopic)}`);
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
                                            className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic
                                                ? 'bg-gray-100 dark:bg-gray-700'
                                                : 'hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black'
                                                }`}
                                            onClick={() => navigate(`/css/${generateSlug(subtopic)}`)}
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
        </>
    );
};

export default Css;
