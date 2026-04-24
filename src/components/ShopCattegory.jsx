import React from 'react'
import shop  from "../assets/shop.png"
import rasm from "../assets/rasm.png"
import KIYIM from "../assets/KIYIM.png"
import mmm from "../assets/mmm.png"
import nnn from "../assets/nnn.png"
import shoop from "../assets/shoop.png"
import meva from "../assets/meva.png"
import ddd from "../assets/ddd.png"
import chap from "../assets/chap.png"

const ShopCattegory = () => {
  return (

<div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full px-4 gap-2">
  
  <div className="flex items-center gap-[50px] flex-wrap">
    <h2 className="text-[18px] sm:text-[24px] font-semibold text-[#1A1A1A]">
      Shop by Categories
    </h2>

    <p className="text-green-500 text-[12px] sm:text-[14px] font-medium flex items-center gap-1">
      All Categories <span>→</span>
    </p>
  </div>

  <img src={chap} alt="" className="w-[18px] sm:w-auto" />

</div>

  {/* CARDS */}
  <div
    className="  grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-[10px] mt-[18px] px-4 ">

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={shop} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Milks and Dairies
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        5 items
      </p>
    </div>

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={rasm} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Wines & Alcohol
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        4 items
      </p>
    </div>

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={KIYIM} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Clothing & Beauty
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        4 items
      </p>
    </div>

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={mmm} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Pet Foods & Toy
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        2 items
      </p>
    </div>

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={nnn} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Packaged fast food
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        11 items
      </p>
    </div>

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={shoop} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Baking material
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        11 items
      </p>
    </div>

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={meva} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Vegetables & tubers
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        6 items
      </p>
    </div>

    <div className="w-full h-[234px] bg-[#F4F6FA] flex flex-col items-center justify-center">
      <img src={ddd} alt="" />
      <h1 className="mt-[10px] text-[#253D4E] text-center text-[12px] sm:text-[14px]">
        Fresh Seafood
      </h1>
      <p className="text-[#7E7E7E] text-[11px] sm:text-[12px]">
        5 items
      </p>
    </div>

  </div>
</div>

  )
}

export default ShopCattegory
