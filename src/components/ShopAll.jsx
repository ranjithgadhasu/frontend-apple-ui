import React from "react";

import Delivery from "../assets/Images/shopiconeone.png";
import Pay from "../assets/Images/shopiconetwo.png";
import Help from "../assets/Images/shopiconethree.png";

const ShopAll = () => {
  const items = [
    {
      image: Delivery,
      title: "Fast, free delivery",
      desc: "Or pick up available items at an Apple Store.",
      link: "Learn more",
    },
    {
      image: Pay,
      title: "Pay monthly at 0% APR",
      desc: "You can pay over time when you choose to check out with Apple Card Monthly Installments.**",
      link: "Learn more",
    },
    {
      image: Help,
      title: "Get help buying",
      desc: "Have a question? Call a Specialist or chat online. Call 1-800-MY-APPLE.",
      link: "Learn more",
    },
  ];

  return (
    <section className="bg-[#F5F5F7] py-12 md:py-2">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Top Divider */}
        <div className="pt-1">
          <div className="text-center mb-12">
            <button className="text-[#0066CC] text-[22px] md:text-[23px] font-medium hover:underline">
              Shop all iPhone accessories 
            </button>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center px-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain mb-5"
                />

                <h3 className="text-[19px] font-bold text-[#1D1D1F]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[21px] text-normal leading-8 text-[#1D1D1F] max-w-[300px]">
                  {item.desc}
                </p>

                <button className="mt-3 text-[#0066CC] text-[21px] font-medium hover:underline">
                  {item.link}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Heading */}
        <div className="text-center mt-20 md:mt-28">
          <h2 className="text-[38px] md:text-[51px] font-bold leading-tight tracking-[-0.03em] text-[#1D1D1F]">
            What makes an iPhone an iPhone?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ShopAll;