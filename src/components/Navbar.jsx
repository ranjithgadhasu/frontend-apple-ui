import { useState } from "react";
import {
  FaApple,
  FaBars,
} from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import FigureOne from "../assets/Images/FigureOne.png";
import FigureThree from "../assets/Images/FigureThree.png";
import FigureFive from "../assets/Images/FigureFive.png";
import FigureSix from "../assets/Images/FigureSix.png";
import FigureSeven from "../assets/Images/FigureSeven.png";
import FigureEight from "../assets/Images/FigureEight.png";
import FigureNine from "../assets/Images/FigureNine.png";
import FigureTen from "../assets/Images/FigureTen.png";
import FigureEle from "../assets/Images/FigureEle.png";
import figure12 from "../assets/Images/figure12.png"



const topMenu = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const products = [
  { name: "iPhone 14 Pro", image: FigureOne, isNew: true },
  { name: "iPhone 13 Pro", image: FigureOne, isNew: true },
  { name: "iPhone SE", image: FigureThree },
  { name: "iPhone 12", image: figure12},
  { name: "Compare", image: FigureFive },
  { name: "AirPods", image: FigureSix },
  { name: "AirTag", image: FigureSeven },
  { name: "Accessories", image: FigureEight },
  { name: "Apple Card", image: FigureNine },
  { name: "iOS 16", image: FigureTen },
  { name: "Shop iPhone", image: FigureEle },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#fbfbfd]/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto h-11 px-7 flex items-center justify-around">
          <FaApple className="text-[22px] ml-10" />

          <nav className="hidden lg:flex items-center gap-9 text-[14px] text-gray-700">
            {topMenu.map((item) => (
              <span key={item} className="hover:text-black cursor-pointer">
                {item}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <IoIosSearch className="text-sm" size={20} />
            <IoBagOutline className="text-sm" size={20} />
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t px-5 py-4 flex flex-col gap-2 text-sm">
            {topMenu.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </header>

      {/* Product Icons */}
   <section className="bg-[#fafafa] border-b border-gray-200">
  <div className="overflow-x-auto">
    <div className="flex lg:justify-center gap-8 min-w-max px-6 py-4">
      {products.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center min-w-[68px] cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[40px] h-[47px] object-contain mb-2"
          />

          <span className="text-[12px] text-gray-700 whitespace-nowrap text-center">
            {item.name}
          </span>
          {item.isNew && (
            <span className="text-[10px] text-orange-500 mt-1">
              New
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Offer Bar */}
      <div className="bg-[#f0f0f0] text-center py-3 px-4 text-[15px] text-gray-700">
        Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.  1
        <span className="text-[#0066cc] ml-1 cursor-pointer">Shop iPhone</span>
      </div>
    </>
  );
}
