import React from "react";

const Universe = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          The Prospera <span className="text-blue-600">Universe</span>
        </h1>
        <p className="text-gray-500 mb-10">
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10"
        style={{ textDecoration: "none" }}>
          
          <a href="#" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition no-underline">
            <img src="/media/Images/smallcaseLogo.png" alt="smallcaseLogo" className="mx-auto h-16" />
            <p className="text-sm text-gray-500 pt-3">
              Themetic investment platform that helps you in diversified baskets of stocks on ETFs.
            </p>
          </a>
          <a href="#" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition no-underline">
            <img src="/media/Images/zerodhaFundhouse.png" alt="zerodhaFundhouse" className="mx-auto h-16 w-1/2 object-contain" />
            <p className="text-sm text-gray-500 pt-3">
              Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
            </p>
          </a>
          <a href="#" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition no-underline">
            <img src="/media/Images/sensibullLogo.svg" alt="sensibullLogo" className="mx-auto h-16 w-1/2 object-contain" />
            <p className="text-sm text-gray-500 pt-3">
              Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
            </p>
          </a>
          <a href="#" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition no-underline">
            <img src="/media/Images/streakLogo.png" alt="streakLogo" className="mx-auto h-16 w-1/2 object-contain" />
            <p className="text-sm text-gray-500 pt-3">
              Systematic trading platform that allows you to create and backtest strategies without coding.
            </p>
          </a>
          <a href="#" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition no-underline">
            <img src="/media/Images/dittoLogo.png" alt="dittoLogo" className="mx-auto h-16 w-1/2 object-contain" />
            <p className="text-sm text-gray-500 pt-3">
              Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free
            </p>
          </a>
          <a href="#" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition no-underline">
            <img src="/media/Images/goldenpiLogo.png" alt="goldenpiLogo" className="mx-auto h-16 w-1/2 object-contain" />
            <p className="text-sm text-gray-500 pt-3">
              Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>
        <button className="w-56 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-lg font-bold px-6 py-3 rounded-lg mb-5 shadow">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;