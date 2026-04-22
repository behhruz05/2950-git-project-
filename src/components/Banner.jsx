import React from 'react'    
import banner from "../assets/banner.png";
import img from "../assets/img.png";
import list from "../assets/list.png";
import btn from "../assets/btn.png"
import BUTTO from "../assets/BUTTO.png";
import button from "../assets/button.png"

const Banner = () => {
  return (
    <div>
    <div className="flex items-center justify-between px-10 py-4">
      <div className="flex items-center gap-[40px]">

        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md text-sm gap-1">
          <img src={btn} alt="" className=" w-[16px] h-[16px] " />
          <span>Browse All Categories</span>
        </button>
      
  <ul className="flex items-center gap-[50px]">
   <li className="font-semibold">🔥 Hot Deals</li>
   <li>Home</li>
   <li>About</li>
   <li>Shop </li>
   <li>Mega Menu </li>
   <li>Vendors </li>
   <li>Pages </li>
   <li>Contact</li>
  </ul>
      </div>

      <div className="flex items-center text-green-500 font-semibold mr-[50px]">
        <img src={img} alt="" />
        <div className="flex flex-col">
        <span>1900888123</span>
        <p className="text-[#7E7E7E]">24/7 Support Center</p>
        </div>
        
      </div>
</div>

<div className="overflow-x-hidden">
  <div className="relative  inline-block mt-[30px]">
    <img src={banner} alt="" className="w-full" />

    
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-10">
      <h2 className="text-[72px] text-black text-center">
        Fresh Vegetables <br /> Big discount
      </h2>

      <p className="text-[#7E7E7E] mt-[30px]">
        Sign up for the daily newsletter
      </p>
    </div>

  
    <div className="absolute bottom-20  left-1/2 -translate-x-1/2 flex w-[450px] h-[64px] bg-[#F5F5F5] rounded-full  ">
      <input
        className="flex-1 bg-transparent outline-none px-4"
        placeholder="Your email address"
      />
      <button className="bg-green-500 text-white px-5 rounded-full">
        Subscribe
      </button>
    </div>
    
   

    <img
      src={list}
      alt=""
      className="absolute top-0 right-[-30px] translate-x-[40px] -translate-y-[60px]"
    />


<div className="absolute bottom-10  left-1/2 -translate-x-1/2 flex items-center gap-2">
  <img src={button} alt="" className='w-[15px]' />
  <img src={BUTTO} alt="" className='w-[15px]' />
</div>

  </div>

</div>
</div>
    
   
    




    
  
    
  )
}

export default Banner
