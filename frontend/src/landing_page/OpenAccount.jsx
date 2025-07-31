import React from "react";

const OpenAccount = () => {
  return (
    <div className="container flex-col flex items-center justify-center text-center min-h-screen p-4">
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Open a <span style={{ color: "#0d6efd" }}>CapitalNest</span> account
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>

        {/* CTA Button */}
        <button className="btn btn-primary w-48 hover:bg-blue-700 transition-colors duration-300 text-white text-xl font-bold px-6 py-3 rounded-lg">
          Sign up Now
        </button>
      </div>

      <div className="pt-8">
        <p className="text-sm text-gray-500 mb-2">
          Start your investment journey today
        </p>
      </div>
    </div>
  );
};

export default OpenAccount;
