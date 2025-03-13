import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const topics = [
    {
        heading: "CSS Introduction", subtopics: [
            "Information & History", "Your first CSS website", "How CSS works?", "Syntax of CSS", "Ways to add CSS",
            "CSS Selectors", "CSS Comments", "CSS Specificity"
        ]
    },
    {
        heading: "CSS Properties", subtopics: [
            "CSS Colors", "CSS Backgrounds", "CSS Borders", "CSS Images", "CSS Video Embedding", "CSS Fonts",
            "CSS Text Styling", "CSS Box Model", "CSS Padding", "CSS Margin", "CSS Hover", "CSS Cursors", "CSS List Styles",
            "CSS Links", "CSS Combinators", "CSS Pseudo-classes", "CSS Buttons", "CSS Overflow", "CSS Float", "CSS !important",
            "CSS Maths Functions", "CSS Size", "CSS Positioning", "CSS Z-index", "CSS Forms", "CSS Navigation Bar"
        ]
    },
    {
        heading: "CSS Designing", subtopics: [
            "CSS Display", "CSS FlexBox", "CSS Grid", "CSS Media Queries"
        ]
    },
    {
        heading: "CSS Advance Topics", subtopics: [
            "CSS 2D Transform", "CSS Transitions", "CSS Border Images", "CSS Gradients", "CSS Inherit", "CSS Shadows",
            "CSS ToolTip Text", "CSS Masking", "CSS Pagination", "CSS Media Queries Advanced", "CSS Animations"
        ]
    }
];

const Css = () => {
    const [selectedTopic, setSelectedTopic] = useState("CSS Introduction");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen relative">
            {/* Menu Button on Right Side */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 text-black p-2 rounded-md"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <FiMenu size={24} />
            </button>

            {/* Full-screen Sidebar on Small Screens */}
            <div className={`bg-white text-black p-4 overflow-y-auto h-screen w-screen md:w-1/4 md:block ${isSidebarOpen ? 'block fixed top-0 left-0 z-40' : 'hidden'} md:relative shadow-lg`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <ul className="space-y-2">
                    {topics.map(topic => (
                        <div key={topic.heading}>
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-xl mt-3 mb-2">{topic.heading}</h3>
                            </div>
                            <ul>
                                {topic.subtopics.map(subtopic => (
                                    <li key={subtopic}
                                        className={`cursor-pointer p-2 rounded-md ${selectedTopic === subtopic ? 'bg-gray-100' : 'hover:bg-gray-600 hover:text-white'}`}
                                        onClick={() => { setSelectedTopic(subtopic); setIsSidebarOpen(false); }}>
                                        {subtopic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="w-3/4 p-6">
                <h1 className="text-2xl font-bold mb-4">{selectedTopic}</h1>
                <p>Content related to {selectedTopic} will be displayed here.</p>
            </div>
        </div>
    );
};

export default Css;