import React from "react";
import banner from "../assets/banner.png";
import alt from "../assets/alt.png";

const Banner = () => {
  return (
    <div
      className="bg-cover m-5 bg-center bg-no-repeat w-full max-w-[1200px] mx-auto
      h-[250px] sm:h-[320px] md:h-[400px] lg:h-[470px] 
      rounded-xl mt-4 p-4 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-5"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* LEFT */}
      <div className="max-w-full lg:max-w-[600px] text-center lg:text-left">
        <h1 className="font-quicksand font-bold 
          text-[22px] sm:text-[32px] md:text-[48px] lg:text-[64px] 
          leading-tight">
          Stay home & get your daily needs from our shop
        </h1>

        <p className="font-lato text-[12px] sm:text-[14px] md:text-[16px] mt-3 sm:mt-5">
          Start Your Daily Shopping with{" "}
          <span className="text-[#3BB77E]">Nest Mart</span>
        </p>

        {/* INPUT */}
        <div className="w-full max-w-[460px] h-[50px] sm:h-[60px] rounded-full bg-white 
          flex items-center p-1 sm:p-2 mt-5 sm:mt-8 mx-auto lg:mx-0">
          
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent text-[13px] sm:text-[15px] outline-none px-3"
          />

          <button className="h-full px-4 sm:px-6 rounded-full bg-[#3BB77E] 
            hover:bg-[#30a06b] text-white text-[13px] sm:text-[15px]">
            Subscribe
          </button>
        </div>
      </div>
        
        <div className="hidden lg:flex items-end justify-end w-full">
  <img
    src={alt}
    alt="Banner"
    className="w-[240px] lg:w-[320px] object-contain"
  />
</div>

    </div>
  );
};

export default Banner;