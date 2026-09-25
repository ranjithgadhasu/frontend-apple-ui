import React from "react";
import AppsLeft from "../assets/Images/appsimage.jpg";
import AppleOne from "../assets/Images/applelogo.jpg";

const AppsImages = () => {
  return (
    <section className="bg-[#F5F5F7] py-8 md:py-12">
      <div className="max-w-full mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-center text-[32px] md:text-[56px] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-8 md:mb-10">
          Get more out of your iPhone.
        </h2>
        {/* Apple Card */}
        <div className="bg-[#FBFBFD] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[420px]">

            {/* Left Image */}
            <div className="flex items-center justify-center p-8 md:p-10">
              <img
                src={AppsLeft}
                alt="Apple Services"
                className="w-full max-w-[430px] object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex items-center justify-center p-8 md:p-12">
              <div className="text-center max-w-[460px]">
                <img
                  src={AppleOne}
                  alt="Apple One"
                  className="w-full max-w-[240px] mx-auto object-contain"
                />
                <h3 className="mt-6 text-[28px] md:text-[25px] font-bold leading-tight text-[#1D1D1F]">
                  Bundle up to six Apple services. <br /> And enjoy more for less.
                </h3>
                <div className="flex justify-center gap-8 mt-6">
                  <button className="text-[#0066CC] mt-8 text-[18px] font-medium hover:underline">
                    Try it free9
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

export default AppsImages;