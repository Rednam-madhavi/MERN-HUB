import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NotFound from "./NotFound";

// Import all JavaScript topic components
import Abstraction from "./javaScriptTopics/Abstraction.jsx";
import ArraysAndArrayMethods from "./javaScriptTopics/ArraysAndArrayMethods.jsx";
import Boolean from "./javaScriptTopics/Boolean.jsx";
import Class from "./javaScriptTopics/Class.jsx";
import Constructor from "./javaScriptTopics/Constructor.jsx";
import DateComponent from "./javaScriptTopics/Date.jsx";
import DocumentObject from "./javaScriptTopics/DocumentObject.jsx";
import Encapsulation from "./javaScriptTopics/Encapsulation.jsx";
import ForLoops from "./javaScriptTopics/ForLoops.jsx";
import Functions from "./javaScriptTopics/Functions.jsx";
import GetElementById from "./javaScriptTopics/GetElementById.jsx";
import GetElementsByClassName from "./javaScriptTopics/GetElementsByClassName.jsx";
import GetElementsByName from "./javaScriptTopics/GetElementsByName.jsx";
import GetElementsByTagName from "./javaScriptTopics/GetElementsByTagName.jsx";
import HistoryObject from "./javaScriptTopics/HistoryObject.jsx";
import IfElseConditionals from "./javaScriptTopics/IfElseConditionals.jsx";
import IfElseLadder from "./javaScriptTopics/IfElseLadder.jsx";
import Inheritance from "./javaScriptTopics/Inheritance.jsx";
import InnerHTML from "./javaScriptTopics/InnerHTML.jsx";
import JSExecution from "./javaScriptTopics/JSExecution.jsx";
import JSIntroduction from "./javaScriptTopics/JSIntroduction.jsx";
import LoopsWithArrays from "./javaScriptTopics/LoopsWithArrays.jsx";
import MapFilterAndReduce from "./javaScriptTopics/MapFilterAndReduce.jsx";
import MathComponent from "./javaScriptTopics/Math.jsx";
import NavigatorObject from "./javaScriptTopics/NavigatorObject.jsx";
import NodeJsInstallation from "./javaScriptTopics/NodeJsInstallation.jsx";
import NumberComponent from "./javaScriptTopics/Number.jsx";
import Objects from "./javaScriptTopics/Objects.jsx";
import OperatorsAndExpressions from "./javaScriptTopics/OperatorsAndExpressions.jsx";
import OuterHTML from "./javaScriptTopics/OuterHTML.jsx";
import Polymorphism from "./javaScriptTopics/Polymorphism.jsx";
import PrimitivesAndObjects from "./javaScriptTopics/PrimitivesAndObjects.jsx";
import ScreenObject from "./javaScriptTopics/ScreenObject.jsx";
import StaticMethod from "./javaScriptTopics/StaticMethod.jsx";
import Strings from "./javaScriptTopics/Strings.jsx";
import SwitchCase from "./javaScriptTopics/SwitchCase.jsx";
import TernaryOperator from "./javaScriptTopics/TernaryOperator.jsx";
import VariableNamingRules from "./javaScriptTopics/VariableNamingRules.jsx";
import VarVsLetVsConst from "./javaScriptTopics/VarVsLetVsConst.jsx";
import WhatAreVariables from "./javaScriptTopics/WhatAreVariables.jsx";
import WhileLoop from "./javaScriptTopics/WhileLoop.jsx";
import WindowObject from "./javaScriptTopics/WindowObject.jsx";

const topics = [
  { heading: "JS Introduction", subtopics: ["JS Introduction", "JS Execution", "Node.js Installation"] },
  { heading: "JavaScript Variables", subtopics: ["What are Variables", "Variable Naming Rules", "Primitives and Objects", "Operators and Expressions", "var vs let vs const"] },
  { heading: "JavaScript Basics", subtopics: ["If else conditionals", "If else ladder", "Switch case", "Ternary Operator", "For Loops", "While Loop", "Functions"] },
  { heading: "JavaScript Objects", subtopics: ["Strings", "Arrays and Array Methods", "Loops with Arrays", "Map, Filter and Reduce", "Date", "Math", "Number", "Boolean"] },
  { heading: "DOM & BOM", subtopics: ["Window Object", "History Object", "Navigator Object", "Screen Object", "Document Object", "getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "innerHTML", "outerHTML"] },
  { heading: "OOPs in JavaScript", subtopics: ["Class", "Objects", "Constructor", "Static Method", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction"] }
];

const topicComponents = {
  "JS Introduction": <JSIntroduction />,
  "JS Execution": <JSExecution />,
  "Node.js Installation": <NodeJsInstallation />,
  "What are Variables": <WhatAreVariables />,
  "Variable Naming Rules": <VariableNamingRules />,
  "Primitives and Objects": <PrimitivesAndObjects />,
  "Operators and Expressions": <OperatorsAndExpressions />,
  "var vs let vs const": <VarVsLetVsConst />,
  "If else conditionals": <IfElseConditionals />,
  "If else ladder": <IfElseLadder />,
  "Switch case": <SwitchCase />,
  "Ternary Operator": <TernaryOperator />,
  "For Loops": <ForLoops />,
  "While Loop": <WhileLoop />,
  "Functions": <Functions />,
  "Strings": <Strings />,
  "Arrays and Array Methods": <ArraysAndArrayMethods />,
  "Loops with Arrays": <LoopsWithArrays />,
  "Map, Filter and Reduce": <MapFilterAndReduce />,
  "Date": <DateComponent />,
  "Math": <MathComponent />,
  "Number": <NumberComponent />,
  "Boolean": <Boolean />,
  "Window Object": <WindowObject />,
  "History Object": <HistoryObject />,
  "Navigator Object": <NavigatorObject />,
  "Screen Object": <ScreenObject />,
  "Document Object": <DocumentObject />,
  "getElementById": <GetElementById />,
  "getElementsByClassName": <GetElementsByClassName />,
  "getElementsByName": <GetElementsByName />,
  "getElementsByTagName": <GetElementsByTagName />,
  "innerHTML": <InnerHTML />,
  "outerHTML": <OuterHTML />,
  "Class": <Class />,
  "Objects": <Objects />,
  "Constructor": <Constructor />,
  "Static Method": <StaticMethod />,
  "Encapsulation": <Encapsulation />,
  "Inheritance": <Inheritance />,
  "Polymorphism": <Polymorphism />,
  "Abstraction": <Abstraction />
};

const JavaScript = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("JS Introduction");
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
    return "JS Introduction";
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
      navigate(`/javascript/${generateSlug(nextTopic)}`);
      setSelectedTopic(nextTopic);
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevTopic = allSubtopics[currentIndex - 1];
      navigate(`/javascript/${generateSlug(prevTopic)}`);
      setSelectedTopic(prevTopic);
      scrollToTop();
    }
  };

  const handleSidebarClick = (subtopic) => {
    navigate(`/javascript/${generateSlug(subtopic)}`);
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

export default JavaScript;
