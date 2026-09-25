import React from "react";

import Att from "../assets/Images/atimg.jpg";
import Tmobile from "../assets/Images/tmobile.jpg";
import Verizon from "../assets/Images/vimg.jpg";
import CardPhone from "../assets/Images/leftimgmobile.jpg";

const CarrierDeals = () => {
  return (
    <section className="bg-[#F5F5F7] py-6 md:py-8">
      <div className="max-w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Card */}
          <div className="bg-[#FBFBFD] rounded-none p-8 md:p-10 flex flex-col min-h-[640px]">
            <div className="text-center">
              <h2 className="text-[34px] md:text-[45px] font-bold leading-tight text-[#1D1D1F]">
                Save up to $800 with select <br /> carrier deals at Apple.8
              </h2>

              <p className="mt-5 text-[21px] leading-7 text-[black] max-w-md mx-auto">
                Get the carrier deals you love and save <br /> on a new iPhone
                when you trade in and <br /> purchase right here at Apple.
              </p>

              <button className="mt-3 text-[#0066CC] text-[21px] font-medium hover:underline">
                Find your deal
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center mt-10">
              <div className="grid grid-cols-2 gap-8 items-start">
                <div className="text-center">
                  <img
                    src={Att}
                    alt="AT&T"
                    className="h-14 mx-auto object-contain"
                  />
                  <p className="mt-4 text-[17px] font-medium text-[#1D1D1F]">
                    Get up to $800 <br />
                    credit after trade-in
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src={Tmobile}
                    alt="T-Mobile"
                    className="h-14 mx-auto object-contain"
                  />
                  <p className="mt-4 text-[17px] font-medium text-[#1D1D1F]">
                    Get up to $400 <br />
                    credit after trade-in
                  </p>
                </div>
              </div>

              <div className="text-center mt-10">
                <img
                  src={Verizon}
                  alt="Verizon"
                  className="h-12 mx-auto object-contain"
                />
                <p className="mt-4 text-[17px] font-medium text-[#1D1D1F]">
                  Get up to $800 <br />
                  credit after trade-in
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#FBFBFD] rounded-none overflow-hidden flex flex-col min-h-[640px]">
            <div className="p-8 md:p-10 text-center">
              <h2 className="text-[34px] md:text-[45px] font-bold leading-tight text-[#1D1D1F]">
                Get 3% Daily Cash <br />
                back with Apple Card.
              </h2>

              <p className="mt-5 text-[21px] leading-7 text-[#black] max-w-md mx-auto">
                And pay for your new iPhone over 24 months, interest-free when
                you choose to check out with Apple Card Monthly Installments.
              </p>

              <button className="mt-3 text-[#0066CC] text-[21px] font-medium hover:underline">
                Learn more
              </button>
            </div>

            <div className="mt-auto">
              <img
                src={CardPhone}
                alt="Apple Card iPhone"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrierDeals;
