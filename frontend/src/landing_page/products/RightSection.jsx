import React from "react";

const RightSection = ({detailsR}) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="flex flex-col lg:flex-row bg-white ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{detailsR.productName}</h1>
          <p className="text-gray-500 mb-6">{detailsR.productDescription}</p>
          <a
            className="text-blue-600 font-medium hover:underline flex items-center gap-2 mb-6"
            href={detailsR.anchorURL}
          >
            {detailsR.anchorName} <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
          <img src={detailsR.imageURL} alt={detailsR.title} className="max-w-xs w-full h-auto rounded-lg shadow" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;