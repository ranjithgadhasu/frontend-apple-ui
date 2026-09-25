import React from "react";
import probgimg from "../assets/Images/probgimg.jpg";

const HeroPro = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 pt-10 md:pt-14 text-center">
        <p className="text-sm md:text-3xl">iPhone 14 Pro</p>

        <h1 className="mt-2 text-4xl md:text-6xl font-semibold tracking-tight">
          Pro. Beyond.
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-300">
          From $999 or $41.62/mo. for 24 mo. before trade-in
        </p>

   <div className="flex justify-center gap-5 mt-7">
          <button className="bg-[#0071e3] hover:bg-[#0077ED] text-white px-6 py-4 rounded-full text-md font-medium">
            Buy
          </button>

          <button className="text-[#0066cc] text-xl -mt-10 font-medium hover:underline">
            Learn more
          </button>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <img
            src={probgimg}
            alt="iPhone 14 Pro"
            className="w-full max-w-5xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPro;