
import React from "react";

const topics = [
  {
    icon: "fa-circle-plus",
    title: "Account Opening",
    items: [
      "Getting started",
      "Online",
      "Offline",
      "Charges",
      "Company, Partnership and HUF",
      "Non Resident Indian (NRI)",
    ],
  },
  {
    icon: "fa-user",
    title: "Your CapitalNest Account",
    items: [
      "Login credentials",
      "Your Profile",
      "Account modification and segment addition",
      "CMR & DP ID",
      "Nomination",
      "Transfer and conversion of shares",
    ],
  },
  {
    icon: "fa-chart-simple",
    title: "Trading and Markets",
    items: [
      "Trading FAQs",
      "Kite",
      "Margins",
      "Product and order types",
      "Corporate actions",
      "Kite features",
    ],
  },
  {
    icon: "fa-credit-card",
    title: "Funds",
    items: [
      "Fund withdrawal",
      "Adding funds",
      "Adding bank accounts",
      "eMandates",
    ],
  },
  {
    icon: "fa-circle-arrow-up",
    title: "Console",
    items: [
      "IPO",
      "Portfolio",
      "Funds statement",
      "Profile",
      "Reports",
      "Referral program",
    ],
  },
  {
    icon: "fa-dollar-sign",
    title: "Coin",
    items: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ],
  },
];

const CreateTicket = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">To create a ticket, select a relevant topic</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-600">
              <i className={`fa-solid ${topic.icon} text-xl`}></i> {topic.title}
            </h3>
            <div className="w-full flex flex-col gap-2">
              {topic.items.map((item, i) => (
                <a
                  key={i}
                  href=""
                  className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;