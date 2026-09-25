import React from "react";
import manvisit from "../assets/Images/manvisit.jpg";
import "./index.css";

const ManVisit = () => {
  return (
    <section className="bg-[#ffff] md:py-2">
      <div className="max-w-full mx-auto px-4">
        <div className="relative overflow-hidden rounded-[28px]">
          {/* Background Image */}
          <img
            src={manvisit}
            alt="Guided Tour"
            className="w-full h-[320px] sm:h-[420px] md:h-auto object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15" />
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="manvisit px-8 md:px-16 max-w-md text-white mb-10">
              <p className="text-sm md:text-xl font-semibold mb-5">
                A Guided Tour of
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                iPhone 14 &
                <br />
                iPhone 14 Pro
              </h2>

              <button className="mt-6 bg-white text-black px-6 py-3 rounded-full text-[17px] font-medium hover:bg-gray-100 transition">
                Watch the film
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManVisit;
