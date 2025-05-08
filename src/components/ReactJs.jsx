import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import ReactClass from "./reactTopics/ReactClass";
import ReactComponents from "./reactTopics/ReactComponents";
import ReactConditional from "./reactTopics/ReactConditional";
import ReactCSSStyling from "./reactTopics/ReactCSSStyling";
import ReactES6 from "./reactTopics/ReactES6";
import ReactEvents from "./reactTopics/ReactEvents";
import ReactForms from "./reactTopics/ReactForms";
import ReactGettingStarted from "./reactTopics/ReactGettingStarted";
import ReactHome from "./reactTopics/ReactHome";
import ReactJSX from "./reactTopics/ReactJSX";
import ReactLists from "./reactTopics/ReactLists";
import ReactMemo from "./reactTopics/ReactMemo";
import ReactProps from "./reactTopics/ReactProps";
import ReactRenderHTML from "./reactTopics/ReactRenderHTML";
import ReactRouter from "./reactTopics/ReactRouter";
import ReactSetup from "./reactTopics/ReactSetup";
import ReactUseCallback from "./reactTopics/ReactUseCallback";
import ReactUseContext from "./reactTopics/ReactUseContext";
import ReactUseEffectHook from "./reactTopics/ReactUseEffectHook";
import ReactUseMemo from "./reactTopics/ReactUseMemo";
import ReactUseReducer from "./reactTopics/ReactUseReducer";
import ReactUseRef from "./reactTopics/ReactUseRef";
import ReactUseStateHook from "./reactTopics/ReactUseStateHook";
import WhatIsAHook from "./reactTopics/WhatIsAHook";

const topics = [
    {
        heading: "React Tutorial",
        subtopics: [
            "React Home", "React Setup", "React Getting Started", "React ES6", "React Render HTML",
            "React JSX", "React Components", "React Class", "React Props", "React Events",
            "React Conditional", "React Lists", "React Forms", "React Router", "React Memo", "React CSS Styling"
        ]
    },
    {
        heading: "React Hooks",
        subtopics: [
            "What is a Hook", "React useState Hook", "React useEffect Hook", "React useContext",
            "React useRef", "React useReducer", "React useCallback", "React useMemo"
        ]
    }
];

// Flatten all subtopics into a single array
const allSubtopics = topics.flatMap(topic => topic.subtopics);

const topicComponents = {
    "React Home": <ReactHome />,
    "React Setup": <ReactSetup />,
    "React Getting Started": <ReactGettingStarted />,
    "React ES6": <ReactES6 />,
    "React Render HTML": <ReactRenderHTML />,
    "React JSX": <ReactJSX />,
    "React Components": <ReactComponents />,
    "React Class": <ReactClass />,
    "React Props": <ReactProps />,
    "React Events": <ReactEvents />,
    "React Conditional": <ReactConditional />,
    "React Lists": <ReactLists />,
    "React Forms": <ReactForms />,
    "React Router": <ReactRouter />,
    "React Memo": <ReactMemo />,
    "React CSS Styling": <ReactCSSStyling />,
    "What is a Hook": <WhatIsAHook />,
    "React useState Hook": <ReactUseStateHook />,
    "React useEffect Hook": <ReactUseEffectHook />,
    "React useContext": <ReactUseContext />,
    "React useRef": <ReactUseRef />,
    "React useReducer": <ReactUseReducer />,
    "React useCallback": <ReactUseCallback />,
    "React useMemo": <ReactUseMemo />
};

const ReactJs = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState(allSubtopics[0]);
    const contentRef = useRef(null);

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, "-");

    const currentIndex = allSubtopics.findIndex(topic => generateSlug(topic) === slug);

    const scrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    };

    const findTopicBySlug = (slug) => {
        for (const topic of topics) {
            for (const subtopic of topic.subtopics) {
                if (generateSlug(subtopic) === slug) return subtopic;
            }
        }
        return allSubtopics[0];
    };

    useEffect(() => {
        if (slug) setSelectedTopic(findTopicBySlug(slug));
    }, [slug]);

    const handleNext = () => {
        if (currentIndex < allSubtopics.length - 1) {
            const nextTopic = allSubtopics[currentIndex + 1];
            navigate(`/react/${generateSlug(nextTopic)}`);
            setSelectedTopic(nextTopic);
            scrollToTop();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevTopic = allSubtopics[currentIndex - 1];
            navigate(`/react/${generateSlug(prevTopic)}`);
            setSelectedTopic(prevTopic);
            scrollToTop();
        }
    };

    const handleSidebarClick = (subtopic) => {
        navigate(`/react/${generateSlug(subtopic)}`);
        setSelectedTopic(subtopic);
        setIsSidebarOpen(false);
        scrollToTop();
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
                                                className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic
                                                    ? "bg-gray-100 dark:bg-gray-700"
                                                    : "hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                                                    }`}
                                                onClick={() => handleSidebarClick(subtopic)}
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

            {/* Desktop Sidebar */}
            <div className="hidden md:block bg-white dark:bg-gray-900 text-black dark:text-white p-4 overflow-y-auto md:w-1/4" style={{ height: "100vh" }}>
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
                                        onClick={() => handleSidebarClick(subtopic)}
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
            <div ref={contentRef} className="flex-1 p-4 md:p-6 h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
                <h1 className="text-2xl md:text-4xl font-semibold capitalize">{selectedTopic}</h1>

                <div className="mt-4">
                    {topicComponents[selectedTopic] || <div>Topic Not Found</div>}
                </div>

                <div className="flex justify-between p-2 pb-0 mt-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className={`flex items-center bg-gray-700 text-white dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900 dark:hover:bg-gray-200"}`}
                    >
                        <MdArrowBackIos size={20} /> Previous
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex === allSubtopics.length - 1}
                        className={`flex items-center bg-gray-700 text-white dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${currentIndex === allSubtopics.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900 dark:hover:bg-gray-200"}`}
                    >
                        Next <MdArrowForwardIos size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReactJs;