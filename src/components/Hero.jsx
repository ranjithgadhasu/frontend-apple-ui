import React from "react";
import figureMobile from "../assets/Images/figureMobile.png";

const Hero = () => {
  return (
    <section className="bg-[#ffff]">
      <div className="max-w-7xl mx-auto text-center px-5 pt-12 md:pt-10">
        <p className="text-gray-500 text-xl mb-2">New</p>
        <h2 className="text-[32px] md:text-[43px] font-semibold text-[#1d1d1f]">
          iPhone 14
        </h2>
        <h1 className="mt-2 text-[38px] md:text-[43px] leading-tight font-bold tracking-tight text-[#1d1d1f]">
          Two great sizes.
          <br />
          Now with a splash of yellow.
        </h1>
        <p className="mt-5 text-[19px] md:text-[21px] text-gray-700">
          From $799 or $33.29/mo. for 24 mo. before trade‑in2
        </p>

        <div className="flex justify-center gap-5 mt-7">
          <button className="bg-[#0071e3] hover:bg-[#0077ED] text-white px-6 py-4 rounded-full text-md font-medium">
            Buy
          </button>

          <button className="text-[#0066cc] text-xl -mt-10 font-medium hover:underline">
            Learn more
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-14 py-14 flex justify-center">
          <img
            src={figureMobile}
            alt="iPhone 14"
            className="w-full max-w-5xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;