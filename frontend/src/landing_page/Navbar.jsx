import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
      
      <nav className="bg-white shadow-sm w-full fixed top-0 left-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
          <div className="relative w-12 h-12 bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <img
              src="logo.svg"
              alt="CapitalNest Logo"
              className="w-8 h-8 transition-all group-hover:scale-105 drop-shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 rounded-xl transform -skew-x-12 transition-all duration-700 group-hover:translate-x-10"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-600 tracking-tight">
              CapitalNest
            </span>
            <span className="text-xs text-gray-500 font-medium uppercase">
              Invest Smart
            </span>
          </div>
        </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Products", "Pricing", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors "
                style={{ textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className=" hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
              Login
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              {["Home", "About", "Products", "Pricing", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2 no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium py-2">
                  Login
                </button>
                <button className="w-full px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;