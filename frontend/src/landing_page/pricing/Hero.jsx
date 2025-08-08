import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center pt-24 pb-24">
        <h1 className="text-blue-600 text-5xl font-bold mb-4">Charges</h1>
        <p className="text-gray-500 text-2xl">List of all charges and taxes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        <div className="flex flex-col items-center text-center px-5">
          <img src="/media/Images/pricingEquity.svg" alt="pricingEquity" className="mb-4 w-24 h-24" />
          <h3 className="text-xl font-semibold mb-2">Free equity delivery</h3>
          <p className="text-gray-500">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="flex flex-col items-center text-center px-5">
          <img src="/media/Images/intradayTrades.svg" alt="intradayTrades" className="mb-4 w-24 h-24" />
          <h3 className="text-xl font-semibold mb-2">Intraday and F&O trades</h3>
          <p className="text-gray-500">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="flex flex-col items-center text-center px-5">
          <img src="/media/Images/pricingMF.svg" alt="pricingMF" className="mb-4 w-24 h-24" />
          <h3 className="text-xl font-semibold mb-2">Free direct MF</h3>
          <p className="text-gray-500">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;