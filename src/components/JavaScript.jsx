import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const topics = [
    {
        heading: "JS Introduction", subtopics: [
            "JS Introduction", "JS Execution", "Node.js Installation"
        ]
    },
    {
        heading: "JAVASCRIPT VARIABLES", subtopics: [
            "What are Variables?", "Variable Naming Rules", "Primitives and Objects", "Operators and Expressions", "var vs let vs const"
        ]
    },
    {
        heading: "JAVASCRIPT BASICS", subtopics: [
            "If else conditionals", "If else ladder", "Switch case", "Ternary Operator", "For Loops", "While Loop", "Functions"
        ]
    },
    {
        heading: "JAVASCRIPT OBJECTS", subtopics: [
            "Strings", "Arrays and Array Methods", "Loops with Arrays", "Map, Filter and Reduce", "Date", "Math", "Number", "Boolean"
        ]
    },
    {
        heading: "DOM & BOM", subtopics: [
            "Window Object", "History Object", "Navigator Object", "Screen Object", "Document Object", "getElementbyId", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "innerHTML", "outerHTML"
        ]
    },
    {
        heading: "OOPs", subtopics: [
            "Class", "Objects", "Constructor", "Static Method", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction"
        ]
    }
];

const JavaScript = () => {
    const [selectedTopic, setSelectedTopic] = useState("JS Introduction");
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

export default JavaScript;