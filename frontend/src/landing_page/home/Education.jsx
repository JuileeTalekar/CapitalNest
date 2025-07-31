import React from "react";

const Education = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-lg w-full">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-2 opacity-50"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform -rotate-1 opacity-70"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src="media/Images/education.svg"
                  alt="Financial Education"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-10">
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Free</span> and open market education
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Our education section is designed to help you learn about trading and investing with comprehensive resources and expert guidance.
              </p>
            </div>

            {/* Education Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide resources that can help you learn the basics of trading and investing, as well as more advanced topics. Whether you're new to trading or an experienced investor, our education section has something for you.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200 group "
                   style={{ textDecoration: "none" }}
                >
                  Learn more
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-200">
                <p className="text-lg text-gray-600 leading-relaxed">
                  If you have any questions about trading, our Q&A section is here to help. We have a comprehensive list of frequently asked questions and answers that cover a wide range of topics.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200 group"
                  style={{ textDecoration: "none" }}
                >
                  Trading Q&A
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
