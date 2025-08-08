import React from "react";

const Brokerage = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 border-t border-gray-200 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 p-4">
          <a
            href="https://zerodha.com/brokerage-calculator#tab-equities"
            className="block hover:underline"
          >
            <h4 className="text-center md:text-left text-xl font-bold mb-4 text-blue-600">Brokerage calculator</h4>
            <ul className="text-gray-500 text-sm leading-7 text-left">
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
              </li>
            </ul>
          </a>
        </div>
        <div className="md:w-1/3 p-4 flex flex-col justify-center items-center">
          <a href="#" className="block hover:underline">
            <h4 className="text-xl font-bold text-blue-600">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;