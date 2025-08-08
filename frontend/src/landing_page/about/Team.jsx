import React from "react";

const Team = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">People</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 text-gray-500 p-6">
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center px-4">
          <img src="/media/Images/founder.jpg" alt="founder" className="w-72 h-72 rounded-full object-cover shadow-lg" />
          <h4 className="mt-4 text-xl font-semibold text-gray-900">Juilee Talekar</h4>
          <h6 className="text-md text-gray-600">Founder, CEO</h6>
        </div>
        <div className="md:w-1/2 flex items-center mt-8 md:mt-0 text-center md:text-left px-4">
          <p className="text-base">
            Juilee founded Prospera in 2024 to overcome the hurdles he faced during his decade long stint as a trader. Today, Prospera has changed the landscape of the Indian broking industry.<br/><br/>
            He is a student of Vishwakarma Institute of Technology(VIIT).<br/><br/>
            Playing chess is his zen.<br/><br/>
            Connect on
            <a href="#" className="text-blue-600 hover:underline mx-1">Homepage</a> /
            <a href="#" className="text-blue-600 hover:underline mx-1">TradingQnA</a> /
            <a href="#" className="text-blue-600 hover:underline mx-1">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
