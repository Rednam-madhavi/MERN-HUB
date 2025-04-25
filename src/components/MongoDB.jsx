import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import MongoDBHome from "./mongodbTopics/MongoDBHome";
import MongoDBGetStarted from "./mongodbTopics/MongoDBGetStarted";
import MongoDBQueryAPI from "./mongodbTopics/MongoDBQueryAPI";
import MongoDBCreateDB from "./mongodbTopics/MongoDBCreateDB";
import MongoDBCollection from "./mongodbTopics/MongoDBCollection";
import MongoDBInsert from "./mongodbTopics/MongoDBInsert";
import MongoDBFind from "./mongodbTopics/MongoDBFind";
import MongoDBUpdate from "./mongodbTopics/MongoDBUpdate";
import MongoDBDelete from "./mongodbTopics/MongoDBDelete";
import MongoDBQueryOperators from "./mongodbTopics/MongoDBQueryOperators";
import MongoDBUpdateOperators from "./mongodbTopics/MongoDBUpdateOperators";
import MongoDBAggregations from "./mongodbTopics/MongoDBAggregations";
import MongoDBIndexing from "./mongodbTopics/MongoDBIndexingSearch";
import MongoDBValidation from "./mongodbTopics/MongoDBValidation";
import MongoDBDataAPI from "./mongodbTopics/MongoDBDataAPI";
import MongoDBDrivers from "./mongodbTopics/MongoDBDrivers";
import MongoDBNodeDriver from "./mongodbTopics/MongoDBNodeJsDriver";
import MongoDBCharts from "./mongodbTopics/MongoDBCharts";

const topics = [
    {
        heading: "MongoDB Tutorial",
        subtopics: [
            "MongoDB HOME", "MongoDB Get Started", "MongoDB Query API", "MongoDB Create DB", "MongoDB Collection",
            "MongoDB Insert", "MongoDB Find", "MongoDB Update", "MongoDB Delete", "MongoDB Query Operators",
            "MongoDB Update Operators", "MongoDB Aggregations", "MongoDB Indexing or Search", "MongoDB Validation",
            "MongoDB Data API", "MongoDB Drivers", "MongoDB Node.js Driver", "MongoDB Charts"
        ]
    }
];

const MongoDB = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("MongoDB HOME");

    const generateSlug = (topic) => topic.toLowerCase().replace(/\s+/g, "-");
    const allSubtopics = topics.flatMap((topic) => topic.subtopics);
    const currentIndex = allSubtopics.indexOf(selectedTopic);

    const findTopicBySlug = (slug) => {
        for (const topic of topics) {
            for (const subtopic of topic.subtopics) {
                if (generateSlug(subtopic) === slug) return subtopic;
            }
        }
        return "MongoDB HOME";
    };

    useEffect(() => {
        if (slug) setSelectedTopic(findTopicBySlug(slug));
    }, [slug]);

    const handleNext = () => {
        if (currentIndex < allSubtopics.length - 1) {
            const nextTopic = allSubtopics[currentIndex + 1];
            navigate(`/mongodb/${generateSlug(nextTopic)}`);
            setSelectedTopic(nextTopic);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevTopic = allSubtopics[currentIndex - 1];
            navigate(`/mongodb/${generateSlug(prevTopic)}`);
            setSelectedTopic(prevTopic);
        }
    };

    return (
        <div className="flex h-screen relative">
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
                                    <h3 className="font-semibold text-lg md:text-xl mb-2 uppercase">{heading}</h3>
                                    <ul>
                                        {subtopics.map((subtopic) => (
                                            <li
                                                key={subtopic}
                                                className={`cursor-pointer p-2 pl-6 rounded-md text-sm md:text-base ${selectedTopic === subtopic
                                                        ? "bg-gray-100 dark:bg-gray-700"
                                                        : "hover:bg-gray-600 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                                                    }`}
                                                onClick={() => {
                                                    navigate(`/mongodb/${generateSlug(subtopic)}`);
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
                                        onClick={() => navigate(`/mongodb/${generateSlug(subtopic)}`)}
                                    >
                                        {subtopic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="flex-1 p-4 md:p-6 h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
                <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize">
                    {selectedTopic}
                </h1>
                {/* <p>Content related to {selectedTopic} will be displayed here.</p> */}
                <MongoDBHome />


                <div className="flex justify-between p-2 mt-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className={`flex items-center bg-gray-700 text-white w-auto dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900 dark:hover:bg-gray-200"
                            }`}
                    >
                        <MdArrowBackIos size={20} /> Previous
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex === allSubtopics.length - 1}
                        className={`flex items-center bg-gray-700 text-white w-auto dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg transition-transform transform hover:scale-105 ${currentIndex === allSubtopics.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900 dark:hover:bg-gray-200"
                            }`}
                    >
                        Next <MdArrowForwardIos size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MongoDB;
