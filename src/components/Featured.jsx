import React from "react";
import easy from "../images/easy.png";
import font from "../images/font.png";
import globe from "../images/globe.png";
import layer from "../images/layer.png";
import startshine from "../images/startshine.png";
import vector from "../images/Vector .png";

const Featured = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] py-12 px-6 lg:px-20">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          FEATURED WORK
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#D9D9D9] w-full rounded-lg p-6 flex flex-col justify-between h-[300px]">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                LMS SOFTWARE
              </h2>
              <p className="text-sm text-gray-500">Saas Website</p>
            </div>
            <div className="flex justify-end items-center">
              <span className="text-sm text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                2024
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D9D9D9] w-full h-[300px] rounded-lg"></div>

          {/* Card 3 */}
          <div className="bg-[#D9D9D9] w-full h-[300px] rounded-lg"></div>

          {/* Card 4 */}
          <div className="bg-[#D9D9D9] w-full h-[300px] rounded-lg"></div>
        </div>

        {/* "You Will Get" Section */}
        <div className="my-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">YOU WILL GET</h1>
          <p className="text-gray-500">
            Everything You Need for a Professional and Seamless Design
            Experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={globe} alt="Global Styleguide" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Global Styleguide
            </h3>
            <p className="text-gray-500">
              Customize design with the text and color style.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={font} alt="Free Fonts" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Free Fonts
            </h3>
            <p className="text-gray-500">Using free font Inter from Google.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={vector} alt="Organized Layer" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Organized Layer
            </h3>
            <p className="text-gray-500">
              Customized design with the text and color style.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={layer} alt="Easy Customizable" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Easy Customizable
            </h3>
            <p className="text-gray-500">
              100% easy to change & customizable components.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={startshine} alt="Pixel Perfect" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Pixel Perfect
            </h3>
            <p className="text-gray-500">
              Distance and measure using an even multiple of measures.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={easy} alt="Dark Mood" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Dark Mood
            </h3>
            <p className="text-gray-500">
              Consistent design with the text and style.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
