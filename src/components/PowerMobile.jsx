import React from "react";
import proimgtwo from "../assets/Images/proimgtwo.jpg";
import iphonese from "../assets/Images/iphonese.jpg"

const PowerMobile = () => {
  return (
    <section className="bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-4">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="ml-21">
            <img src={iphonese} alt="iphonese" />
          </div>
            <h2 className="text-[#1D1D1F] text-4xl md:text-6xl font-semibold leading-tight">
              Love the power.
              <br />
              Love the price.
            </h2>
            <p className="mt-5 text-gray-600 text-sm md:text-lg">
              From $429 or $17.87/mo. for 24 mo. before trade-in
            </p>
            <div className="flex justify-center gap-5 mt-7">
              <button className="bg-[#0071e3] hover:bg-[#0077ED] text-white px-6 py-4 rounded-full text-md font-medium">
                Buy
              </button>

              <button className="text-[#0066cc] text-xl -mt-10 font-medium hover:underline">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src={proimgtwo}
              alt="iPhone SE"
              className="w-full max-w-md md:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerMobile;
