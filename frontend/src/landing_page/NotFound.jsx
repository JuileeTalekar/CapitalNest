import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-bounce"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    >
      <div className="w-2 h-2 bg-blue-400 rounded-full opacity-20"></div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingElements}
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Interactive mouse follower */}
        <div
          className="absolute w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: `scale(${isHovered ? 1.5 : 1})`,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Error message */}
        <div className="mb-12 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Oops! Lost in Space
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for has drifted away into the digital void. 
            Don't worry, our navigation systems are still working!
          </p>
          
          {/* Fun animated icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center">
                  <i className="fas fa-rocket text-3xl text-white transform rotate-45 animate-bounce"></i>
                </div>
              </div>
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '5s' }}>
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-2 w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 flex items-center">
              <i className="fas fa-home mr-3 group-hover:animate-bounce"></i>
              Return Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to="/support"
            className="group px-8 py-4 border-2 border-slate-600 hover:border-emerald-500 text-white hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            style={{ textDecoration: "none" }}
          >
            <span className="flex items-center">
              <i className="fas fa-life-ring mr-3 group-hover:animate-spin"></i>
              Get Help
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
