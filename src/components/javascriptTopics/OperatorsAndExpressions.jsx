import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const OperatorsAndExpressions = () => {
  const clipboard = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    clipboard.copy(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeSnippets = [
    {
      code: `let x = 10;\nlet y = 20;\nlet z = x + y; // z is 30`,
    },
    {
      code: `let x = 10 + 5 * 3; // x is 25`,
    },
    {
      code: `let x = (10 + 5) * 3; // x is 45`,
    },
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Operators in JavaScript are symbols that perform specific operations on one or more operands (values or variables). For example, the addition operator (<code>+</code>) adds two operands together, and the assignment operator (<code>=</code>) assigns a value to a variable.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Types of Operators</h2>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg space-y-1 pl-4">
          <li><strong>Arithmetic operators</strong> (e.g. <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>)</li>
          <li><strong>Comparison operators</strong> (e.g. <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>==</code>, <code>!=</code>)</li>
          <li><strong>Logical operators</strong> (e.g. <code>&&</code>, <code>||</code>, <code>!</code>)</li>
          <li><strong>Assignment operators</strong> (e.g. <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>)</li>
          <li><strong>Conditional (ternary) operator</strong> (e.g. <code>?:</code>)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">What Are Expressions?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Expressions are combinations of values, variables, and operators that produce a result. For example:
        </p>

        {codeSnippets.map((snippet, index) => (
          <div key={index} className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded border border-gray-300 dark:border-gray-600 overflow-x-auto text-sm sm:text-base md:text-lg shadow-md">
              {snippet.code}
            </pre>
            <button
              onClick={() => handleCopy(snippet.code, index)}
              className="absolute top-2 right-2 p-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {copiedIndex === index ? (
                <CheckIcon className="h-6 w-6 text-green-500" />
              ) : (
                <ClipboardIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Operator Precedence</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Operator precedence determines the order in which operators are applied when an expression has multiple operators. For example:
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          In <code>let x = 10 + 5 * 3;</code>, multiplication is performed before addition because it has a higher precedence, so the result is <code>25</code>.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          You can use parentheses to change the default order:
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          <code>let x = (10 + 5) * 3;</code> evaluates to <code>45</code> because the addition is performed first.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          In summary, operators are symbols that perform specific operations on one or more operands, and expressions are combinations of values, variables, and operators that produce a result. Operator precedence determines the order in which operators are applied in an expression, and parentheses can be used to specify the order of operations. Understanding how to use operators and expressions is an essential part of JavaScript programming.
        </p>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg mt-10 font-medium text-gray-800 dark:text-gray-200">
        Next Chapter: var vs let vs const
      </p>
    </div>
  );
};

export default OperatorsAndExpressions;
