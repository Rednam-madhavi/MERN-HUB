import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const topics = [
  { 
    heading: "JS Introduction", 
    subtopics: ["JS Introduction", "JS Execution", "Node.js Installation"] 
  },
  { 
    heading: "JavaScript Variables", 
    subtopics: ["What are Variables?", "Variable Naming Rules", "Primitives and Objects", "Operators and Expressions", "var vs let vs const"] 
  },
  { 
    heading: "JavaScript Basics", 
    subtopics: ["If else conditionals", "If else ladder", "Switch case", "Ternary Operator", "For Loops", "While Loop", "Functions"] 
  },
  { 
    heading: "JavaScript Objects", 
    subtopics: ["Strings", "Arrays and Array Methods", "Loops with Arrays", "Map, Filter and Reduce", "Date", "Math", "Number", "Boolean"] 
  },
  { 
    heading: "DOM & BOM", 
    subtopics: ["Window Object", "History Object", "Navigator Object", "Screen Object", "Document Object", "getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "innerHTML", "outerHTML"] 
  },
  { 
    heading: "OOPs in JavaScript", 
    subtopics: ["Class", "Objects", "Constructor", "Static Method", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction"] 
  }
];

const JavaScript = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("JS Introduction");

  // Generate a slug by lowercasing, removing special characters, and replacing spaces with dashes
  const generateSlug = (topic) =>
    topic.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

  // Flatten the subtopics from all topics
  const allSubtopics = topics.flatMap(topic => topic.subtopics);
  const currentIndex = allSubtopics.findIndex(
    topic => generateSlug(topic) === slug
  );

  // Find the subtopic that matches the slug
  const findTopicBySlug = (slug) => {
    const found = allSubtopics.find(topic => generateSlug(topic) === slug);
    return found ? found : "JS Introduction";
  };

  useEffect(() => {
    if (slug) {
      setSelectedTopic(findTopicBySlug(slug));
    }
  }, [slug]);

  const handleNext = () => {
    if (currentIndex < allSubtopics.length - 1) {
      const nextTopic = allSubtopics[currentIndex + 1];
      navigate(`/javascript/${generateSlug(nextTopic)}`);
      setSelectedTopic(nextTopic);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevTopic = allSubtopics[currentIndex - 1];
      navigate(`/javascript/${generateSlug(prevTopic)}`);
      setSelectedTopic(prevTopic);
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Mobile Sidebar */}
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
                  <h3 className="font-semibold text-lg md:text-xl mb-2 uppercase">
                    {heading}
                  </h3>
                  <ul>
                    {subtopics.map((subtopic) => (
                      <li
                        key={subtopic}
                        className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${
                          selectedTopic === subtopic
                            ? "bg-gray-100 dark:bg-gray-700"
                            : "hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                        }`}
                        onClick={() => {
                          navigate(`/javascript/${generateSlug(subtopic)}`);
                          setIsSidebarOpen(false);
                        }}
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
      <div
        className="hidden md:block bg-white dark:bg-gray-900 text-black dark:text-white p-4 overflow-y-auto md:w-1/4"
        style={{ height: "100vh" }}
      >
        <ul className="space-y-2">
          {topics.map(({ heading, subtopics }) => (
            <div key={heading}>
              <h3 className="font-semibold text-lg md:text-xl mb-2 uppercase">
                {heading}
              </h3>
              <ul>
                {subtopics.map((subtopic) => (
                  <li
                    key={subtopic}
                    className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${
                      selectedTopic === subtopic
                        ? "bg-gray-100 dark:bg-gray-700"
                        : "hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                    }`}
                    onClick={() => navigate(`/javascript/${generateSlug(subtopic)}`)}
                  >
                    {subtopic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-6 h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize">
          {selectedTopic}
        </h1>
        <p>Content related to {selectedTopic} will be displayed here.</p>

        {/* Navigation Buttons */}
        <div className="flex justify-between p-2 mt-6">
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

export default JavaScript;
