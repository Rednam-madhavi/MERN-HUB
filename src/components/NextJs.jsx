import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NotFound from "./NotFound";

// Import all topic components
import ControllingSpecificityOfCSSModulesInNextjsApp from "./NextJs/ControllingSpecificityOfCSSModulesInNextjsApp";
import CSSinJSNextJS from "./NextJs/CSSinJSNextJS";
import DeployingYourNextjsApp from "./NextJs/DeployingYourNextjsApp";
import EdgeFunctionsAndMiddlewareInNextJS from "./NextJs/EdgeFunctionsAndMiddlewareInNextJS";
import GettingStartedWithNextJS from "./NextJs/GettingStartedWithNextJS";
import HowToAddStylesheetInNextjs from "./NextJs/HowToAddStylesheetInNextjs";
import HowToFetchDataFasterInNextjs from "./NextJs/HowToFetchDataFasterInNextjs";
import HowToResetNextjsDevelopmentCache from "./NextJs/HowToResetNextjsDevelopmentCache";
import InstallAndSetupTailwindCSSWithNextjs from "./NextJs/InstallAndSetupTailwindCSSWithNextjs";
import LinkingBetweenPagesInNextjs from "./NextJs/LinkingBetweenPagesInNextjs";
import LoadingjsInNextJS from "./NextJs/LoadingjsInNextJS";
import MiddlewaresInNextjs from "./NextJs/MiddlewaresInNextjs";
import NavigateBetweenPagesInNextJS from "./NextJs/NavigateBetweenPagesInNextJS";
import NextJS14FolderStructure from "./NextJs/NextJS14FolderStructure";
import NextjsCreateNextApp from "./NextJs/NextjsCreateNextApp";
import NextjsDataFetching from "./NextJs/NextjsDataFetching";
import NextjsDynamicRouteSegments from "./NextJs/NextjsDynamicRouteSegments";
import NextjsInstallation from "./NextJs/NextjsInstallation";
import NextjsIntroduction from "./NextJs/NextjsIntroduction";
import NextJSLayoutComponent from "./NextJs/NextJSLayoutComponent";
import NextjsNestedRoutes from "./NextJs/NextjsNestedRoutes";
import NextjsPages from "./NextJs/NextjsPages";
import NextjsRedirects from "./NextJs/NextjsRedirects";
import NextjsRouting from "./NextJs/NextjsRouting";
import NextJSRoutingInternationalization from "./NextJs/NextJSRoutingInternationalization";
import NextjsStylingSass from "./NextJs/NextjsStylingSass";
import ServerActionsInNextjs from "./NextJs/ServerActionsInNextjs";
import ServerComponentsInNextjs from "./NextJs/ServerComponentsInNextjs";

// Topics structure
const topics = [
    { heading: "Next.js Basics", subtopics: ["Next.js Introduction", "Getting Started with Next JS", "Next.js Installation", "NextJS 14 Folder Structure", "Next.js Create Next App", "Deploying your Next.js App"] },
    { heading: "Next.js Routing", subtopics: ["Next.js Routing", "Next.js Nested Routes", "Next.js Pages", "Next JS Layout Component", "Navigate Between Pages in NextJS", "loading.js in Next JS", "Linking between pages in Next.js", "Next.js Redirects", "Next.js Dynamic Route Segments", "Middlewares in Next.js", "Next JS Routing: Internationalization"] },
    { heading: "Next.js Data Fetching", subtopics: ["Next.js Data Fetching", "Server Actions in Next.js", "How to Fetch data faster in Next.js?"] },
    { heading: "Next.js Rendering", subtopics: ["Server Components in Next.js", "Edge Functions and Middleware in Next JS", "How to Reset Next.js Development Cache?"] },
    { heading: "Next.js Styling", subtopics: ["How to Add Stylesheet in Next.js?", "Controlling the specificity of CSS Modules in a Next.js App", "Install & Setup Tailwind CSS with Next.js", "CSS-in-JS Next JS", "Next.js Styling: Sass"] },
];

// Slug generation
const generateSlug = (topic) =>
    topic
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

const NextJs = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("Next.js Introduction");
    const contentRef = useRef(null);

    const allTopics = topics.flatMap(({ heading, subtopics }) =>
        subtopics.map((subtopic) => ({
            subtopic,
            slug: generateSlug(subtopic),
        }))
    );

    const currentIndex = allTopics.findIndex((t) => t.slug === slug);

    const findTopicBySlug = (slug) => {
        const found = allTopics.find(({ slug: s }) => s === slug);
        return found ? found.subtopic : "Next.js Introduction";
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
        if (currentIndex < allTopics.length - 1) {
            const nextTopic = allTopics[currentIndex + 1];
            navigate(`/next.js/${nextTopic.slug}`);
            setSelectedTopic(nextTopic.subtopic);
            scrollToTop();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevTopic = allTopics[currentIndex - 1];
            navigate(`/next.js/${prevTopic.slug}`);
            setSelectedTopic(prevTopic.subtopic);
            scrollToTop();
        }
    };

    const handleSidebarClick = (subtopic) => {
        navigate(`/next.js/${generateSlug(subtopic)}`);
        setSelectedTopic(subtopic);
        setIsSidebarOpen(false);
        scrollToTop();
    };

    const topicComponents = {
        "Next.js Introduction": <NextjsIntroduction />,
        "Getting Started with Next JS": <GettingStartedWithNextJS />,
        "Next.js Installation": <NextjsInstallation />,
        "NextJS 14 Folder Structure": <NextJS14FolderStructure />,
        "Next.js Create Next App": <NextjsCreateNextApp />,
        "Deploying your Next.js App": <DeployingYourNextjsApp />,
        "Next.js Routing": <NextjsRouting />,
        "Next.js Nested Routes": <NextjsNestedRoutes />,
        "Next.js Pages": <NextjsPages />,
        "Next JS Layout Component": <NextJSLayoutComponent />,
        "Navigate Between Pages in NextJS": <NavigateBetweenPagesInNextJS />,
        "loading.js in Next JS": <LoadingjsInNextJS />,
        "Linking between pages in Next.js": <LinkingBetweenPagesInNextjs />,
        "Next.js Redirects": <NextjsRedirects />,
        "Next.js Dynamic Route Segments": <NextjsDynamicRouteSegments />,
        "Middlewares in Next.js": <MiddlewaresInNextjs />,
        "Next JS Routing: Internationalization": <NextJSRoutingInternationalization />,
        "Next.js Data Fetching": <NextjsDataFetching />,
        "Server Actions in Next.js": <ServerActionsInNextjs />,
        "How to Fetch data faster in Next.js?": <HowToFetchDataFasterInNextjs />,
        "Server Components in Next.js": <ServerComponentsInNextjs />,
        "Edge Functions and Middleware in Next JS": <EdgeFunctionsAndMiddlewareInNextJS />,
        "How to Reset Next.js Development Cache?": <HowToResetNextjsDevelopmentCache />,
        "How to Add Stylesheet in Next.js?": <HowToAddStylesheetInNextjs />,
        "Controlling the specificity of CSS Modules in a Next.js App": <ControllingSpecificityOfCSSModulesInNextjsApp />,
        "Install & Setup Tailwind CSS with Next.js": <InstallAndSetupTailwindCSSWithNextjs />,
        "CSS-in-JS Next JS": <CSSinJSNextJS />,
        "Next.js Styling: Sass": <NextjsStylingSass />,
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

export default NextJs;