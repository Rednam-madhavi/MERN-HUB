import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const topics = [
    { heading: "CSS Introduction", subtopics: ["Information & History", "Your first CSS website", "How CSS works", "Syntax of CSS", "Ways to add CSS", "CSS Selectors", "CSS Comments", "CSS Specificity"] },
    { heading: "CSS Properties", subtopics: ["CSS Colors", "CSS Backgrounds", "CSS Borders", "CSS Images", "CSS Video Embedding", "CSS Fonts", "CSS Text Styling", "CSS Box Model", "CSS Padding", "CSS Margin", "CSS Hover", "CSS Cursors", "CSS List Styles", "CSS Links", "CSS Combinators", "CSS Pseudo-classes", "CSS Buttons", "CSS Overflow", "CSS Float", "CSS !important", "CSS Maths Functions", "CSS Size", "CSS Positioning", "CSS Z-index", "CSS Forms", "CSS Navigation Bar"] },
    { heading: "CSS Designing", subtopics: ["CSS Display", "CSS FlexBox", "CSS Grid", "CSS Media Queries"] },
    { heading: "CSS Advanced Topics", subtopics: ["CSS 2D Transform", "CSS Transitions", "CSS Border Images", "CSS Gradients", "CSS Inherit", "CSS Shadows", "CSS ToolTip Text", "CSS Masking", "CSS Pagination", "CSS Media Queries Advanced", "CSS Animations"] },
];

// Flatten all subtopics into a single array
const allSubtopics = topics.flatMap(topic => topic.subtopics);

const Css = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState(allSubtopics[0]);

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, '-');

    // Find index of selected topic
    const currentIndex = allSubtopics.findIndex(topic => generateSlug(topic) === slug);

    useEffect(() => {
        if (slug) {
            const foundTopic = allSubtopics.find(topic => generateSlug(topic) === slug);
            setSelectedTopic(foundTopic || allSubtopics[0]);  // Default to first topic if not found
        }
    }, [slug]);

    const handleNext = () => {
        if (currentIndex < allSubtopics.length - 1) {
            const nextTopic = allSubtopics[currentIndex + 1];
            navigate(`/css/${generateSlug(nextTopic)}`);
            setSelectedTopic(nextTopic);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevTopic = allSubtopics[currentIndex - 1];
            navigate(`/css/${generateSlug(prevTopic)}`);
            setSelectedTopic(prevTopic);
        }
    };

    return (
        <div className="flex h-screen relative">
            {/* Sidebar for topics */}
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
                                                className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${
                                                    selectedTopic === subtopic
                                                        ? 'bg-gray-100 dark:bg-gray-700'
                                                        : 'hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black'
                                                }`}
                                                onClick={() => {
                                                    navigate(`/css/${generateSlug(subtopic)}`);
                                                    setSelectedTopic(subtopic);
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

            {/* Sidebar (Desktop View) */}
            <div className="hidden md:block bg-white dark:bg-gray-900 text-black dark:text-white p-4 overflow-y-auto md:w-1/4" style={{ height: "100vh" }}>
                <ul className="space-y-2">
                    {topics.map(({ heading, subtopics }) => (
                        <div key={heading}>
                            <h3 className="font-semibold text-lg md:text-xl mb-2 uppercase">{heading}</h3>
                            <ul>
                                {subtopics.map((subtopic) => (
                                    <li
                                        key={subtopic}
                                        className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${
                                            selectedTopic === subtopic
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

            {/* Content Section */}
            <div className="flex-1 p-4 md:p-6 h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
                <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize">{selectedTopic}</h1>
                <p>Content related to {selectedTopic} will be displayed here.</p>

                {/* Previous & Next Buttons */}
                <div className="flex justify-between p-2 mt-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className={`flex items-center bg-gray-700 text-white w-auto dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${
                            currentIndex === 0
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-gray-900 dark:hover:bg-gray-200'
                        }`}
                    >
                        <MdArrowBackIos size={20} /> Previous
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex === allSubtopics.length - 1}
                        className={`flex items-center bg-gray-700 text-white w-auto dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${
                            currentIndex === allSubtopics.length - 1
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-gray-900 dark:hover:bg-gray-200'
                        }`}
                    >
                        Next <MdArrowForwardIos size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Css;
