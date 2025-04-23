import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';

const VideoAndAudio = () => {
    const clipboard = useClipboard();
    const [copied, setCopied] = useState({});

    const handleCopy = (codeSnippet, type) => {
        clipboard.copy(codeSnippet);
        setCopied((prev) => ({ ...prev, [type]: true }));
        setTimeout(() => {
            setCopied((prev) => ({ ...prev, [type]: false }));
        }, 2000);
    };

    const videoExample = `<video src="video.mp4" controls></video>`;
    const audioExample = `<audio src="audio.mp3" controls></audio>`;

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6 text-gray-800 dark:text-gray-100">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                This tutorial provides a comprehensive guide on using <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;video&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;audio&gt;</code> tags in HTML to embed media files.
            </p>

            {/* VIDEO SECTION */}
            <h2 className="text-2xl sm:text-3xl font-semibold mt-6">The &lt;video&gt; Tag</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;video&gt;</code> tag is used to embed video files in an HTML document. It supports multiple attributes to control playback.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
                <code className="text-sm sm:text-base">{videoExample}</code>
                <button
                    onClick={() => handleCopy(videoExample, 'video')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy video example"
                >
                    {copied.video ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                </button>
            </div>

            <h3 className="text-lg font-semibold mt-4">Attributes for &lt;video&gt;</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li><strong>src</strong>: Path to the video file</li>
                <li><strong>controls</strong>: Adds video controls</li>
                <li><strong>autoplay</strong>: Starts playback automatically</li>
                <li><strong>loop</strong>: Repeats the video</li>
                <li><strong>muted</strong>: Mutes the video</li>
                <li><strong>poster</strong>: Shows an image before the video plays</li>
                <li><strong>width</strong> and <strong>height</strong>: Sets dimensions</li>
            </ul>

            {/* AUDIO SECTION */}
            <h2 className="text-2xl sm:text-3xl font-semibold mt-6">The &lt;audio&gt; Tag</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;audio&gt;</code> tag is used to embed audio files in an HTML document. It also supports various attributes.
            </p>
            <div className="relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded">
                <code className="text-sm sm:text-base">{audioExample}</code>
                <button
                    onClick={() => handleCopy(audioExample, 'audio')}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Copy audio example"
                >
                    {copied.audio ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardIcon className="h-6 w-6" />}
                </button>
            </div>

            <h3 className="text-lg font-semibold mt-4">Attributes for &lt;audio&gt;</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li><strong>src</strong>: Path to the audio file</li>
                <li><strong>controls</strong>: Adds audio controls</li>
                <li><strong>autoplay</strong>: Starts audio automatically</li>
                <li><strong>loop</strong>: Repeats the audio</li>
                <li><strong>muted</strong>: Mutes the audio</li>
                <li><strong>preload</strong>: Controls how the file is preloaded</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Preload Attribute Values</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li><strong>none</strong>: Audio loads only when playback begins</li>
                <li><strong>metadata</strong>: Loads only basic info like duration</li>
                <li><strong>auto</strong>: Tries to load full file in background</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Conclusion</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;video&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">&lt;audio&gt;</code> tags are powerful tools for embedding media content in HTML. Their attributes help create interactive and dynamic experiences for users.
            </p>
        </div>
    );
};

export default VideoAndAudio;
