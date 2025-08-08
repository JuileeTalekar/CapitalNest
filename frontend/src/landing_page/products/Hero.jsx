import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10 p-8 border-b border-gray-200 bg-white ">
      <h1 className="text-blue-600 text-4xl font-bold mb-4">Technology</h1>
      <h3 className="text-gray-500 my-3 text-2xl font-medium mb-8">
        Sleek, modern and intuitive trading platform
      </h3>

      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200 group no-underline"
      >
        Check out our investment offerings
        <svg
          className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;