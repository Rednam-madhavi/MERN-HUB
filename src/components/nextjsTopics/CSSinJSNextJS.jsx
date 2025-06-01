import React, { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/solid";
import { useClipboard } from "use-clipboard-copy";
import ProjectStructure from "../../assets/nextjs/cssinjs1.png";
import Output1 from "../../assets/nextjs/cssinjs2.png";
import Output2 from "../../assets/nextjs/cssinjs3.png";

const CodeBlock = ({ code }) => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 flex items-center gap-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-2 py-1 rounded text-xs"
      >
        {copied ? (
          <>
            <CheckIcon className="h-4 w-4" /> Copied
          </>
        ) : (
          <>
            <ClipboardIcon className="h-4 w-4" /> Copy
          </>
        )}
      </button>
    </div>
  );
};

const CSSinJSNextJS = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        CSS-in-JS in Next.js enables you to write styles directly within your
        JavaScript or TypeScript files, allowing for scoped, dynamic,
        component-level styling.
      </p>

      <section>
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>NPM & NodeJS</li>
          <li>NextJS Basics</li>
          <li>CSS-in-JS Knowledge</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Supported Libraries</h2>
        <p>Some CSS-in-JS libraries supported in Next.js App Router:</p>
        <ul className="list-disc list-inside">
          <li>chakra-ui</li>
          <li>@mui/material / joy</li>
          <li>styled-components</li>
          <li>stylex</li>
          <li>tss-react</li>
          <li>vanilla-extract</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Steps to Setup Project</h2>
        <CodeBlock code={`npm install -g next`} />
        <CodeBlock code={`npx create-next-app my-app`} />
        <CodeBlock code={`cd my-app`} />
        <CodeBlock code={`npm install styled-components`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img
          src={ProjectStructure}
          alt="Project Structure"
          className="max-w-full rounded-md shadow-md"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example 1: Styled Button</h2>
        <CodeBlock
          code={`"use client";
import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
\`;

const StyledButton = styled.button\`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
\`;

export default function Home() {
  return (
    <CenteredContainer>
      <h1>Welcome to Next.js with Styled Components</h1>
      <StyledButton>Click Me</StyledButton>
    </CenteredContainer>
  );
}`}
        />
        <img
          src={Output1}
          alt="Styled Button Output"
          className="max-w-full rounded-md shadow-md mt-4"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example 2: Styled Heading with Props</h2>
        <CodeBlock
          code={`"use client";
import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
\`;

const StyledHeading = styled.h1\`
  font-size: \${(props) => (props.large ? "3rem" : "2rem")};
  color: \${(props) => (props.primary ? "blue" : "darkblue")};
  text-align: center;
\`;

export default function About() {
  return (
    <CenteredContainer>
      <StyledHeading large>This is a Large Heading</StyledHeading>
      <StyledHeading>This is a Regular Heading</StyledHeading>
      <StyledHeading primary>This is a Primary Heading</StyledHeading>
    </CenteredContainer>
  );
}`}
        />
        <img
          src={Output2}
          alt="Styled Heading Output"
          className="max-w-full rounded-md shadow-md mt-4"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          CSS-in-JS in Next.js helps build modular and maintainable UI by
          scoping styles to components and allowing dynamic styling through
          props and JavaScript logic. Using libraries like styled-components
          ensures seamless integration in both client and server components.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next.js Styling: Sass
      </p>
    </div>
  );
};

export default CSSinJSNextJS;
