import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NotFound from "./NotFound";

import CSS2DTransform from './cssTopics/CSS2DTransform';
import CSSAnimations from './cssTopics/CSSAnimations';
import CSSBackgrounds from './cssTopics/CSSBackgrounds';
import CSSBorderImages from './cssTopics/CSSBorderImages';
import CSSBorders from './cssTopics/CSSBorders';
import CSSBoxModel from './cssTopics/CSSBoxModel';
import CSSButtons from './cssTopics/CSSButtons';
import CSSColors from './cssTopics/CSSColors';
import CSSCombinators from './cssTopics/CSSCombinators';
import CSSComments from './cssTopics/CSSComments';
import CSSCursors from './cssTopics/CSSCursors';
import CSSDisplay from './cssTopics/CSSDisplay';
import CSSFlexBox from './cssTopics/CSSFlexBox';
import CSSFloat from './cssTopics/CSSFloat';
import CSSFonts from './cssTopics/CSSFonts';
import CSSForms from './cssTopics/CSSForms';
import CSSGradients from './cssTopics/CSSGradients';
import CSSGrid from './cssTopics/CSSGrid';
import CSSHover from './cssTopics/CSSHover';
import CSSImages from './cssTopics/CSSImages';
import CSSImportant from './cssTopics/CSSImportant';
import CSSInherit from './cssTopics/CSSInherit';
import CSSLinks from './cssTopics/CSSLinks';
import CSSListStyles from './cssTopics/CSSListStyles';
import CSSMargin from './cssTopics/CSSMargin';
import CSSMasking from './cssTopics/CSSMasking';
import CSSMathsFunctions from './cssTopics/CSSMathsFunctions';
import CSSMediaQueries from './cssTopics/CSSMediaQueries';
import CSSMediaQueriesAdvanced from './cssTopics/CSSMediaQueriesAdvanced';
import CSSNavigationBar from './cssTopics/CSSNavigationBar';
import CSSOverflow from './cssTopics/CSSOverflow';
import CSSPadding from './cssTopics/CSSPadding';
import CSSPagination from './cssTopics/CSSPagination';
import CSSPositioning from './cssTopics/CSSPositioning';
import CSSPseudoClasses from './cssTopics/CSSPseudoClasses';
import CSSSelectors from './cssTopics/CSSSelectors';
import CSSShadows from './cssTopics/CSSShadows';
import CSSSize from './cssTopics/CSSSize';
import CSSSpecificity from './cssTopics/CSSSpecificity';
import CSSTextStyling from './cssTopics/CSSTextStyling';
import CSSToolTipText from './cssTopics/CSSToolTipText';
import CSSTransitions from './cssTopics/CSSTransitions';
import CSSVideoEmbedding from './cssTopics/CSSVideoEmbedding';
import CSSZIndex from './cssTopics/CSSZIndex';
import HowCSSWorks from './cssTopics/HowCSSWorks';
import InformationAndHistory from './cssTopics/InformationAndHistory';
import SyntaxOfCSS from './cssTopics/SyntaxOfCSS';
import WaysToAddCSS from './cssTopics/WaysToAddCSS';
import YourFirstCSSWebsite from './cssTopics/YourFirstCSSWebsite';


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
  "Information & History": <InformationAndHistory />,
  "Your first CSS website": <YourFirstCSSWebsite />,
  "How CSS works": <HowCSSWorks />,
  "Syntax of CSS": <SyntaxOfCSS />,
  "Ways to add CSS": <WaysToAddCSS />,
  "CSS Selectors": <CSSSelectors />,
  "CSS Specificity": <CSSSpecificity />,
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
  "CSS Media Queries Advanced": <CSSMediaQueriesAdvanced />,
  "CSS Transitions": <CSSTransitions />,
  "CSS Gradients": <CSSGradients />,
  "CSS Inherit": <CSSInherit />,
  "CSS Shadows": <CSSShadows />,
  "CSS ToolTip Text": <CSSToolTipText />,
  "CSS Masking": <CSSMasking />,
  "CSS Pagination": <CSSPagination />,
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
  "CSS Margin": <CSSMargin />,
};


const Css = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("CSS 2D Transform");
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
    return "CSS 2D Transform";
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
                        className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${
                          selectedTopic === subtopic
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
                    className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${
                      selectedTopic === subtopic
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
            className={`flex items-center bg-gray-700 text-white dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900 dark:hover:bg-gray-200"
            }`}
          >
            <MdArrowBackIos size={20} /> Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === allSubtopics.length - 1}
            className={`flex items-center bg-gray-700 text-white dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${
              currentIndex === allSubtopics.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900 dark:hover:bg-gray-200"
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
