import React from "react";
import ResearchImg from "../assets/Images/Research.jpg";

const Research = () => {
  return (
    <section className="bg-[#F5F5F7] py-8 md:py-12">
      <div className="max-w-full mx-auto px-4 md:px-6">
        <div className="bg-[#FBFBFD] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px]">
            {/* Left Content */}
            <div className="flex justify-center lg:justify-start px-8 lg:px-16">
              <div className="max-w-[340px] ml-20 text-center lg:text-left">
                <h2 className="text-[28px] md:text-[43px] font-bold leading-[1.08] text-[#1D1D1F]">
                  Introducing
                  <br />
                  the Apple
                  <br />
                  Research app.
                </h2>
                <p className="mt-5 text-[19px] text-black leading-7">
                  The future of health research is you.
                </p>
                <button className="mt-3 ml-20 text-[#0066CC] text-[21px] font-medium hover:underline">
                  Learn more 
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className="flex items-end justify-end h-full">
              <img
                src={ResearchImg}
                alt="Apple Research App"
                className="w-full max-w-[760px] object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;