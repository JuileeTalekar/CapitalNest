import React, { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-2xl font-bold text-white">
            Support Portal
          </h3>
          
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
            <i className="fas fa-headset text-blue-300 mr-2"></i>
            <span className="text-blue-200 font-medium">24/7 Support Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Search for an answer or browse help topics
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get instant support from our expert team. We're here to help you succeed in your trading journey.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-300"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;