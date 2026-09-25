import React from "react";
import MagSafeBg from "../assets/Images/mobiles.jpg";

const MobilesFeature = () => {
  return (
    <section className="bg-[#F5F5F7] py-8 md:py-5">
      <div className="max-w-full mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center text-[30px] md:text-[44px] font-bold tracking-[-0.02em] text-[#1D1D1F] mb-8 md:mb-10">
          Featured accessories
        </h2>

        {/* Card */}
        <div className="bg-[#FBFBFD] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[420px]">

            {/* Left Content */}
            <div className="flex items-center justify-center px-8 md:px-14 py-10">
              <div className="max-w-[320px] text-center">
                <h3 className="text-[28px] md:text-[42px] font-semibold leading-tight text-[#1D1D1F]">
                  MagSafe
                </h3>

                <p className="mt-4 text-[15px] md:text-[21px] leading-7 text-[#6E6E73]">
                 Snap on a magnetic case, wallet, or both. And get faster wireless charging.
                </p>

                <button className="mt-4 text-[#0066CC] text-[20px] font-medium hover:underline">
                  Shop MagSafe accessories
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center p-6 md:p-0">
              <img
                src={MagSafeBg}
                alt="MagSafe Accessories"
                className="w-full max-w-[520px] object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilesFeature;