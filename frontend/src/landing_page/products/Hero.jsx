import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container text-center mt-5 p-5 border-bottom">
      <h1 style={{ color: "#0d6efd" }}>Technology</h1>
      <h3 className="text-muted my-3 fs-4">
        Sleek, modern and intuitive trading platform
      </h3>


      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200 group "
        style={{ textDecoration: "none" }}
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