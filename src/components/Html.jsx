import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NotFound from "./NotFound";

// Import all topic components
import Introduction from "./htmlTopics/html-introduction";
import Working from "./htmlTopics/html-working";
import Installation from "./htmlTopics/html-installation";
import Execution from "./htmlTopics/html-execution";
import PageStructure from "./htmlTopics/html-page-structure";
import Tags from "./htmlTopics/html-tags";
import Elements from "./htmlTopics/html-elements";
import Attributes from "./htmlTopics/html-attributes";
import Comments from "./htmlTopics/html-comments";
import IdClasses from "./htmlTopics/html-id-&-classes";
import SkeletalTags from "./htmlTopics/skeletal-tags";
import HeadingTags from "./htmlTopics/heading-tags";
import ParagraphTag from "./htmlTopics/paragraph-tag";
import HorizontalLineTag from "./htmlTopics/horizontal-line-tag";
import LineBreakTag from "./htmlTopics/line-break-tag";
import AnchorTag from "./htmlTopics/anchor-tag";
import ImageTag from "./htmlTopics/image-tag";
import PreTag from "./htmlTopics/pre-tag";
import InlineElements from "./htmlTopics/html-inline-elements";
import BlockElements from "./htmlTopics/html-block-elements";
import Lists from "./htmlTopics/html-lists";
import UnorderedList from "./htmlTopics/html-unordered-list";
import OrderedList from "./htmlTopics/html-ordered-list";
import DefinitionLists from "./htmlTopics/html-definition-lists";
import Tables from "./htmlTopics/html-tables";
import MoreOnTables from "./htmlTopics/more-on-tables";
import Forms from "./htmlTopics/introduction-to-html-forms";
import InputTypes from "./htmlTopics/html-input-types";
import TextareaSelect from "./htmlTopics/textarea-&-select";
import MoreOnForms from "./htmlTopics/more-on-forms";
import MetaTags from "./htmlTopics/html-meta-tags";
import LinkScript from "./htmlTopics/link-&-script-tags";
import VideoAudioTags from "./htmlTopics/video-&-audio-tags";
import SvgInHtml from "./htmlTopics/svg-in-html";
import IFramesInHtml from "./htmlTopics/iframes-in-html";

// Topics structure
const topics = [
  { heading: "HTML Introduction", subtopics: ["HTML Introduction", "HTML Working", "HTML Installation", "HTML Execution", "HTML Page Structure", "HTML Tags", "HTML Elements", "HTML Attributes", "HTML Comments", "HTML Id & Classes"] },
  { heading: "HTML Tags", subtopics: ["Skeletal Tags", "Heading Tags", "Paragraph Tag", "Horizontal Line Tag", "Line Break Tag", "Anchor Tag", "Image Tag", "Pre Tag"] },
  { heading: "Inline & Block Elements", subtopics: ["HTML Inline Elements", "HTML Block Elements"] },
  { heading: "HTML Lists", subtopics: ["HTML Lists", "HTML Unordered List", "HTML Ordered List", "HTML Definition Lists"] },
  { heading: "HTML Tables", subtopics: ["HTML Tables", "More on Tables"] },
  { heading: "HTML Forms", subtopics: ["Introduction to HTML Forms", "HTML Input Types", "Textarea & Select", "More on forms"] },
  { heading: "Head Elements", subtopics: ["HTML Meta Tags", "Link & Script Tags"] },
  { heading: "HTML Media", subtopics: ["Video & Audio Tags", "SVG in HTML", "iFrames in HTML"] },
];

const topicComponents = {
  "HTML Introduction": <Introduction />,
  "HTML Working": <Working />,
  "HTML Installation": <Installation />,
  "HTML Execution": <Execution />,
  "HTML Page Structure": <PageStructure />,
  "HTML Tags": <Tags />,
  "HTML Elements": <Elements />,
  "HTML Attributes": <Attributes />,
  "HTML Comments": <Comments />,
  "HTML Id & Classes": <IdClasses />,
  "Skeletal Tags": <SkeletalTags />,
  "Heading Tags": <HeadingTags />,
  "Paragraph Tag": <ParagraphTag />,
  "Horizontal Line Tag": <HorizontalLineTag />,
  "Line Break Tag": <LineBreakTag />,
  "Anchor Tag": <AnchorTag />,
  "Image Tag": <ImageTag />,
  "Pre Tag": <PreTag />,
  "HTML Inline Elements": <InlineElements />,
  "HTML Block Elements": <BlockElements />,
  "HTML Lists": <Lists />,
  "HTML Unordered List": <UnorderedList />,
  "HTML Ordered List": <OrderedList />,
  "HTML Definition Lists": <DefinitionLists />,
  "HTML Tables": <Tables />,
  "More on Tables": <MoreOnTables />,
  "Introduction to HTML Forms": <Forms />,
  "HTML Input Types": <InputTypes />,
  "Textarea & Select": <TextareaSelect />,
  "More on forms": <MoreOnForms />,
  "HTML Meta Tags": <MetaTags />,
  "Link & Script Tags": <LinkScript />,
  "Video & Audio Tags": <VideoAudioTags />,
  "SVG in HTML": <SvgInHtml />,
  "iFrames in HTML": <IFramesInHtml />,
};

const Html = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("HTML Introduction");
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
    return "HTML Introduction";
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
      navigate(`/html/${generateSlug(nextTopic)}`);
      setSelectedTopic(nextTopic);
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevTopic = allSubtopics[currentIndex - 1];
      navigate(`/html/${generateSlug(prevTopic)}`);
      setSelectedTopic(prevTopic);
      scrollToTop();
    }
  };

  const handleSidebarClick = (subtopic) => {
    navigate(`/html/${generateSlug(subtopic)}`);
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

export default Html;
