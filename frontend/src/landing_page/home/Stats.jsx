import React from "react";

const Stats = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="mb-6 text-3xl font-bold">
            <span className="text-blue-600">Trust</span> with confidence
          </h1>
          <h2 className="text-lg font-semibold mb-2">Customer-first always</h2>
          <p className="text-gray-500 mb-4">
            We prioritize our customers' needs and provide exceptional service, ensuring their investments are secure and profitable.
          </p>

          <h2 className="text-lg font-semibold mb-2">No spam or gimmicks</h2>
          <p className="text-gray-500 mb-4">
            We believe in transparency and honesty, offering straightforward investment options without any hidden fees or misleading promotions.
          </p>

          <h2 className="text-lg font-semibold mb-2">The Prospera universe</h2>
          <p className="text-gray-500 mb-4">
            Our comprehensive platform offers a wide range of financial products and services, catering to all your investment needs in one place.
          </p>

          <h2 className="text-lg font-semibold mb-2">Do better with money</h2>
          <p className="text-gray-500">
            We provide expert advice and tools to help you make informed decisions, maximizing your returns and achieving your financial goals.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <img
            src="/media/Images/ecosystem.png"
            alt="Prospera Ecosystem"
            className="w-full h-auto rounded-lg shadow"
          />
          <div className="flex flex-row justify-between w-full mt-6">
            <a
              href="#"
              className="mx-3 text-blue-600 font-medium hover:text-indigo-500 transition-colors flex items-center gap-2"
            >
              Explore our products <span className="inline-block">→</span>
            </a>
            <a
              href="#"
              className="mx-3 text-blue-600 font-medium hover:text-indigo-500 transition-colors flex items-center gap-2"
            >
              Try demo <span className="inline-block">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;


