import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 min-h-[260px] sm:min-h-[200px]">
      
      {/* hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-0">
        <div className="text-[#414141]">

          <div className="flex items-center gap-2">
            <p className="w-8 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">
              OUR BESTSELLER
            </p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 md:text-4xl lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">
              SHOP NOW
            </p>
            <p className="w-8 h-[1px] bg-[#414141]"></p>
          </div>

        </div>
      </div>

      {/* hero right side */}
      <div className="w-full sm:w-1/2 h-44 sm:h-full">
        <img
          src={assets.roman_holoschchuk_DPOPc2vhUww_unsplash}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default Hero;
