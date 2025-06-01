import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/solid';
import { useClipboard } from 'use-clipboard-copy';
import ProjectStructure from '../../assets/nextjs/middleware.png';

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

const MiddlewaresInNextjs = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-8 text-gray-800 dark:text-gray-100">
      <p>
        Middlewares in Next.js provide a powerful mechanism to execute custom code before a request is completed. They enable tasks such as authentication, logging, and request manipulation.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Middleware in Next.js</h2>
        <p>
          Middleware is executed before a request reaches the route handler. It's defined in <code>middleware.js</code> in your project root and runs on the Edge Runtime.
        </p>
        <CodeBlock
          code={`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: '/about/:path*',
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Matching Paths</h2>
        <p>
          Apply middleware to specific routes using the <code>matcher</code> config.
        </p>
        <CodeBlock
          code={`export const config = {
  matcher: ['/profile/:path*', '/about/:path*']
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Using Cookies</h2>
        <CodeBlock
          code={`import { NextResponse } from 'next/server';

export function middleware(request) {
  let cookie = request.cookies.get('nextjs');
  const response = NextResponse.next();
  response.cookies.set('vercel', 'fast');
  return response;
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Setting Headers</h2>
        <CodeBlock
          code={`import { NextResponse } from 'next/server';

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('x-hello-from-middleware2', 'hello');
  return response;
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">CORS Example</h2>
        <CodeBlock
          code={`import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (request.method === 'OPTIONS') {
    response.status = 200;
    return response;
  }

  return response;
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Producing a Response</h2>
        <CodeBlock
          code={`import { isAuthenticated } from '@lib/auth';

export const config = {
  matcher: '/api/:function*',
};

export function middleware(request) {
  if (!isAuthenticated(request)) {
    return new Response(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Steps to Setup a NextJS App</h2>
        <CodeBlock
          code={`npx create-next-app@latest app_name
cd app_name`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example: Authentication Middleware</h2>
        <CodeBlock
          code={`// src/app/page.js

export default function Home() {
  return (
    <>
      <h1>Login Page</h1>
      <form method="post" action="/submit">
        <label>Username</label>
        <input type="text" name="username" required />
        <label>Password</label>
        <input type="password" name="password" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}`}
        />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Benefits of Middleware</h2>
        <ul className="list-disc list-inside">
          <li>Authentication and authorization</li>
          <li>Session management</li>
          <li>Input validation and security enforcement</li>
          <li>Request and response modification</li>
          <li>Server-side redirection</li>
        </ul>
      </section>

      <p className="text-center text-base mt-10 font-medium">
        Next Chapter: Next JS Routing: Internationalization
      </p>
    </div>
  );
};

export default MiddlewaresInNextjs;
