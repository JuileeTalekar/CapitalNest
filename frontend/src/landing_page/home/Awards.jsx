import React from "react";

const Awards = () => {
  const tradingOptions = [
    "Equity", "Derivatives", "Currency", "Bonds and Govt. Securities",
    "Commodities", "Mutual Funds", "Stocks and IPOs", "Cryptocurrency"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-10">
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                India's{" "}
                <span className="text-blue-600 relative">
                  largest
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C20 4 40 2 60 4C80 6 100 8 120 6C140 4 160 2 180 4C185 5 190 6 198 8" 
                           className="text-blue-200"/>
                  </svg>
                </span>{" "}
                broker
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                <span className="text-2xl font-bold text-blue-600">2+ million</span>{" "}
                Prospera clients contribute to over{" "}
                <span className="font-semibold text-gray-900">15%</span> of all retail order volumes
                in India daily.
              </p>
            </div>

            {/* Trading Options */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Trade and invest in:
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {tradingOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors duration-200">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Section */}
            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-6">Featured in leading publications</p>
              <div className="max-w-md">
                <img 
                  src="media/Images/pressLogos.png" 
                  alt="Press coverage" 
                  className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-lg w-full">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-2 opacity-50"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform -rotate-1 opacity-70"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src="media/Images/largestBroker.svg"
                  alt="India's largest broker"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;
