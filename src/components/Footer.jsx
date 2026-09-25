import React from "react";
import { FaApple } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

const footerData = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
    subTitle: "Apple Wallet",
    subLinks: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    title: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    subTitle: "Entertainment",
    subLinks: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
    subTitle: "For Education",
    subLinks: ["Apple and Education", "Shop for K-12", "Shop for College"],
    thirdTitle: "For Healthcare",
    thirdLinks: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
    fourthTitle: "For Government",
    fourthLinks: ["Shop for Government", "Shop for Veterans and Military"],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
    subTitle: "About Apple",
    subLinks: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7]">
      <div className="max-w-[1200px] mx-auto px-4">
      {/* Apple Icons + Breadcrumb */}
<div className=" pb-3 pt-4 mb-8">
  <div className="flex flex-col">
    {/* 1st Apple icon */}
    <FaApple className="text-[#1D1D1F] text-[18px] mb-[2px]" />
<p className="border-b border-[#D2D2D7]"></p>
    {/* 2nd Apple icon */}
    <FaApple className="text-[#1D1D1F] text-[18px] mb-[2px]" />
    {/* 3rd Apple icon */}
    <FaApple className="text-[#1D1D1F] text-[18px] mb-[6px]" />
    {/* 4th Apple icon + iPhone */}
    <div className="flex items-center gap-2 text-[12px] text-[#6E6E73]">
      <FaApple className="text-[#1D1D1F] text-[18px]" />
      <IoChevronForward className="text-[#C7C7CC] text-[30px]" />
      <span className="text-[15px] text-[#414144] cursor-pointer hover:underline">iPhone</span>
    </div>
  </div>
</div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-8 pb-10">
          {footerData.map((section) => (
            <div key={section.title} className="space-y-5">
              <div>
                <h3 className="text-[12px] font-bold text-[#1D1D1F] mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li
                      key={link}
                      className="text-[12px] text-[#424245] font-helvetica hover:underline cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>

              {section.subTitle && (
                <div>
                  <h3 className="text-[12px] font-semibold text-[#1D1D1F] mb-3">
                    {section.subTitle}
                  </h3>
                  <ul className="space-y-2">
                    {section.subLinks.map((link) => (
                      <li
                        key={link}
                        className="text-[12px] text-[#424245] hover:underline cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.thirdTitle && (
                <div>
                  <h3 className="text-[12px] font-semibold text-[#1D1D1F] mb-3">
                    {section.thirdTitle}
                  </h3>
                  <ul className="space-y-2">
                    {section.thirdLinks.map((link) => (
                      <li
                        key={link}
                        className="text-[12px] text-[#424245] hover:underline cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.fourthTitle && (
                <div>
                  <h3 className="text-[12px] font-semibold text-[#1D1D1F] mb-3">
                    {section.fourthTitle}
                  </h3>
                  <ul className="space-y-2">
                    {section.fourthLinks.map((link) => (
                      <li
                        key={link}
                        className="text-[12px] text-[#424245] hover:underline cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Shop Info */}
        <div className="border-b border-[#D2D2D7] py-4 text-[12px] text-[#6E6E73]">
          More ways to shop:{" "}
          <span className="text-[#0066CC] hover:underline cursor-pointer">
            Find an Apple Store
          </span>{" "}
          or{" "}
          <span className="text-[#0066CC] hover:underline cursor-pointer">
            other retailer
          </span>{" "}
          near you. Or call 1-800-MY-APPLE.
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-5 text-[12px] text-[#6E6E73]">
          <div>Copyright © 2023 Apple Inc. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              "Privacy Policy",
              "Terms of Use",
              "Sales and Refunds",
              "Legal",
              "Site Map",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <span className="hover:underline text-[#424245] cursor-pointer">{item}</span>
                {index !== 4 && <span className="text-[#D2D2D7] px-1">|</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="md:text-right text-[#424245]">United States</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;