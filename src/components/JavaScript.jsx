import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Import all JavaScript topic components
import Abstraction from "../javascriptTopics/Abstraction";
import ArraysAndArrayMethods from "../javascriptTopics/ArraysAndArrayMethods";
import Boolean from "../javascriptTopics/Boolean";
import Class from "../javascriptTopics/Class";
import Constructor from "../javascriptTopics/Constructor";
import Date from "../javascriptTopics/Date";
import DocumentObject from "../javascriptTopics/DocumentObject";
import Encapsulation from "../javascriptTopics/Encapsulation";
import ForLoops from "../javascriptTopics/ForLoops";
import Functions from "../javascriptTopics/Functions";
import GetElementById from "../javascriptTopics/GetElementById";
import GetElementsByClassName from "../javascriptTopics/GetElementsByClassName";
import GetElementsByName from "../javascriptTopics/GetElementsByName";
import GetElementsByTagName from "../javascriptTopics/GetElementsByTagName";
import HistoryObject from "../javascriptTopics/HistoryObject";
import IfElseConditionals from "../javascriptTopics/IfElseConditionals";
import IfElseLadder from "../javascriptTopics/IfElseLadder";
import Inheritance from "../javascriptTopics/Inheritance";
import InnerHTML from "../javascriptTopics/InnerHTML";
import JSExecution from "../javascriptTopics/JSExecution";
import JSIntroduction from "../javascriptTopics/JSIntroduction";
import LoopsWithArrays from "../javascriptTopics/LoopsWithArrays";
import MapFilterAndReduce from "../javascriptTopics/MapFilterAndReduce";
import Math from "../javascriptTopics/Math";
import NavigatorObject from "../javascriptTopics/NavigatorObject";
import NodeJsInstallation from "../javascriptTopics/NodeJsInstallation";
import Number from "../javascriptTopics/Number";
import Objects from "../javascriptTopics/Objects";
import OperatorsAndExpressions from "../javascriptTopics/OperatorsAndExpressions";
import OuterHTML from "../javascriptTopics/OuterHTML";
import Polymorphism from "../javascriptTopics/Polymorphism";
import PrimitivesAndObjects from "../javascriptTopics/PrimitivesAndObjects";
import ScreenObject from "../javascriptTopics/ScreenObject";
import StaticMethod from "../javascriptTopics/StaticMethod";
import Strings from "../javascriptTopics/Strings";
import SwitchCase from "../javascriptTopics/SwitchCase";
import TernaryOperator from "../javascriptTopics/TernaryOperator";
import VariableNamingRules from "../javascriptTopics/VariableNamingRules";
import VarVsLetVsConst from "../javascriptTopics/VarVsLetVsConst";
import WhatAreVariables from "../javascriptTopics/WhatAreVariables";
import WhileLoop from "../javascriptTopics/WhileLoop";
import WindowObject from "../javascriptTopics/WindowObject";

// Topics structure
const topics = [
  { heading: "JS Introduction", subtopics: ["JS Introduction", "JS Execution", "Node.js Installation"] },
  { heading: "JavaScript Variables", subtopics: ["What are Variables?", "Variable Naming Rules", "Primitives and Objects", "Operators and Expressions", "var vs let vs const"] },
  { heading: "JavaScript Basics", subtopics: ["If else conditionals", "If else ladder", "Switch case", "Ternary Operator", "For Loops", "While Loop", "Functions"] },
  { heading: "JavaScript Objects", subtopics: ["Strings", "Arrays and Array Methods", "Loops with Arrays", "Map, Filter and Reduce", "Date", "Math", "Number", "Boolean"] },
  { heading: "DOM & BOM", subtopics: ["Window Object", "History Object", "Navigator Object", "Screen Object", "Document Object", "getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "innerHTML", "outerHTML"] },
  { heading: "OOPs in JavaScript", subtopics: ["Class", "Objects", "Constructor", "Static Method", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction"] }
];

const topicComponents = {
  "JS Introduction": <JSIntroduction />,
  "JS Execution": <JSExecution />,
  "Node.js Installation": <NodeJsInstallation />,
  "What are Variables?": <WhatAreVariables />,
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
  "Date": <Date />,
  "Math": <Math />,
  "Number": <Number />,
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
      <div className="hidden md:flex w-80 bg-white dark:bg-gray-900 text-black dark:text-white p-4 shadow-lg overflow-y-auto">
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

export default JavaScript;
