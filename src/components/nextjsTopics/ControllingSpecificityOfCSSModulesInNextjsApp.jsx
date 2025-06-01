import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import projectStructure from '../../assets/nextjs/cssmodule1.png';
import output1 from '../../assets/nextjs/cssmodule2.png';
import output2 from '../../assets/nextjs/cssmodule3.png';

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

const ControllingSpecificityOfCSSModulesInNextjsApp = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p className="text-base leading-relaxed">
        CSS Modules offer a robust solution for locally scoped styles in Next.js apps. They generate unique class names to avoid conflicts and promote component-level styling. Let’s explore two effective approaches for controlling the specificity of CSS Modules in a Next.js App.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Steps to Create Next.js App</h2>
        <CodeBlock code={`npx create-next-app css-module-hierarchy`} />
        <CodeBlock code={`cd css-module-hierarchy`} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Project Structure</h2>
        <img src={projectStructure} alt="Project Structure" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Approach 1: Component Hierarchies with CSS Modules</h2>
        <p>
          Use component hierarchy and isolate CSS using modules. Each component has its own CSS file with scoped class names to avoid style leakage.
        </p>
        <CodeBlock code={`// components/Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;`} />
        <p>Now run the application:</p>
        <CodeBlock code={`npm run dev`} />
        <h3 className="text-lg font-medium">Output:</h3>
        <img src={output1} alt="Component Hierarchy Output" className="max-w-full rounded-md shadow-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Approach 2: Dynamic Styling with Scoped Variables</h2>
        <p>
          This approach introduces scoped CSS variables for dynamic styling. The utility function generates scoped styles injected directly into the component.
        </p>
        <CodeBlock code={`// utils/scopedVariables.js
const generateScopedStyles = (componentName, variableValue) => {
  return \`
    .\${componentName} {
      --custom-variable: \${variableValue};
      /* Other styles using the custom variable */
    }
  \`;
};
export default generateScopedStyles;`} />

        <CodeBlock code={`// components/ProfileCard.js
import React from "react";
import generateScopedStyles from "../utils/scopedVariables";

const ProfileCard = ({ name, backgroundColor, jobTitle }) => {
  const componentName = "profile-card";
  const dynamicStyles = generateScopedStyles(componentName, backgroundColor);

  return (
    <div className={componentName} style={{ backgroundColor }}>
      <h2>{name}</h2>
      <p>{jobTitle}</p>
      <style jsx>{dynamicStyles}</style>
    </div>
  );
};

export default ProfileCard;`} />
        <p>Now run the application:</p>
        <CodeBlock code={`npm run dev`} />
        <h3 className="text-lg font-medium">Output:</h3>
        <img src={output2} alt="Dynamic Styling Output" className="max-w-full rounded-md shadow-md" />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          CSS Modules allow fine-grained control over styles in a modular fashion. You can manage specificity using component-based organization or scoped dynamic variables, enabling scalable and maintainable styling practices in your Next.js apps.
        </p>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Install & Setup Tailwind CSS with Next.js
      </p>
    </div>
  );
};

export default ControllingSpecificityOfCSSModulesInNextjsApp;
