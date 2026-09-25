import React from "react";
import Pro from "../assets/Images/MobileOne.jpg";
import Fourteen from "../assets/Images/MobileTwo.jpg";
import Thirteen from "../assets/Images/MobileThree.jpg";
import SE from "../assets/Images/MobileFour.jpg";
import offmobile from "../assets/Images/offmobile.png";

const phones = [
  {
    name: "iPhone 14 Pro",
    subtitle: "The ultimate iPhone.",
    price: "From $999",
    image: Pro,
    colors: ["#4B4B6A", "#D4D4D4", "#D8C59F", "#3A3A3A"],
    size: '6.7" or 6.1"',
    display: "Super Retina XDR display",
    proMotion: "ProMotion technology",
    alwaysOn: "Always-On display",
    feature: "Dynamic Island",
    featureText: "A new way to interact with iPhone",
    featureImage: offmobile,
    isNew: true,
  },
  {
    name: "iPhone 14",
    subtitle: "A total powerhouse.",
    price: "From $799",
    image: Fourteen,
    colors: ["#A7C7E7", "#F9E3E3", "#F8F4D9", "#5C7C99", "#F8F4D9", "#C8102E"],
    size: '6.7" or 6.1"',
    display: "Super Retina XDR display",
    proMotion: "-",
    alwaysOn: "-",
    feature: "-",
    featureText: "",
    featureImage: null,
    isNew: true,
  },
  {
    name: "iPhone 13",
    subtitle: "As amazing as ever.",
    price: "From $599",
    image: Thirteen,
    colors: ["#4F6B4F", "#F5E6DA", "#A7C7E7", "#2D2D2D", "#F8F4D9", "#C8102E"],
    size: '6.1" or 5.4"',
    display: "Super Retina XDR display",
    proMotion: "-",
    alwaysOn: "-",
    feature: "-",
    featureText: "",
    featureImage: null,
    isNew: false,
  },
  {
    name: "iPhone SE",
    subtitle: "Serious power. Serious value.",
    price: "From $429",
    image: SE,
    colors: ["#111827", "#F5F5F5", "#C8102E"],
    size: '4.7"',
    display: "Retina HD display",
    proMotion: "-",
    alwaysOn: "-",
    feature: "-",
    featureText: "",
    featureImage: null,
    isNew: false,
  },
];

const MobileVisit = () => {
  return (
    <section className="bg-[#F5F5F7] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-[34px] md:text-[48px] font-semibold text-[#1D1D1F] mb-14">
          Which iPhone is right for you?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {phones.map((phone) => (
            <div key={phone.name} className="flex flex-col h-full text-center">
              {/* Phone Image */}
              <div className="h-[190px] md:h-[210px] flex items-end justify-center mb-5">
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Colors */}
              <div className="flex justify-center gap-1 mb-2">
                {phone.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* New Badge */}
              <div className="h-5">
                {phone.isNew && (
                  <p className="text-[12px] text-[#F56300]">New</p>
                )}
              </div>

              {/* Name */}
              <h3 className="text-[22px] md:text-[24px] font-semibold text-[#1D1D1F]">
                {phone.name}
              </h3>

              {/* Subtitle */}
              <p className="text-[17px] text-[#1D1D1F] mt-2 h-12">
                {phone.subtitle}
              </p>

              {/* Price */}
              <p className="text-[14px] font-medium mt-6">{phone.price}</p>

              {/* Buttons */}
              <div className="mt-5">
                <button className="bg-[#0071E3] hover:bg-[#0077ED] text-white text-[12px] px-5 py-2 rounded-full transition">
                  Buy
                </button>

                <p className="text-[#0066CC] text-[14px] mt-3 cursor-pointer hover:underline">
                  Learn more
                </p>
              </div>

              {/* Divider */}
              <div className="pt-8">
                <hr className="border-[#D2D2D7]" />
              </div>

              {/* Specifications */}
              <div className="pt-8 space-y-5">
                {/* Display Size */}
                <div>
                  <p className="text-[18px] font-semibold">{phone.size}</p>
                  <p className="text-[14px] mt-1">{phone.display}</p>
                </div>

                {/* ProMotion */}
                <div className="h-6 flex items-center justify-center">
                  <p className="text-[14px]">{phone.proMotion}</p>
                </div>

                {/* Always-On */}
                <div className="h-6 flex items-center justify-center">
                  <p className="text-[14px]">{phone.alwaysOn}</p>
                </div>

                {/* Dynamic Island */}
                <div className="min-h-[130px] flex flex-col items-center justify-start pt-2">
                  {phone.featureImage ? (
                    <>
                      <img
                        src={phone.featureImage}
                        alt="Dynamic Island"
                        className="w-10 h-10 object-contain mb-3"
                      />
                      <p className="text-[14px] font-medium">
                        {phone.feature}
                      </p>
                      <p className="text-[14px] text-[#6E6E73] mt-1 leading-5">
                        {phone.featureText}
                      </p>
                    </>
                  ) : (
                    <p className="text-2xl mt-6">-</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileVisit;