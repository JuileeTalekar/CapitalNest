import React from "react";

const LeftSection = ({ detailsL }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="flex flex-col lg:flex-row bg-white ">
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
          <img src={detailsL.imageURL} alt={detailsL.title} className="max-w-xs w-full h-auto rounded-lg shadow" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{detailsL.productName}</h1>
          <p className="text-gray-500 mb-6">{detailsL.productDescription}</p>
          <div className="flex flex-row justify-center lg:justify-start gap-10 mb-6">
            <a
              href={detailsL.tryDemo}
              className="text-blue-600 font-medium hover:underline flex items-center gap-2"
            >
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={detailsL.lernMore}
              className="text-blue-600 font-medium hover:underline flex items-center gap-2"
            >
              Lern More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="flex flex-row gap-5">
            <a href={detailsL.googlePlay}>
              <img src="/media/Images/googlePlayBadge.svg" alt="Google Play" className="h-10" />
            </a>
            <a href={detailsL.appstore}>
              <img src="/media/Images/appstoreBadge.svg" alt="App Store" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;