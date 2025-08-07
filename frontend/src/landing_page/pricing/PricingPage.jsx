import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount.jsx";
import Brokerage from "./Brokerage";
import AccountOpeningCharges from "./AccountOpeningCharges.jsx";

const PricingPage = () => {
  return (
    <div>
      <Hero/>
      
      {/* Ultra Compact Pricing Plans */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Choose Your Plan
            </h2>
            <p className="text-gray-600">Simple, transparent pricing</p>
          </div>

          {/* Mini Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Starter Plan */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mb-3">
                  <i className="fas fa-seedling text-sm text-green-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Starter</h3>
                <p className="text-sm text-gray-600 mb-3">For beginners</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹0</span>
                  <span className="text-gray-600 text-sm">/month</span>
                </div>

                <ul className="space-y-2 mb-4 text-left text-xs">
                  {[
                    "Free equity delivery",
                    "₹20 intraday & F&O",
                    "Basic platform",
                    "Mobile app",
                    "Email support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2 text-xs"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 px-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan - Most Popular */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-4 transform scale-105 z-10">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </span>
              </div>
              
              <div className="text-center text-white">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mb-3">
                  <i className="fas fa-star text-sm text-yellow-300"></i>
                </div>
                <h3 className="text-lg font-bold mb-1">Pro Trader</h3>
                <p className="text-blue-100 text-sm mb-3">For active traders</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold">₹20</span>
                  <span className="text-blue-200 text-sm">/order</span>
                </div>

                <ul className="space-y-2 mb-4 text-left text-xs">
                  {[
                    "All Starter features",
                    "Advanced charts",
                    "Real-time data",
                    "Priority support",
                    "Research reports"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-yellow-300 mr-2 text-xs"></i>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 px-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Start Trial
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mb-3">
                  <i className="fas fa-crown text-sm text-purple-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Enterprise</h3>
                <p className="text-sm text-gray-600 mb-3">For institutions</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">Custom</span>
                </div>

                <ul className="space-y-2 mb-4 text-left text-xs">
                  {[
                    "All Pro features",
                    "Dedicated manager",
                    "Custom solutions",
                    "Institutional research",
                    "24/7 phone support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-purple-500 mr-2 text-xs"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 px-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Mini Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">Trusted by 2M+ investors</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {['SEBI', 'NSE', 'BSE', 'MCX'].map((org, index) => (
                <div key={index} className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-700">
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OpenAccount/>
      <AccountOpeningCharges/>
      <Brokerage/>
    </div>
  );
};

export default PricingPage;