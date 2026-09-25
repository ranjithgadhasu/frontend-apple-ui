import React from "react";
import IOSImage from "../assets/Images/IOSCenter.jpg";

const IOS = () => {
  return (
    <section className="bg-[#F5F5F7] py-8 md:py-3">
      <div className="max-w-full mx-auto px-4 md:px-6">
        <div className="bg-[#FBFBFD] overflow-hidden">

          {/* Content */}
          <div className="text-center pt-10 md:pt-14 px-6">
            <h2 className="text-[36px] md:text-[45px] font-bold text-[#1D1D1F]">
              iOS 16
            </h2>
            <p className="mt-3 text-[17px] md:text-[19px] text-[#1D1D1F]">
              Personal is powerful.
            </p>
            <button className="mt-2 text-[#0066CC] text-[21px] font-medium hover:underline">
              Learn more
            </button>
          </div>

          {/* Single Image */}
          <div className="pt-8 pb-8 md:pb-10 px-4 md:px-8">
            <img
              src={IOSImage}
              alt="iOS 16"
              className="w-full max-w-[1100px] mx-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default IOS;