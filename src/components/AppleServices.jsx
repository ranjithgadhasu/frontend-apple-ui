import React from "react";

import Tv1 from "../assets/Images/TV1.jpg";
import Tv2 from "../assets/Images/TV2.jpg";
import Tv3 from "../assets/Images/TV3.jpg";
import Tv4 from "../assets/Images/TV4.jpg";
import Tv5 from "../assets/Images/TV5.jpg";
import Tv6 from "../assets/Images/TV6.jpg";

import Music1 from "../assets/Images/music1.jpg";
import Music2 from "../assets/Images/music3.jpg";
import Music3 from "../assets/Images/music33.jpg";

import News from "../assets/Images/News.jpg";
import Arcade from "../assets/Images/Arcade.jpg";
import Fitness from "../assets/Images/fitness.jpg";
import Gift from "../assets/Images/Gift.jpg";

import tvlogo from "../assets/Images/tvlogo.png";
import applelogomain from "../assets/Images/applelogomain.png";
import newsapple from "../assets/Images/newsapple.png";
import AcradeOne from "../assets/Images/AcradeOne.png";
import Fitnesslogo from "../assets/Images/Fitnesslogo.jpg";
import giftlogo from "../assets/Images/gifitlogo.png";

const AppleServices = () => {
  return (
    <section className="bg-[#F5F5F7] py-12">
      <div className="max-w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ================= Apple TV+ ================= */}
          <div className="bg-[#000000] text-white min-h-[500px] flex flex-col items-center p-8 overflow-hidden relative">
            <div className="text-center pt-2">
              <img src={tvlogo} alt="Apple TV+" className="h-7 mx-auto mb-3" />
              <p className="text-[19px] font-normal text-gray-200 leading-snug">
                Get 3 months of Apple TV+ free<br />when you buy an iPhone.
              </p>
              <div className="flex justify-center items-center gap-4 mt-3 text-[21px]">
                <button className="hover:underline text-[#2997FF]">Try it free</button>
                <button className="hover:underline text-[#2997FF]">Learn more</button>
              </div>
            </div>

            {/* Poster Grid Layout */}
            <div className="grid grid-cols-3 gap-2.5 mt-6 w-full">
              <img src={Tv1} alt="" className="rounded-lg object-cover w-full h-[110px]" />
              <img src={Tv2} alt="" className="rounded-lg object-cover w-full h-[110px]" />
              <img src={Tv3} alt="" className="rounded-lg object-cover w-full h-[110px]" />
              <img src={Tv4} alt="" className="rounded-lg object-cover w-full h-[110px]" />
              <img src={Tv5} alt="" className="rounded-lg object-cover w-full h-[110px]" />
              <img src={Tv6} alt="" className="rounded-lg object-cover w-full h-[110px]" />
            </div>
          </div>

          {/* ================= Apple Music ================= */}
         <div className="bg-[#fff] min-h-[500px] flex flex-col items-center p-8 overflow-hidden relative">
  <div className="text-center pt-2">
    {/* Apple Music Title */}
    <div className="flex items-center justify-center gap-1 mb-3">
      <img
        src={applelogomain}
        alt="Apple"
        className="w-12 h-12 object-contain"
      />
      <h3 className="text-[28px] font-bold text-[#1D1D1F]">
        Music
      </h3>
    </div>

    <p className="text-[19px] text-[#1D1D1F] leading-snug">
      Over 100 million songs.
      <br />
      Start listening for free today.
    </p>

    <div className="flex justify-center items-center gap-4 mt-3 text-[21px]">
      <button className="hover:underline text-[#06C] mt-6">Try it free</button>
      <button className="hover:underline text-[#06C] ml-3">Learn more</button>
    </div>
  </div>

  {/* Music Cards */}
  <div className="grid grid-cols-3 gap-3 mt-6 w-full items-end">
    <img
      src={Music1}
      alt=""
      className="rounded-xl object-cover w-full h-[220px] shadow-sm"
    />
    <img
      src={Music2}
      alt=""
      className="rounded-xl object-cover w-full h-[240px] shadow-md"
    />
    <img
      src={Music3}
      alt=""
      className="rounded-xl object-cover w-full h-[220px] shadow-sm"
    />
  </div>
</div>

          {/* ================= Apple News+ ================= */}
          <div className="bg-[#fafafa] min-h-[500px] flex flex-col items-center pt-8 px-8 pb-0 overflow-hidden relative">
            <div className="text-center">
              <img src={newsapple} alt="Apple News+" className="h-7 mx-auto mb-3" />
              <p className="text-[19px] text-[#1d1d1f] leading-snug">
                Get 3 months of Apple News+ free<br />when you buy an iPhone.
              </p>
              <div className="mt-3 text-[21px]">
                <button className="hover:underline text-[#06c]">Learn more</button>
              </div>
            </div>

            <div className="flex justify-center items-end mt-6 w-full">
              <img src={News} alt="Apple News Preview" className="max-h-[380px] object-contain object-bottom" />
            </div>
          </div>

          {/* ================= Apple Arcade ================= */}
          <div className="bg-[#ffff] min-h-[500px] flex flex-col items-center p-8 overflow-hidden relative">
            <div className="text-center pt-2">
              <img src={AcradeOne} alt="Apple Arcade" className="h-7 mx-auto mb-3" />
              <p className="text-[19px] text-[#1d1d1f] leading-snug">
                Get 3 months of Apple Arcade free<br />when you buy an iPhone.
              </p>
              <div className="flex justify-center items-center gap-4 mt-3 text-[21px]">
                <button className="hover:underline text-[#06c] mt-6">Try it free</button>
                
                <button className="hover:underline text-[#06c] ml-3">Learn more</button>
              </div>
            </div>

            <div className="flex items-center justify-center mt-10">
              <img src={Arcade} alt="Apple Arcade Icon" className="w-[180px] h-[180px] object-contain" />
            </div>
          </div>

          {/* ================= Apple Fitness+ ================= */}
          <div className="bg-[#fafafa] min-h-[500px] flex flex-col items-center pt-8 px-8 pb-0 overflow-hidden relative">
            <div className="text-center">
              <img src={Fitnesslogo} alt="Apple Fitness+" className="h-7 mx-auto mb-3" />
              <p className="text-[19px] text-[#1d1d1f] leading-snug">
                Fitness for everyone.<br />Now all you need is iPhone.
              </p>
              <div className="flex justify-center items-center gap-4 mt-3 text-[21px]">
                <button className="hover:underline text-[#06c]">Learn more</button>
            
                <button className="hover:underline text-[#06c] mt-6">Try it free</button>
              </div>
            </div>

            <div className="flex justify-center items-end mt-6 w-full">
              <img src={Fitness} alt="Apple Fitness Preview" className="w-full max-h-[340px] object-contain object-bottom rounded-t-xl" />
            </div>
          </div>

          {/* ================= Apple Gift Card ================= */}
          <div className="bg-[#fafafa] min-h-[500px] flex flex-col items-center p-8 overflow-hidden relative">
            <div className="text-center pt-2">
              <img src={giftlogo} alt="Apple Gift Card" className="h-7 mx-auto mb-3" />
              <p className="text-[19px] text-[#1d1d1f] leading-snug">
                For everything and everyone.
              </p>
              <div className="flex justify-center items-center gap-4 mt-3 text-[21px]">
                <button className="hover:underline text-[#06c]">Learn more</button>
                <button className="hover:underline text-[#06c]">Buy</button>
              </div>
            </div>

            <div className="flex items-center justify-center mt-8 w-full">
              <img src={Gift} alt="Apple Gift Cards" className="w-full object-contain max-h-[260px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppleServices;