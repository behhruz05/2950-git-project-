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
    <div className="flex items-center justify-between px-3 md:px-10 py-4 flex-wrap gap-2">  
      <div className="flex items-center gap-3 md:gap-[40px] flex-wrap">    
          <button className="flex items-center bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-sm gap-1">    
    <img src={btn} alt="" className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />    
    <span className="hidden md:inline">Browse All Categories</span>    
  </button>     
  <ul className="hidden md:flex items-center gap-[50px]">    
    <li className="font-semibold">🔥 Hot Deals</li>    
    <li>Home</li>    
    <li>About</li>    
    <li>Shop</li>    
    <li>Mega Menu</li>    
    <li>Vendors</li>    
    <li>Pages</li>    
    <li>Contact</li>    
  </ul>    </div>    <div className="flex items-center text-green-500 font-semibold text-xs md:text-base md:mr-[50px]">    
  <img src={img} alt="" className="w-6 md:w-auto" />    
  <div className="flex flex-col ml-1">    
    <span>1900888123</span>    
    <p className="text-[#7E7E7E] text-[10px] md:text-sm">24/7 Support Center</p>    
  </div>    
</div>   
 </div> 


   <div className="overflow-x-hidden">    
    <div className="relative inline-block mt-[30px] w-full h-[250px] md:h-auto">  <img src={banner} alt="" className="w-full h-full md:h-auto object-cover" />    {/* TEXT */}

  <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 md:pt-10 px-2">    
    <h2 className="text-[20px] md:text-[72px] text-black text-center leading-tight">    
      Fresh Vegetables <br /> Big discount    
    </h2>    <p className="text-[#7E7E7E] mt-2 md:mt-[30px] text-xs md:text-base text-center">    
  Sign up for the daily newsletter    
</p>

  </div>    

<div className="absolute left-1/2 top-[75%] md:top-auto md:bottom-20 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 flex w-[90%] md:w-[450px] h-[45px] md:h-[64px] bg-[#F5F5F5] rounded-full overflow-hidden">

  <input
    className="flex-1 bg-transparent outline-none px-3 md:px-4 text-xs sm:text-sm md:text-base min-w-0"
    placeholder="Your email address"
  />

  <button className="bg-green-500 text-white px-3 md:px-5 rounded-full text-xs sm:text-sm md:text-base shrink-0">
    Subscribe
  </button>

</div>
<img    
src={list}    
alt=""    
className="hidden md:block absolute top-0 right-[-30px] translate-x-[40px] -translate-y-[60px]"    
/>



  <div className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">    
    <img src={button} alt="" className="w-[10px] md:w-[15px]" />    
    <img src={BUTTO} alt="" className="w-[10px] md:w-[15px]" />    
  </div> 
  
  
     </div> 
        </div> 
        
         </div> 
    
  )
}

export default Banner
