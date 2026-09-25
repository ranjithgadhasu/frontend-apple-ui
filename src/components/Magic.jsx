import React from "react";
import MagicBg from "../assets/Images/headphones.jpg";


const Magic = () => {
  return (
    <section className="bg-[#F5F5F7] py-8 md:py-5">
      <div className="max-w-full mx-auto px-4 md:px-6">
        <div className="bg-[#FBFBFD] overflow-hidden">

          {/* Heading */}
          <div className="pt-10 md:pt-14 pb-6 text-center">
            <h2 className="text-[32px] md:text-[46px] font-bold leading-[1.05] tracking-[-0.02em] text-[#1D1D1F]">
             Magic runs <br /> in the family.
            </h2>
          </div>

          {/* Image */}
          <div className="flex justify-center px-4 md:px-8 pb-8">
            <img
              src={MagicBg}
              alt="Magic runs in the family"
              className="w-full max-w-[1200px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Magic;