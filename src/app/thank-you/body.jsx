"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

const Body = () => {
  useEffect(() => {
    if (!window.hasSentThankYouEvent) {
      sendGTMEvent({ event: "thank_you" });
      window.hasSentThankYouEvent = true;
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-8xl font-bold">Thank You!</h1>
          <p className="text-3xl text-center">
            Thank you for your interest! We will contact you soon.
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              className="inline-flex items-center rounded border border-gray-600 bg-gray-600 px-6 py-3 text-white text-xl font-medium hover:bg-gray-700 focus:outline-none focus:ring"
              onClick={() => window.history.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>Go Back</span>
            </button>
            <Link
              className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-6 py-3 text-white text-xl font-medium hover:bg-indigo-700 focus:outline-none focus:ring"
              href="/"
            >
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
