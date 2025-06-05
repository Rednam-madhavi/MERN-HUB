import React, {useState} from 'react';
import elementStructure from '../../assets/html/html-elements-diagram.png';

const HtmlTags = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-800 dark:text-gray-100">

            <p className="text-lg leading-7">
                If you want to build a beautiful website, tags are essential elements that help you achieve that.
            </p>

            <p className="text-lg">
                An HTML <strong>tag</strong> acts as a container for content or other HTML tags. Tags are words enclosed within <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;&gt;</code> angle brackets and serve as instructions for how browsers should format content.
            </p>

            <h2 className="text-2xl font-bold">Commonly Used HTML Tags</h2>
            <p className="text-base">These tags cover about 70% of typical web usage.</p>

            <div className="space-y-6">
                {[
                    {
                        title: 'Document Structure Tags',
                        tags: [
                            <span key="doctype"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;!DOCTYPE html&gt;</code>: Specifies the document type.</span>,
                            <span key="html"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code>: Encloses the entire HTML document.</span>,
                            <span key="head"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;head&gt;</code>: Contains meta-information and links to scripts and stylesheets.</span>,
                            <span key="body"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code>: Contains the content of the web page.</span>
                        ]
                    },
                    {
                        title: 'Metadata Tags',
                        tags: [
                            <span key="title"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;title&gt;</code>: Sets the title of the web page.</span>,
                            <span key="meta"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;meta&gt;</code>: Provides metadata such as character set, author, and viewport settings.</span>,
                            <span key="link"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;link&gt;</code>: Links external resources like stylesheets.</span>
                        ]
                    },
                    {
                        title: 'Text Formatting Tags',
                        tags: [
                            <span key="p"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code>: Paragraph.</span>,
                            <span key="headings"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, ... &lt;h6&gt;</code>: Headings.</span>,
                            <span key="strong"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;strong&gt;</code>: Strong emphasis (typically bold).</span>,
                            <span key="em"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;em&gt;</code>: Emphasis (typically italic).</span>,
                            <span key="br"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code>: Line break.</span>,
                            <span key="hr"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code>: Horizontal rule.</span>
                        ]
                    },
                    {
                        title: 'List Tags',
                        tags: [
                            <span key="ul"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;ul&gt;</code>: Unordered list.</span>,
                            <span key="ol"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;ol&gt;</code>: Ordered list.</span>,
                            <span key="li"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;li&gt;</code>: List item.</span>
                        ]
                    },
                    {
                        title: 'Hyperlink and Media Tags',
                        tags: [
                            <span key="a"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code>: Anchor (used for links).</span>,
                            <span key="img"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code>: Image.</span>,
                            <span key="audio"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;audio&gt;</code>: Audio content.</span>,
                            <span key="video"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;video&gt;</code>: Video content.</span>
                        ]
                    },
                    {
                        title: 'Form Tags',
                        tags: [
                            <span key="form"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;form&gt;</code>: Form.</span>,
                            <span key="input"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input&gt;</code>: Input field.</span>,
                            <span key="textarea"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;textarea&gt;</code>: Text area.</span>,
                            <span key="button"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;button&gt;</code>: Button.</span>,
                            <span key="select"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;select&gt;</code>: Dropdown list.</span>,
                            <span key="option"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;option&gt;</code>: Option within a select.</span>
                        ]
                    },
                    {
                        title: 'Table Tags',
                        tags: [
                            <span key="table"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;table&gt;</code>: Table.</span>,
                            <span key="tr"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tr&gt;</code>: Table row.</span>,
                            <span key="td"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;td&gt;</code>: Table data cell.</span>,
                            <span key="th"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;th&gt;</code>: Table header cell.</span>,
                            <span key="thead"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;thead&gt;</code>: Header group.</span>,
                            <span key="tbody"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tbody&gt;</code>: Body group.</span>,
                            <span key="tfoot"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tfoot&gt;</code>: Footer group.</span>
                        ]
                    },
                    {
                        title: 'Semantic Tags',
                        tags: [
                            <span key="header"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;header&gt;</code>: Header section.</span>,
                            <span key="footer"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;footer&gt;</code>: Footer section.</span>,
                            <span key="article"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;article&gt;</code>: Article.</span>,
                            <span key="section"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;section&gt;</code>: Section.</span>,
                            <span key="nav"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;nav&gt;</code>: Navigation.</span>,
                            <span key="aside"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;aside&gt;</code>: Sidebar content.</span>
                        ]
                    }
                ].map(({ title, tags }) => (
                    <div key={title}>
                        <h3 className="text-xl font-semibold mt-6">{title}</h3>
                        <ul className="list-disc list-inside space-y-1 text-base mt-2">
                            {tags.map((tag, idx) => (
                                <li key={idx}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-10">Paired and Unpaired Tags</h2>
            <p className="text-base">
                Tags can be categorized into two types: <strong>Paired</strong> and <strong>Unpaired</strong> (self-closing) tags.
            </p>

            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">1. Paired Tags (Container Tags)</h3>
                    <p className="text-base">They include an opening and closing tag with content in between.</p>
                    <ul className="list-disc list-inside mt-2 text-base">
                        <li>
                            Opening Tag: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code>
                        </li>
                        <li>
                            Closing Tag: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/p&gt;</code>
                        </li>
                        <li>
                            Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>
                        </li>
                        <li>
                            Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;This is a heading.&lt;/h1&gt;</code>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">2. Unpaired Tags (Self-Closing)</h3>
                    <p className="text-base">
                        These tags do not require a closing tag. In React/Next.js and modern HTML5, it's a good practice to close them like:
                        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded ml-1">&lt;br /&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded ml-1">&lt;hr /&gt;</code>
                    </p>
                    <ul className="list-disc list-inside mt-2 text-base">
                        <li>
                            Line Break: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br /&gt;</code>
                        </li>
                        <li>
                            Horizontal Rule: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr /&gt;</code>
                        </li>
                        <li>
                            Image: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img src="image.jpg" alt="An example image" /&gt;</code>
                        </li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-10">Pictorial Representation of Tags</h2>
            <p className="text-base">
                The image below shows how tags can be nested, forming a tree-like hierarchy. This structure includes both paired and self-closing tags.
            </p>
            <img
                src={elementStructure}
                alt="HTML Tag Hierarchy"
                className="cursor-pointer w-full sm:w-3/4 lg:w-1/2 rounded-md shadow-md"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl mx-auto">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-1 rounded-full"
                        >
                            ✕
                        </button>
                        <img src={elementStructure}
                            alt="Zoomed Working"
                            className="rounded-lg shadow-lg max-h-[90vh]"
                        />
                    </div>
                </div>
            )}

            <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
                Next Chapter: HTML Elements
            </p>
        </div>
    );
};

export default HtmlTags;
