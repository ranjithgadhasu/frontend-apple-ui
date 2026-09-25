import React from "react";
import TradeImg from "../assets/Images/TradeImg.png";

const TradeMobile = () => {
  return (
    <section className="w-full bg-[#F5F5F7] py-16 md:py-20">
      <div className="w-full px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center text-[30px] md:text-[51px] font-bold tracking-[-0.02em] text-[#1D1D1F] mb-10">
          Ways to save on iPhone
        </h2>

        {/* Card */}
        <div className="bg-[#FBFBFD] overflow-hidden rounded-none">
          {/* Content */}
          <div className="text-center pt-12 md:pt-16 px-6">
            <h3 className="text-[28px] md:text-[48px] font-bold leading-[1.08] text-[#1D1D1F]">
              Trade in your current phone
              <br />
              for credit toward a new one.
            </h3>

            <p className="mt-5 text-[15px] md:text-[19px] leading-7 text-[#6E6E73] max-w-xl mx-auto">
              Get $200–$600 in credit when you trade <br /> in iPhone 11 or higher and
              upgrade to <br /> iPhone 14 or iPhone 14 Pro.
            </p>

            <button className="mt-3 text-[#0066CC] text-[21px] font-medium hover:underline">
              Learn more
            </button>
          </div>

          {/* Bottom Image */}
          <div className="mt-8 md:mt-10">
            <img
              src={TradeImg}
              alt="Trade in iPhone"
              className="w-full h-auto block object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeMobile;