import React from "react";
import SwitchingImg from "../assets/Images/appleimagephone.jpg";

const Switching = () => {
  return (
    <section className="bg-[#F5F5F7] py-8 md:py-1">
      <div className="max-w-[950px] mx-auto px-4 md:px-6">
        <div className="bg-[#FBFBFD] overflow-hidden">

          {/* Content */}
          <div className="text-center pt-10 md:pt-14 px-6">
            <h2 className="text-[34px] md:text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#1D1D1F]">
              Switching to iPhone
              <br />
              is super simple.
            </h2>

            <button className="mt-3 text-[#0066CC] text-[21px] font-medium hover:underline">
              Learn more 
            </button>
          </div>

          {/* Single Image */}
          <div className="pt-8 pb-8 md:pb-10 px-4 md:px-8">
            <img
              src={SwitchingImg}
              alt="Switching to iPhone"
              className="w-full max-w-[980px] mx-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Switching;