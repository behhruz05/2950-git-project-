import React from "react";
import alt from "../assets/alt.png";
import png from "../assets/png.png";
import ok from "../assets/ok.png";

const CatBanner = () => {
  return (
    <div className="px-[80px] py-[40px]">
      <div className="flex gap-[20px] justify-center">
 
        <div 
          className="w-[516px] h-[300px] bg-cover bg-center flex items-center pl-10 rounded-[10px] transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
          style={{ backgroundImage: `url(${alt})` }}
        >
          <div>
            <p className="font-bold text-[#253D4E] text-[24px] w-[202px]">
              Everyday Fresh & Clean with Our Products
            </p>
            <button className="w-[103px] bg-[#3BB77E] h-[32px] text-[#FFFFFF] text-[12px] font-[Quicksand] font-[700] rounded-[4px] mt-[20px] hover:bg-[#F0E8D5] hover:text-[#3BB77E] duration-300 hover:border-[1px] hover:border-[#3BB77E]">
              Show Now ➜
            </button>
          </div>
        </div>

       
        <div 
          className="w-[516px] h-[300px] bg-cover bg-center flex items-center pl-10 rounded-[10px] transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
          style={{ backgroundImage: `url(${png})` }}
        >
          <div>
            <p className="font-bold text-[#253D4E] text-[24px] w-[202px]">
              Everyday Fresh & Clean with Our Products
            </p>
            <button className="w-[103px] bg-[#3BB77E] h-[32px] text-[#FFFFFF] text-[12px] font-[Quicksand] font-[700] rounded-[4px] mt-[20px] hover:bg-transparent hover:text-[#3BB77E] duration-300 hover:border-[1px] hover:border-[#3BB77E]">
              Show Now ➜
            </button>
          </div>
        </div>

       
        <div 
          className="w-[516px] h-[300px] bg-cover bg-center flex items-center pl-10 rounded-[10px] transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
          style={{ backgroundImage: `url(${ok})` }}
        >
          <div>
            <p className="font-bold text-[#253D4E] text-[24px] w-[202px]">
              Everyday Fresh & Clean with Our Products
            </p>
            <button className="w-[103px] bg-[#3BB77E] h-[32px] text-[#FFFFFF] text-[12px] font-[Quicksand] font-[700] rounded-[4px] mt-[20px] hover:bg-transparent hover:text-[#3BB77E] duration-300 hover:border-[1px] hover:border-[#3BB77E]">
              Show Now ➜
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatBanner