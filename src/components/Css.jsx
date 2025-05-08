import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NotFound from "./NotFound";

// Import all topic components
import CSS2DTransform from './cssTopics/CSS2DTransform';
import CSSAnimations from './cssTopics/CSSAnimations';
import CSSBackgrounds from './cssTopics/CSSBackgrounds';
import CSSBorders from './cssTopics/CSSBorders';
import CSSBorderImages from './cssTopics/CSSBorderImages';
import CSSButtons from './cssTopics/CSSButtons';
import CSSColors from './cssTopics/CSSColors';
import CSSCombinators from './cssTopics/CSSCombinators';
import CSSComments from './cssTopics/CSSComments';
import CSSCursors from './cssTopics/CSSCursors';
import CSSImages from './cssTopics/CSSImages';
import CSSVideoEmbedding from './cssTopics/CSSVideoEmbedding';
import CSSFonts from './cssTopics/CSSFonts';
import CSSTextStyling from './cssTopics/CSSTextStyling';
import CSSBoxModel from './cssTopics/CSSBoxModel';
import CSSPadding from './cssTopics/CSSPadding';
import CSSDisplay from './cssTopics/CSSDisplay';
import CSSFlexBox from './cssTopics/CSSFlexBox';
import CSSGrid from './cssTopics/CSSGrid';
import CSSMediaQueries from './cssTopics/CSSMediaQueries';
import CSSTransitions from './cssTopics/CSSTransitions';
import CSSGradients from './cssTopics/CSSGradients';
import CSSInherit from './cssTopics/CSSInherit';
import CSSShadows from './cssTopics/CSSShadows';
import CSSToolTipText from './cssTopics/CSSToolTipText';
import CSSMasking from './cssTopics/CSSMasking';
import CSSPagination from './cssTopics/CSSPagination';
import CSSMediaQueriesAdvanced from './cssTopics/CSSMediaQueriesAdvanced';
import CSSHover from './cssTopics/CSSHover';
import CSSListStyles from './cssTopics/CSSListStyles';
import CSSLinks from './cssTopics/CSSLinks';
import CSSPseudoClasses from './cssTopics/CSSPseudoClasses';
import CSSOverflow from './cssTopics/CSSOverflow';
import CSSFloat from './cssTopics/CSSFloat';
import CSSImportant from './cssTopics/CSSImportant';
import CSSMathsFunctions from './cssTopics/CSSMathsFunctions';
import CSSSize from './cssTopics/CSSSize';
import CSSPositioning from './cssTopics/CSSPositioning';
import CSSZIndex from './cssTopics/CSSZIndex';
import CSSForms from './cssTopics/CSSForms';
import CSSNavigationBar from './cssTopics/CSSNavigationBar';

// Topics structure
const topics = [
    { heading: "CSS Introduction", subtopics: ["Information & History", "Your first CSS website", "How CSS works", "Syntax of CSS", "Ways to add CSS", "CSS Selectors", "CSS Comments", "CSS Specificity"] },
    { heading: "CSS Properties", subtopics: ["CSS Colors", "CSS Backgrounds", "CSS Borders", "CSS Images", "CSS Video Embedding", "CSS Fonts", "CSS Text Styling", "CSS Box Model", "CSS Padding", "CSS Margin", "CSS Hover", "CSS Cursors", "CSS List Styles", "CSS Links", "CSS Combinators", "CSS Pseudo-classes", "CSS Buttons", "CSS Overflow", "CSS Float", "CSS !important", "CSS Maths Functions", "CSS Size", "CSS Positioning", "CSS Z-index", "CSS Forms", "CSS Navigation Bar"] },
    { heading: "CSS Designing", subtopics: ["CSS Display", "CSS FlexBox", "CSS Grid", "CSS Media Queries"] },
    { heading: "CSS Advanced Topics", subtopics: ["CSS 2D Transform", "CSS Transitions", "CSS Border Images", "CSS Gradients", "CSS Inherit", "CSS Shadows", "CSS ToolTip Text", "CSS Masking", "CSS Pagination", "CSS Media Queries Advanced", "CSS Animations"] },
];

// Flatten all subtopics into a single array
const allSubtopics = topics.flatMap(topic => topic.subtopics);

const topicComponents = {
    // "Information & History": <CSSIntroduction />,
    // "Your first CSS website": <CSSFirstWebsite />,
    // "How CSS works": <CSSHowItWorks />,
    // "Syntax of CSS": <CSSSyntax />,
    // "Ways to add CSS": <CSSWaysToAdd />,
    // "CSS Selectors": <CSSSelectors />,
    // "CSS Specificity": <CSSSpecificity />,
    // Add other topics here similarly
    "CSS 2D Transform": <CSS2DTransform />,
    "CSS Animations": <CSSAnimations />,
    "CSS Backgrounds": <CSSBackgrounds />,
    "CSS Borders": <CSSBorders />,
    "CSS Border Images": <CSSBorderImages />,
    "CSS Buttons": <CSSButtons />,
    "CSS Colors": <CSSColors />,
    "CSS Combinators": <CSSCombinators />,
    "CSS Comments": <CSSComments />,
    "CSS Cursors": <CSSCursors />,
    "CSS Images": <CSSImages />,
    "CSS Video Embedding": <CSSVideoEmbedding />,
    "CSS Fonts": <CSSFonts />,
    "CSS Text Styling": <CSSTextStyling />,
    "CSS Box Model": <CSSBoxModel />,
    "CSS Padding": <CSSPadding />,
    "CSS Display": <CSSDisplay />,
    "CSS FlexBox": <CSSFlexBox />,
    "CSS Grid": <CSSGrid />,
    "CSS Media Queries": <CSSMediaQueries />,
    "CSS Transitions": <CSSTransitions />,
    "CSS Gradients": <CSSGradients />,
    "CSS Inherit": <CSSInherit />,
    "CSS Shadows": <CSSShadows />,
    "CSS ToolTip Text": <CSSToolTipText />,
    "CSS Masking": <CSSMasking />,
    "CSS Pagination": <CSSPagination />,
    "CSS Media Queries Advanced": <CSSMediaQueriesAdvanced />,
    "CSS Hover": <CSSHover />,
    "CSS List Styles": <CSSListStyles />,
    "CSS Links": <CSSLinks />,
    "CSS Pseudo-classes": <CSSPseudoClasses />,
    "CSS Overflow": <CSSOverflow />,
    "CSS Float": <CSSFloat />,
    "CSS !important": <CSSImportant />,
    "CSS Maths Functions": <CSSMathsFunctions />,
    "CSS Size": <CSSSize />,
    "CSS Positioning": <CSSPositioning />,
    "CSS Z-index": <CSSZIndex />,
    "CSS Forms": <CSSForms />,
    "CSS Navigation Bar": <CSSNavigationBar />,
};

const Css = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState(allSubtopics[0]);
    const contentRef = useRef(null);

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, '-');

    const currentIndex = allSubtopics.findIndex((topic) => generateSlug(topic) === slug);

    useEffect(() => {
        if (slug) {
            const foundTopic = allSubtopics.find(topic => generateSlug(topic) === slug);
            setSelectedTopic(foundTopic || allSubtopics[0]);
        }
    }, [slug]);

    const scrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    };

    const handleNext = () => {
        if (currentIndex < allSubtopics.length - 1) {
            const nextTopic = allSubtopics[currentIndex + 1];
            navigate(`/css/${generateSlug(nextTopic)}`);
            setSelectedTopic(nextTopic);
            scrollToTop();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevTopic = allSubtopics[currentIndex - 1];
            navigate(`/css/${generateSlug(prevTopic)}`);
            setSelectedTopic(prevTopic);
            scrollToTop();
        }
    };

    const handleSidebarClick = (subtopic) => {
        navigate(`/css/${generateSlug(subtopic)}`);
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
                                                    : "hover:bg-gray-600"
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
            {/* Main content */}
            <div className={`flex-1 overflow-auto h-screen ${isSidebarOpen ? "ml-64" : ""}`} ref={contentRef}>
                <div className="container mx-auto px-6 py-4 md:py-6">
                    {topicComponents[selectedTopic] || <NotFound />}
                    <div className="flex justify-between items-center mt-6">
                        <button
                            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                        >
                            <MdArrowBackIos size={18} className="mr-2" />
                            Previous
                        </button>
                        <button
                            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                            onClick={handleNext}
                            disabled={currentIndex === allSubtopics.length - 1}
                        >
                            Next
                            <MdArrowForwardIos size={18} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Css;
