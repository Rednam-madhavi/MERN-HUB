  import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

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

const NodejsEvents = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          Node.js is perfect for event-driven applications. Every action on a computer is an event. 
          For example, when a connection is made or a file is opened. Objects in Node.js can fire events.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example: File Stream Events</h2>
        <p>Here’s how you can listen to the open event on a file read stream:</p>
        <CodeBlock
          code={`var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open');
});`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Events Module</h2>
        <p>
          Node.js has a built-in module called <strong>Events</strong>. This module lets you create, fire, 
          and listen for your own events. To use it, require the events module and create an EventEmitter instance.
        </p>
        <CodeBlock
          code={`var events = require('events');
var eventEmitter = new events.EventEmitter();`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Creating and Firing Events</h2>
        <p>
          You can assign event handlers to your events and fire them using <code>emit()</code>.
          Here's a full example:
        </p>
        <CodeBlock
          code={`var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="text-base leading-relaxed">
          Node.js's event-driven architecture is powerful for handling asynchronous actions. By leveraging the Events module, 
          developers can build highly scalable and responsive applications.
        </p>
      </section>
       <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Node.js Upload Files
      </p>
    </div>
  );
};

export default NodejsEvents;
