import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';

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


const Html = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("HTML Introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const generateSlug = (topic) => {
    return topic.toLowerCase().replace(/\s+/g, '-');
  };


  return (
    <>
      <div className="flex h-screen relative">
        <button
          className="md:hidden fixed top-4 right-4 z-50 text-black p-2 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FiMenu size={24} />
        </button>

        <div className={`bg-white text-black p-4 overflow-y-auto h-screen w-screen md:w-1/4 md:block ${isSidebarOpen ? 'block fixed top-0 left-0 z-40' : 'hidden'} md:relative shadow-lg`}>
          <ul className="space-y-2">
            {topics.map(topic => (
              <div key={topic.heading}>
                <h3 className="font-semibold text-xl mt-3 mb-2">{topic.heading}</h3>
                <ul>
                  {topic.subtopics.map(subtopic => (
                    <li key={subtopic}
                      className={`cursor-pointer p-2 rounded-md ${selectedTopic === subtopic ? 'bg-gray-100' : 'hover:bg-gray-600 hover:text-white'}`}
                      onClick={() => { navigate(`/html/${generateSlug(subtopic)}`); setIsSidebarOpen(false); }}>
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>

        <div className="w-3/4 p-6 h-screen overflow-y-auto">
          <h1 className="text-4xl font-semibold mb-4 capitalize">{selectedTopic}</h1>
          {selectedTopic === "HTML Introduction" ? "" : <p>Content related to {selectedTopic} will be displayed here.</p>}
        </div>
      </div>

      <Footer />
    </>

  );
};

export default Html;