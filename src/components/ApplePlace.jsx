import React from "react";
import AppleBg from "../assets/Images/appleplace.jpg";

const ApplePlace = () => {
  return (
    <section className="bg-[#F5F5F7] py-6 md:py-8">
      <div className="max-w-full mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden bg-[#FBFBFD]">
          {/* Background Image */}
          <img
            src={AppleBg}
            alt="Why Apple is the best place to buy iPhone"
            className="w-full h-[340px] md:h-[500px] object-cover"
          />

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-[560px] text-center px-6">
              <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.08] text-[#1D1D1F]">
                Why Apple is the best place to buy iPhone.
              </h2>

              <p className="mt-5 text-[15px] md:text-[19px] leading-7 text-[#hsla(240, 3%, 12%, 1)]">
                You can choose a payment option that works for <br /> you, pay less with
                a trade-in, connect your new <br />iPhone to your carrier, and get set
                up quickly. <br /> You can also chat with a Specialist anytime.
              </p>

              <button className="mt-4 text-[#0066CC] text-[21px] font-medium hover:underline">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplePlace;