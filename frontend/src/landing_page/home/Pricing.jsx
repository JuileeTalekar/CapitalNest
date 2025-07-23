import React from "react";

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">Unbeatable</span> pricing
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Our pricing plans are designed to fit your needs and budget. Choose the plan that works best for you and start enjoying our services today!
            </p>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200 group"
                style={{ textDecoration: "none" }}
              >
                See pricing
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Free Plan */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-100 hover:border-blue-200">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">₹0</h3>
                  <div className="w-12 h-0.5 bg-green-500 mx-auto mb-4"></div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Free equity delivery and<br/>direct mutual funds
                </p>
                
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              </div>
            </div>

            {/* Paid Plan */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-100 hover:border-blue-200">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">₹20</h3>
                  <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Intraday and F&O<br/>trading
                </p>
                
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Pro Trading
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">0%</div>
              <div className="text-sm text-gray-500">Account opening fees</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">0%</div>
              <div className="text-sm text-gray-500">Annual maintenance</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-500">Customer support</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-500">Secure platform</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;