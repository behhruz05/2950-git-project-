import React from "react";
import icon from "../assets/icon.png";

function Cattegoryprice() {
  return (
    <div className="px-[80px] py-[40px]">
      <div className="flex justify-between items-center gap-[20px]">
        
   
        <div className="flex items-center gap-[15px] p-[20px] bg-[#F4F6FA] rounded-[10px] flex-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <img src={icon} alt="icon" className="w-[60px] h-[60px] object-contain" />
          <div>
            <p className="font-bold text-[#253D4E] whitespace-nowrap">Best prices & offers</p>
            <p className="text-[#ADADAD] text-[14px]">Orders $50 or more</p>
          </div>
        </div>

        <div className="flex items-center gap-[15px] p-[20px] bg-[#F4F6FA] rounded-[10px] flex-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <img src={icon} alt="icon" className="w-[60px] h-[60px] object-contain" />
          <div>
            <p className="font-bold text-[#253D4E] whitespace-nowrap">Free delivery</p>
            <p className="text-[#ADADAD] text-[14px]">24/7 amazing services</p>
          </div>
        </div>

     
        <div className="flex items-center gap-[15px] p-[20px] bg-[#F4F6FA] rounded-[10px] flex-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <img src={icon} alt="icon" className="w-[60px] h-[60px] object-contain" />
          <div>
            <p className="font-bold text-[#253D4E] whitespace-nowrap">Great daily deal</p>
            <p className="text-[#ADADAD] text-[14px]">When you sign up</p>
          </div>
        </div>

        
        <div className="flex items-center gap-[15px] p-[20px] bg-[#F4F6FA] rounded-[10px] flex-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <img src={icon} alt="icon" className="w-[60px] h-[60px] object-contain" />
          <div>
            <p className="font-bold text-[#253D4E] whitespace-nowrap">Wide assortment</p>
            <p className="text-[#ADADAD] text-[14px]">Mega Discounts</p>
          </div>
        </div>

        <div className="flex items-center gap-[15px] p-[20px] bg-[#F4F6FA] rounded-[10px] flex-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <img src={icon} alt="icon" className="w-[60px] h-[60px] object-contain" />
          <div>
            <p className="font-bold text-[#253D4E] whitespace-nowrap">Easy returns</p>
            <p className="text-[#ADADAD] text-[14px]">Within 30 days</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cattegoryprice