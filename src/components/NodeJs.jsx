import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NotFound from "./NotFound";

// Import all topic components
import MongoDBCollection from "./nodeTopics/MongoDBCollection";
import MongoDBCreateDB from "./nodeTopics/MongoDBCreateDB";
import MongoDBDelete from "./nodeTopics/MongoDBDelete";
import MongoDBDropCollection from "./nodeTopics/MongoDBDropCollection";
import MongoDBFind from "./nodeTopics/MongoDBFind";
import MongoDBGetStarted from "./nodeTopics/MongoDBGetStarted";
import MongoDBInsert from "./nodeTopics/MongoDBInsert";
import MongoDBJoin from "./nodeTopics/MongoDBJoin";
import MongoDBLimit from "./nodeTopics/MongoDBLimit";
import MongoDBQuery from "./nodeTopics/MongoDBQuery";
import MongoDBSort from "./nodeTopics/MongoDBSort";
import MongoDBUpdate from "./nodeTopics/MongoDBUpdate";
import NodejsEmail from "./nodeTopics/NodejsEmail";
import NodejsEvents from "./nodeTopics/NodejsEvents";
import NodejsFileSystem from "./nodeTopics/NodejsFileSystem";
import NodejsGetStarted from "./nodeTopics/NodejsGetStarted";
import NodejsHOME from "./nodeTopics/NodejsHOME";
import NodejsHTTPModule from "./nodeTopics/NodejsHTTPModule";
import NodejsIntro from "./nodeTopics/NodejsIntro";
import NodejsModules from "./nodeTopics/NodejsModules";
import NodejsNPM from "./nodeTopics/NodejsNPM";
import NodejsUploadFiles from "./nodeTopics/NodejsUploadFiles";
import NodejsURLModule from "./nodeTopics/NodejsURLModule";

// Topics structure
const topics = [
    {
        heading: "Node.js Tutorial",
        subtopics: [
            "Node.js HOME", "Node.js Intro", "Node.js Get Started", "Node.js Modules", "Node.js HTTP Module", "Node.js File System",
            "Node.js URL Module", "Node.js NPM", "Node.js Events", "Node.js Upload Files", "Node.js Email"
        ]
    },
    {
        heading: "Node.js MongoDB",
        subtopics: [
            "MongoDB Get Started", "MongoDB Create DB", "MongoDB Collection", "MongoDB Insert", "MongoDB Find", "MongoDB Query",
            "MongoDB Sort", "MongoDB Delete", "MongoDB Drop Collection", "MongoDB Update", "MongoDB Limit", "MongoDB Join"
        ]
    }
];

const topicComponents = {
    "Node.js HOME": <NodejsHOME />,
    "Node.js Intro": <NodejsIntro />,
    "Node.js Get Started": <NodejsGetStarted />,
    "Node.js Modules": <NodejsModules />,
    "Node.js HTTP Module": <NodejsHTTPModule />,
    "Node.js File System": <NodejsFileSystem />,
    "Node.js URL Module": <NodejsURLModule />,
    "Node.js NPM": <NodejsNPM />,
    "Node.js Events": <NodejsEvents />,
    "Node.js Upload Files": <NodejsUploadFiles />,
    "Node.js Email": <NodejsEmail />,
    "MongoDB Get Started": <MongoDBGetStarted />,
    "MongoDB Create DB": <MongoDBCreateDB />,
    "MongoDB Collection": <MongoDBCollection />,
    "MongoDB Insert": <MongoDBInsert />,
    "MongoDB Find": <MongoDBFind />,
    "MongoDB Query": <MongoDBQuery />,
    "MongoDB Sort": <MongoDBSort />,
    "MongoDB Delete": <MongoDBDelete />,
    "MongoDB Drop Collection": <MongoDBDropCollection />,
    "MongoDB Update": <MongoDBUpdate />,
    "MongoDB Limit": <MongoDBLimit />,
    "MongoDB Join": <MongoDBJoin />
};

const NodeJs = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("Node.js HOME");
    const contentRef = useRef(null);

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, "-");

    const allSubtopics = topics.flatMap((topic) => topic.subtopics);
    const currentIndex = allSubtopics.indexOf(selectedTopic);

    const findTopicBySlug = (slug) => {
        for (const topic of topics) {
            for (const subtopic of topic.subtopics) {
                if (generateSlug(subtopic) === slug) return subtopic;
            }
        }
        return "Node.js HOME";
    };

    useEffect(() => {
        if (slug) setSelectedTopic(findTopicBySlug(slug));
    }, [slug]);

    const scrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    };

    const handleNext = () => {
        if (currentIndex < allSubtopics.length - 1) {
            const nextTopic = allSubtopics[currentIndex + 1];
            navigate(`/node.js/${generateSlug(nextTopic)}`);
            setSelectedTopic(nextTopic);
            scrollToTop();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevTopic = allSubtopics[currentIndex - 1];
            navigate(`/node.js/${generateSlug(prevTopic)}`);
            setSelectedTopic(prevTopic);
            scrollToTop();
        }
    };

    const handleSidebarClick = (subtopic) => {
        navigate(`/node.js/${generateSlug(subtopic)}`);
        setSelectedTopic(subtopic);
        setIsSidebarOpen(false);
        scrollToTop();
    };

    return (
        <div className="flex h-screen relative">
            {/* Mobile sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-white dark:bg-gray-900 text-black dark:text-white p-4 z-50 flex flex-col shadow-lg transition-transform transform md:w-80">
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <h2 className="text-xl font-semibold">Topics</h2>
                        <button onClick={() => setIsSidebarOpen(false)} aria-label="Close sidebar">
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

            {/* Desktop sidebar */}
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

            {/* Content area */}
            <div ref={contentRef} className="flex-1 p-4 md:p-6 h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
                <h1 className="text-2xl md:text-4xl font-semibold capitalize">{selectedTopic}</h1>

                <div className="mt-4">
                    {topicComponents[selectedTopic] || <NotFound />}
                </div>

                <div className="flex justify-between p-2 pb-0 mt-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className={`flex items-center bg-gray-700 text-white dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105
duration-300 ${currentIndex === 0 && "opacity-50 cursor-not-allowed"}} > <MdArrowBackIos className="mr-2" /> Previous </button> <button onClick={handleNext} disabled={currentIndex === allSubtopics.length - 1} className={flex items-center bg-gray-700 text-white dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 duration-300 ${currentIndex === allSubtopics.length - 1 && "opacity-50 cursor-not-allowed"}`}
                    >
                        Next <MdArrowForwardIos className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NodeJs;

