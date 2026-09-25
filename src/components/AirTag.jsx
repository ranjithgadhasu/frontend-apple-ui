import React from "react";
import AirTagImg from "../assets/Images/AirTag.jpg";

const AirTag = () => {
  return (
    <section className="bg-[#F5F5F7] py-8 md:py-1">
      <div className="max-w-full mx-auto px-4 md:px-6">
        {/* Card */}
        <div className="bg-[#FBFBFD] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[420px]">

            {/* Left Image */}
            <div className="flex items-center justify-center p-6 md:p-8">
              <img
                src={AirTagImg}
                alt="AirTag Accessories"
                className="w-full max-w-[560px] object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex items-center justify-center px-8 md:px-14 py-10">
              <div className="max-w-[340px] text-center">
                <h2 className="text-[32px] md:text-[43px] font-bold text-[#1D1D1F] leading-tight">
                  AirTag
                </h2>

                <p className="mt-5 text-[16px] md:text-[19px] leading-7 text-[#1D1D1F]">
                  Attach one to your keys. Put another in your backpack. If
                  they’re misplaced, just use the Find My app.
                </p>

                <div className="flex justify-center gap-8 mt-6">
                  <button className="text-[#0066CC] text-[21px] font-medium hover:underline">
                    Buy
                  </button>

                  <button className="text-[#0066CC] text-[21px] font-medium hover:underline">
                    Learn more 
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AirTag;