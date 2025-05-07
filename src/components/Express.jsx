import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NotFound from "./NotFound";

// Import all topic components
import BuildYourFirstRouterInNodejsWithExpress from "./expressTopics/BuildYourFirstRouterInNodejsWithExpress";
import EnableDebuggingInExpressApp from "./expressTopics/EnableDebuggingInExpressApp";
import ErrorHandlingInExpress from "./expressTopics/ErrorHandlingInExpress";
import ExpressJsonFunction from "./expressTopics/ExpressJsonFunction";
import ExpressRawFunction from "./expressTopics/ExpressRawFunction";
import ExpressRouterFunction from "./expressTopics/ExpressRouterFunction";
import ExpressStaticFunction from "./expressTopics/ExpressStaticFunction";
import ExpressTextFunction from "./expressTopics/ExpressTextFunction";
import ExpressUrlencodedFunction from "./expressTopics/ExpressUrlencodedFunction";
import IntroductionToExpress from "./expressTopics/IntroductionToExpress";
import MiddlewareInExpress from "./expressTopics/MiddlewareInExpress";
import PrintHelloWorldUsingExpressJS from "./expressTopics/PrintHelloWorldUsingExpressJS";
import RoutingPathForExpressJS from "./expressTopics/RoutingPathForExpressJS";
import ServingStaticFilesInExpressJS from "./expressTopics/ServingStaticFilesInExpressJS";
import StepsToCreateAnExpressjsApplication from "./expressTopics/StepsToCreateAnExpressjsApplication";
import TemplatingUsingExpressJSInNodejs from "./expressTopics/TemplatingUsingExpressJSInNodejs";
import UseOfReqAndResObjectsInExpressJS from "./expressTopics/UseOfReqAndResObjectsInExpressJS";

// Topics structure
const topics = [
    {
        heading: "Express Basics",
        subtopics: [
            "Introduction to Express", "Steps to Create an Express.js Application", "Print Hello World using Express JS",
            "Build Your First Router in Node.js with Express", "Middleware in Express"
        ]
    },
    {
        heading: "Basic Express Guide",
        subtopics: [
            "Routing Path for ExpressJS", "Use of req and res objects in Express JS", "Error Handling in Express",
            "Templating using ExpressJS in Node.js", "Serving Static Files in ExpressJS", "Enable Debugging in Express App"
        ]
    },
    {
        heading: "Express.js Methods",
        subtopics: [
            "Express express.json() Function", "Express express.raw() Function", "Express express.Router() Function",
            "Express express.static() Function", "Express express.text() Function", "Express express.urlencoded() Function"
        ]
    }
];

const topicComponents = {
    "Introduction to Express": <IntroductionToExpress />,
    "Steps to Create an Express.js Application": <StepsToCreateAnExpressjsApplication />,
    "Print Hello World using Express JS": <PrintHelloWorldUsingExpressJS />,
    "Build Your First Router in Node.js with Express": <BuildYourFirstRouterInNodejsWithExpress />,
    "Middleware in Express": <MiddlewareInExpress />,
    "Routing Path for ExpressJS": <RoutingPathForExpressJS />,
    "Use of req and res objects in Express JS": <UseOfReqAndResObjectsInExpressJS />,
    "Error Handling in Express": <ErrorHandlingInExpress />,
    "Templating using ExpressJS in Node.js": <TemplatingUsingExpressJSInNodejs />,
    "Serving Static Files in ExpressJS": <ServingStaticFilesInExpressJS />,
    "Enable Debugging in Express App": <EnableDebuggingInExpressApp />,
    "Express express.json() Function": <ExpressJsonFunction />,
    "Express express.raw() Function": <ExpressRawFunction />,
    "Express express.Router() Function": <ExpressRouterFunction />,
    "Express express.static() Function": <ExpressStaticFunction />,
    "Express express.text() Function": <ExpressTextFunction />,
    "Express express.urlencoded() Function": <ExpressUrlencodedFunction />
};

const ExpressJs = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("Introduction to Express");
    const contentRef = useRef(null);

    const generateSlug = (topic) => topic.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

    const allSubtopics = topics.flatMap((topic) => topic.subtopics);
    const currentIndex = allSubtopics.indexOf(selectedTopic);

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

    const scrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    };

    const handleNext = () => {
        if (currentIndex < allSubtopics.length - 1) {
            const nextTopic = allSubtopics[currentIndex + 1];
            navigate(`/express/${generateSlug(nextTopic)}`);
            setSelectedTopic(nextTopic);
            scrollToTop();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevTopic = allSubtopics[currentIndex - 1];
            navigate(`/express/${generateSlug(prevTopic)}`);
            setSelectedTopic(prevTopic);
            scrollToTop();
        }
    };

    const handleSidebarClick = (subtopic) => {
        navigate(`/express/${generateSlug(subtopic)}`);
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
            <div className="flex-1 p-8 md:p-16 overflow-y-auto" ref={contentRef}>
                <div className="flex justify-between items-center mb-8">
                    <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
                        <span className="font-bold text-lg">☰ Topics</span>
                    </button>
                    <div className="flex space-x-4">
                        <button
                            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                            onClick={handlePrevious}
                        >
                            <MdArrowBackIos size={24} />
                        </button>
                        <button
                            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                            onClick={handleNext}
                        >
                            <MdArrowForwardIos size={24} />
                        </button>
                    </div>
                </div>
                {topicComponents[selectedTopic]}
            </div>
        </div>
    );
};

export default ExpressJs;

